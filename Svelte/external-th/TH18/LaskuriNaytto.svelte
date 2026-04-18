<script lang="ts">
	import { onDestroy } from 'svelte';
	import laskuri from './laskuri.svelte';

	let arvo: number = $state(0);

	const laskuriUnSub = laskuri.subscribe((laskuri) => (arvo = laskuri.arvo));

	onDestroy(() => {
		if (laskuriUnSub) {
			laskuriUnSub();
		}
	});
</script>

<h1>Laskurin arvo:{arvo}</h1>
