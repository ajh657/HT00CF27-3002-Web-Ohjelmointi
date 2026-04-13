<script lang="ts">
	import type { PricedItem } from './PricedItem';

	interface Props {
		Items: PricedItem[];
		SelectedIndex: number;
	}

	let { Items, SelectedIndex: Selected = $bindable() }: Props = $props();
</script>

<select bind:value={Selected}>
	{#each Items as item, index (item.name)}
		<option value={index}
			>{item.name}
			{#if index != 0}+{item.value - Items[0].value}€{/if}</option
		>
	{/each}
</select>

<style>
	select {
		max-width: fit-content;
	}
</style>
