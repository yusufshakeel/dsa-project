#include <iostream>
using namespace std;

const int SIZE = 5;
int arr[SIZE];
int END = -1;

void freshInsertElements()
{
    cout << "REFRESH!" << endl;
    cout << "Inserting " << SIZE << " elements in the array arr..." << endl;
    int i;
    for (i = 0; i < SIZE; i++)
    {
        arr[i] = i + 1;
    }
    END = SIZE - 1;
}

void print()
{
    cout << "Printing the content of array arr..." << endl;
    int i;
    for (i = 0; i <= END; i++)
    {
        cout << "arr[" << i << "] = " << arr[i] << endl;
    }
    cout << endl;
}

void reverse()
{
    int temp, i;
    for (i = 0; i < END / 2; i++)
    {
        temp = arr[i];
        arr[i] = arr[END - i];
        arr[END - i] = temp;
    }
}

int main(void)
{
    freshInsertElements();
    print();

    reverse();
    print();

    return 0;
}