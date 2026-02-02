// 일반 함수
function funcName(param1, param2){
	// 내용
	return "반환값";
};

// 익명 함수: 이름 없이, 주로 변수에 저장하거나 일시적 사용
let anonFunc = function(y) {
	console.log(y);
};

// 람다식 함수(Arrow function) 
let arrowFunc = (y) => {
	console.log(y);
};

// 콜백 함수 (Callback function): 다른 함수의 매개변수로 전달된 함수
button.addEventListener("click", setCount);

// 버튼을 클릭하면 setcount함수가 실행됩니다. 
function setCount() {
	count++;
};

////////////////////////////////////////////////////////////////////////////////
// 함수 문제

// "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet'를 만드시오

function greet(){
	console.log("안녕 내 이름은 제시카야");
};

// 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오

function greetName(name){
	console.log("안녕 내 이름은 " + name + "야"); // fmt 방법 찾아두기
	console.log(`안녕 내 이름은 ${name}야`);
};

// 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오 

function greetReturn(name){
	return name;
};

// meetAt 함수를 만들어주세요.
/*
인자를 세개 받습니다. 
첫번째 인자는 년도에 해당하는 숫자입니다. 
두번째 인자는 월에 해당하는 숫자입니다.
세번째 인자는 일에 해당하는 숫자입니다.
년도 인자만 받았을 경우 -> "1234년" 과 같은 형식의 문자열을 리턴해주세요.
년도,월 인자를 받았을 경우 -> 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을 리턴해주세요. 
년도, 월, 일 인자를 전부 받았을 경우 -> 년도, 월, 일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을 리턴 해주세요. 
*/

// 받았는지 안 받았는지 판단 어케함? 
function meetAt(year, month=null, day=null){
	if (month == null && day == null){
		return year
	} 
}