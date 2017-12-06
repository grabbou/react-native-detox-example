/**
 * @flow
 */

describe('Main', () => {
	it('should have welcome heading', async () => {
		const text = element(by.id('welcome'));

    await expect(text).toHaveText('Welcome to React Native');
	});
})
