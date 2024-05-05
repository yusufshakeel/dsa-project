#include <iostream>
using namespace std;

struct node
{
    int data;
    node *next;
};

node *createNode(int data)
{
    node *temp = (struct node *)malloc(sizeof(struct node *));
    temp->data = data;
    temp->next = NULL;
    return temp;
}

node *appendNode(node *n, int data)
{
    node *temp = createNode(data);
    n->next = temp;
    return temp;
}

int main(void)
{
    node *head, *tail;

    head = tail = createNode(10);
    tail = appendNode(tail, 20);
    tail = appendNode(tail, 30);
    tail = appendNode(tail, 40);
    tail = appendNode(tail, 50);

    node *temp = head;
    while (temp != NULL)
    {
        cout << temp->data << endl;
        temp = temp->next;
    }

    return 0;
}