/*
 *  Tablet Speciffic App Page 
 */ 
function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title
	});
	var half_screen_height = (Ti.Platform.displayCaps.platformHeight / 2);
	var button = Ti.UI.createButton({
		height:30,
		width:200,
		color: 'red',
		title:L('openWindow'),
		top:half_screen_height,
		backgroundColor: 'white'
	});
	
	var logo_image = Ti.UI.createImageView({
  		image:'/images/lhca_logo.png',
  		top: 10
	});
	
	self.add(button);

	button.addEventListener('click', function() {
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow')
		}));
	});

	self.backgroundImage = '/images/lhca_bg.jpg';
	self.add(logo_image);
	return self;
};
module.exports = ApplicationWindow;