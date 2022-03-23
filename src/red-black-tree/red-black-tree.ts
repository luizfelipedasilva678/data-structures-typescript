/* eslint-disable no-empty */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-param-reassign */

/* eslint-disable class-methods-use-this */

import BinarySearchTree from '../tree/binary-search-tree';

import {
  Compare,
  defaultCompare,
} from '../sorted-linked-list/sorted-linked-list';

import { Node } from '../tree/node';

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};

const Colors = {
  RED: 'RED',
  BLACK: 'BLACK',
};

class RedBlackNode extends Node {
  public color: string;

  public parent: any;

  constructor(key: any) {
    super(key);
    this.key = key;
    this.color = Colors.RED;
    this.parent = null;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}

class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key: any) {
    if (this.root == null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  insertNode(node: any, key: any): any {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      }

      return this.insertNode(node.left, key);
    }

    if (node.right == null) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    }

    return this.insertNode(node.right, key);
  }

  fixTreeProperties(node: any) {
    while (
      node &&
      node.parent &&
      node.parent.color.isRed() &&
      node.color !== Colors.BLACK
    ) {
      let parent = node;
      const grandParent = parent.parent;
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          }

          this.rotationLL(grandParent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      } else {
        const uncle = grandParent.left;
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }

          this.rotationRR(parent);
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
    }
    this.root.color = Colors.BLACK;
  }

  rotationLL(node: any) {
    const tmp = node.left;
    node.left = tmp.right;

    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }

    tmp.parent = node.parent;

    if (!node.parent) {
      this.root = tmp;
    } else if (node === node.parent.left) {
      node.parent.left = tmp;
    } else {
      node.parent.right = tmp;
    }

    tmp.right = node;
    node.parent = tmp;
  }

  rotationRR(node: any) {
    const tmp = node.right;
    node.right = tmp.left;

    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }

    tmp.parent = node.parent;

    if (!node.parent) {
      this.root = tmp;
    } else if (node === node.parent.left) {
      node.parent.left = tmp;
    } else {
      node.parent.right = tmp;
    }

    tmp.left = node;
    node.parent = tmp;
  }
}
