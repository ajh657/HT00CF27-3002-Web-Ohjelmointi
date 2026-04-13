interface IPData {
  ip: string;
  country: string;
}

async function haeIPmaakoodi(): Promise<IPData> {
  const responce: Response = await fetch('https://api.country.is/');
  const data: IPData = await responce.json();
  return data;
}

console.log((await haeIPmaakoodi()).country);
