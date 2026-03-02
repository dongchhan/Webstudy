// 랜덤번호 지정 
// 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름 
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다! 
//  랜덤번호가 < 유저번호 Down!!
//  랜덤번호가 > 유저번호 Up!!
// Reset 버튼을 누르면 게임이 리셋된다. 
//  5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다 
//  유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 않는다


let computerNum = 0;  // 정답 숫자
let chances = 5;  // 기회 
let userInputCache = [];

let userInput = document.getElementById("user-input");  // 사용자 입력창
let resultArea = document.getElementById("result-area");  // 결과 출력창
let chanceArea = document.getElementById("chance-area");  // 기회 출력창

let playButton = document.getElementById("play-button");  // 실행 버튼
let resetButton = document.getElementById("reset-button");  // 리셋 버튼 

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", ()=>{userInput.value=""})

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play() {
    // let userValue = parseInt(userInput.value)
    let userValue = userInput.value;
    /*
    해결과제:
    parseInt로 숫자로 바꾸면 010과 10을 같은 숫자로 인식하지만
    빈 값을 제출했을 때 조건문이 뚫려버리고,
    string 값을 그대로 사용하면
    빈 값 제출하는건 막을 수 있지만
    010과 10을 다른 숫자로 인식한다. 
    */
    console.log(userValue)
    console.log(typeof userValue)

    // 값 유효성 검사1: 1~100 숫자인지 
    if(userValue < 1 || userValue > 100 || userInput == "") {
        resultArea.textContent = `1부터 100사이의 정수를 입력하세요.`;
        chanceArea.textContent = `남은 기회: ${chances}`;
        return 
    }
    
    // 값 유효성 검사2: 새로운 숫자인지
    if (userInputCache.includes(userValue)){
        resultArea.textContent = `입력하신 숫자는 이미 시도했습니다.`;
        chanceArea.textContent = `남은 기회: ${chances}`;
        return
    }
    
    // UP/Down/Correct 판별
    if(userValue < computerNum) {
        resultArea.textContent = `Up!!!`;
    } else if(userValue > computerNum) {
        resultArea.textContent = `Down!!!`;
    } else {
        resultArea.textContent = "맞췄습니다!!!";
        chanceArea.textContent = "";
        playButton.disabled = true;  // 더이상 시도 못하게 버튼 블락
        return  // 함수 종료
    }
    
    chances --;
    userInputCache.push(userValue);

    if(chances < 1) {
        resultArea.textContent = "주어진 기회가 끝났습니다."
        chanceArea.textContent = "";
        playButton.disabled = true;
    } else {
        chanceArea.textContent = `남은 기회: ${chances}`;
    }
} 

function reset() {
    chances = 5;
    userInput.value = "";
    userInputCache - [];
    resultArea.textContent = `결과가 나온다.`;
    chanceArea.textContent = `남은 기회: ${chances}`;
    playButton.disabled = false;
    pickRandomNum();
}

// 최초 실행
chanceArea.textContent = `남은 기회: ${chances}`;
pickRandomNum();