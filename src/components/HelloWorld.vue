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
  <button @click="increase">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import Gun from 'gun';

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
    const gun = Gun<Record<string, GunData>>(['http://192.168.178.39:8765/gun']);

    const increase = () => {
      count.value++;
      gun.get('mark').put({
        name: 'Mark',
        email: 'mark@gunDB.io',
        count: count.value,
      });
    };

    gun.get('mark').on((data) => {
      count.value = data.count;
    });
    return { count, increase };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
