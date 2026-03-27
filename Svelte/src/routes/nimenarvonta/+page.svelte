<script lang="ts">
	import NameInput from './NameInput.svelte';
	import NameDisplay from './NameDisplay.svelte';
	import List from './List.svelte';

	let showError: boolean = $state(false);
	let errorMessage: string = $state('');

	let firstNames: string[] = $state(['Jarkko', 'Enari', 'Pekka', 'Sami']);
	let lastNames: string[] = $state(['Auvinen', 'Hulkkonen', 'Höylä']);

	let firstNameInput = $state('');
	let lastNameInput = $state('');

	function MarkError(message: string): void {
		showError = true;
		errorMessage = message;
	}

	function ClearError(): void {
		showError = false;
	}

	function AddFirstName(): void {
		ClearError();
		if (firstNameInput != '') {
			if (!firstNames.includes(firstNameInput)) {
				firstNames.push(firstNameInput);
				firstNameInput = '';
			} else {
				MarkError('Nimi on jo listassa');
			}
		} else {
			MarkError('Kenttä etunimi on tyhjä');
		}
	}

	function AddLastName(): void {
		ClearError();
		if (lastNameInput != '') {
			if (!lastNames.includes(lastNameInput)) {
				lastNames.push(lastNameInput);
				lastNameInput = '';
			} else {
				MarkError('Nimi on jo listassa');
			}
		} else {
			MarkError('Kenttä sukunimi on tyhjä');
		}
	}

	function RemoveFirstName(name: string): void {
		firstNames = firstNames.filter((x) => x != name);
	}

	function RemoveLastName(name: string): void {
		lastNames = lastNames.filter((x) => x != name);
	}
</script>

<div>
	<NameDisplay {firstNames} {lastNames} />
</div>

{#if showError}
	<h1 class="error">
		{errorMessage}
	</h1>
{/if}

<div>
	<List type="etunimet" emptyMessage="Ei nimiä" items={firstNames} onRemoveItem={RemoveFirstName} />
	<List type="sukunimet" emptyMessage="Ei nimiä" items={lastNames} onRemoveItem={RemoveLastName} />
</div>

<div>
	<NameInput type="etunimi" bind:input={firstNameInput} onclick={AddFirstName} />
	<br />
	<NameInput type="sukunimi" bind:input={lastNameInput} onclick={AddLastName} />
</div>

<style>
	div {
		background-color: rgba(46, 124, 63, 0.377);
		width: fit-content;
		padding: 1rem;
		margin: 0.5rem;
		border-radius: 1em;
	}
	.error {
		background-color: red;
		width: fit-content;
		min-width: 5em;
		padding: 1rem;
		margin: 0.5rem;
		border-radius: 0.5em;
	}
</style>
