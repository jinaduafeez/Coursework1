app.component('cart-display', {
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html */
    `<section>
        <div v-for="(item, index) in cart" :key="item.id">
            <div>
                <p>location: {{ item.location }}</p>
                <p>subject: {{item.subject}}</p>
                <p>price: {{item.price}}</p>
                <p>spaces: {{item.spaces}}</p>
            </div>
            <button @click="removeItemFromCart(index)">remove from cart</button>
        </div>
    </section>
`,

  methods: {
    removeItemFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
});
