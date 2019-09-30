"use strict"
class Node{
    constructor(data,next,previous){
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
}
let list = new LinkedList();
LinkedList.prototype.getAt = function(index){
    let counter = 0;
    let node = this.head;
    while(node){
        if(index === counter){
            return node;
        }
        counter++;
        node = node.next;
    }
    return null;
}

LinkedList.prototype.insertFirstData = function(data){
    let node = new Node(data,null,null);
    this.head = node;
    //node = this.head;
    //return this.head;
}
LinkedList.prototype.insertAt = function(data,index){
    if (!this.head) {
        this.head = new Node(data);
        return;
    }// if new node needs to be inserted at the front of the list i.e. before the head.         
    if (index === 0) {
       this.head = new Node(data, this.head);
       return;
    }
    const previous = this.getAt(index - 1);
    let newNode = new Node(data);
    newNode.previous = previous;
    newNode.next = previous.next;
    previous.next = newNode;       
    //previous.previous = newNode.previous;       
    return this.head
}
list.insertFirstData("Can0");
list.insertAt("Can1",1);
list.insertAt("Can2",2);
list.insertAt("Can3",3);
list.insertAt("Can4",4);
list.insertAt("Can4",5);
//list.insertAt("Can3",3);
//list.insertAt("Can6",1);
//list.deleteLast();
console.log(list.head.next.next.next);
//console.log(JSON.parse(JSON.stringify(list)));