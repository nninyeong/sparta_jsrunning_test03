// ## 2. Async / Await 다뤄보기

// 위 1번 문제에서 다루었던 비동기 처리를 `async`, `await` 키워드를 사용하여 코드를 수정해서 작성해주세요.

const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";
async function getData(url) {
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    let data;
    try {
        data = await fetch(url);
        console.log(data);
    } catch (error) {
        console.error("error! ", error);
    }

}

function fetch(url) {
    return new Promise((resolve, reject) => {
        if (url === API_URL) {
            resolve("fetch 성공");
        }
        else {
            reject("api 주소에 접근할 수 없습니다.");
        }
    });
}

getData(API_URL);
getData(WRONG_URL);