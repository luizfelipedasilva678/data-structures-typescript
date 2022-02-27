const setA = new Set<number>();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set<number>();
setA.add(2);
setA.add(3);
setA.add(4);

const union = (set1: Set<number>, set2: Set<number>) => {
  const unionAb = new Set();
  set1.forEach((value) => unionAb.add(value));
  set2.forEach((value) => unionAb.add(value));
  return unionAb;
};

const intersection = (set1: Set<number>, set2: Set<number>) => {
  const intersectionSet = new Set();
  set1.forEach((value) => {
    if (set2.has(value)) {
      intersectionSet.add(value);
    }
  });
  return intersectionSet;
};

const difference = (set1: Set<number>, set2: Set<number>) => {
  const differenceSet = new Set();
  set1.forEach((value) => {
    if (!set2.has(value)) {
      differenceSet.add(value);
    }
  });
  return differenceSet;
};
