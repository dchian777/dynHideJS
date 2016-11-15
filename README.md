# dynHideJS
Allows dynamic hiding of characters within a given element via some sort of user input.


## dynhide.js
Functions:

DHprimer(*id*, *decoder*)
dynHide(*decoder*, *timeout*)

Load **DHprimer()** onLoad. It will prime the body of text with *id* to respond to decoder element with id of *decoder*

**dynHide()** should be an user input field with id of *decoder*, delay of value (in ms) *timeout*. Best initialized *onKeyUp*.

Currently the default settings of the function will change opacity to 0.3.

## cipherGen.js
Functions:

showCipherOption(*text*)
cipherGen(*text*,*cipher*,*length*,*min*,*max*)

**showCipherOption()** returns the *possible characters* for use in **cipherGen()** based on given *text*

**cipherGen()** creates a bulk of randomly generated text.
It encodes a value of *text* within *length* amount of words of minimum/maximum length of *min/max* characters.
To be deciphered via **dynHide()**
