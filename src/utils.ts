/* eslint-disable no-param-reassign */
import Queue from './queue/queue';

export function defaultEquals<T>(a: T, b: T) {
  return a === b;
}

export function defaultToString(item: any) {
  if (item === null) {
    return 'NULL';
  }

  if (item === undefined) {
    return 'UNDEFINED';
  }

  if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }

  return item.toString();
}

export function swap(array: any, a: any, b: any) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

export function reverseCompare(compareFn: any) {
  return (a: any, b: any) => compareFn(b, a);
}

export const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

export const initializerColor = (vertices: any) => {
  const color: any = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

export const breadthFirstSearch = (
  graph: any,
  startVertex: any,
  callback: any,
) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializerColor(vertices);
  const queue = new Queue<any>();
  queue.enqueue(startVertex);

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
    if (callback) {
      callback(u);
    }
  }
};

export const breadthFirstSearchV2 = (graph: any, startVertex: any) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializerColor(vertices);
  const queue = new Queue<any>();
  const distances: any = {};
  const predecessors: any = {};
  queue.enqueue(startVertex);

  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }

  return {
    distances,
    predecessors,
  };
};

export const depthFirstSearch = (graph: any, callback: any) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializerColor(vertices);

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
};

export const depthFirstSearchVisit = (
  u: any,
  color: any,
  adjList: any,
  callback: any,
) => {
  color[u] = Colors.GREY;

  if (callback) {
    callback(u);
  }

  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback);
    }
    color[u] = Colors.BLACK;
  }
};

export const DFS = (graph: any) => {
  const vertices: any = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializerColor(vertices);

  const d: any = {};
  const f: any = {};
  const p: any = {};

  const time = { count: 0 };

  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }

  return {
    discovery: d,
    finished: f,
    predecessors: p,
  };
};

const DFSVisit = (
  u: any,
  color: any,
  d: any,
  f: any,
  p: any,
  time: any,
  adjList: any,
) => {
  color[u] = Colors.GREY;
  d[u] = ++time.count;
  const neighbors = adjList.get(u);

  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      p[w] = u;
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }

  color[u] = Colors.BLACK;
  f[u] = ++time.count;
};

export const graphMatrix = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];
