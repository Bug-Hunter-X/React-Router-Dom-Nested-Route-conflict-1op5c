# React Router Dom Nested Route Conflict

This repository demonstrates a common issue encountered when using nested routes in React Router Dom v6.  The problem arises from a conflict between a parent route and a nested route with a wildcard (*) that overlaps with the parent route's path.

## Problem

The provided `App.js` demonstrates the faulty routing configuration.  The routes `/about` and `/about/*` conflict, leading to unpredictable behavior.  Typically, the wildcard route will overshadow the parent, preventing the parent route from functioning as expected.

## Solution

The solution lies in carefully planning route paths to avoid such overlaps.  Modify the routes to use more specific paths or remove unnecessary wildcard characters.  The `bugSolution.js` shows the correct implementation.
