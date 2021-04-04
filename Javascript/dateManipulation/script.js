document.body.style.textAlign="center";

var myText = document.getElementById("myText");
var wordCount = document.getElementById("wordCount");


myText.addEventListener("keyup",function myFunction() {
    var d = new Date();
    var n = d.getDate();
    var n2 = d.getFullYear();
    var n3 = d.getMonth();
    var n4 = d.getHours();
    var n5 = d.getMinutes();
    var n6 = d.getSeconds();
    var n7 = d.getMilliseconds();
    document.getElementById("wordCount").innerHTML = n;
    document.getElementById("wordCount2").innerHTML = n2;
    document.getElementById("wordCount3").innerHTML = n3;
    document.getElementById("wordCount4").innerHTML = n4;
    document.getElementById("wordCount5").innerHTML = n5;
    document.getElementById("wordCount6").innerHTML = n6;
    document.getElementById("wordCount7").innerHTML = n7;
  });

  document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("wordCount").innerHTML = wordCount;
    ocument.getElementById("wordCount2").innerHTML = wordCount2;
    ocument.getElementById("wordCount3").innerHTML = wordCount3;
    ocument.getElementById("wordCount4").innerHTML = wordCount4;
    ocument.getElementById("wordCount5").innerHTML = wordCount5;
    ocument.getElementById("wordCount6").innerHTML = wordCount6;
    ocument.getElementById("wordCount7").innerHTML = wordCount7;
  });