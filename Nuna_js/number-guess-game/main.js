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
let opportunity = 5;  // 기회 
let userInputCache = [];
let userInput = document.getElementById("user-input");  // 사용자 입력창
let resultArea = document.getElementById("result-area");  // 결과 출력창
let playButton = document.getElementById("play-button");  // 실행 버튼
let resetButton = document.getElementById("reset-button");  // 리셋 버튼 

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play() {
    let userValue = parseInt(userInput.value)
    // console.log(userValue)
    // console.log(typeof userValue)

    if(userValue < 1 || userValue > 100) {
        resultArea.textContent = `1부터 100사이의 정수를 입력하세요. 남은 기회:${opportunity}`;
    } else if(userInputCache.includes(userValue)) {
        resultArea.textContent = `입력하신 숫자는 이미 시도했습니다. 남은 기회:${opportunity}`;
    } else {
        opportunity --
        // console.log("남은 기회:", opportunity)  // 기회

        userInputCache.push(userValue);

        if(userValue < computerNum) {
            resultArea.textContent = `Up!!! \n남은 기회:${opportunity}`;
            // console.log("Up!!!");
        } else if(userValue > computerNum) {
            resultArea.textContent = `Down!!! \n남은 기회:${opportunity}`;
            // console.log("Down!!!");
        } else {
            resultArea.textContent = "맞췄습니다!!!";
            // console.log("맞췄습니다!!!");
            playButton.disabled = true;
        }

        if(opportunity < 1) {
            resultArea.textContent = "주어진 기회가 끝났습니다."
            playButton.disabled = true;
        } 
    }
} 

function reset() {
    opportunity = 5;
    userInput.value = "";
    resultArea.textContent = `결과가 나온다. 남은 기회:${opportunity}`;
    playButton.disabled = false;
    pickRandomNum();
}

pickRandomNum();