/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import {
  Compare,
  defaultCompare,
} from '../sorted-linked-list/sorted-linked-list';

import { Node } from './node';

export default class BinarySearchTree {
  constructor(public compareFn = defaultCompare, public root: any = null) {}

  insert(key: any) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node: any, key: any) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new Node(key);
    } else {
      this.insertNode(node.right, key);
    }
  }

  inOrderTraverse(callback: any) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node: any, callback: any): void {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback: any) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node: any, callback: any) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback: any) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node: any, callback: any) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  min() {
    this.minNode(this.root);
  }

  minNode(node: any) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }

    return current;
  }

  max() {
    this.minNode(this.root);
  }

  maxNode(node: any) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }

    return current;
  }

  search(key: any) {
    return this.searchNode(this.root, key);
  }

  searchNode(node: any, key: any): any {
    if (node == null) {
      return false;
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    }

    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    }

    return true;
  }

  remove(key: any) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node: any, key: any) {
    if (node == null) {
      return null;
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    if (node.left == null && node.right == null) {
      node = null;
      return node;
    }

    if (node.left == null) {
      node = node.right;
      return node;
    }

    if (node.right == null) {
      node = node.left;
      return node;
    }

    const aux = this.minNode(node.right);
    node.key = aux.key;
    node.right = this.removeNode(node.right, aux.key);
    return node;
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(15);
tree.insert(6);
const printfNode = (value: any) => console.log(value);
tree.inOrderTraverse(printfNode);
console.log('-----');
tree.preOrderTraverse(printfNode);
console.log('-----');
tree.postOrderTraverse(printfNode);
console.log('-----');
console.log(tree.min());
console.log(tree.search(3));

tree.remove(3);
console.log(tree.search(3));
