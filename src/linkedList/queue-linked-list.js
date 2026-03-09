class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.selected = null;
    this.stack = [];
  }
  append(value, cursor) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    if (cursor === value) {
      this.selected = newNode;
    }
  }
  move(direction, count) {
    let currentNode = this.selected;
    for (let i = 0; i < count; i++) {
      currentNode = currentNode[direction];
    }
    this.selected = currentNode;
  }
  remove() {
    this.stack.push(this.selected);
    const prevNode = this.selected.prev;
    const nextNode = this.selected.next;

    if (prevNode) {
      prevNode.next = nextNode;
    }
    if (nextNode) {
      nextNode.prev = prevNode;
      this.selected = nextNode;
    } else {
      this.selected = prevNode;
    }
  }

  recover() {
    const recoverNdoe = this.stack.pop();
    const prevNode = recoverNdoe.prev;
    const nextNode = recoverNdoe.next;
    if (prevNode) {
      prevNode.next = recoverNdoe;
    }
    if (nextNode) {
      nextNode.prev = recoverNdoe;
    }
  }
}

function solution(n, k, cmd) {
  const result = Array.from({ length: n }, () => "O");

  const linkedList = new DoubleLinkedList(0);
  for (let i = 1; i < n; i++) {
    linkedList.append(i, k);
  }

  for (const command of cmd) {
    const [action, count] = command.split(" ");

    if (action === "R") {
      linkedList.move("next", count);
    }
    if (action === "L") {
      linkedList.move("prev", count);
    }
    if (action === "D") {
      linkedList.remove();
    }
    if (action === "U") {
      linkedList.recover();
    }
  }

  linkedList.stack.forEach((node) => (result[node.value] = "X"));

  return result.join("");
}

console.log(solution(6, 2, ["D", "R 2", "D", "U"]));
console.log(solution(5, 2, ["D", "D", "D"]));
console.log(solution(8, 3, ["D", "D", "L2", "D", "U"]));
