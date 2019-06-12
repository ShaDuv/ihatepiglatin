$(document).ready(function () {
  var vowels = ["a", "e", "i", "o", "u"];
  var conson = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
  //This collects data from user and splits it into individual words.
  $('#pigbutton').click(function (event) {
    var words = ($('input#original').val()).split(' ');
    console.log(words);

    //This takes each word and breaks it into letters
    for (i = 0; i < words.length; i++) {
      // var chars = words[i].split('');
      if (vowels.includes(words[i][0])=== true){
        console.log("vowels");
      } else if(conson.includes(words[i][0])=== true); {
          // console.log(words[i][0]);
          console.log("consononly")
          // if (vowels.includes(chars[i])) {
          // };
        };
      };
      });
});
