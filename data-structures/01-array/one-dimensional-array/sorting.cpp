#include <iostream>
#include <stdlib.h>
#include <time.h>
using namespace std;

const int SIZE = 5;
int arr[SIZE];
int END = -1;

void freshInsertElements()
{
    /* initialize random seed: */
    srand(time(NULL));

    cout << "Inserting " << SIZE << " elements in the array arr..." << endl;
    int i;
    for (i = 0; i < SIZE; i++)
    {
        arr[i] = rand() % 100 + 1; // random number between 1 to 100
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

void sort()
{
    cout << "Sorting..." << endl;
    int k, j, temp;
    for (k = 1; k <= SIZE - 1; k++)
    {
        for (j = 0; j <= SIZE - k - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main(void)
{
    freshInsertElements();
    print();

    sort();
    print();

    return 0;
}