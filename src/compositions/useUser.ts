import { gun } from './useGun';
import { ref } from 'vue';
import { reportFilter } from './useReportFilter';

export const user = gun.value.user();

function init(alias: string) {
  gun.value
    .get(`~@${alias}`)
    .map()
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .once(() => {});
}

console.log(user);

export const loggedInUser = ref('');

export function register(username: string, password: string): void {
  init(username);
  user.create(username, password, (res) => {
    console.log(res, user, user.is);
  });
}

export function login(username: string, password: string): void {
  // init and timeout are a hack to fix login after refresh when user is already in localStorage
  init(username);
  setTimeout(
    () =>
      user.auth(username, password, (res) => {
        if (res.err) {
          console.log(res);
          return;
        }
        console.log(res, user, user.is, user._.sea);
        loggedInUser.value = user.is.alias as string;
        // user.recall({ sessionStorage: true });
      }),
    100,
  );
}

export function logout(): void {
  user.leave();
  loggedInUser.value = '';
  reportFilter.value = [];
  console.log(user, user['_'].sea);
}
