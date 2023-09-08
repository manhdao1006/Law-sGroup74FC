var password = document.getElementById("pass");
document.getElementById("go").onclick = ()=>{
    if(password.value == "khongvaoduoc"){
        document.getElementById("key").style.display = "none";
    } else{
        window.alert("Ai đây?\nKhông được cấp pass?\nVào đây làm gì :))");
    }
}