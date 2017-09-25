function cancelType(){
    var searchBox = document.getElementById("myInput");
    searchBox.value = "";
    typing();
}

function typing(){
    var search = document.getElementById("myInput").value;
    var theUl = document.getElementById("list");
    var list = theUl.getElementsByTagName("li");
    var numberResults = 0;
    for (var i = 0; i<list.length;i++){
        if (list[i].textContent.includes(search) && search.length>0){
            list[i].style = "display:block";
            numberResults++;
        } else {
            list[i].style = "display:none";
        }
    }
    if (numberResults>0){
        theUl.style = "display:block";
    } else {
        theUl.style = "display:none";
    }
}