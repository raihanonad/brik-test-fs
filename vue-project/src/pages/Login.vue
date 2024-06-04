<template>
  <div class="login-container">
    <div class="background"></div>
    <div class="content">
      <h1>Login</h1>
      <form @submit.prevent="loginUser">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <div class="button-container">
        <router-link to="/register" class="btn">Register</router-link>
        <router-link to="/" class="btn">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/api/users';
import { setToken } from '@/utils/auth';

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async loginUser() {
      try {
        const response = await loginUser({ username: this.username, password: this.password });
        setToken(response.data.token);
        this.$router.push('/products');
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/03665ef2-aec1-4837-b533-7cd019e2e72a/d4oivv5-19a61ffd-7fa1-48e7-9c8e-0c1b4ccca8c4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAzNjY1ZWYyLWFlYzEtNDgzNy1iNTMzLTdjZDAxOWUyZTcyYVwvZDRvaXZ2NS0xOWE2MWZmZC03ZmExLTQ4ZTctOWM4ZS0wYzFiNGNjY2E4YzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6yVudj5r4tVFCk3JjglDbhY7aj7UihzFlrK8KmZqhDQ');
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
