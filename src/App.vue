<template>
  <div id="app">
    <Auth />
    <ReportList>
      <ReportComponent v-for="report in filteredReports" :key="report.id" :report="report" />
    </ReportList>
  </div>
</template>

<script lantg="ts">
import Auth from './components/Auth.vue';
import { computed, defineComponent } from 'vue';
import ReportList from './components/ReportList.vue';
import ReportComponent from './components/ReportComponent.vue';
import { reports } from './compositions/useReports';
import { isFilterActive, reportFilter } from './compositions/useReportFilter';

export default defineComponent({
  name: 'App',
  components: {
    Auth,
    ReportList,
    ReportComponent,
  },
  setup() {
    const filteredReports = computed(() => {
      if (!isFilterActive.value) {
        return reports.value;
      }
      return reports.value.filter((report) => reportFilter.value.includes(report.spotname));
    });

    return {
      filteredReports,
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
