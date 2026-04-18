import { writable } from 'svelte/store';

interface Laskuri {
	arvo: number;
}

const laskuri = writable<Laskuri>({ arvo: 0 });

export default laskuri;
