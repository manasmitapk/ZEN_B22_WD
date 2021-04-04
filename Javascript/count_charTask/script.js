document.body.style.textAlign="center";

var myText = document.getElementById("myText");
var wordCount = document.getElementById("wordCount");


myText.addEventListener("keyup", function() {
    var characters = myText.value.split('');
    wordCount = characters.length;
    console.log(wordCount);
  });

  document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("wordCount").innerHTML = wordCount;
  });