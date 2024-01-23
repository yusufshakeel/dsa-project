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

void deleteFromEnd()
{
    cout << "Delete from end" << endl;
    END--;
}

void deleteFromBeginning()
{
    cout << "Delete from beginning" << endl;
    int i;
    for (i = 1; i <= END; i++)
    {
        arr[i - 1] = arr[i];
    }
    END--;
}

void deleteIndex(int index)
{
    cout << "Delete element at index " << index << "." << endl;
    int i;
    for (i = index + 1; i <= END; i++)
    {
        arr[i - 1] = arr[i];
    }
    END--;
}

int main(void)
{
    freshInsertElements();
    print();
    deleteFromEnd();
    print();

    freshInsertElements();
    print();
    deleteFromBeginning();
    print();

    freshInsertElements();
    print();
    deleteIndex(3);
    print();

    return 0;
}