<script lang="ts">
	import CustomButton from './CustomButton.svelte';

	let { names = $bindable([]), onClearClick }: { names: string[]; onClearClick: () => void } =
		$props();
</script>

<ul>
	{#each names as name (name)}
		<li>{name}</li>
	{/each}
</ul>
<CustomButton text="Tyhjennä" onClick={onClearClick} />
