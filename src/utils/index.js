export const expensiveFunction = (count) => {
  // artificial delay (expensive computation)
  for (let i = 0; i < 1000000000; i++) {}
  return count * 3;
};

// Add a fixed delay so you can see the loading state
export const delayComp = (promise) =>
  new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }).then(() => promise);
