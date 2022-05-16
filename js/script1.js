let expression = "";

function add(character) { //버튼 눌릴 시 버튼 위의 문자를 변수 expression에 추가
  expression = expression + character;
  document.getElementById("result").value = expression;
}
function compute() { //사용자가 결과 버튼을 누를 시 eval() 함수를 이용해 전체 수식을 계산
  document.getElementById("result").value = eval(expression);
}
function clearDisplay() {
  expression="";
  document.getElementById("result").value = 0;
}

