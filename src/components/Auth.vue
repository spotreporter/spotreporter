<template>
  <div class="flex justify-around">
    <button
      :disabled="!!loggedInUser"
      class="bg-blue-400 p-2 disabled:opacity-50 disabled:cursor-default"
      @click="register"
    >
      Register
    </button>
    <button
      :disabled="!!loggedInUser"
      class="bg-blue-400 p-2 disabled:opacity-50 disabled:cursor-default"
      @click="login"
    >
      Logged in: {{ loggedInUser }}
    </button>
    <button
      :disabled="!loggedInUser"
      class="bg-blue-400 p-2 disabled:opacity-50 disabled:cursor-default"
      @click="logout"
    >
      Logout
    </button>
    <input v-model="username" type="text" />
    <input v-model="password" type="password" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { login, logout, loggedInUser, register } from '../compositions/useUser';

export default defineComponent({
  name: 'Auth',
  setup: () => {
    let count = ref(0);

    let username = ref('test');
    let password = ref('test');

    const _login = () => {
      login(username.value, password.value);
    };

    const _register = () => {
      register(username.value, password.value);
    };

    return { count, loggedInUser, login: _login, username, password, logout, register: _register };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
