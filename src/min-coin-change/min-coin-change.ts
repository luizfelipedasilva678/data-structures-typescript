function minCoinChange(coins: any, amount: any) {
  const cache: any = [];
  const makeChange: any = (value: any) => {
    if (!value) {
      return [];
    }

    if (cache[value]) {
      return cache[value];
    }

    let min = [];
    let newMin;
    let newAmount;

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = value - coin;

      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }

      if (
        (newAmount >= 0 && newMin.length < min.length - 1) ||
        (!min.length && (newMin.length || !newAmount))
      ) {
        min = [coin].concat(newMin);
        console.log('new Min', `${+min} for ${amount}`);
      }
    }
    // eslint-disable-next-line no-return-assign
    return (cache[value] = min);
  };

  return makeChange(amount);
}
