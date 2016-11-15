# dynHideJS
Allows dynamic hiding of characters within a given element via some sort of user input.

Functions:

DHprimer(*id*, *decoder*)
dynHide(*decoder*)

Load DHprimer() onLoad. It will prime the body of text with *id* to respond to decoder element with id of *decoder*

dynHide() should be an user input field with id of *decoder*. Best initialized onKeyUp.

Currently the default settings of the function will change opacity to 0.3.
