<script lang="ts">
	let {
		type,
		input = $bindable(''),
		onclick
	}: { type: string; input: string; onclick: () => void } = $props();
</script>

<input type="text" placeholder="Anna uusi {type}" bind:value={input} />
<button {onclick} disabled={!input} type="button">Lisää {type}</button>
