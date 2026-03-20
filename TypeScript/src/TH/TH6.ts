interface Kaara {
  merkki: string;
  kaynnistyy: boolean;
  ovienMaara: number;
  kaasuta: (lkm: number) => void;
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
};

auto.kaasuta(15);
