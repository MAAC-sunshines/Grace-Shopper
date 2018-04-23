const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_E4q19vV0etfKuhTfnuGCqpBU'
  : 'pk_test_E4q19vV0etfKuhTfnuGCqpBU';

export default STRIPE_PUBLISHABLE;
