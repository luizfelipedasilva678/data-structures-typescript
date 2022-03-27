/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
const INF = Number.MAX_SAFE_INTEGER;

const find = (i: any, parent: any) => {
  while (parent[i]) {
    i = parent[i];
  }
  return i;
};

export const union = (i: any, j: any, parent: any) => {
  if (i !== j) {
    parent[j] = i;
    return true;
  }
  return false;
};

const kruskal = (graph: any) => {
  const { length } = graph;
  const parent: any = [];
  let ne = 0;
  let a;
  let b;
  let u;
  let v;
  const cost = initializerCost(graph);
  while (ne < length - 1) {
    for (let i = 0, min = INF; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (cost[i][j] < min) {
          min = cost[i][j];
          a = u = i;
          b = v = j;
        }
      }
    }

    u = find(u, parent);
    v = find(v, parent);
    if (union(u, v, parent)) {
      ne++;
    }
    cost[a][b] = cost[a][b] = INF;
  }

  return parent;
};
