# Cart (design doc)

## Goal

Customers can add instruments to their cart
  - ...when not logged in
  - ...when logged in

Customers can have multiple of the same kind of instrument (there's a qty)
Customers can remove stuff from their cart

## Approach

### Local Storage

One option is to store cart data in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage).

**Issue: Local Storage stores only strings, the cart more complex than that, how to deal?**

Convert it to json! JSON.stringify / JSON.parse.

**Issue: Local Storage is pinned to the browser, so it doesn't follow you across devices**

Solution: sync it to the server somehow.
Or: Don't worry about.

### Store the cart in the backend

**Issue: How to structure that data in the backend?**

Create an `Order` model
  * `Order` belongsToMany `Instrument` through `LineOrder`
  * `Order` belongsTo `User` (allowNull: true)
  * `LineOrder`...
    - qty: Int
    - purchase_price: Int

**How to associate w a session when no user is logged in?**

Something like this:

```
  app.use((req, res, next) => {
    if (req.session.cartId) {
      return Order.findById(req.session.cartId)
        .then(cart => {
          req.cart = cart
          req.session.cartId = cart.id
          next()
        })
    }
    // There's no cart on the session, so...
    //   Otherwise, create an anonymous cart & attach to the session
    //   If someone is logged in, see if they have a cart,
    //     and attach it to the session
  })

  app.get('/api/cart', (req, res) => res.send(req.cart))
```

## Q: Inventory?
We should decrement inventory after purchase, so let's worry about this
after purchase.
