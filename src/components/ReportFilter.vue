<template>
  <li class="flex-shrink-0 p-4 space-x-4 bg-gray-100 m-4 rounded-xl width-50">
    <form @submit.prevent="filter">
      <label for="lfreetext">Filter ({{ reportFilter }}):</label><br />
      <input id="lfreetext" v-model="commaSeparatedFilter" type="text" /><br /><br />

      <button
        :disabled="!loggedInUser"
        type="submit"
        class="bg-blue-400 p-2 disabled:opacity-50 disabled:cursor-default"
      >
        Apply filter
      </button>
    </form>
    <input v-model="isFilterActive" type="checkbox" />
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { reportFilter, setReportFilter, isFilterActive } from '../compositions/useReportFilter';
import { loggedInUser } from '../compositions/useUser';

export default defineComponent({
  name: 'ReportFilter',
  setup() {
    const commaSeparatedFilter = ref('');

    const _reportFilter = computed(() => {
      return reportFilter.value.join(',');
    });

    const filter = () => {
      void setReportFilter(commaSeparatedFilter.value);
      commaSeparatedFilter.value = '';
    };

    return { commaSeparatedFilter, filter, reportFilter: _reportFilter, loggedInUser, isFilterActive };
  },
});
</script>
