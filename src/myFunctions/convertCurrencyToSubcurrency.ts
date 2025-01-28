export const convertCurrencyToSubcurrency = (amount: number, factor: 100) => {
  return Math.round(amount * factor);
};
