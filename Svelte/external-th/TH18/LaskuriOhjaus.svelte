<script lang="ts">
	import { onDestroy } from 'svelte';
	import laskuri from './laskuri.svelte';

	let vanhaArvo: number = $state(0);

	const laskuriUnSub = laskuri.subscribe((laskuri) => (vanhaArvo = laskuri.arvo));

	function add(): void {
		laskuri.set({ arvo: vanhaArvo + 1 });
	}

	function remove(): void {
		laskuri.set({ arvo: vanhaArvo - 1 });
	}

	function reset(): void {
		laskuri.set({ arvo: 0 });
	}

	onDestroy(() => {
		if (laskuriUnSub) {
			laskuriUnSub();
		}
	});
</script>

<button onclick={add}>Lisää</button>
<button onclick={remove}>Poista</button>
<button onclick={reset}>Nollaa</button>
