import { LaunchOptions } from 'playwright';
const browserOptions: LaunchOptions = {
  slowMo: 1000,
  headless: false,
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
};

export const config = {
  browserOptions,
  BASE_URL: 'http://localhost:3000',
};
