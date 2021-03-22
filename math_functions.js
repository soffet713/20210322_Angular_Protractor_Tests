describe('Test Math Functions Page', function() {
	const eng_func_call = {
	    0: 'The Fibonacci Sequence',
	    1: 'The Greatest Common Divisor',
	    2: 'The Factorial Function',
	    3: 'Check Prime',
	    4: 'Display Primes',
	    5: 'Reverse the String',
	    6: 'フィボナッチ数列',
	    7: '最大公約数',
	    8: '階乗',
	    9: '素数の確認',
	    10: '素数の表示',
	    11: '文字を逆にする',
	}
		
	function test_func_single(x, num, input_id, compute, reset, top){
		element(by.xpath('//button[text()="' + eng_func_call[x] + '"][@class="functionbutton"]')).click();
		browser.sleep(1500);
		element(by.id(input_id)).sendKeys(num);
		browser.sleep(1500);
		element(by.id(compute)).click();
		browser.sleep(1500);
		browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
		browser.sleep(1500);
		browser.executeScript('window.scrollTo(0, 0)');
		browser.sleep(1500);
		element(by.id(reset)).click();
		browser.sleep(1000);
		element(by.id(top)).click();
		browser.sleep(2000);
	}
	
	function test_func_double(y, num1, num2, input1_id, input2_id, compute, reset, top){
		element(by.xpath('//button[text()="' + eng_func_call[y] + '"][@class="functionbutton"]')).click();
		browser.sleep(1500);
		element(by.id(input1_id)).sendKeys(num1);
		element(by.id(input2_id)).sendKeys(num2);
		browser.sleep(1500);
		element(by.id(compute)).click();
		browser.sleep(1500);
		browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');
		browser.sleep(1500);
		browser.executeScript('window.scrollTo(0, 0)');
		browser.sleep(1500);
		element(by.id(reset)).click();
		browser.sleep(1000);
		element(by.id(top)).click();
		browser.sleep(2000);
	}
	
	function test_rev_string(z, strng, strng_input, rev_ltr, rev_wrd, rev_wrd_let, orig_strng, reset, top){
		element(by.xpath('//button[text()="' + eng_func_call[z] + '"][@class="functionbutton"]')).click();
		browser.sleep(1500);
		element(by.id(strng_input)).sendKeys(strng);
		browser.sleep(1000);
		element(by.id(rev_ltr)).click();
		browser.sleep(2000);
		if (rev_wrd){
			element(by.id(rev_wrd)).click();
			browser.sleep(2000);
		}
		if (rev_wrd_let){
			element(by.id(rev_wrd_let)).click();
			browser.sleep(2000);
		}
		element(by.id(orig_strng)).click();
		browser.sleep(2000);
		element(by.id(reset)).click();
		browser.sleep(1000);
		element(by.id(top)).click();
		browser.sleep(2000);
	}
	
	beforeEach(() => {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000000;
	})
	
	afterEach((done) => {
		done();
	})
	
	it('should test math functions page', function(done) {
		browser.ignoreSynchronization = true;
		browser.waitForAngularEnabled(false);
		browser.get('http://killertechwolf.com/SeanProjects/Index.html');
		browser.manage().window().maximize();
		browser.sleep(2000);
		element(by.id('Bi_Functions')).click();
		browser.sleep(2000);
		element(by.id('eng_button')).click();
		eng_functions = true;
		browser.sleep(3000);
		promptAlert = browser.switchTo().alert();
		promptAlert.sendKeys("Sean");
		promptAlert.accept();
		browser.sleep(2000);
		
		while (eng_functions){
			test_func_single(0, Math.floor(10 + (Math.random() * 91) + 1), 'fibonacci1', 'fib_compute', 'fib_reset', 'fib_top_return');
			test_func_double(1, Math.floor((Math.random() * 9999999) + 1), Math.floor((Math.random() * 9999999) + 1), 'greatcomdiv1', 'greatcomdiv2', 'gcd_compute', 'gcd_reset', 'gcd_top_return');
    			test_func_single(2, Math.floor((Math.random() * 20) + 1), 'factorialInput', 'fact_compute', 'fact_reset', 'fact_top_return');
    			test_func_single(3, Math.floor((Math.random() * 10000000000) + 1), 'primeNumberInput', 'chkprime_compute', 'chkprime_reset', 'chkprime_top_return');
    			test_func_single(4, Math.floor((Math.random() * 999) + 1), 'numbprimesInput', 'primedisp_compute', 'primedisp_reset', 'primedisp_top_return');

    			test_string = 'Testing automation with Selenium in Angular';
			
    			test_rev_string(5, test_string, 'stringreverse1', 'reverse_letters', 'reverse_words', 'rev_words_letters', 'orig_string', 'string_reset', 'string_top_return');
			jp_functions = eng_functions;
			eng_functions = false;
		};
		
		element(by.xpath('//div[@id="English"]/child::div[@id="top1"]/child::div[@id="languageButton"]/child::button[@id="jp_lang"]')).click();
		browser.sleep(1500);
		promptAlert = browser.switchTo().alert();
		promptAlert.sendKeys("ショーン");
		promptAlert.accept();
		browser.sleep(2000);
		while (jp_functions){
			test_func_single(6, Math.floor(10 + (Math.random() * 91) + 1),'fibonacciJ1', 'fib_computeJ', 'fib_resetJ', 'fib_top_returnJ');
			test_func_double(7, Math.floor((Math.random() * 9999999) + 1), Math.floor((Math.random() * 9999999) + 1), 'greatcomdivJ1', 'greatcomdivJ2', 'gcd_computeJ', 'gcd_resetJ', 'gcd_top_returnJ');
    			test_func_single(8, Math.floor((Math.random() * 20) + 1), 'factorialJInput', 'fact_computeJ', 'fact_resetJ', 'fact_top_returnJ');
    			test_func_single(9, Math.floor((Math.random() * 10000000000) + 1), 'primeNumberJInput', 'chkprime_computeJ', 'chkprime_resetJ', 'chkprime_top_returnJ');
    			test_func_single(10, Math.floor((Math.random() * 999) + 1), 'numbprimesJInput', 'primedisp_computeJ', 'primedisp_resetJ', 'primedisp_top_returnJ');

    			test_stringJ = 'アンギュラージェイエスのプログラミング言語でSeleniumのテストスクリプトを勉強してる。';
			
    			test_rev_string(11, test_stringJ, 'stringreverse1J', 'reverse_lettersJ', '', '', 'orig_stringJ', 'string_resetJ', 'string_top_returnJ');
			jp_functions = false;
		}	
		
		element(by.xpath('//button[contains(text(),"Projects Top")]')).click();
		browser.sleep(3500);
		done();
	});
});
