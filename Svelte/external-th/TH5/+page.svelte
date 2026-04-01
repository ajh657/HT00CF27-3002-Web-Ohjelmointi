<script lang="ts">
	let generoitu: boolean = $state(false);
	let input: string = $state('');
	let AKNimi: string = $derived(`${input} Kela`);

	function tyhjenna(): void {
		generoitu = false;
		input = '';
		AKNimi = '';
	}
</script>

<h1>Anssi Kela -nimigeneraattori</h1>

<input type="text" bind:value={input} />
<button
	onclick={(): void => {
		generoitu = true;
	}}
	disabled={generoitu}
>
	Muodosta nimesi
</button>

<button onclick={(): void => tyhjenna()}>Tyhjennä</button>

{#if generoitu}
	<p>Anssi Kela -nimesi on "{AKNimi}"</p>
{/if}

<style>
	h1 {
		color: red;
	}

	button {
		margin-left: 0.5em;
		padding-right: 0.5em;
	}
</style>
