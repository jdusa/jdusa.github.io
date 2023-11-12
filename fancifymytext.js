function bigger() {
    document.getElementById("text").style.fontSize = "24pt";
}

function moo() {
    document.getElementById("text").style.textTransform = "uppercase";
    var str = document.getElementById("text").value;
    var partsExclaim = str.split("!");
    str = partsExclaim.join("-Moo!")
    var partsQuestion = str.split("?");
    str = partsQuestion.join("-Moo?")
    var partsPeriod = str.split(".");
    str = partsPeriod.join("-Moo.")
    document.getElementById("text").value = str;
}

function fancyText(radio) {
    if (document.getElementById(radio.id) == document.getElementById("fancyShmancy")) {
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").style.textDecoration = "underline";
    } else {
        document.getElementById("text").style.fontWeight = "normal";
        document.getElementById("text").style.color = "black";
        document.getElementById("text").style.textDecoration = "none";
    }
    
}