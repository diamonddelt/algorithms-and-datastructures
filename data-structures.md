# Data Structures

## What is a data structure and why do I care?

These are used to organize information in a program to optimize runtime complexity.

In other words, using these logical structures helps build better, more performant programs.

# Types of Data Structures

- Queue
    - FIFO
- Stack
    - LIFO
- Linked List
    - A series of "nodes", each with two parts of the payload
        1. the actual "data" of the node
        2. a reference to the next node
        3. the `last` node in a linked list does not have a reference
        4. the order of the linked list is always maintained
    - There are two important nodes
        - the `head` node, which is the first node in the linked list
        - the `tail` node, which is the last node, and has no reference assigned to it
- Tree
    - A top level "node" which contains data and references to sibling "nodes" (usually an array)
    - Sibling nodes
    - Common operation = "traversal"
        - Breadth-First Traversal - iterate through each node on each level of the tree, starting from top to bottom, from left to right
        - Depth-First Traversal - starting from the top of the tree, choose the left-most sibling node, and keep going to left-most bottom node until you reach bottom. Then, go up to most immediate parent, and count each sibling node underneath it from left to right. Once these are all accounted for, go back to top parent node, and select next immediate node right of the previous child node scanned, and repeat the pattern. 
            - AKA, the goal is to still move from left to right underneath the parent node, but you try to get to the bottom of the tree first before counting the siblings at a given level