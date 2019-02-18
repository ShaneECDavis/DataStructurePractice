#include<iostream>
#include<algorithm>

using namespace std;

struct Node {
    int value; 
    Node* left;
    Node* right;
};

int treeHeight(Node* root){

    if(root == NULL){
        return -1;
    }
    else {
        return 1 + max(treeHeight(root->left), treeHeight(root->right));
    }

}

int main() {

    

    return 0;
}
