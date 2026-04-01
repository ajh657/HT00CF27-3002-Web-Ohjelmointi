<script lang="ts">
	let {
		text,
		onClick,
		disabled = false
	}: { text: string; onClick: () => void; disabled?: boolean } = $props();
</script>

<button {disabled} onclick={onClick}>{text}</button>

<style>
	button {
		background-color: rgb(102, 22, 22);
		color: white;
	}
</style>
