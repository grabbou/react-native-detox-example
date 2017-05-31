/**
 * @flow
 */

const detox = require('detox');
const config = require('../package.json').detox;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

/**
 * If we are running `e2e` tests, we want to setup and configure
 * detox
 */
if (process.argv[2].includes('__e2e__')) {
	beforeAll(async () => {
		await detox.init(config);
	});

	afterAll(async () => {
		await detox.cleanup();
	});

	beforeEach(async () => {
    await device.reloadReactNative();
  });
}


