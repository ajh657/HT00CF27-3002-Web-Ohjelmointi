<script lang="ts">
	import { add, remove, reset } from './laskuri.svelte';
</script>

<button onclick={add}>Lisää</button>
<button onclick={remove}>Poista</button>
<button onclick={reset}>Nollaa</button>
