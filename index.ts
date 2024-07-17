// Débito
// Crédito
// Pix
// Dinheiro
// Boleto

type TipoPagamento = "PIX" | "Débito" | "Crédito" | "Boleto";

const tipoPagamento = prompt("Menu: Pix\nBoleto\nCrédito\nDébito");
alert (tipoPagamento)

switch (tipoPagamento) {
    case "PIX":
        alert(`pagamento com ${tipoPagamento}`);
        break;

        case "Boleto":
        alert(`pagamento com ${tipoPagamento}`);

        case "Crédito":
        alert(`pagamento com ${tipoPagamento}`);

        case "Débito":
        alert(`pagamento com ${tipoPagamento}`);

    default:
        break;
}