// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}







//
//
//var user = document.getElementById('fname').value
//var http = new XMLHttpRequest()
//var response = 
//var url = "/";
//var params = {
//    "user":user
//}
//http.open('POST',url,true);
//http.setRequestHeader('Content-type', 'application/json');
//http.onreadystatechange = function() {//Call a function when the state changes.
//    if(http.readyState == 4 && http.status == 200) {
//        response = http.responseText;
//    }
//}
//http.send(params);
//
//var http = new XMLHttpRequest();
//var url = 'get_data.php';
//var params = 'orem=ipsum&name=binny';
//http.open('POST', url, true);
//
////Send the proper header information along with the http
//http.setRequestHeader('Content-type', 'application/json');
//
//http.onreadystatechange = function() {//Call a function when the state changes.
//    if(http.readyState == 4 && http.status == 200) {
//        alert(http.responseText);
//    }
//}
//http.send(params);