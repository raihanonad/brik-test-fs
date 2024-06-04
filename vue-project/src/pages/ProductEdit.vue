<template>
    <div class="product-edit">
      <router-link to="/products" class="back-button">Back to Product List</router-link>
      <h1>Edit Product</h1>
      <form @submit.prevent="updateProduct">
        <div>
          <label for="name">Name</label>
          <input v-model="product.name" type="text" id="name" required />
        </div>
        <div>
          <label for="price">Price</label>
          <input v-model="product.price" type="number" id="price" required />
        </div>
        <div>
          <label for="description">Description</label>
          <textarea v-model="product.description" id="description" required></textarea>
        </div>
        <div>
          <label for="sku">SKU</label>
          <input v-model="product.sku" type="text" id="sku" required />
        </div>
        <div>
          <label for="categoryName">Category</label>
          <input v-model="product.categoryName" type="text" id="categoryName" required />
        </div>
        <div>
          <label for="weight">Weight (g)</label>
          <input v-model="product.weight" type="number" id="weight" required />
        </div>
        <div>
          <label for="length">Length (cm)</label>
          <input v-model="product.length" type="number" id="length" required />
        </div>
        <div>
          <label for="width">Width (cm)</label>
          <input v-model="product.width" type="number" id="width" required />
        </div>
        <div>
          <label for="height">Height (cm)</label>
          <input v-model="product.height" type="number" id="height" required />
        </div>
        <div>
          <label for="image">Image URL</label>
          <input v-model="product.image" type="text" id="image" required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
</template>
  
<script>
import { getProductDetail, updateProduct } from '@/api/products';

export default {
  data() {
    return {
      product: {
        name: '',
        price: 0,
        description: '',
        sku: '',
        categoryName: '',
        weight: 0,
        length: 0,
        width: 0,
        height: 0,
        image: '',
      },
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
    async updateProduct() {
      try {
        await updateProduct(this.$route.params.id, this.product);
        this.$router.push('/products');
      } catch (error) {
        console.error('Failed to update product:', error);
      }
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>
  
<style scoped>
.product-edit {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-image: url('https://st2.depositphotos.com/1001279/12560/i/950/depositphotos_125605728-stock-photo-grocery-store-in-kuala-lumpur.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.back-button {
  display: inline-block;
  margin-bottom: 20px;
  color: #fff;
  background-color: #4CAF50;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #45a049;
}

h1 {
  text-align: center;
  color: #fff;
}

form {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
}

label {
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>