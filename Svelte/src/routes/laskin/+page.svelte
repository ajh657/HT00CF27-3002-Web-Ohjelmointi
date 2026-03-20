<script lang="ts">
	import { setContext } from 'svelte';
	let x: number = $state(0);
	let y: number = $state(0);
	setContext('x', () => x);
	setContext('y', () => y);
	let tulo: number = $derived(x * y);

	let laskut: string[] = $state([]);

	function vieTaulukkoon(): void {
		laskut.push(`${x} * ${y} = ${tulo}`);
		x = 0;
		y = 0;
	}
</script>

<h1>{x} * {y} = {tulo}</h1>

<button onclick={(): number => x++}> X++ </button>
<button onclick={(): number => x--}> X-- </button>
<button onclick={(): number => y++}> Y++ </button>
<button onclick={(): number => y--}> Y-- </button>
<button onclick={(): void => vieTaulukkoon()}> Ok </button>

<p>{laskut.join(' / ')}</p>

<style>
	p,
	h1 {
		font-family: 'Courier New', Courier, monospace;
	}
</style>
