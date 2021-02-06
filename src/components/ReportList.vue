<template>
  <ul class="divide-y divide-gray-100 p-8">
    <ReportAddButton />
    <slot />
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ReportAddButton from './ReportAddButton.vue';

export default defineComponent({
  name: 'ReportList',
  components: { ReportAddButton },
});
</script>
