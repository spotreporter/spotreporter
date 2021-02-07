import { ref } from 'vue';

import { Report } from '../entities/Report';
import Gun from '../lib/gun';

interface GunState {
  reports: Report[];
}

const gunner = Gun<GunState>(['http://localhost:8765/gun']);

export const gun = ref(gunner);

gun.value.on('hi', (peer) => {
  console.log('new peer: ', peer);
});
