const vakiot = require('./vakijot.cjs');

const ympyranKeha = (halkaisija) => {
  if (typeof halkaisija !== 'number' || isNaN(halkaisija)) {
    throw Error('Halkaisijan tulee olla numero!');
  }
  return vakiot.PII * halkaisija;
};

function pintaAla(halkaisija) {
  if (typeof halkaisija !== 'number' || isNaN(halkaisija)) {
    throw Error('Halkaisijan tulee olla numero!');
  }
  return halkaisija ** 2 * vakiot.PII;
}

// module.exports = ympyranKeha;
//tai
// exports.ympyranKeha = ympyranKeha;
// tai
module.exports = {
  Keha: ympyranKeha,
  pintaAla: pintaAla,
  putoamiskiihtyvyys: vakiot.putoamiskiihtyvyys,
};
