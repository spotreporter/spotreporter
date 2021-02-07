import { Report } from '../entities';
import { gun } from './useGun';
import { ref } from 'vue';
import { IGunRecordData } from 'gun/types/types';

export function addNewReport(report: Report): void {
  console.log('new object', report);

  gun.value.get('reports').set(report);
}

export function removeReport(report: IGunRecordData<Report>): void {
  gun.value.get(report._['#']).put({ deleted: true });
}

export const reports = ref<Report[]>([]);

// hack to make initial loading of reports work
gun.value
  .get('reports')
  .map()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  .on(() => {});

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
