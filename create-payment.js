// netlify/functions/create-payment.js
// Função Netlify para criar preferência de pagamento no Mercado Pago

const { MercadoPagoConfig, Preference } = require('mercadopago');

exports.handler = async function (event, context) {
    // Apenas aceita POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'Método não permitido' })
        };
    }

    // Verifica se o token do Mercado Pago está configurado
    const accessToken = process.env.MP_ACCESS_TOKEN;
    if (!accessToken) {
        console.error('MP_ACCESS_TOKEN não configurado nas variáveis de ambiente do Netlify');
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'Configuração de pagamento ausente. Verifique as variáveis de ambiente.' })
        };
    }

    try {
        const body = JSON.parse(event.body);
        const { items, deliveryFee, clientName, clientPhone, siteUrl } = body;

        // Validações básicas
        if (!items || items.length === 0) {
            return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: 'Nenhum item no carrinho' })
            };
        }

        // Inicializa o cliente Mercado Pago
        const client = new MercadoPagoConfig({ accessToken });
        const preference = new Preference(client);

        // Monta os itens da preferência
        const mpItems = items.map(item => ({
            id: String(item.id),
            title: item.name,
            description: item.description || item.name,
            quantity: parseInt(item.quantity, 10),
            unit_price: parseFloat(item.price),
            currency_id: 'BRL',
        }));

        // Adiciona taxa de entrega como item separado se houver
        const fee = parseFloat(deliveryFee) || 0;
        if (fee > 0) {
            mpItems.push({
                id: 'DELIVERY_FEE',
                title: 'Taxa de entrega',
                quantity: 1,
                unit_price: fee,
                currency_id: 'BRL',
            });
        }

        // URL base do site (fallback para Netlify)
        const baseUrl = siteUrl || process.env.URL || 'https://cattleyafood.netlify.app';

        // Cria a preferência
        const result = await preference.create({
            body: {
                items: mpItems,
                payer: {
                    name: clientName || 'Cliente',
                    phone: clientPhone ? { number: clientPhone } : undefined,
                },
                back_urls: {
                    success: `${baseUrl}/sucesso.html`,
                    pending: `${baseUrl}/pendente.html`,
                    failure: `${baseUrl}/erro.html`,
                },
                auto_return: 'approved',
                payment_methods: {
                    installments: 12,
                    default_installments: 1,
                },
                statement_descriptor: 'Cattleya Food',
                external_reference: `CATTLEYA_${Date.now()}`,
            }
        });

        console.log('Preferência criada com sucesso. ID:', result.id);

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                init_point: result.init_point,
                sandbox_init_point: result.sandbox_init_point,
                preference_id: result.id,
            }),
        };

    } catch (error) {
        console.error('Erro ao criar preferência Mercado Pago:', error);
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                error: 'Erro ao processar pagamento. Tente novamente ou escolha outra forma.',
                detail: error.message || 'Erro desconhecido'
            }),
        };
    }
};
