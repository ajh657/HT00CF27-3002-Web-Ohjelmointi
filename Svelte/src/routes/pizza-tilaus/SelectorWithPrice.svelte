<script lang="ts">
	interface Props {
		Name: string;
		Items: string[];
		Selected: string[];
	}

	let { Name, Items, Selected = $bindable() }: Props = $props();
</script>

{#each Items as item, index (item)}
	<label for="{item}-radio">
		<input
			type="checkbox"
			id="{item}-radio"
			name={Name}
			value={item}
			bind:group={Selected}
			checked={index == 0}
		/>
		{item}</label
	>
{/each}
