const app = Vue.createApp({
  data() {
    return {
      cart: [],
      items: [
        {
          id: 1,
          location: 'london',
          price: 300,
          availability: 5,
          subject: 'maths',
        },
        {
          id: 2,
          location: 'nigeria',
          price: 100,
          availability: 5,
          subject: 'maths',
        },
        {
          id: 3,
          location: 'togo',
          price: 9000,
          availability: 5,
          subject: 'maths',
        },
        {
          id: 4,
          location: 'united states of america',
          price: 400,
          availability: 5,
          subject: 'maths',
        },
      ],
      orderBy: '',
      shouldBeAscending: true,
    };
  },
  methods: {
    updateCart(item) {
      this.cart.push(item);
    },
    updateSortKey(sortKey) {
      this.orderBy = sortKey.target.value;
      console.log(this.orderBy);
    },
    updateSortOrder() {
      this.sortAscending = !this.sortAscending;
    },
  },
  computed: {
    sortedItems() {
      return this.items.sort((a, b) => {
        const direction = this.shouldBeAscending ? 1 : -1;
        return a[this.orderBy] > b[this.orderBy] ? direction : -direction;
      });
    },
    sortOrder() {
      return this.shouldBeAscending;
    },
  },
  mounted() {
    this.orderBy = 'price';
  },
});







