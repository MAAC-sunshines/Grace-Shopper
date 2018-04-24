const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'http://www.airplay.com/api/checkout/payment'
  : 'http://localhost:8080/api/checkout/payment';

export default PAYMENT_SERVER_URL;
