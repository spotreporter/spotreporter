<template>
  <li class="flex-shrink-0 p-4 space-x-4 bg-gray-100 m-4 rounded-xl width-50">
    <button v-if="!newPressed" v-on:click="newPressed = true" class="bg-blue-400 rounded-xl p-2">New Report</button>
    <form v-if="newPressed">
      <label for="fspotname">Spotname:</label><br />
      <input v-model="newReport.spotname" type="text" id="fspotname" /><br />
      <label for="lfreetext">Freetext:</label><br />
      <input v-model="newReport.freetext" type="text" id="lfreetext" /><br /><br />

      <button type="submit" v-on:click="newPressed = true" class="bg-blue-400 rounded-xl p-2">New Report</button>
    </form>
  </li>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { Report as ReportEntity } from '../entities/Report';

export default defineComponent({
  name: 'ReportAddButton',
  data() {
    return {
      newPressed: false,
      newReport: new ReportEntity('','', new Date()),
    };
  },
  methods: {
    addNewReport: function () {
      console.log("new report", newReport);
      this.newPressed = false;
    },
  }
});
</script>
