<script lang="ts">
	import type { People } from '$lib/tikowars/people';
	import type { Person } from '$lib/tikowars/person';
	import Modal from './Modal.svelte';

	let modalOpen: boolean = $state(false);
	let modalData: Person | undefined = $state();

	async function OpenPersonModal(personId: string): Promise<void> {
		modalOpen = false;

		const response: Response = await fetch('https://www.swapi.tech/api/people/' + personId);

		if (response.ok) {
			modalData = await response.json();
			modalOpen = true;

			setTimeout(() => {
				if (modalOpen) {
					modalOpen = false;
				}
			}, 3000);
		}
	}

	async function getPeopleList(): Promise<People> {
		const response: Response = await fetch('https://www.swapi.tech/api/people/');

		return await response.json();
	}
</script>

<h1>Tiko wars</h1>

{#await getPeopleList()}
	<p>Loading...</p>
{:then data}
	<ul>
		{#each data.results as result}
			<li onclick={async (): Promise<void> => await OpenPersonModal(result.uid)}>
				<p>{result.name}</p>
			</li>
		{/each}
	</ul>
{/await}

<Modal bind:ModalOpen={modalOpen}>
	{#snippet ModalHeader()}
		{#if modalData != undefined}
			<h1>{modalData.result.properties.name}</h1>
		{/if}
	{/snippet}

	{#snippet ModalChildren()}
		{#if modalData != undefined}
			<span>Syntymävuosi: {modalData.result.properties.birth_year}</span>
			<span>Massa: {modalData.result.properties.mass}</span>
			<span>Korkeus: {modalData.result.properties.height}</span>

			<h6><a href={modalData.result.properties.url}>Lisätietoa</a></h6>
		{/if}
	{/snippet}
</Modal>

<style>
	li {
		cursor: pointer;
	}
</style>
