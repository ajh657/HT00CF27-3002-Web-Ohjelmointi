type RatinSijainti = 'Vasen' | 'Oikea';
type KatsastusTila = 'hyväksytty' | 'hylätty';

interface Katsastus {
  aika: Date;
  tila: KatsastusTila;
  katsastaja: string;
}

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
    if (element.tila == 'hylätty') {
      console.log(
        `Katsastus hylätty ${element.aika.getMonth()}/${element.aika.getFullYear()} / ${element.katsastaja}`,
      );
    }
    if (element.tila == 'hyväksytty') {
      console.log(
        `${element.katsastaja} suoritti katsastuksen ${element.aika.getMonth()}/${element.aika.getFullYear()}`,
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
    {
      aika: new Date(2022, 3, 15),
      tila: 'hylätty',
      katsastaja: 'Keski-Suomen autokatsastus',
    },
    {
      aika: new Date(2025, 2, 20),
      tila: 'hyväksytty',
      katsastaja: 'Jyväskylän katsastus',
    },
  ],
};

tulostaKatsastukset(auto);
