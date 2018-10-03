class Node{
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
  }

  add(val){
    let newNode = new Node(val);
    let currentNode = this.head
    if(!currentNode){         //same as if(this.head === null)
      this.head = newNode;
      this.length++;
      return newNode;
    }
    else{
      while(currentNode.next){
      currentNode = currentNode.next
      }
      currentNode.next = newNode;
      this.length++;
      return newNode;
    }
  }

  remove(val){
    let currentNode = this.head;
    let prevNode;
    if(currentNode.value === val){
      this.head = currentNode.next;
    }
    else{
      while(currentNode.value !== val){
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = currentNode.next;
    }
    this.length--;;
  }

  reverse(){
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;
    if(currentNode === null){
      console.log('LinkedList is empty');
    }
    else{
      while(currentNode.next){
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
        this.head = currentNode;
      }
      currentNode.next = prevNode;
      return this;
    }
  }

  size(){
    return this.length;
  }

  indexOfElement(val){
    let currentNode = this.head;
    let index = -1;
    while(currentNode){
      index++;
      if(currentNode.value === val){
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  removeDuplicate(){
    let ptr1 = this.head;
    let ptr2;
    while(ptr1!= null) {
      ptr2 = ptr1;
      while(ptr2.next != null){
        if(ptr1.value == ptr2.next.value){
          ptr2.next = ptr2.next.next;
          this.length--;
        }
        else {
          ptr2 = ptr2.next;
        }
      }
      ptr1 = ptr1.next;
    }
  }

  display(){
    let currentNode = this.head;
    let output = '';
    if(currentNode === null){
      return('LinkedList is empty');
    }
    else{
      while(currentNode.next){
        let node =  '[' + currentNode.value + '] -> ';
        output = output.concat(node);
        currentNode = currentNode.next
      }
      let node =  '[' + currentNode.value + ']';
      output = output.concat(node);
      return output;
    }
  }

}

var ll = new LinkedList;
ll.add('a');
ll.add('c');
ll.add('d');
ll.add('d');
ll.add('a');
console.log(ll.removeDuplicate());
console.log(ll.display());
