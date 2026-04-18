export const laskuri = $state({
	arvo: 0
});

export function add(): void {
	laskuri.arvo++;
}

export function remove(): void {
	laskuri.arvo--;
}

export function reset(): void {
	laskuri.arvo = 0;
}
