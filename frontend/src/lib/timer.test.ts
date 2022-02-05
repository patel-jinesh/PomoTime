import { timer } from '$lib/timer';
import { jest } from '@jest/globals';
import { get } from 'svelte/store';


describe('timer', () => {
	beforeEach(() => {
		jest.useFakeTimers();
		timer.reset(5);
	});

	afterEach(() => {
		jest.runOnlyPendingTimers();
		jest.useRealTimers();
	});

	it('ticks down', async () => {
		timer.start();
		jest.advanceTimersToNextTimer(1000);
		expect(get(timer)).toEqual(4000);
	});
});
