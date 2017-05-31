/**
 * @flow
 */

describe('Main', () => {
  it('should have welcome heading', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
})
