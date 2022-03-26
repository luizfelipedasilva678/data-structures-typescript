import Dictionary from '../dictionary/dictionary';
import {
  breadthFirstSearch,
  breadthFirstSearchV2,
  depthFirstSearch,
} from '../utils';
import Stack from '../stack/stack-array';

class Graph {
  constructor(
    public isDirected = false,
    public vertices: Array<string> = [],
    public adjList = new Dictionary(),
  ) {}

  addVertex(v: string) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  addEdge(v: any, w: any) {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }

    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }

    this.adjList.get(v).push(w);

    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} ->`;
      const neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += ` ${neighbors[j]} `;
      }
      s += '\n';
    }
    return s;
  }
}

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('B', 'I');
graph.addEdge('A', 'I');

const printVertex = (value: any) => console.log(`Viseted vertex: ${value}`);

const shortestPathA = breadthFirstSearchV2(graph, myVertices[0]);
console.log(shortestPathA);
console.log(graph.toString());

const fromVertex = myVertices[0];
for (let i = 1; i < myVertices.length; i++) {
  const toVertex = myVertices[i];
  const path = new Stack<any>();
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  let s = path.pop();
  while (!path.isEmpty()) {
    s += ` - ${path.pop()}`;
  }
  console.log(s);
}

console.log('-------------------------');

console.log(depthFirstSearch(graph, printVertex));
