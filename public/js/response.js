function doLogin(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","/login");
    xhr.send();
}