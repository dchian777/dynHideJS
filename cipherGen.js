//Character set
//Function to show you what characters can be used given a -text-
function showCipherOption(text, div){
  var encText = text.split('');
  var charset = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

//Compares each character in encText[q] and removes it from charset
  for (q in encText){
  var index = charset.indexOf(encText[q]);
  charset.splice(index, 1);
  }

  document.getElementById(div).innerHTML = charset;
}


//Random Number Generator
function randBetween(min,max){
  return Math.floor(Math.random() * (max - min +1)) + min;
}


//Generates the body of the text with the encoded message
//text = text you want encoded
//cipher = the key you wish to use to encode it
//length = how many words you want the encrypted body to have
//min = minimum length of each word
//max = maximum length of each word
function cipherGen(text,cipher,length,min,max){


//Text to be encoded
  var encText = text.split('');

  //Define the set of words that the character is to be hidden in
  //ie: 1 character encoded within x number of words
  var textInterval = Math.floor(length/encText.length);

  //Modified number of words to correct for errors (interval)
  var modLength = textInterval*encText.length;

  //character set to use for generation of random text (taken from the cipher)
  var cipherSet = cipher.split('');

  //final displayed text
  var finalText = "";

    //Word Counter
  var i = 1;

    //Element within encText
  var k = 0;


  //Text Generation Loop
  while (i <= modLength ){

    //Choose which word to insert the encrypted character in
    var encWordPos = randBetween(1,textInterval);

    //Loop for each interval

    //Word Number within interval
    var z = 1;
    while (z <= textInterval){

      //How many characters in this word
      var numChars = randBetween(min,max);

      //Position of encoded character
      var encPos = randBetween(1,numChars);

      //Loop for each word
      //Letter Number
      var t = 1;

      //if word number == word position of encoded character
      //Letter option Start
      if (z == encWordPos){
        while (t <= numChars){
          if (t == encPos){
          finalText = finalText + encText[k];

          //Increase letter count by 1
          t ++;

          //Increase element within encText by 1
          k ++;
        }
          else {
          finalText = finalText + cipherSet[randBetween(0,cipherSet.length-1)];
          }

          //Increase letter count by 1
          t ++;
        }
      }
      //Letter option End

      //Else if the word number != word position of encoded character
      //Letter option Start
      else {
        while (t <= numChars){
          finalText = finalText + cipherSet[randBetween(0,cipherSet.length-1)];

          //Increase letter count by 1
          t ++;
          }
        }
        //Letter option End

        //Increase Word Count by 1
        i ++;

        //Add a space after the word
        finalText += " ";

        //Increase word number within interval by 1
        z ++;
      }
    }

    return finalText;
  }
