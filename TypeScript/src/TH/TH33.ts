interface Country {
  flags: Flags;
  name: Name;
  cca2: string;
  capital: string[];
  population: number;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Name {
  common: string;
}

async function haeMaa(maa: string): Promise<Country> {
  if (maa.length != 2) {
    throw new Error('Väärä input');
  }

  const countries = await GetAllCountries();

  if (countries == undefined) {
    throw new Error('Maita ei saatu');
  }

  const contry = countries.filter((x) => x.cca2 == maa)[0];

  if (contry == undefined) {
    throw new Error('Maata ei löydetty');
  }

  return contry;
}

async function GetAllCountries(): Promise<Country[]> {
  const response: Response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,cca2,flags,population',
  );

  const data: Country[] = await response.json();

  return data;
}

const maa = await haeMaa('FI');

console.log(maa.name.common);
console.log(maa.population);
console.log(maa.capital.join(' / '));
console.log(maa.flags.png);
