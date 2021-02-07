<template>
  <ul class="divide-y divide-gray-100 p-8">
    <ReportAddButton />
    <ReportFilter />
    <slot />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ReportAddButton from './ReportAddButton.vue';
import ReportFilter from './ReportFilter.vue';

export default defineComponent({
  name: 'ReportList',
  components: { ReportAddButton, ReportFilter },
});
</script>
