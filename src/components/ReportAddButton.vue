<template>
  <li class="flex-shrink-0 p-4 space-x-4 bg-gray-100 m-4 rounded-xl width-50">
    <button v-if="!newPressed" v-on:click="newPressed = true" class="bg-blue-400 rounded-xl p-2">New Report</button>
    <form v-if="newPressed" v-on:submit="addNewReport">
      <label for="fspotname">Spotname:</label><br />
      <input type="text" id="fspotname" v-model="newReport.spotname" /><br />
      <label for="lfreetext">Freetext:</label><br />
      <input type="text" id="lfreetext" v-model="newReport.freetext" /><br /><br />

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
      newReport: new ReportEntity('','', new Date()),
    };
  },
  methods: {
    addNewReport: function (event) {
      event.preventDefault();
      gun.get('reports').set(this.newReport);
     this.newPressed = false;
    },
  }
});
</script>
