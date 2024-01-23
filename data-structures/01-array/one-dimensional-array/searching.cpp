#include <iostream>
using namespace std;

const int SIZE = 5;
int arr[SIZE];
int END = -1;

void freshInsertElements()
{
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

int search(int value)
{
    int start = 0, end = SIZE - 1, mid = (start + end) / 2;
    while (start <= end && arr[mid] != value)
    {
        if (value < arr[mid])
            end = mid - 1;
        else
            start = mid + 1;
        mid = (start + end) / 2;
    }
    if (start > end)
        return -1; // key not found
    return mid;
}

void printIndex(int index, int value)
{
    if (index > -1)
    {
        cout << "Found " << value << " at index " << index << "." << endl;
    }
    else
    {
        cout << "Value " << value << " not found." << endl;
    }
}

int main(void)
{
    freshInsertElements();
    print();

    printIndex(search(3), 3);
    printIndex(search(10), 10);

    return 0;
}