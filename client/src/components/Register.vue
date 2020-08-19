<template>
  <div class="hello">
    <input type="email" name="email" placeholder="Email" v-model="email" />
    <input type="password" name="password" placeholder="Password" v-model="password" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"; //vue? js?
export default {
  data() {
    return {
      email: "test@test.com",
      password: "password",
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
    },
  },
};
</script>