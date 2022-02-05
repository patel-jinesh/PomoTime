import { writable } from 'svelte/store';

export function createTimer(store: typeof writable) {
	const { subscribe, set, update } = store({
		seconds: 15,
		paused: true
	});

	let interval: NodeJS.Timer;

	function n(seconds: number, paused: boolean) {
		return {
			seconds,
			paused
		};
	}

	function start() {
		update((o) => n(o.seconds, false));
		interval = setInterval(() => {
			update((o) => n(o.seconds - +!o.paused, false));
		}, 1000);
	}

	function reset(seconds: number) {
		clearInterval(interval);
		set(n(seconds, true));
	}

	function stop() {
		clearInterval(interval);
		update((o) => n(o.seconds, true));
	}

	return {
		subscribe,
		reset,
		stop,
		start
	};
}

export const timer = createTimer(writable);
