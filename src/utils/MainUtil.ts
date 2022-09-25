const generateRandomNumber = () => {
  let arr: any = [];
  while (arr.length < 12) {
    let r = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(r) === -1) {
      let cardObj = {num: r, pair: false};
      arr.push(cardObj);
      arr.push(cardObj);
    }
  }
  return arr;
};

export const shuffleCards = () => {
  return generateRandomNumber().sort(() => Math.random() - 0.5);
};

export const isCardPaired = (cardsObj: any): Boolean => {
  if (cardsObj[0].item.num === cardsObj[1].item.num) {
    return true;
  } else {
    return false;
  }
};

export const isCompleted = (cards: any): Boolean => {
  return cards.some(card => card.pair === false);
};
