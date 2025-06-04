/**
 * Valida o número do cartão de crédito e identifica a bandeira.
 * @param {string} numeroCartao - O número do cartão de crédito.
 * @returns {string} - A bandeira do cartão ou "Bandeira desconhecida".
 */
function validarCartao(numeroCartao) {
    // Remove espaços ou caracteres não numéricos
    const numeroLimpo = numeroCartao.replace(/\D/g, '');

    // Padrões de bandeiras (baseado em padrões comuns)
    const bandeiras = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        MasterCard: /^5[1-5][0-9]{14}$/,
        AmericanExpress: /^3[47][0-9]{13}$/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        JCB: /^(?:2131|1800|35\d{3})\d{11}$/
    };

    // Verifica a bandeira correspondente
    for (const [bandeira, regex] of Object.entries(bandeiras)) {
        if (regex.test(numeroLimpo)) {
            return bandeira;
        }
    }

    return "Bandeira desconhecida";
}

// Exemplo de uso
const numeroCartao = "4111 1111 1111 1111"; // Exemplo de número Visa
console.log(validarCartao(numeroCartao)); // Saída: Visabash: {valid:true,: command not found