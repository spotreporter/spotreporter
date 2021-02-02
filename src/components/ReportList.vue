<template>
    <ul class="divide-y divide-gray-100">
    <slot></slot>
  </ul>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'ReportList',
})
</script>
