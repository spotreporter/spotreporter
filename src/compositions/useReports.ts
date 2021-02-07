import { Report } from '../entities';
import { gun } from './useGun';
import { onMounted, ref } from 'vue';

export function addNewReport(report: Report): void {
  console.log('new object', report);

  gun.value.get('reports').set(report);
}

export type GunExt<T> = T & {
  readonly _: {
    '#': string;
  };
};

export function removeReport(report: GunExt<Report>): void {
  gun.value.get(report._['#'] as 'reports').put({ deleted: true });
}

export const reports = ref<GunExt<Report>[]>([]);

// eslint-disable-next-line @typescript-eslint/no-empty-function
gun.value.get('reports').map().on(() => {});

gun.value
  .get('reports')
  .map()
  .on((report) => {
    console.log('change at reports node', report);

    let changed = false;
    reports.value = reports.value.map((reportInArray) => {
      if (report.id === reportInArray.id) {
        changed = true;
        console.log('change report', reportInArray, report);
        return report;
      } else {
        return reportInArray;
      }
    });
    if (!changed) {
      reports.value.push(report);
    }
  });
