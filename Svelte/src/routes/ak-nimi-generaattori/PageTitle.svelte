<script lang="ts">
	let { title }: { title: string } = $props();
</script>

<h1>{title}</h1>

<style>
	h1 {
		color: red;
		background-color: black;
		border-radius: 1em;
	}
</style>
