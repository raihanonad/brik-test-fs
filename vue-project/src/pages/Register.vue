<template>
  <div class="register-container">
    <div class="background"></div>
    <div class="content">
      <h1>Register</h1>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Register</button>
      </form>
      <div class="button-container">
        <router-link to="/login" class="btn">Login</router-link>
        <router-link to="/" class="btn">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/users';
import { setToken } from '@/utils/auth';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async registerUser() {
      try {
        const response = await registerUser({ username: this.username, password: this.password });
        setToken(response.data.token);
        this.$router.push('/login');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  }
}
</script>


<style scoped>
.register-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://i.pinimg.com/originals/2b/f1/65/2bf165e8f4f080df86a8cccc6f46e847.jpg');
  background-size: cover;
  background-position: center;
}

.background {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  z-index: 1;
  text-align: center;
  color: #fff;
}

.content h1 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;
}

.btn:last-child {
  margin-right: 0;
}

.btn:hover {
  background-color: #45a049;
}
</style>
