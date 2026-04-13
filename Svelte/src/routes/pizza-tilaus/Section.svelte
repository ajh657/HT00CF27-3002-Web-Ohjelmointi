<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		SectionTitle: string;
		SectionBody: Snippet;
	}

	let { SectionTitle, SectionBody }: Props = $props();
</script>

<fieldset class="input">
	<legend>{SectionTitle}</legend>
	{@render SectionBody?.()}
</fieldset>

<style>
	fieldset {
		margin: 1rem;
		border: 0.1rem solid;
		border-color: orangered;
		box-shadow: 0.15rem 0.1rem 0.3rem 0.1rem #000000;
	}

	fieldset::after(fieldset) {
		margin-top: 2rem;
	}

	fieldset.input {
		display: flex;
		flex-direction: column;
	}
	fieldset legend {
		background-color: orangered;
		color: white;
		font-size: large;
		font-weight: 400;
	}

	fieldset input {
		max-width: 75%;
	}
</style>
