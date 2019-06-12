$(document).ready(function () {
  var vowels = ["a", "e", "i", "o", "u"];

  //This collects data from user and splits it into individual words.
  $('#pigbutton').click(function (event) {
    var words = ($('input#original').val()).split(' ');
    console.log(words);

    //This takes each word and breaks it into letters
    for (i = 0; i < words.length; i++) {
      var chars = words[i].split('');
      if (vowels.includes(words[i][0])=== true){
      console.log(words[i][0]);
};
      // if (vowels.includes(chars[i])) {
        console.log('this is working');
      // };
    };
  });
});
