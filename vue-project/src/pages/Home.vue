<template>
  <div class="home">
    <div class="overlay">
      <h1 class="text-3xl font-bold mb-4">Welcome to Our Store</h1>
      <div class="button-container">
        <router-link to="/login" class="btn">Login</router-link>
        <router-link to="/register" class="btn">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  background-image: url('https://img.freepik.com/premium-photo/abstract-blur-defocused-supermarket_1339-129329.jpg');
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #45a049;
}
</style>
