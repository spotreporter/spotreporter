<template>
  <li class="flex-shrink-0 p-4 space-x-4 bg-gray-100 m-4 rounded-xl width-50">
    <button
      v-if="!newPressed"
      :disabled="!loggedInUser"
      class="bg-blue-400 p-2 disabled:opacity-50 disabled:cursor-default"
      @click="newPressed = true"
    >
      New Report
    </button>
    <form v-if="newPressed" @submit.prevent="addNewReport">
      <label for="fspotname">Spotname:</label><br />
      <input id="fspotname" v-model="form.spotname" type="text" /><br />
      <label for="lfreetext">Freetext:</label><br />
      <input id="lfreetext" v-model="form.freetext" type="text" /><br /><br />

      <button type="submit" class="bg-blue-400 p-2">Save new Report</button>
    </form>
  </li>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Report } from '../entities/Report';
import { addNewReport } from '../compositions/useReports';
import { loggedInUser } from '../compositions/useUser';

export default defineComponent({
  name: 'ReportAddButton',
  setup() {
    const newPressed = ref(false);
    const form = ref({
      spotname: '',
      freetext: '',
    });

    const add = () => {
      const report = new Report(form.value.spotname, form.value.freetext, new Date(), loggedInUser.value);
      addNewReport(report);
      form.value.spotname = '';
      form.value.freetext = '';
      newPressed.value = false;
    };

    return { form, addNewReport: add, newPressed, loggedInUser };
  },
});
</script>
