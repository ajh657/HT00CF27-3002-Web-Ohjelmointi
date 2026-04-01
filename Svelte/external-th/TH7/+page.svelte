<script lang="ts">
	import NameList from './NameList.svelte';
	import PageTitle from './PageTitle.svelte';

	let generoitu: boolean = $state(false);
	let input: string = $state('');
	let AKNimi: string = $state('');
	let names: string[] = $state([]);

	function generoi(): void {
		generoitu = true;
		AKNimi = `${input} Kela`;
		names.push(AKNimi);
	}

	function tyhjenna(): void {
		generoitu = false;
		input = '';
		AKNimi = '';
		names = [];
	}
</script>

<PageTitle title="Anssi Kela -nimigeneraattori" />

<input type="text" bind:value={input} />
<button onclick={generoi}> Muodosta nimesi </button>

<NameList bind:names onClearClick={tyhjenna} />

{#if generoitu}
	<p>Anssi Kela -nimesi on "{AKNimi}"</p>
{/if}

<style>
	button {
		margin-left: 0.5em;
		padding-right: 0.5em;
	}
</style>
