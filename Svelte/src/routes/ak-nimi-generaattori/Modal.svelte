<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		ModalOpen: boolean;
		ModalHeader?: Snippet;
		ModalChildren: Snippet;
		ModalFooter?: Snippet;
	}

	let { ModalOpen = $bindable(false), ModalHeader, ModalChildren, ModalFooter }: Props = $props();

	function onclick(): void {
		ModalOpen = false;
	}

	$inspect(ModalOpen);
</script>

{#if ModalOpen}
	<div class="backdrop" {onclick}></div>

	<div class="modal">
		<header>
			{#if ModalHeader}
				{@render ModalHeader()}
			{/if}
		</header>

		<div>
			{@render ModalChildren()}
		</div>
		<hr />
		<footer>
			<div>
				{#if ModalFooter}
					{@render ModalFooter()}
				{:else}
					<button {onclick}>Sulje</button>
				{/if}
			</div>
		</footer>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.75);
		z-index: 10;
	}

	.modal {
		padding: 1rem;
		position: fixed;
		top: 10vh;
		left: 10vw;
		width: 80%;
		max-height: 80vh;
		background: white;
		border-radius: 5px;
		z-index: 100;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}
</style>
