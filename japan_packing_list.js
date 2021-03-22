describe('test japan packing list page', function() {
	const packing_sections = {
		0: 'shirtbuttons',
		1: 'pantsbuttons',
		2: 'unders',
		3: 'electronics',
		4: 'chargers',
		5: 'accessories',
		6: 'toiletries',
		7: 'medication',
		8: 'glasses'
	}
	
	const section_buttons = {
		0: 8,
		1: 5,
		2: 3,
		3: 4,
		4: 4,
		5: 6,
		6: 8,
		7: 3,
		8: 3
	}
	
	function click_buttons(sec, nb){
		for(x=1;x<=nb;x++){
			element(by.xpath('//div[@id="' + sec + '"]/child::button[' + x + ']')).click();
			browser.sleep(1500);
		}
	}
	
	beforeEach(() => {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000000;
	})
	
	afterEach((done) => {
		done();
	})
	
	it('should click every button on page', function(done){
		browser.ignoreSynchronization = true;
		browser.waitForAngularEnabled(false);
		browser.get('http://killertechwolf.com/SeanProjects/JapanPackingList/JapanPackingList_2016.html');
		browser.manage().window().maximize();
		for(y=0;y<9;y++){
			click_buttons(packing_sections[y], section_buttons[y]);
			element(by.xpath('//div[@id="' + packing_sections[y] + '"]/child::p[@class="buttonheader"]')).click();
			browser.sleep(1500);
		}
		browser.sleep(1500);
		finishedAlert = browser.switchTo().alert();
		finishedAlert.accept();
		browser.sleep(1500);
		element(by.xpath('//button[contains(text(),"Projects Top")]')).click();
		browser.sleep(3500);
		done();
	});
});