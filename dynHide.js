//Dynamic Hide Module

//Primer - Primes Text body for dynamic Hide
    //id is the id of the element
    //decoder is the id of the dynamic source
function DHprimer(id, decoder){

  //Converts text into array of single characters
  var textArray = document.getElementById(id).innerHTML.split('');

  //Clears element
  document.getElementById(id).innerHTML = "";

  //Creates a SPAN for each character in the element with a class of *-DH
  for (i in textArray){
    var subDiv = document.createElement("span");
    var divText = document.createTextNode(textArray[i]);
    subDiv.appendChild(divText);
    subDiv.className = textArray[i]+"-DH";
    document.getElementById(id).appendChild(subDiv);
  }

  //Creates a hidden div that stores the characters hidden. This is to allow for undoing hidden characters
  var hiddenDiv = document.createElement("div");
  hiddenDiv.id = "dynHide-hidden-div";
  hiddenDiv.style = "display: none";
  document.getElementById(id).appendChild(hiddenDiv);

  //Focuses the user onto decoder div
  document.getElementById(decoder).focus();

}


//Dynamic Hiding of characters.
function dynHide(decoder,opacity,timeout){

  //Variables
  if (Number.isInteger(parseInt(opacity)) == true){
    //Original style
    var orgStyle = "opacity: 1";

    //Changed style
    var finalStyle = "opacity: " + opacity;
  }
  else {
    //Original Style
    var orgStyle = "display: inline";

    //Changed style
    var finalStyle = "display: none";
  }

  //Shows previously hidden characters
setTimeout(function() {
    //splits hidden div innerHTML into an array of single characters
var hiddenPrev = document.getElementById('dynHide-hidden-div').innerHTML.split('');

    //for each character in hidden div, find the corresponding className
for (i in hiddenPrev){
  search = document.getElementsByClassName(hiddenPrev[i] + "-DH");

    //for each element with classname found, reset the style
  for (x in search){
    search[x].style = orgStyle;
  }
}

//Hides current character choice

  //Replace hidden div innerHTML with current choices
  document.getElementById('dynHide-hidden-div').innerHTML = document.getElementById(decoder).value;

  //splits hidden div innerHTML into an array of single characters
var hiddenCur = document.getElementById('dynHide-hidden-div').innerHTML.split('');

  //for each character in hidden div, find the corresponding className
  for (i in hiddenCur){
    search = document.getElementsByClassName(hiddenCur[i]+"-DH");

  //for each element in className found, change the style
    for (x in search){
      search[x].style = finalStyle;
    }
  }
}, timeout);
}
