<script lang="ts">
	import Modal from './Modal.svelte';
	import NameList from './NameList.svelte';
	import PageTitle from './PageTitle.svelte';

	let modalOpen = $state(false);
	let generoitu: boolean = $state(false);
	let input: string = $state('');
	let AKNimi: string = $state('');
	let names: string[] = $state([]);

	function generoi(): void {
		generoitu = true;
		AKNimi = `${input} Kela`;
		names.push(AKNimi);
		modalOpen = true;
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

<!-- {#if generoitu}
	<p>Anssi Kela -nimesi on "{AKNimi}"</p>
{/if} -->

<Modal bind:ModalOpen={modalOpen}>
	{#snippet ModalHeader()}
		<h1>Anssi kela -nimesi on ...</h1>
	{/snippet}
	{#snippet ModalChildren()}
		<h1>"{AKNimi}"</h1>
	{/snippet}
</Modal>

<style>
	button {
		margin-left: 0.5em;
		padding-right: 0.5em;
	}
</style>
