/*
 * CART-1: Shopping Cart Management
 * Espresso Edit - CP317A Group 28
 *
 * cart logic only (no page code), so it can be reused by any page
 */

class Cart {
  constructor(items = []) {
    // each item: { id, name, priceCents, quantity }
    this.items = items.map((i) => ({ ...i }));
  }

  // Add a product. If it's already in the cart, raise its quantity instead.
  addItem(product, quantity = 1) {
    if (!product || product.id === undefined) {
      throw new Error("Product must have an id");
    }
    if (!Number.isInteger(quantity) || quantity < 1) {
      throw new Error("Quantity must be a whole number of at least 1");
    }
    const existing = this.items.find((i) => i.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        priceCents: product.priceCents,
        quantity,
      });
    }
  }

  // Remove a product from the cart completely.
  removeItem(productId) {
    this.items = this.items.filter((i) => i.id !== productId);
  }

  // Set a new quantity. 0 (or less) removes the item.
  updateQuantity(productId, quantity) {
    if (!Number.isInteger(quantity)) {
      throw new Error("Quantity must be a whole number");
    }
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }
    const item = this.items.find((i) => i.id === productId);
    if (item) item.quantity = quantity;
  }

  getItems() {
    return this.items.map((i) => ({ ...i }));
  }

  // Line total for one item, in cents.
  getLineTotal(productId) {
    const item = this.items.find((i) => i.id === productId);
    return item ? item.priceCents * item.quantity : 0;
  }

  // Cart total, in cents.
  getTotal() {
    return this.items.reduce((sum, i) => sum + i.priceCents * i.quantity, 0);
  }

  // Total number of units in the cart (for the cart badge).
  getItemCount() {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }
}

function formatPrice(cents) {
  return "$" + (cents / 100).toFixed(2);
}

// this is just for node but idk
if (typeof module !== "undefined" && module.exports) {
  module.exports = { Cart, formatPrice };
}
