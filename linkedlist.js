/* eslint-disable strict */
//Create a linked list class with all the things.

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertBefore(item, key) {
    let currNode = this.head;
    while (currNode.next.value !== key) {
      currNode = currNode.next;
    }
    if (!currNode) {
      return null;
    } else {
      let newNode = new _Node(item, currNode.next);
      currNode.next = newNode;
    }
  }

  insertAt(item, pos) {
    let currNode = this.head;
    for (let i = 2; i < pos; i++) {
      currNode = currNode.next;
    }
    if (!currNode) {
      return null;
    }
    let newNode = new _Node(item, currNode.next);
    currNode.next = newNode;
  }

  insertAfter(item, key) {
    let target = this.find(key);
    if (!target) {
      return null;
    }
    let newNode = new _Node(item, target.next);
    target.next = newNode;
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      return;
    }
    previousNode.next = currNode.next;
  }
}

function display(list) {
  let currNode = list.head;

  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(list) {
  let currNode = list.head;
  let size = 0;
  while (currNode !== null) {
    currNode = currNode.next;
    size++;
  }

  return size;
}

function isEmpty(list) {
  if (list.head === null) return 'is empty';
  return 'is not empty';
}

function findPrevious(list, item) {
  let currNode = list.head;
  while (currNode.next.value !== item) {
    currNode = currNode.next;
  }
  if (!currNode) return null;
  return JSON.stringify(currNode);
}

function findLast(list) {
  let currNode = list.head;
  if (!currNode) return null;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return JSON.stringify(currNode);
}

function recursiveReverse(node) {
  // if 0 nodes in list
  if(node == null) {
    return null;
  }
  
  // if 1 node in list
  if (node.next == null) {
    return node;
  }

  const nodeNext = node.next;
  node.next = null;
  const reverseRemaining = recursiveReverse(nodeNext);
  nodeNext.next = node;
  return reverseRemaining;
}

// iterative reverse
function reverse(lst) {
  // slowly create the list by adding to reversedPart
  let reversedPart = null;
  let current = lst.head;
 
  while(current !== null) {
    // assign the next node to savedNode for safe keeping
    let savedNode = current.next;
    // Reassigns current's pointer to the new list we are making
    // reversedPart starts as null, but slowly grows as things are
    // pushed onto the new list
    current.next = reversedPart;
    reversedPart = current;
    // update the counter that is traveling through the array
    current = savedNode;
  }
  // update the head so we have access to the linked list
  lst.head = reversedPart;
  //displayList(lst);
  return lst;
}


function third(list) {
  let currNode = list.head;
  while (currNode.next.next.next) {
    currNode = currNode.next;
  }
  return currNode;
}

function middle(list) {
  let doubleNode = list.head;
  let singleNode = list.head;

  while (doubleNode && doubleNode.next !== null) {
    singleNode = singleNode.next;
    doubleNode = doubleNode.next.next;
  }
  return singleNode;
}

function main() {
  const emptySLL = new LinkedList();
  const cycleList = new LinkedList();
  cycleList.insertFirst('1stitem');
  cycleList.insertLast('2nditem');
  cycleList.insertLast('3rditem');
  let sNode = cycleList.find('3rditem');
  let firstNode = cycleList.find('1stitem');
  sNode.next = firstNode;

  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');

  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');

  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);

  SLL.remove('Tauhida');

  display(SLL);
  // console.log(`size of SLL is ${size(SLL)}`);
  // console.log(`SLL ${isEmpty(SLL)}`);
  // console.log(`emptySLL ${isEmpty(emptySLL)}`);
  // console.log(`node before Starbuck: ${findPrevious(SLL, 'Starbuck')}`);
  // console.log(`last node in SLL is ${findLast(SLL)}`);

  // console.log(JSON.stringify(third(SLL)));
  // console.log(JSON.stringify(middle(SLL)));
  
  reverse(SLL);
  display(SLL);
  recursiveReverse(SLL.head);
  display(SLL);
  // console.log(checkCycle(SLL));
}

main();

// 4. mystery program

// This program removes nodes with duplicate values
// the time complexity is O(n^2), quadratic
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

function checkCycle(list) {
  let currNode = list.head;
  let cycleNode = list.head;

  while (currNode !== null) {
    while (cycleNode !== null) {
      if (cycleNode.next === currNode) {
        return 'ITS A CYCLE';
      }
      cycleNode = cycleNode.next;
    }
    currNode = currNode.next;
  }
  return 'Not a cycle';
}
