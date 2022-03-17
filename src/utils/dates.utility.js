export const converMonth2Digits = (month) => {
  if (month.length < 2) {
    return `0${month}`;
  }
  else {
    return `${month}`;
  }
};

export const getDate = () => {
  const arrDate = new Date().toLocaleDateString().split("/").reverse();
  arrDate[1] = converMonth2Digits(arrDate[1]);
  return arrDate.join("-");
};