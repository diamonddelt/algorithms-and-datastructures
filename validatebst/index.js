// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// Solution 1
// Use recursion and a set of if statements to determine whether each node is true/false
// Builds a big nested stack of recursive calls on either the left or right side of the bst
// to solve each node's case, and returns false for everything if the tree is invalid
// There is no way I'd know how to solve this without googling it...

function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}

module.exports = validate;