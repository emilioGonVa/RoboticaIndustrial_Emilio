function sendPost() {
    var xhttp = new XMLHttpRequest();
    let toPost = {
        func: document.getElementById("codigo").value
    }
    console.log(toPost.func);
    xhttp.open("POST", "http://10.7.3.16/codes.php", true);
    xhttp.setRequestHeader("Content-type", "application/json;charset=utf-8");
    xhttp.send(JSON.stringify(toPost));
    /*document.getElementById("demo").innerHTML = xhttp.responseText;*/
    console.log(xhttp.responseText)
}