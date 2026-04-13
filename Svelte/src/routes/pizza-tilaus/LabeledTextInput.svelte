<script lang="ts">
	interface Props {
		Name: string;
		Value?: string;
	}

	const id = $props.id();
	let { Name, Value = $bindable() }: Props = $props();
</script>

<label for={`${Name}-` + id}>{Name}</label>
<input id={`${Name}-` + id} type="text" bind:value={Value} />
