const PII = 3.14;

const ympyranKeha = (halkaisija) => {
  if (typeof halkaisija !== 'number' || isNaN(halkaisija)) {
    throw Error('Halkaisijan tulee olla numero!');
  }
  return PII * halkaisija;
};

function pintaAla(halkaisija) {
  if (typeof halkaisija !== 'number' || isNaN(halkaisija)) {
    throw Error('Halkaisijan tulee olla numero!');
  }
  return halkaisija ** 2 * PII;
}

// module.exports = ympyranKeha;
//tai
// exports.ympyranKeha = ympyranKeha;
// tai
module.exports = {
  Keha: ympyranKeha,
  pintaAla: pintaAla,
};
