const RATES = {
    USD: 1,
    EUR: 1.08,
    JPY: 0.0068,
    GBP: 1.27
};

export function convertToUSD(amount, currency) {
    return amount * (RATES[currency] || 1);
}