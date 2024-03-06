export const expensiveFunction = (count) => {
  // artificial delay (expensive computation)
  for (let i = 0; i < 1000000000; i++) {}
  return count * 3;
};
