<script lang="ts">
	interface Props {
		Name: string;
		Value?: string;
		Validator?: (x: string) => boolean;
		ValidationErrorMessage?: string;
		Valid?: boolean;
	}

	let firstUnfocus: boolean = $state(false);

	const id = $props.id();
	let {
		Name,
		Value = $bindable(),
		Validator,
		ValidationErrorMessage,
		Valid = $bindable()
	}: Props = $props();

	function Validate(): void {
		if (Validator != undefined) {
			if (Value == undefined) {
				Valid = false;
			} else {
				try {
					Valid = Validator(Value);
				} catch (error) {
					console.log(error);
					Valid = false;
				}
			}
		}
	}

	function onblur(): void {
		Validate();
		if (!firstUnfocus) {
			firstUnfocus = true;
		}
	}

	Valid = false;
</script>

<label for={`${Name}-` + id}>{Name}</label>
<input id={`${Name}-` + id} type="text" bind:value={Value} {onblur} />

{#if !Valid && firstUnfocus}
	<p class="error">{ValidationErrorMessage}</p>
{/if}

<style>
	.error {
		color: red;
		margin: 0;
	}
</style>
