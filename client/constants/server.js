const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://frozen-basin-89374.herokuapp.com/checkout/payment'
  : 'http://localhost:8080/api/checkout/payment';

export default PAYMENT_SERVER_URL;
