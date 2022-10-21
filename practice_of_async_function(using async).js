// 'function'앞에 'async'를 붙여서 함수를 선언하면, 해당 함수를 '비동기 함수'로 선언한다는 의미임
// 'async'로 선언된 함수는 promise 인스턴스를 반환함
// async function 선언부 內, promise 인스턴스를 반환하는 함수 앞에 'await'키워드를 붙일 수 있음
// 'await'는 해당 키워드 뒤에 호출된 함수가 완료될 때까지 기다림
// 'await'는 promise가 resolve한 값을 내놓음

function promise_function() {

    return new Promise((resolve, reject) => {

        resolve("this is from promise function")
    })
}

async function async_function() {

    let a = await promise_function()
    console.log(a)
    return "this is from async function"
}

async_function().then((result) => { // 'async_function'함수가 먼저 호출됐더라도 해당 함수는 비동기 함수이기 때문에, 'cosole.log'의 결과가 먼저 나타남
    
    console.log(result)
})

for (let i = 0; i < 10; i++) {

    console.log(i)
}