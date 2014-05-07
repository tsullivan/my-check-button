# my-check-button
=============

A sample UI component for use with Bower.

##Requirements:
- jQuery
- LESS
- (recommended) Browserify

##Steps to install in your project:

1. Retrieve the component code and have it placed into your project:

    bower install <github url>

2. Incorporate the dependent LESS:

    @import "path/to/my-check-button";

3. In an HTML form, add a checkbox input element and a button element with the
   "my-check-button" class. The button element must have a
   data-my-check-button-toggle attribute with the value set to the
   corresponding ID of the checkbox element:

        <form ...>
            <p>
                <input type="checkbox" value="1" class="my-check-button" id="check1" name="check1" checked>
                <button type="button" class="my-check-button" data-my-check-button-toggle="check1">Check 1 IS checked</button>
            </p>

            <p>
                <input type="checkbox" value="1" class="my-check-button" id="check2" name="checkbutton1">
                <button type="button" class="my-check-button" data-my-check-button-toggle="check2">Check 2 ISN'T checked</button>
            </p>

            ...
        </form>

4. Incorporate the dependent JavaScript using a module loader like Browserify:

    var MyCheckButton = require('path/to/my-check-button');

5.  Initialize the check button elements using a selector of the button input elements

    MyCheckButton.initialize('button');

