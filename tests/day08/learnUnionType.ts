type PaymentMethod = "UPI" | "CreditCard" | "PayPal"

function makePayment(method: PaymentMethod) {
    console.log("Payment method chosen:", method)
}

makePayment("UPI")
makePayment("CreditCard")