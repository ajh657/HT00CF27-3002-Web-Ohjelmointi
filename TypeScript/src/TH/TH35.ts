interface IPData {
  ip: string;
  country: string;
}

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

async function haeIPmaakoodi(): Promise<IPData> {
  const responce: Response = await fetch('https://api.country.is/');
  const data: IPData = await responce.json();
  return data;
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

const maakoodi = await haeIPmaakoodi();

const maa = await haeMaa(maakoodi.country);

console.log(maa.name.common);
