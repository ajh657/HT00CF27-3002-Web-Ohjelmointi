function saatila(l: number): string {
  return l === 0 ? 'suojakeli' : l < 0 ? 'pakkasta' : 'lämpöasteita';
}

const paivat: number[] = [3.3, 0, 2.1, -3.3, -5.8, 0, 4.1];

for (let i = 0; i < paivat.length; i++) {
  const lampotila = paivat[i];
  if (lampotila != undefined) {
    console.log(
      `Päivä ${i + 1}, lämpötila ${lampotila} eli ${saatila(lampotila)}`,
    );
  }
}
