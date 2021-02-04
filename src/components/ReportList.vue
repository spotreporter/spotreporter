<template>
  <ul class="divide-y divide-gray-100 p-8">
    <ReportAddButton :reports="reports" ></ReportAddButton>
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Report } from '../entities';
import ReportAddButton from './ReportAddButton.vue';

export default defineComponent({
  name: 'ReportList',
  components: { ReportAddButton },
  props: {
    reports: {
      required: true,
      type: Array,
    }
  },
});
</script>
