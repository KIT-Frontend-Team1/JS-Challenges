//풀이법1
const students = ['이웅모', '신짱구', '김성용', '김지웅', '김철수', '배수지', '신짱아', '이육사'];
const studentNew = students.sort();
let answer = [[], [], []];
for (let i = 0; i < studentNew.length; i++) {
  let rest = i % 3;
  answer[rest].push(studentNew[i]);
}
console.log(answer);

//풀이법2
for (let i = 0; i < studentNew.length; i++) {
  if (i % 3 === 0) {
    one += studentNew[i];
  } else if (i % 3 === 1) {
    two += studentNew[i];
  } else {
    three += studentNew[i];
  }
}
console.log(one, two, three);
