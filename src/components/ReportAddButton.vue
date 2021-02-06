<template>
  <li class="flex-shrink-0 p-4 space-x-4 bg-gray-100 m-4 rounded-xl width-50">
    <button v-if="!newPressed" class="bg-blue-400 rounded-xl p-2" @click="newPressed = true">New Report</button>
    <form v-if="newPressed" @submit.prevent="addNewReport">
      <label for="fspotname">Spotname:</label><br />
      <input id="fspotname" v-model="newReport.spotname" type="text" /><br />
      <label for="lfreetext">Freetext:</label><br />
      <input id="lfreetext" v-model="newReport.freetext" type="text" /><br /><br />

      <button type="submit" class="bg-blue-400 rounded-xl p-2">New Report</button>
    </form>
  </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Report as ReportEntity } from '../entities/Report';
import { gun } from '../lib/gun';

export default defineComponent({
  name: 'ReportAddButton',
  props: {
    reports: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newPressed: false,
      newReport: new ReportEntity('', '', new Date()),
    };
  },
  methods: {
    addNewReport: function () {
      gun.get('reports').set(this.newReport);
      this.newPressed = false;
    },
  },
});
</script>
