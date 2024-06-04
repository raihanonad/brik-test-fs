<template>
  <div class="detail-container">
    <h1 class="text-3xl font-bold mb-4">Product Detail</h1>
    <div v-if="product" class="product-detail">
      <ProductDetail :product="product" />
    </div>
    <div v-else class="loading-message">
      Loading...
    </div>
  </div>
</template>

<script>
import ProductDetail from '@/components/ProductDetail.vue';

export default {
  components: {
    ProductDetail
  },
  data() {
    return {
      product: null
    };
  },
  created() {
    // Di sini Anda akan mendapatkan detail produk, misalnya dari API atau penyimpanan lokal
    // Misalnya, jika Anda memiliki parameter id di URL, Anda dapat menggunakan itu untuk mengambil detail produk dari API
    // Simpan hasilnya ke dalam variabel product
    // Contoh:
    // this.getProductDetail(this.$route.params.id);
    this.fetchProductDetail();
  },
  methods: {
    async fetchProductDetail() {
      try {
        // Panggil API atau metode lain untuk mendapatkan detail produk
        // Misalnya:
        // const response = await getProductDetail(this.$route.params.id);
        // this.product = response.data;
        
        // Simulasi data produk
        this.product = {
          name: 'Product Name',
          price: 'Product Price',
          description: 'Product Description',
          sku: 'Product SKU',
          category: 'Product Category',
          weight: 'Product Weight',
          dimensions: 'Product Dimensions',
          image: 'https://via.placeholder.com/300', // URL gambar produk
        };
      } catch (error) {
        console.error('Failed to fetch product detail:', error);
      }
    }
  }
};
</script>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: 0 auto;
}

.loading-message {
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
}

.product-detail {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background-color: #f9f9f9;
}

.product-detail img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}
</style>
