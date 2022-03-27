import { graphMatrix } from '../utils';

const INF = Number.MAX_SAFE_INTEGER;

const minKey = (graph: any, key: any, visited: any) => {
  let min = INF;
  let minIndex = 0;
  for (let v = 0; v < graph.length; v++) {
    if (visited[v] === false && key[v] < min) {
      min = key[v];
      minIndex = v;
    }
  }
  return minIndex;
};

const prim = (graph: any) => {
  const parent: any = [];
  const key: any = [];
  const visited: any = [];
  const { length } = graph;

  for (let i = 0; i < length; i++) {
    key[i] = INF;
    visited[i] = false;
  }

  key[0] = 0;
  parent[0] = -1;
  for (let i = 0; i < length - 1; i++) {
    const u = minKey(graph, key, visited);
    visited[u] = true;
    for (let v = 0; v < length; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }
  return parent;
};

console.log(prim(graphMatrix));
