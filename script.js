var sp1 = document.getElementById("sp1");
var sp2 = document.getElementById("sp2");
var btn1 = document.getElementById("copem");
var btn2 = document.getElementById("copnum");
btn1.onclick = function() {
    sp1.select();
    document.execCommand("copy")
}
btn2.onclick = function() {
    sp2.select();
    document.execCommand("copy")
}