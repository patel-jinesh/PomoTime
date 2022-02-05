<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { timer } from '$lib/timer';
	import Button from '$lib/ui/button.svelte';
	import IconButton from '$lib/ui/icon-button.svelte';
	import favico from '/static/favicon.png';
</script>

<svelte:head>
	<title>PomoTime</title>
</svelte:head>

<p>{$timer.seconds}</p>
<p>{$timer.paused}</p>
{#if !$timer.paused}
	<Button on:click={timer.stop}>Stop</Button>
{:else}
	<IconButton src={favico} alt="" on:click={timer.start} variant={'destructive'} />
{/if}

<!-- <Button on:click={() => timer.reset(10)}>Reset</Button> -->
<style>
	@import '../theme.css';

	:global(body) {
		background: #0e1217;
	}
</style>
