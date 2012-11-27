var window1 = Titanium.UI.createWindow({
	backgroundColor:'#ccc',
	modal: true,
	navBarHidden: true,
	exitOnClose: true,
	});
	
var htmltext = '<iframe src="https://www.google.com/calendar/embed?showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=200&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=otd0bosr2o3kojconlp78sq6g0%40group.calendar.google.com&amp;color=%232952A3&amp;ctz=America%2FNew_York" style=" border-width:0 " width="300" height=250" frameborder="0" scrolling="no"></iframe>'

var timewebview = Titanium.UI.createWebView({
	html: htmltext,
	height: '100%',
	width: '100%',
	});

window1.add(timewebview);
window1.open();