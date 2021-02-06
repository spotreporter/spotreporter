<template>
  <div id="app">
    <ReportList>
      <ReportComponent v-for="report in reports" :key="report.id" :report="report" />
    </ReportList>
    <pre>{{ reports.length }}:::{{ reports }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ReportList from './components/ReportList.vue';
import ReportComponent from './components/ReportComponent.vue';
import { Report } from './entities';
import { gun } from './lib/gun';

export default defineComponent({
  name: 'App',
  components: {
    ReportList,
    ReportComponent,
  },
  data() {
    return {
      reports: [] as Report[],
      user: gun.user(),
    };
  },
  created() {
    gun
      .get('reports')
      .map()
      .on((report: Report) => {
        console.log('change at reports node', report);
        let changed = false;
        this.reports = this.reports.map((reportInArray) => {
          if (report.id === reportInArray.id) {
            changed = true;
            console.log('change report', reportInArray, report);
            return report;
          }
          else {
            return reportInArray;
          }
          });
          if (!changed) {
            this.reports.push(report);
          }
        }
      );
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
