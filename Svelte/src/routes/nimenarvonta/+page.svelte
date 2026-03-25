<script lang="ts">
	let curFirstName: string = $state('');
	let curLastName: string = $state('');
	let curName: string = $derived(`${curFirstName} ${curLastName}`);
	let firstNames: string[] = $state(['Jarkko', 'Enari', 'Pekka', 'Sami']);
	let lastNames: string[] = $state(['Auvinen', 'Hulkkonen', 'Höylä']);

	let firstNameInput = $state('');
	let lastNameInput = $state('');

	function onLoad(): void {
		PickFirstName();
		PickLastName();
	}

	function PickFirstName(): void {
		curFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
	}
	function PickLastName(): void {
		curLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
	}

	function AddFirstName(): void {
		if (firstNameInput != '') {
			firstNames.push(firstNameInput);
			firstNameInput = '';
		}
	}
	function AddLastName(): void {
		if (lastNameInput != '') {
			lastNames.push(lastNameInput);
			lastNameInput = '';
		}
	}

	function RemoveFirstName(name: string): undefined {
		firstNames = firstNames.filter((x) => x != name);
	}

	function RemoveLastName(name: string): undefined {
		lastNames = lastNames.filter((x) => x != name);
	}

	onLoad();
</script>

<div>
	<p>Tämän hetkinen nimi</p>

	<h1>
		{curName} ({#if curFirstName != ''}{curName.split(' ')[0][0].toUpperCase()}.{/if}
		{#if curLastName != ''}{curName.split(' ')[1][0].toUpperCase()}{/if})
	</h1>
	<br />
	<button onclick={PickFirstName}>Arvo Etunimi</button>
	<button onclick={PickLastName}>Arvo Sukunimi</button>
</div>
<hr />

<div>
	<p>Kaikki etunnimet:</p>
	<ul>
		{#each firstNames as name (name)}
			<li>
				{name}
				<button onclick={(): undefined => RemoveFirstName(name)} type="button">Poista</button>
			</li>
		{:else}
			<p>Ei nimiä</p>
		{/each}
	</ul>
	<p>Kaikki sukunnimet:</p>
	<ul>
		{#each lastNames as name (name)}
			<li>
				{name}
				<button onclick={(): undefined => RemoveLastName(name)} type="button">Poista</button>
			</li>
		{:else}
			<p>Ei nimiä</p>
		{/each}
	</ul>
</div>
<hr />

<div>
	<input type="text" placeholder="Anna uusi etunimi" bind:value={firstNameInput} /><button
		onclick={AddFirstName}
		disabled={!firstNameInput}
		type="button">Etunimi</button
	>
	<br />
	<input type="text" placeholder="Anna uusi sukunimi" bind:value={lastNameInput} /><button
		onclick={AddLastName}
		disabled={!lastNameInput}
		type="button">Sukunimi</button
	>
</div>
