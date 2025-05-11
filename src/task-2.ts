type Currency = "USD" | "EUR" | "UAH";

interface Params {
    amount: number;
    currency: Currency;
}

function convertCurrency({ amount, currency }: Params): void {
    console.log(`Converting ${amount} to ${currency}`);
}

