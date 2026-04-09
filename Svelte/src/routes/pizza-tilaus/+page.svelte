<script lang="ts">
	import Section from './Section.svelte';
	import SelectorWithPrice from './SelectorWithPrice.svelte';
	const SizeOptions: Record<string, number> = {
		Pieni: 8,
		Normaali: 10,
		Suuri: 12,
		Mega: 14
	};
	let selectedSize: number = $state(SizeOptions[0]);

	const BaseOptions: Record<string, number> = {
		Normaali: 0,
		Ruis: 1,
		Gluteeniton: 2
	};
	let selectedBase: number = $state(BaseOptions[0]);
	const Toppings = [
		'Kinkku',
		'Tonnikala',
		'Salami',
		'Kebab',
		'Ananas',
		'Tomaatti',
		'Oliivi',
		'Herkkusieni',
		'Paprika',
		'Sipuli'
	];
	let selectedToppings: string[] = $state([]);
</script>

<div class="FormBody">
	<Section SectionTitle="Tiedot">
		{#snippet SectionBody()}
			<label for="name">Nimi</label>
			<input id="name" type="text" />
			<label for="phone">Puhelin</label>
			<input id="phone" type="text" />
			<label for="email">Sähköposti</label>
			<input id="email" type="text" />
		{/snippet}
	</Section>
	<Section SectionTitle="Tyyppi">
		{#snippet SectionBody()}
			<SelectorWithPrice Items></SelectorWithPrice>
		{/snippet}
	</Section>
</div>

<style>
	div {
		margin: 1rem;
		border: 0.25rem solid;
		border-color: orangered;
	}

	div.FormBody {
		margin: unset;
		justify-self: center;
		width: 80%;
	}
</style>
