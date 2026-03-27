<script lang="ts">
	let {
		type,
		items,
		emptyMessage,
		onRemoveItem
	}: {
		type: string;
		items: string[];
		emptyMessage: string;
		onRemoveItem: (name: string) => void;
	} = $props();
</script>

<p>Kaikki {type}:</p>
<ul>
	{#each items as item (item)}
		<li>
			{name}
			<button onclick={(): void => onRemoveItem(item)} type="button">Poista</button>
		</li>
	{:else}
		<p>{emptyMessage}</p>
	{/each}
</ul>
