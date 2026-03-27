<script lang="ts">
	let {
		firstNames,
		lastNames
	}: {
		firstNames: string[];
		lastNames: string[];
	} = $props();

	function onComponentLoad(): void {
		PickFirstName();
		PickLastName();
	}
	let curFirstName: string = $state('');
	let curLastName: string = $state('');

	let curName: string = $derived(`${curFirstName} ${curLastName}`);

	function PickFirstName(): void {
		curFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
	}

	function PickLastName(): void {
		curLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
	}

	onComponentLoad();
</script>

<p>Tämän hetkinen nimi</p>

<h1>
	{curName} ({#if curFirstName != ''}{curName.split(' ')[0][0].toUpperCase()}.{/if}
	{#if curLastName != ''}{curName.split(' ')[1][0].toUpperCase()}{/if})
</h1>
<br />
<button onclick={PickFirstName}>Arvo Etunimi</button>
<button onclick={PickLastName}>Arvo Sukunimi</button>

<style>
	h1 {
		font-family:
			'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
			sans-serif;
	}
</style>
