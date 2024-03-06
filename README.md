# ♥️ React Performance Optimizations:

In this section we will discuss about different performance optimizing techniques in react app.

## Workspace:

This project was bootstrapped for you with [Vite](https://vitejs.dev/).

## Available Scripts:

In the project directory, you can run:

1. `npm start`
2. `npm test`
3. `npm run build`

## React working under the hood:

When we render a component, React creates a virtual DOM for its element tree in the component. Now, whenever the state of the component changes, React recreates the virtual DOM tree and compares the result with the previous render. It will only update the changed element in the actual DOM through `diffing`

## Performance Optimization techniques:

1. Code splitting (Manage to make the state update as local as possible)
2. Memoization (Caching the props value between the renders)
3. UseMemo (Caching the expensive values between the renders)
4. UseCallback (Caching the functions between the renders)
5. Lazyloading
