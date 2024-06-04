<template>
    <div class="product-create">
      <div class="background-image">
      <router-link to="/products" class="back-button">Back to Product List</router-link>
      <h1>Create New Product</h1>
      <form @submit.prevent="createProduct">
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
        <button type="submit">Create</button>
      </form>
      </div>
    </div>
</template>
  
<script>
import { createProduct } from '@/api/products';

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
    async createProduct() {
      try {
        await createProduct(this.product);
        this.$router.push('/products');
      } catch (error) {
        console.error('Failed to create product:', error);
      }
    },
  },
};
</script>
  
<style scoped>
.product-create {
  text-align: center;
}

.background-image {
  background-image: url('https://i.pinimg.com/736x/eb/07/a2/eb07a208f46b334db9feb82a3866d745.jpg');
  background-size: cover;
  background-position: center;
  padding: 20px;
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

.product-create form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.product-create label {
  font-weight: bold;
}

.product-create input, .product-create textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.product-create textarea {
  resize: vertical;
}

.product-create button {
  grid-column: span 2;
  padding: 10px 0;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.product-create button:hover {
  background-color: #45a049;
}
</style>
