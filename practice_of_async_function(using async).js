// 'function'앞에 'async'를 붙여서 함수를 선언하면, 해당 함수를 '비동기 함수'로 선언한다는 의미임
// 'async'로 선언된 함수는 promise 인스턴스를 반환함
// 즉, 'async'함수의 선언부는 'return new Promise((resolve, reject) => {resolve()})'에 해당함

// async function 선언부 內, promise 인스턴스를 반환하는 함수 앞에 'await'키워드를 붙일 수 있음
// 'await'는 해당 키워드 뒤에 호출된 함수가 완료될 때까지 기다림
// 'await'는 promise가 resolve한 값을 내놓음

function async_function_using_promise() {

    return new Promise((resolve, reject) => {

        resolve("this is from callback function in Promise.")
    })
}

async function async_function_using_async() {

    let a = await async_function_using_promise()
    console.log(a)
    return "this is resolve's value of Promise in async_function_using_async"
}

async_function_using_async().then((result) => { // 'async_function'함수가 먼저 호출됐더라도 해당 함수는 비동기 함수이기 때문에, 'cosole.log'의 결과가 먼저 나타남
    
    console.log(result)
})

for (let i = 0; i < 10000; i++) {

    console.log(i)
}