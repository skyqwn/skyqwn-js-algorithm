function solutaion(boxes) {
  const stack = [];

  for (const box of boxes) {
    if (stack[stack.length - 1] !== box) {
      stack.push(box);
    }
  }

  return stack;
}
console.log(solutaion([2, 2, 5, 5, 5, 1, 1]));
console.log(solutaion([7, 7, 8, 8, 0, 0, 0]));
