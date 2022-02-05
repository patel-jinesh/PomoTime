<script lang="ts">
	export let variant: 'primary' | 'regular' | 'destructive' = 'regular';
	export let disabled: boolean = false;
</script>

<button {disabled} class={variant} on:click>
	<slot />
</button>

<style>
	button {
		cursor: pointer;
		border-radius: 15px;
		padding: 10px;
		font-size: small;
		transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
		max-height: 40px;
		min-width: 75px;
		height: 40px;
	}

	button:disabled {
		opacity: 0.3;
		pointer-events: none;
	}

	button :global(*) {
		display: none;
	}

	.primary {
		color: var(--primary-fg);
		background: var(--primary-bg);
		border: 1px solid var(--primary-brdr);
	}

	.primary:hover {
		background: var(--primary-bg-hvr);
		border: 1px solid var(--primary-brdr-hvr);
	}

	.primary:active {
		background: var(--primary-bg-atv);
		border: 1px solid var(--primary-brdr-atv);
	}

	.regular {
		color: var(--regular-fg);
		background: var(--regular-bg);
		border: 1px solid var(--regular-brdr);
	}

	.regular:hover {
		background: var(--regular-bg-hvr);
		border: 1px solid var(--regular-brdr-hvr);
	}

	.regular:active {
		background: var(--regular-bg-atv);
		border: 1px solid var(--regular-brdr-atv);
	}

	.destructive {
		color: var(--destructive-fg);
		background: var(--destructive-bg);
		border: 1px solid var(--destructive-brdr);
	}

	.destructive:hover {
		background: var(--destructive-bg-hvr);
		border: 1px solid var(--destructive-brdr-hvr);
	}

	.destructive:active {
		background: var(--destructive-bg-atv);
		border: 1px solid var(--destructive-brdr-atv);
	}
</style>
