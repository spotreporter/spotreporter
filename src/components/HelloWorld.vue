<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <p>
    Recommended setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">Vetur</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features" target="_blank">Vue DX</a>
  </p>
  <p>
    Make sure to use workspace version of TypeScript to get improved support via
    <a href="https://github.com/znck/vue-developer-experience" target="_blank">@vuedx</a>. <br />Note @vuedx is still
    experimental and this setup is provided for early feedback.
  </p>
  <button :disabled="!loggedInUser" @click="increase">count is: {{ count }}</button>
  <button :disabled="!!loggedInUser" @click="login">Logged in: {{ loggedInUser }}</button>
  <button :disabled="!loggedInUser" @click="logout">Logout</button>
  <input v-model="username" type="text" />
  <input v-model="password" type="text" />
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
// import { SEA } from 'gun';
import { ref, defineComponent } from 'vue';
// import Gun from 'gun';

type GunData = {
  name: string;
  email: string;
  count: number;
};

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    let count = ref(0);

    let username = ref('test');
    let password = ref('test');

    let loggedInUser = ref('');

    const gun = Gun<Record<string, GunData>>(['http://localhost:8765/gun']);

    const user = gun.user();
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
    const increase = async () => {
      if (!user.is) {
        console.log('login first');
        return;
      }
      count.value++;
      user.get('crypt').put(await SEA.encrypt(count.value, user['_'].sea));
    };

    console.log(user, user.is);

    const login = () => {
      user.create(username.value, password.value, (res) => {
        console.log(res, user, user.is);
        user.auth(username.value, password.value, (res) => {
          console.log(res, user, user.is, user['_'].sea);
          loggedInUser.value = user.is.alias;
        });
      });
    };

    const logout = () => {
      user.leave();
      loggedInUser.value = '';
      console.log(user, user['_'].sea);
    };

    gun.on('auth', () => {
      user.get('crypt').on(async (data) => {
        count.value = await SEA.decrypt(data, user['_'].sea);
      });
    });

    gun.on('hi', (peer) => {
      console.log('peer: ', peer);
    });
    // gun.get('mark').on((data) => {
    //   count.value = data.count;
    // });
    return { count, increase, loggedInUser, login, username, password, logout };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
