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
