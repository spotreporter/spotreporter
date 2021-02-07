import { gun } from './useGun';
import { ref } from 'vue';
import { user } from './useUser';
import { SEA } from '../lib/gun';

export const reportFilter = ref<string[]>([]);

export async function setReportFilter(commaSeparatedFilter: string): Promise<void> {
  user.get('reportFilter').put(await SEA.encrypt(commaSeparatedFilter, user['_'].sea));
}

gun.value.on('auth', () => {
  user.get('reportFilter').on(async (data) => {
    reportFilter.value = (await SEA.decrypt(data, user['_'].sea)).split(',');
  });
});
