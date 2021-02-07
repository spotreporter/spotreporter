<template>
  <div id="app">
    <ReportList>
      <ReportComponent v-for="report in reports" :key="report.id" :report="report" />
    </ReportList>
  </div>
</template>

<script lantg="ts">
import { defineComponent } from 'vue';
import ReportList from './components/ReportList.vue';
import ReportComponent from './components/ReportComponent.vue';
// import { gun } from './lib/gun';
import { reports } from './compositions/useReports';

export default defineComponent({
  name: 'App',
  components: {
    ReportList,
    ReportComponent,
  },
  setup() {
    // const user = ref(gun.user());

    return {
      // user,
      reports,
    };
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
