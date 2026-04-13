<script lang="ts">
	import type { PricedItem } from './PricedItem';

	interface Props {
		Name: string;
		Items: PricedItem[];
		SelectedIndex: number;
	}

	let { Name, Items, SelectedIndex: Selected = $bindable() }: Props = $props();
</script>

{#each Items as item, index (item.name)}
	<label for="{item.name}-radio">
		<input
			type="radio"
			name={Name}
			id="{item.name}-radio"
			value={index}
			bind:group={Selected}
			checked={index == 0}
		/>
		{item.name}
		{#if index != 0}
			+{item.value - Items[0].value}€
		{/if}</label
	>
{/each}
