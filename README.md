# dynHideJS
Allows dynamic hiding of characters within a given element via some sort of user input.
Most functions best run within an external function.

eg:
*function* run(){
*//set parameters*
var text = ...
...
...
...

cipherGen(*text, cipher, length, min, max*);
}

## dynHide.js
Functions:

* DHprimer(*id*, *decoder*)
* dynHide(*decoder*, *timeout*)

Load **DHprimer()** onLoad. It will prime the body of text with *id* to respond to decoder element with id of *decoder*

**dynHide()** should be an user input field with id of *decoder*, delay of value (in ms) *timeout*. Best initialized *onKeyUp*.

Currently the default settings of the function will change opacity to 0.3.

## cipherGen.js
Functions:

* showCipherOption(*text*,*div*)
* cipherGen(*text*,*cipher*,*length*,*min*,*max*)

**showCipherOption()** outputs the *possible characters* for use in **cipherGen()** based on given *text* into *div*.

**cipherGen()** returns a bulk of randomly generated text.
It encodes a value of *text* within *length* amount of words of minimum/maximum length of *min/max* characters.
To be deciphered via **dynHide()**
