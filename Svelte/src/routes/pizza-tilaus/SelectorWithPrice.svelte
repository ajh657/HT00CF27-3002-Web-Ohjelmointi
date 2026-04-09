<script lang="ts" generics="T extends number">
	interface Props {
		Items: Record<string, T>;
		Selected: T[];
	}

	let { Items, Selected = $bindable() }: Props = $props();
</script>
