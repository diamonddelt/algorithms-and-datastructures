class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
      }
    
      // use recursion to traverse down a binary search tree and insert a new node
      insert(data) {
        if (data < this.data && this.left) {
          this.left.insert(data);
        } else if (data < this.data) {
          this.left = new Node(data);
        } else if (data > this.data && this.right) {
          this.right.insert(data);
        } else if (data > this.data) {
          this.right = new Node(data);
        }
      }

      // use recursion to compare specific binary property of a binary search tree
      // less is left, more is right
      contains(data) {
        if (this.data === data) {
          return this; // return this current object itself
        } else if (this.data > data && this.left) {
          return this.left.contains(data);
        } else if (this.data > data) {
          return null;
        } else if (this.data < data && this.right) {
          return this.right.contains(data);
        } else if (this.data < data) {
          return null;
        } else {
          // uncaught exception
        }
      }
}