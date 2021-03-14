exports.addTest = numero => {
  let result = [];
  for (let j = 1; j <= numero; j++) {
    if (nroPrimo(j)) {
      result.push(j);
    }
  }
  result.sort((a, b) => (a > b ? -1 : 1));
  return result;
};

const nroPrimo = nro => {
  for (let i = 2; i < nro; i++) {
    if (nro % i === 0) {
      return false;
    }
  }
  return nro !== 1;
};
