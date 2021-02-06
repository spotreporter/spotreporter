<template>
  <article class="flex-shrink-0 p-4 flex space-x-4 bg-gray-100 m-4 rounded-xl width-50">
    <!-- <img :src="recipe.image" alt="" class="flex-none w-18 h-18 rounded-lg object-cover" width="144" height="144" /> -->
    <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
      <h2 class="text-lg font-semibold text-black mb-0.5">
        {{ report.spotname }}
      </h2>
      <dl class="float-left text-sm font-medium whitespace-pre">
        <dt class="text-align">Time</dt>
        <dd>
          {{ timeString }}
        </dd>
      </dl>
      <dl class="text-sm font-medium whitespace-pre">
        <dt class="">Text</dt>
        <dd>
          {{ report.freetext }}
        </dd>
      </dl>
    </div>
    <div class="flex-right">
      <button @click="removeReport">Remove</button>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Report } from '../entities';
import { gun } from '../lib/gun';

export default defineComponent({
  name: 'ReportComponent',
  props: {
    report: {
      required: true,
      type: Object as PropType<Report>,
    },
  },
  watch: {
    'report': (report) => {
        console.log('änderung', report, this.report);
      },
  },

  computed: {
    timeString(): string {
      const dateObj = new Date(this.report.date);
      return dateObj.toLocaleString();
    },
  },
  methods: {
    removeReport(): void {
        console.log('remove');
        // this.report.put({spotname: 'test'});
        // const reportNode = gun.get(this.report);

        // const reports = gun.get('reports');
        // reports.unset();
        // reportNode.put({spotname: 'Lindhöft'});
        gun.get(this.report['_']['#']).put({spotname: 'Laboe'});

      }
    },
});
</script>
