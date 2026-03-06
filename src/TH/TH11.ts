type Auto = {
  merkki: string;
  kaynnistyy: boolean;
  ovienMaara?: number;
};

type Mopo = {
  merkki: string;
  kaynnistyy: boolean;
};

type Menopeli = Mopo & Auto;

let v1: Menopeli = {
  merkki: 'Trabant',
  kaynnistyy: true,
  ovienMaara: 4,
};

let v2: Menopeli = {
  merkki: 'Raisu',
  kaynnistyy: false,
};

function aja(menopeli: Menopeli) {
  if (!menopeli.kaynnistyy) {
    console.log(`${menopeli.merkki} ei käynnisty`);
  } else {
    if (menopeli.ovienMaara != undefined) {
      for (let i = 0; i < menopeli.ovienMaara; i++) {
        console.log('Slap');
      }
    }

    console.log(`${menopeli.merkki} sanoo wroom`);
  }
}

aja(v1);
aja(v2);
