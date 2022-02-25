const stations = [
  "영등포구청",
  "당산",
  "합정",
  "홍대입구",
  "신촌",
  "이대",
  "아현",
  "충정로",
  "시청역",
  "을지로3가",
  "을지로4가",
  "동대문역사문화공원",
  "신당",
  "상왕십리",
  "왕십리",
  "한양대",
  "뚝섬",
  "성수",
  "건대입구",
  "구의",
  "강변",
  "잠실나루",
  "잠실",
  "종합운동장",
  "삼성",
  "선릉",
  "역삼",
  "강남",
  "서초",
  "방배",
  "낙성대",
  "서울대입구",
  "봉천",
  "신림",
  "신대방",
  "구로디지털단지",
  "대림",
  "신도림",
  "문래",
];
const departureStation = document.querySelector(
  "#stationSelectSection #departureStation"
);
const arrivalStation = document.querySelector(
  "#stationSelectSection #arrivalStation"
);

//select태그에 option태그 추가
for (let i = 0; i < stations.length; i++) {
  departureStation.insertAdjacentHTML(
    "beforeend",
    `<option>${stations[i]}</option>`
  );
}
for (let i = 0; i < stations.length; i++) {
  arrivalStation.insertAdjacentHTML(
    "beforeend",
    `<option>${stations[i]}</option>`
  );
}

//고객 나이 구하기
function judgeAge() {
  let fee = 0;
  let age = document.querySelectorAll(
    "#stationSelectSection input[type='radio']"
  );
  age = Array.from(age);
  age.map((e) => {
    if (e.checked == true) {
      if (e.id == "adult") {
        fee = 1250;
      } else if (e.id == "teenager") {
        fee = 720;
      } else if (e.id == "kid") {
        fee = 450;
      }
    }
  });
  return fee;
}

//지하철 역 간의 거리 구하기
function calcFee() {
  document
    .querySelector("#calcSection #calcFee")
    .addEventListener("click", () => {
      let fee = 0;
      const stationCount =
        arrivalStation.selectedIndex - departureStation.selectedIndex;
      let distance = Math.abs(stationCount) * 3.17;
      const age = judgeAge();
      if (distance <= 10) {
        fee = age;
      } else {
        fee = age + Math.ceil((distance - 10) / 5) * 100;
        if (distance > 50) {
          fee = fee + Math.ceil((distance - 50) / 8) * 100;
        }
      }
      document.querySelector("#resultSection textarea").innerHTML = `
        출발역은 ${departureStation.value}, 도착역은 ${
        arrivalStation.value
      }입니다.
        총 ${stationCount}개의 역을 승차했고, 총거리는 ${
        distance * 1000
      }m입니다.
        총 요금은 ₩${fee}입니다.
        `;
    });
}
window.addEventListener("load", () => {
  calcFee();
});
