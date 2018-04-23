const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_KdXUGIPTHQjCKBJZsJytl7Ca'
    : 'sk_test_KdXUGIPTHQjCKBJZsJytl7Ca';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
