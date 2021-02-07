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
    // const gun = Gun<Record<string, GunData>>(['http://localhost:8765/gun']);

    // const user = gun.value.user();
    // const loggedInUser = computed(() => {
    //   if (!user.is) {
    //     return '';
    //   }
    //   return user.is.alias;
    // });
    // watch(user, () => {

    // });
    // watch(user.is, (currentValue, oldValue) => {
    //   console.log('watch', currentValue, oldValue);
    // });

    // const increase = async () => {
    //   if (!user.is) {
    //     console.log('login first');
    //     return;
    //   }
    //   count.value++;
    //   user.get('crypt').put(await SEA.encrypt(count.value, user['_'].sea));
    // };

    // gun.value.on('auth', () => {
    //   user.get('crypt').on(async (data) => {
    //     count.value = await SEA.decrypt(data, user['_'].sea);
    //   });
    // });

    // gun.value.on('hi', (peer) => {
    //   console.log('peer: ', peer);
    // });

    // gun.get('mark').on((data) => {
    //   count.value = data.count;
    // });
    return { count, loggedInUser, login: _login, username, password, logout, register: _register };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
