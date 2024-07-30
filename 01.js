// ## 1. Promise 다뤄보기

// 1. `getData` 라는 주어진 url을 인자로 받는 함수를 만들어주세요.
// 2. `getData` 는 3초 후 url이 기준 url과 동일할 경우 성공적으로 데이터를 반환하고, 틀릴 경우 에러를 발생시킵니다.
// 3. `then`과 `catch`를 이용하여 데이터를 처리하는 방법과 에러를 처리하는 방법 두 가지를 각각 보여주세요.

const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";
function getData(url) {
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    new Promise((resolve, reject) => {
        let fetchSuccess;
        setTimeout(() => {
            if (url === API_URL) {
                resolve("fetch 성공");
            } else {
                reject("api 주소에 접근할 수 없습니다.");
            }
        }, 3000);
    }).then((data) => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    })
}
// ...
// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
getData(API_URL);
getData(WRONG_URL);