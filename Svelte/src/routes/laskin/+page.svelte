<script lang="ts">
	import { setContext } from 'svelte';
	let x: number = $state(0);
	let y: number = $state(0);
	setContext('x', () => x);
	setContext('y', () => y);
	let tulo = $derived(x * y);
</script>

<h1>{x} * {y} = {tulo}</h1>

<button onclick={() => x++}> X++ </button>
<button onclick={() => x--}> X-- </button>
<button onclick={() => y++}> Y++ </button>
<button onclick={() => y--}> Y-- </button>
