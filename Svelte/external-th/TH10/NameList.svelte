<script lang="ts">
	import CustomButton from './CustomButton.svelte';

	let { names = $bindable([]), onClearClick }: { names: string[]; onClearClick: () => void } =
		$props();

	function removeName(name: string): void {
		names = names.filter((x) => x != name);
		console.log('test');
	}
</script>

<ul>
	{#each names as name (name)}
		<li onclick={(): void => removeName(name)}>{name}</li>
	{/each}
</ul>
<CustomButton text="Tyhjennä" onClick={onClearClick} />
