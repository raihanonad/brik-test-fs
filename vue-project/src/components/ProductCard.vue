<template>
    <div class="product-card max-w-xs rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="product.image" :alt="product.name">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ product.name }}</div>
        <p class="text-gray-700 text-base">{{ product.description }}</p>
        <p class="text-gray-700 text-base">{{ product.price }}</p>
        <router-link :to="`/detail/${product._id['$oid']}`">
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Info
          </button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  };
</script>
  
  
  <style scoped>
  .product-card {
    max-width: 20rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  }
  
  .product-card img {
    width: 100%;
  }
  
  .product-card .info-container {
    padding: 1.5rem;
  }
  
  .product-card .product-name {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .product-card .product-description {
    color: #4a5568;
  }
  
  .product-card .product-price {
    background-color: #e2e8f0;
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: bold;
    color: #2d3748;
  }
</style>
  