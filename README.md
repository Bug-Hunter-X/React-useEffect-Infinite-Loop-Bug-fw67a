# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug stems from an incomplete dependency array, leading to an infinite loop.

## The Problem
The provided `MyComponent` uses `useEffect` to log the current value of the `count` state variable. However, the dependency array `[count]` is incomplete if other state variables or prop changes affect the rendering of the component. This leads to an infinite render loop because the `useEffect` function is called after every render.

## The Solution
The solution involves including all relevant variables from the component in the dependency array of `useEffect` to properly handle the changes correctly.  This ensures that the effect only runs when those values change.
