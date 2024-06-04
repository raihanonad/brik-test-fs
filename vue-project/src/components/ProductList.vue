<template>
    <div class="product-list">
      <button @click="logout" class="btn-logout">Logout</button>
      <h1>Product List</h1>
      <button @click="goToCreatePage">Add New Product</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product._id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button @click="goToDetailPage(product._id)">Detail</button>
              <button @click="goToEditPage(product._id)">Edit</button>
              <button @click="deleteProduct(product._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
</template>
  
<script>
  import { getAllProducts, deleteProduct } from '@/api/products';
  
  export default {
    data() {
      return {
        products: [],
        currentPage: 1,
        totalPages: 1,
        limit: 10,
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await getAllProducts(this.currentPage, this.limit);
          this.products = response.data.products;
          this.totalPages = response.data.totalPages;
        } catch (error) {
          console.error('Failed to fetch products:', error);
        }
      },
      async deleteProduct(id) {
        try {
          await deleteProduct(id);
          this.fetchProducts();
        } catch (error) {
          console.error('Failed to delete product:', error);
        }
      },
      goToDetailPage(id) {
        this.$router.push(`/detail/${id}`);
      },
      goToEditPage(id) {
        this.$router.push(`/edit/${id}`);
      },
      goToCreatePage() {
        this.$router.push('/create');
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.fetchProducts();
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.fetchProducts();
        }
      },
      logout() {
        localStorage.removeItem('accessToken');
        this.$router.push('/');
      },
    },
    mounted() {
      this.fetchProducts();
    },
  };
</script>
  
<style>
  .product-list {
    max-width: 800px;
    margin: 0 auto;
    background-image: url('https://cdn.create.vista.com/api/media/small/397208854/stock-photo-supermarket-aisle-empty-red-shopping-cart');
    background-size: cover;
    padding: 20px;
    border-radius: 10px;
  }
  
  .btn-logout {
    padding: 10px 20px;
    background-color: #FF5555;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    float: right;
  }

  .btn-logout:hover {
    background-color: #FF3333;
  }

  h1 {
    text-align: center;
    color: #333;
  }
  
  button {
    margin: 10px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  .pagination {
    text-align: center;
    margin: 20px 0;
  }
  
  .pagination button {
    padding: 5px 10px;
    margin: 0 5px;
  }
</style>
  
  