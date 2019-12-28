window.onload = function () {

    for (var i = 0; i <= 2; i++) {
        `var ex${i} = document.getElementById("ex${i}")`;
    }

    ex0.onclick = function () {
        window.location.reload();
    }
    ex1.onclick = function () { 
        
        console.log("--------------------");
    }
}