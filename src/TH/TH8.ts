type RatinSijainti = 'Vasen' | 'Oikea';
type KatsastusTila = 'hyväksytty' | 'hylätty';
type Katsastus = [Date, KatsastusTila, string];

interface Kaara {
  merkki: string;
  kaynnistyy: boolean;
  ovienMaara: number;
  kaasuta: (lkm: number) => void;
  ratinSijainti: RatinSijainti;
  katsastukset: Katsastus[];
}

function tulostaKatsastukset(auto: Kaara): void {
  auto.katsastukset.forEach((element) => {
    if (element[1] == 'hylätty') {
      console.log(
        `Katsastus hylätty ${element[0].getMonth()}/${element[0].getFullYear()} / ${element[2]}`,
      );
    }
    if (element[1] == 'hyväksytty') {
      console.log(
        `${element[2]} suoritti katsastuksen ${element[0].getMonth()}/${element[0].getFullYear()}`,
      );
    }
  });
}

const auto: Kaara = {
  merkki: 'Trabant',
  kaynnistyy: true,
  ovienMaara: 4,
  kaasuta: function (lkm: number) {
    for (let i = 0; i < lkm; i++) {
      console.log('Wroom');
    }
  },
  ratinSijainti: 'Vasen',
  katsastukset: [
    [new Date(2025, 2, 20), 'hylätty', 'Jyväskylän katsastus'],
    [new Date(2022, 3, 15), 'hyväksytty', 'Keski-Suomen autokatsastus'],
  ],
};

tulostaKatsastukset(auto);
