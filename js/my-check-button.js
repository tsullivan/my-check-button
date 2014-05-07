/* File: js/my-check-button.js
 * Author: Tim Sullivan */

var MyCheckButton = {
	/*
	 * Toggle the check when the button is clicked
	 * @param event (jQuery Event): Mouse click event
	 */
	handleClick: function(event) {
		var $button = $(this); // event is triggered from a button click
		var checkSelector = $button.data('myCheckButtonToggle');
		var $check = $(checkSelector);
		var isChecked = $check.prop('checked');

		$check.prop('checked', !isChecked); // toggle checkbox state
		$button.toggleClass('my-check-button-yes', !isChecked); // toggle button class ("check" is shown via css, hence the classname)
	},

	/*
	 * Enable a button for check-button functionality
	 * @param selector (string): selector of input[type=checkbox] used to hold state of check-button
	 */
	initialize: function (selector) {
		var $buttons = $(selector);

		$buttons.each(function setupButton(idx, elem) {
			var $button = $(elem);
			var checkSelector = $button.data('myCheckButtonToggle');
			var $check = $(checkSelector);

			// update state of button to match state of checkbox
			$button.toggleClass('my-check-button-yes', $check.attr('checked') === 'checked');

			// add click handler, will also work for keyboard events
			$button.on('click', this.handleClick);
		}.bind(this));
	}
};

// Make this module usable with or without Browserify
var module = module || {};
module.exports = MyCheckButton;
