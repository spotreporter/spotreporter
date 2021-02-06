<template>
  <div id="app">
    <ReportList :reports="reports">
      <Report v-for="report in reports" :key="report.id" :report="report" />
    </ReportList>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ReportList from './components/ReportList.vue';
import Report from './components/Report.vue';
import { Report as ReportEntity } from './entities/Report';
import { gun } from './lib/gun';

export default defineComponent({
  name: 'App',
  components: {
    ReportList,
    Report,
  },
  setup: () => {
    let reports = ref<ReportEntity[]>([]);
    gun
      .get('reports')
      .map()
      .on((report: ReportEntity) => {
        return reports.value.push(report);
      });
    return { reports };
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
