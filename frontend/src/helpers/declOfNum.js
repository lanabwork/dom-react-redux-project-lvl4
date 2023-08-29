const declOfNum = (number, words) =>
  // eslint-disable-next-line max-len,implicit-arrow-linebreak
  words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
export default declOfNum;
