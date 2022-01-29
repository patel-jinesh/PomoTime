import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, Then } from '@cucumber/cucumber';
import expect from 'expect';

Given('Go to the PomoTime website', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.goto(config.BASE_URL);
});

Then('HomePage is displayed', async function (this: ICustomWorld) {
  const { page } = this;
  const content = await page!.textContent('p');
  expect(content).toBe('HomePage');
});
