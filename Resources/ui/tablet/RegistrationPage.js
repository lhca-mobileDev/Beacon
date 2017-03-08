/*
 * 
 *  Phone Speciffic Registration Page
 * 
 */
function RegistrationPage(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'green'
	});

	var button = Ti.UI.createButton({
		height:44,
		width:200,
		color:'red',
		title:L('openWindow'),
		top:20
	});
	self.add(button);

	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor:'green'
		}));
	});

	return self;
};

module.exports = RegistrationPage;