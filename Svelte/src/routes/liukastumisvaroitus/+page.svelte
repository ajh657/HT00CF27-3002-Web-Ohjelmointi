<script lang="ts">
	import { onMount } from 'svelte';

	interface Varoitus {
		id: number;
		city: string;
		created_at: string;
		updated_at: string;
	}

	onMount(async () => {
		const response: Response = fetch(
			'https://liukastumisvaroitus-api.beze.io/api/v1/warnings?filter=city:Jyväskylä'
		);
	});
</script>
