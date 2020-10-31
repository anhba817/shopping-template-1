import HomePage from './Pages/Home/index';
import React from 'react';
import CheckoutPage from './Pages/Checkout/index';

const ROUTES = [
  {
    path: '/home',
    exact: true,
    component: () => <HomePage />,
    name: 'Home Page',
  },
  {
    path: '/checkout',
    exact: true,
    component: () => <CheckoutPage />,
    name: 'Checkout Page',
  },
];

export { ROUTES };
