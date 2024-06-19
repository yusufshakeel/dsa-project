#include<iostream>
using namespace std;

const int MAX = 5;

int main(void) {
    int arr[MAX] = {1, 10, 5, 6, 3};
    int i;
    for (i = 0; i < MAX; i++) {
        cout << "arr[" << i << "] = " << arr[i] << endl;
    }
    return 0;
}