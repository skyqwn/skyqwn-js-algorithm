function solution(m, v) {
  m.sort((a, b) => a - b);
  v.sort((a, b) => a - b);

  let satisfiedCount = 0; // 만족한 직원수
  let i = 0; // 직원
  let j = 0; // 선물

  while (i < m.length && j < v.length) {
    //현재 선물가치가 직원 요구이상이면 만족
    if (v[j] >= m[i]) {
      satisfiedCount++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return satisfiedCount;
}

console.log(solution([2, 4, 6, 8, 10], [1, 3, 5, 7, 9, 11]));
console.log(solution([5, 10, 15], [5, 5]));
console.log(solution([2, 4], [1, 2, 3]));
