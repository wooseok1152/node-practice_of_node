// Promise를 반환하는 함수는 '비동기 함수'임
// 비동기 함수는 '백그라운드'에서 실행됨
// 비동기 함수의 선언부가 '백그라운드'에서 실행된 후, 'then'에 의해 특정 콜백 함수가 호출됨
// 해당 콜백 함수는 '함수 stack'이 다 비워지면 그제서야 호출됨

function async_function() {

    return new Promise((resolve, reject) => {

        let result = "this is from async function"
        resolve(result)
    })
}

async_function().then((result) => // 'async_function'함수가 먼저 호출됐더라도 해당 함수는 비동기 함수이기 때문에, 'cosole.log'의 결과가 먼저 나타남
    console.log(result)
)
for (let i = 0; i < 10; i++) {

    console.log(i)
}
