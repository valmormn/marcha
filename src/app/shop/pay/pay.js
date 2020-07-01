// pay

if (!window.PaymentRequest) {
  // Caso entre nesta condicional, você pode ativar um checkout customizado de fallback
  const msg = "Este browser não suporta a Payment Request API! :("
  // document.querySelector('#feedback').innerHTML = msg;
  console.log(msg)
  // return;
} else {
  const msg = "Let's make bussiness"
  // document.querySelector('#feedback').innerHTML = msg;
  console.log(msg)
  // return;
}

// Métodos de pagamento suportados
const supportedInstruments = [
  {
    supportedMethods: ["visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay"]
  },
  {
    // Integração com Android Pay
    supportedMethods: ["https://android.com/pay"],
    data: {
      // Seu merchantId deve ser em https://androidpay.developers.google.com/signup
      merchantId: "02510116604241796260",
      environment: "TEST",
      // Bandeiras de cartão de crédito aceitos no Android Pay
      allowedCardNetworks: ["AMEX", "MASTERCARD", "VISA", "DISCOVER"],
      paymentMethodTokenizationParameters: {
        tokenizationType: "GATEWAY_TOKEN",
        parameters: {
          gateway: "stripe",
          // Coloque aqui sua chave pública do Stripe
          "stripe:publishableKey": "pk_live_fD7ggZCtrB0vJNApRX5TyJ9T",
          "stripe:version": "2016-07-06"
        }
      }
    }
  }
]

export let pay = { id: "pay" }
