
//Callback ajax
/* function makeRequest(number, onDataReceived) {
    $.ajax(`https://jsonplaceholder.typicode.com/comments?postId=${number}`, {
        success: onDataReceived
    });
} */

//Promise ajax
/* function makeRequest(number) {
    //ajax вернул промис
    const promise = $.ajax(`https://jsonplaceholder.typicode.com/comments?postId=${number}`);
    //функция возвращает промис
    return promise;
}
 */
//Promise axios
function makeRequest(number) {
    //axios вернул промис
    const promise = axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${number}`);
    //функция возвращает промис
    return promise.then((response) => {
        return response.data;
    });
}

//Promise axios 2
function getTasks() {
    //axios вернул промис
    const promise = axios.get(`https://jsonplaceholder.typicode.com/posts`);
    //функция возвращает промис
    return promise.then((response) => {
        return response.data;
    });
}

