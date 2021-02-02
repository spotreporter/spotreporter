<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hello-world msg="Hello Vue 3 + Vite" />
    <ReportList>
      <Report v-for="report in reports" :key="report.id" :report="report" />
    </ReportList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import ReportList from './components/ReportList.vue';
import Report from './components/Report.vue';
import { Report as ReportEntity } from './entities/Report.ts';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    ReportList,
    Report,
  },
  data() {
    return {
      reports: [new ReportEntity('Heidkate', 'kalt', new Date()), new ReportEntity('Laboe', 'auch kalt', new Date())],
    }
  },
});
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
