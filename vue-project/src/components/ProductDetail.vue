<template>
  <div class="product-detail">
    <div class="background-image">
      <router-link to="/products" class="back-button">Back to Product List</router-link>
      <h1>Product Detail</h1>
      <div v-if="product" class="product-info">
        <p><strong>Name:</strong> {{ product.name }}</p>
        <p><strong>Price:</strong> {{ product.price }}</p>
        <p><strong>Description:</strong> {{ product.description }}</p>
        <p><strong>SKU:</strong> {{ product.sku }}</p>
        <p><strong>Category:</strong> {{ product.category }}</p>
        <p><strong>Weight:</strong> {{ product.weight }}g</p>
        <p><strong>Dimensions:</strong> {{ product.dimensions }}</p>
        <img :src="product.image" alt="Product Image" />
      </div>
    </div>
  </div>
</template>

<script>
import { getProductDetail } from '@/api/products';

export default {
  data() {
    return {
      product: null,
    };
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await getProductDetail(this.$route.params.id);
        this.product = response.data;
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style scoped>
.product-detail {
  text-align: center;
}

.background-image {
  background-image: url('https://thumbs.dreamstime.com/b/cartoon-background-supermarket-hand-drawn-interior-colourful-grocery-store-product-shelves-79996070.jpg');
  background-size: cover;
  background-position: center;
  padding: 20px;
}

.product-info {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}

.product-info p {
  margin: 10px 0;
}

.product-info img {
  display: block;
  margin: 20px auto;
  max-width: 100%;
  height: auto;
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #45a049;
}
</style>
