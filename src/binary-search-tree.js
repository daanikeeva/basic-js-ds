const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.treeRoot = null
  }

  root() {
    return this.treeRoot;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left =  addNode(node.left, data); 
      }
      else {
        node.right =  addNode(node.right, data) ;
      }
      return node;
    }

    this.treeRoot = addNode(this.treeRoot, data);
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
    return searchNode(this.treeRoot, data);

    function searchNode(node, data) {
      if (!node) {
        return false
      };
      if (node.data === data) {
        return true
      }
      if (data < node.data) {
        return searchNode(node.left, data)
      }
      else {
        return searchNode(node.right, data)

      }
    }
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    return findNode(this.treeRoot, data);

    function findNode(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        return findNode(node.left, data)
      }
      else {
        return findNode(node.right, data)
      }
    }

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    
    this.treeRoot = removeNode(this.treeRoot, data);
    // console.log("tree:", this.treeRoot, 'delete:', data)

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node
      }
      else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      }
      else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while(maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);
        return node
      }
    }

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.treeRoot) {
      return
    }

    let node = this.treeRoot;
    while(node.left) {
      node = node.left
    }
    return node.data
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if (!this.treeRoot) {
      return
    }

    let node = this.treeRoot;
    while(node.right) {
      node = node.right
    }
    return node.data
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}


const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(2);
      tree.add(6);
      tree.add(128);
      tree.add(8);
      tree.add(31);
      tree.add(54);
      tree.add(1);
      tree.remove(14);
      tree.remove(8);
      tree.remove(9);


module.exports = {
  BinarySearchTree
};