import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';



export default class Cart extends Component {
  constructor(props){
    super(props);

    // this.state = [
    //   {
    //     id: 1,
    //     name: 'allaDrum',
    //     imageUrl: 'allaDrum.com',
    //     cost: 500,
    //     quantity: 1
    //   },
    //   {
    //     id: 2,
    //     name: 'mahiaTrumpet',
    //     imageUrl: 'mahiaTrumpet.com',
    //     cost: 200,
    //     quantity: 2
    //   }
    // ];
  }
  render(){
    console.log('PROPS', this.props)
    return (
      <Grid className="all-categories-box">
          <h2>Your Shopping Cart</h2>
            <Row className="row-mapping">
            {
              this.state && this.state.map(instrument => {
                return (
                  <Col md={3} key={instrument.id} className="category-box">
                      <Link to={`/instruments/${instrument.id}`}>
                        <Image src={instrument.imageUrl} rounded className="thumbnail-photo"/>
                      </Link>
                      <li>
                        <h2>{instrument.name}</h2>
                        <p>Unit Price: ${instrument.cost}</p>
                        <p>Quantity: {instrument.quantity}</p>
                        {
                          instrument.totalPricePerInstrument = instrument.cost * instrument.quantity
                        }
                        <p>Total Price: ${instrument.totalPricePerInstrument}</p>
                      </li>
                      <input
                        placeholder = "Enter quantity"
                        // add a handle change function that updates quantity in the cart on the backend
                      />
                      <Button bsStyle="primary" bsSize="xsmall">
                          Remove From Cart
                          {/* add an onClick */}
                      </Button>
                  </Col>
                )
              })
            }
            </Row>
          <h3>Cart Total:</h3>
            {/* write a reducer */}
      </Grid>
    )

  }
}


// const Cart = ({ cart = [] }) => {
//     console.log('Cart has', cart)
//     return (
//    <div>
//           <h2>Your Shopping Cart</h2>
//           <h3>Cart Total:</h3>
//       </div>
//     )
// }

// export default Cart;

// export default class Cart extends Component {
//   render() {
//     console.log('Our props are', this.props)
//     return (
//       <div> 
//         <h2>Your Shopping Cart:</h2>
//       </div>
//     )
//   }
// }

// const Cart = ({ cart }) => {
//   return (
//       <div>
//           <div>
//               <h4>Your Cart</h4>
//                 {
//                   cart.map((singleItem) => {
//                     return (
//                         <div key={singleItem.id}>
//                                 <ul className="collection">
//                                   {
//                                   singleItem.map((item) => (
//                                   <li>
//                                   <img src={item.imageUrl}/>
//                                   <span>{item.name}</span>
//                                   <p>Quantity: {item.quantity} <br />
//                                       Price: {item.price}
//                                   </p>
//                                   </li>
//                                   ))
//                                   }
//                                     </ul>   
//                             </div>
//                         );
//                     })
//                 }
//           </div>
//       </div>
//   );
// };