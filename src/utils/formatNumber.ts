export const formatNumber = (value: string): number => {
  return +value.replace(/\D/g, '');
};
