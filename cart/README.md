# Shopping Cart (CART-1)

Espresso Edit – CP317A Group 28, Sprint 1

> As a customer, I want to add and remove products in my shopping cart and see the total update so that I know what I'm buying and how much it costs before checkout.

## Files

| File | What it does |
|---|---|
| `cart.js` | Cart logic: add, remove, change quantity, line totals, cart total |
| `cart.html` | Prototype page: product list + cart (open it in a browser) |
| `cart.css` | Styling for the page |
| `cart.test.js` | Unit tests for the cart logic |

## Run it

- **Page:** open `cart/cart.html` in any browser. No install needed.
- **Tests:** `node cart/cart.test.js` (needs Node.js).

## Acceptance criteria → how they're checked

| Criterion | Test |
|---|---|
| Adding a product shows it in the cart and the total goes up by its price | `adding a product raises the total by its price` |
| Removing it takes it out and the total goes down | `removing a product lowers the total` |
| Changing a quantity recalculates the line and the total | `changing quantity recalculates line and cart totals` |
| An empty cart shows $0.00 and an "empty cart" message | `empty cart has total $0.00` + manual check on the page |

## Notes

- Prices are stored in cents (1899 = $18.99) so totals never have rounding errors.
- The cart is saved in the browser
