$(document).ready(function () {
  var vowels = ["a", "e", "i", "o", "u"];
  var conson = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
  //This collects data from user and splits it into individual words.
  var pigLatin = [];

  var i = 0

  $('#pigbutton').click(function (event) {
    var words = ($('input#original').val()).split(' ');
    console.log(words);

        //This takes each word and breaks it into letters
      for (i = 0; i < words.length; i++) {
          var currentWord = words[i];
          var n = 0;
          while(n < currentWord.length) {
            if (currentWord[n] === "q" && currentWord[n+1] === "u") {
              n += 2
            } else if (vowels.includes(currentWord[n]) === false) {
              n++
            }else {
              break;
            }
          };
      });
    });
