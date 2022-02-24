const savedCoins = document.querySelector("#showCoins #savedCoins");
const currentCoins = document.querySelector("#showCoins #currentCoins");
const myWallet = document.querySelector("#showCoins #myWallet");
const resultBox = document.querySelector("#showInfo #resultBox");

//동전 투입 버튼
function insertCoin() {
  document
    .querySelector("#insertCoin #btn100")
    .addEventListener("click", () => {
      if (parseInt(myWallet.value) >= 100) {
        savedCoins.value = parseInt(savedCoins.value) + 100;
        currentCoins.value = "100";
        myWallet.value = parseInt(myWallet.value) - 100;
        resultBox.innerHTML = `
    100원이 투입되었습니다. 
    총 투입 금액은 ${savedCoins.value}원 입니다. 
    당신의 지갑에는 ${myWallet.value}원이 남아 있습니다.
    `;
        judgeDisabled();
      } else {
        alert("지갑에 돈이 부족합니다.");
      }
    });
  document
    .querySelector("#insertCoin #btn500")
    .addEventListener("click", () => {
      if (parseInt(myWallet.value) >= 500) {
        savedCoins.value = parseInt(savedCoins.value) + 500;
        currentCoins.value = "500";
        myWallet.value = parseInt(myWallet.value) - 500;
        resultBox.innerHTML = `
    500원이 투입되었습니다. 
    총 투입 금액은 ${savedCoins.value}원 입니다. 
    당신의 지갑에는 ${myWallet.value}원이 남아 있습니다.
    `;
        judgeDisabled();
      } else {
        alert("지갑에 돈이 부족합니다.");
      }
    });
  document
    .querySelector("#insertCoin #btn1000")
    .addEventListener("click", () => {
      if (parseInt(myWallet.value) >= 1000) {
        savedCoins.value = parseInt(savedCoins.value) + 1000;
        currentCoins.value = "1000";
        myWallet.value = parseInt(myWallet.value) - 1000;
        resultBox.innerHTML = `
    1000원이 투입되었습니다. 
    총 투입 금액은 ${savedCoins.value}원 입니다. 
    당신의 지갑에는 ${myWallet.value}원이 남아 있습니다.
    `;
        judgeDisabled();
      } else {
        alert("지갑에 돈이 부족합니다.");
      }
    });
  document
    .querySelector("#insertCoin #btnReturn")
    .addEventListener("click", () => {
      myWallet.value = parseInt(myWallet.value) + parseInt(savedCoins.value);
      savedCoins.value = "0";
      currentCoins.value = "0";
      resultBox.innerHTML = `
    잔돈이 반환되었습니다.
    `;
      judgeDisabled();
    });
}

//자판기 버튼 활성화
function judgeDisabled() {
  let obj = document.querySelector("#selectMenu").children;
  let arr = Array.from(obj);
  arr.map((menu) => {
    if (parseInt(menu.name) > savedCoins.value) {
      menu.disabled = true;
    } else {
      menu.disabled = false;
    }
  });
}

//자판기 버튼 클릭
function machineButtonClick() {
  let obj = document.querySelector("#selectMenu").children;
  let arr = Array.from(obj);
  arr.map((menu) => {
    let count = parseInt(menu.value.substr(-2, 1));
    if (
      menu.addEventListener("click", () => {
        if (count != 0) {
          count -= 1;
          menu.value = menu.value.replace(/[1-9]\)/, count + ")");
        } else {
          alert("선택한 음료 재고가 없습니다.");
          return;
        }
        savedCoins.value = parseInt(savedCoins.value) - parseInt(menu.name);
        judgeDisabled();
        resultBox.innerHTML = `
        ${menu.value.split("(")[0]}가 나왔습니다.
        남은돈: ${savedCoins.value}
        `;
      })
    );
  });
}

//메인
judgeDisabled();
insertCoin();
machineButtonClick();
