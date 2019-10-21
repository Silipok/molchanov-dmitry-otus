const xhr=new XMLHttpRequest();

function getResult() {
    xhr.open('GET', 'http://127.0.0.1:3000', true);
    xhr.send();
    xhr.onreadystatechange=function () {
        if(xhr.readyState===XMLHttpRequest.DONE && xhr.status===200){
            console.log(xhr.response);
            document.querySelector('.res1').innerHTML+=`<p>${xhr.responseText}</p>`;
        }
    }
};
function getMasResult(n=5) {
    let i=n;
    while (i--){
        xhr.open('GET', 'http://127.0.0.1:3000', true);
        xhr.send();
        xhr.onreadystatechange=function () {
            if(xhr.readyState===XMLHttpRequest.DONE && xhr.status===200){
                console.log(xhr.response);
                document.querySelector('.mres').innerHTML+=`<p>${xhr.responseText}</p>`;
            }
        }
    }
}