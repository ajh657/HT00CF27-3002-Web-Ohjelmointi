<script lang="ts">
	import ComboBoxWithPrice from './ComboBoxWithPrice.svelte';
	import type { PricedItem } from './PricedItem';
	import Section from './Section.svelte';
	import RadioSelectorWithPrice from './RadioSelectorWithPrice.svelte';
	import SelectorWithPrice from './SelectorWithPrice.svelte';
	import LabeledTextInput from './LabeledTextInput.svelte';
	import { OrdererInfo } from './OrdererInfo';

	const orderer: OrdererInfo = $state(new OrdererInfo());

	const SizeOptions: PricedItem[] = [
		{ name: 'Pieni', value: 8 },
		{ name: 'Normaali', value: 10 },
		{ name: 'Suuri', value: 12 },
		{ name: 'Mega', value: 14 }
	];
	let selectedSize: number = $state(0);

	const BaseOptions: PricedItem[] = [
		{ name: 'Normaali', value: 0 },
		{ name: 'Ruis', value: 1 },
		{ name: 'Gluteeniton', value: 2 }
	];

	let selectedBase: number = $state(0);
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

	let additionalInfo: string = $state('');

	let validationStates = $state({
		name: false,
		phone: false,
		email: false
	});

	let valid = $derived(validationStates.name && validationStates.phone && validationStates.phone);

	let price = $derived(
		SizeOptions[selectedSize].value +
			BaseOptions[selectedBase].value +
			selectedToppings.length * 0.5
	);

	function LogOrder(): void {
		console.log(`Nimi: ${orderer.Name}`);
		console.log(`Puhelin: ${orderer.Phone}`);
		console.log(`Sähköposti: ${orderer.Email}`);
		console.log(`Koko: ${SizeOptions[selectedSize].name}`);
		console.log(`Pohja: ${BaseOptions[selectedBase].name}`);
		console.log(`Täytteet: \n${selectedToppings.join('\n')}`);
		console.log(`Lisätiedot: \n${additionalInfo}`);
	}

	$inspect(validationStates);
</script>

<div class="FormBody">
	<Section SectionTitle="Tiedot">
		{#snippet SectionBody()}
			<LabeledTextInput
				Name="Name"
				bind:Value={orderer.Name}
				Validator={(x): boolean => x.length != 0}
				ValidationErrorMessage="Nimi ei saa olla tyhjä"
				bind:Valid={validationStates.name}
			/>
			<LabeledTextInput
				Name="Puhelin"
				bind:Value={orderer.Phone}
				Validator={(x): boolean =>
					x.length >= 3 && x.length <= 16 && (x[0] == '0' || x[0] == '+') && !/[a-zA-Z]/g.test(x)}
				ValidationErrorMessage="Puhelinnumerossa saa olla vain + tai numeroita. Pituus pitää olla vähintään 3 ja 16 pitkä"
				bind:Valid={validationStates.phone}
			/>
			<LabeledTextInput
				Name="Sähköposti"
				bind:Value={orderer.Email}
				Validator={(x): boolean => x.length != 0 && /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g.test(x)}
				ValidationErrorMessage="Sähköpostin pitää olla muodossa x@x.x"
				bind:Valid={validationStates.email}
			/>
		{/snippet}
	</Section>
	<Section SectionTitle="Tyyppi">
		{#snippet SectionBody()}
			<ComboBoxWithPrice Items={SizeOptions} bind:SelectedIndex={selectedSize} />
			<br />
			<RadioSelectorWithPrice Name="Base" Items={BaseOptions} bind:SelectedIndex={selectedBase} />
		{/snippet}
	</Section>

	<Section SectionTitle="Täytteet">
		{#snippet SectionBody()}
			<SelectorWithPrice Name="Toppings" Items={Toppings} bind:Selected={selectedToppings} />
		{/snippet}
	</Section>

	<Section SectionTitle="Tilauksen lisätiedot">
		{#snippet SectionBody()}
			<textarea bind:value={additionalInfo}></textarea>
		{/snippet}
	</Section>

	<h4>Hinta {price}€</h4>
	<button onclick={LogOrder} disabled={!valid}>Tilaa</button>
</div>

<style>
	div,
	div > * {
		margin: 1rem;
	}

	div {
		border: 0.25rem solid;
		border-color: orangered;
	}

	div.FormBody {
		margin: unset;
		justify-self: center;
		width: 80%;
	}
</style>
