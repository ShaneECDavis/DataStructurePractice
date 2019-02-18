// Author: Shane Davis
// Notes: Shows BST Construction using Javascript




class BST {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space

    // this method takes in a values and determines if the value is gt or lt the current this.value, if lt will move it to left child, gt right child
    insert(value) {
        if (value < this.value){
            // if there is no current left child, create a new BST in the null place
            if (this.left === null){
                this.left = new BST(value);
            } else {
                // if child does exist use that childs insert method to test value
                this.left.insert(value);
            }
        } else {
            // right does same as left just 'right' instead of 'left' child
            if (this.right === null){
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    // after insert is complete return the updated node
    return this;
    }

    // method that checks if value exist in current node, if not sends it to the children based on value size, returns true if found or false if not.
    contains(value){
        if(value < this.value){
            if(this.left === null){
                return false;
            } else {
                return this.left.contains(value)
            }
        } else if (value > this.value){
            if(this.right === null){
                return false;
            } else {
                return this.right.contains(value)
            }
        } else {
            return true;
        }
    }

    remove(value, parent = null) {
        if(value < this.value){
            if(this.left !== null){
                this.left.remove(value, this);
            }
        } else if (value > this.value){
            if(this.right !== null){
                this.right.remove(value, this);
            }
        } else {
            if(this.left !== null && this.right !== null){
                this.value = this.right.getMinValue();
                this.right.remove(this.value, this);
            } else if (parent === null){
                if (this.left !== null){
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                } else if (this.right !== null){
                    this.value = this.right.value;
                    this.right = this.right.right;
                    this.left = this.right.left;
                } else {
                    this.value = null;
                }
            } else if (parent.left === this){
                parent.left = this.left !== null ? this.left : this.right;
            } else if (parent.right === this){
                parent.right = this.left !== null ? this.left : this.right;
            }
        }
        return this;
    }

    getMinValue(){
        if (this.left === null){
            return this.value;
        } else {
            return this.left.getMinValue();
        }
    }
}
