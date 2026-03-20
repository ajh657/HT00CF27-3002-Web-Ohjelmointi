<script lang="ts">
	let x: number = $state(0);
	let y: number = $state(0);

	function lisaaX(): void {
		x++;
	}
	function lisaaY(): void {
		y++;
	}
</script>

<h1>{x} * {y} = {x * y}</h1>

<button onclick={lisaaX}> X++ </button>
<button onclick={lisaaY}> X++ </button>
