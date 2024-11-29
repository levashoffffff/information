function makeRequest(number, onDataReceived) {
    $.ajax(`https://jsonplaceholder.typicode.com/comments?postId=${number}`, {
        success: onDataReceived
    });
}