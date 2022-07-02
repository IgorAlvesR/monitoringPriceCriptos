export const formatterToDolar = () => {
  return new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'USD',
  });
}