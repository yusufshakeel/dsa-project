#include <iostream>
using namespace std;

const int SIZE = 3;
int arr[SIZE];
int END = -1;

void insert(int value)
{
    if (END + 1 < SIZE)
    {
        arr[END + 1] = value;
        cout << "inserted " << value << " at index " << END + 1 << endl;
        END++;
    }
    else
    {
        cout << "Cannot insert " << value << "! Array is full" << endl;
    }
}

void print()
{
    cout << "Printing the content of array arr..." << endl;
    int i;
    for (i = 0; i < SIZE; i++)
    {
        cout << "arr[" << i << "] = " << arr[i] << endl;
    }
}

int main(void)
{
    insert(1);
    insert(2);
    insert(3);
    insert(4);

    print();

    return 0;
}