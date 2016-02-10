var halloween = '<em>Halloween</em>';

window.onload = function() {
	var h = document.getElementById('h-day');
	var d = document.getElementById('d-day');
	var u = document.getElementById('u-day');
	
	function idle() {
		var today = new Date();
		var month = today.getMonth();
		
		var next = new Date();
		next.setMonth(9);
		next.setDate(31);
		if (month > 9) {
			next.setFullYear(today.getFullYear() +1);
		}
		else {
			next.setFullYear(today.getFullYear());
		}
		
		var difference = (next.getTime() - today.getTime()) / 1000 /60 /60 /24;
		
		var uu = Math.floor(difference % 10);
		var dd = Math.floor(difference /10 %10);
		var hh = Math.floor(difference /100 %10);
		
		h.innerHTML = hh;
		d.innerHTML = dd;
		u.innerHTML = uu;
		
		document.title = '' + hh + dd + uu + ' ' + document.getElementById('days-to-next').innerHTML.replace('<em>', '').replace('</em>', '');
		
		domtoimage.toPng(document.body)
			.then(function (dataUrl) {
				document.getElementById('og-image').setAttribute('content', dataUrl);
			})
			.catch(function (error) {
				console.error('oops, something went wrong!', error);
			});
	}
	
	function translate(language) {
		var daysToNext = document.getElementById('days-to-next');
		var selectLanguage = document.getElementById('select-open');
		var selectDefault = document.getElementById('select-default');
		
		language = (language == '--') ? (navigator.language || navigator.userLanguage) : (language || localStorage['language'] || navigator.language || navigator.userLanguage);
		
		localStorage['language'] = language;
		
		switch (language.substring(0, 2)) {
			case 'da':
					daysToNext.innerHTML = 'dage til næste '+halloween;
					selectDefault.innerHTML = 'Standard';
					selectLanguage.innerHTML = 'Vælg';
					break;
			case 'de':
					daysToNext.innerHTML = 'Tage zum nächsten '+halloween;
					selectDefault.innerHTML = 'Default';
					selectLanguage.innerHTML = 'Wählen';
					break;
			case 'en':
					daysToNext.innerHTML = 'days to next '+halloween;
					selectDefault.innerHTML = 'Default';
					selectLanguage.innerHTML = 'Select';
					break;
			case 'eo':
					daysToNext.innerHTML = 'tagojn por la proksima '+halloween;
					selectDefault.innerHTML = 'Implicite';
					selectLanguage.innerHTML = 'Elekti';
					break;
			case 'es':
					daysToNext.innerHTML = 'días hasta la siguiente de '+halloween;
					selectDefault.innerHTML = 'Seleccionar';
					selectLanguage.innerHTML = 'Defecto';
					break;
			case 'fi':
					daysToNext.innerHTML = 'päivää seuraavaan '+halloween;
					selectDefault.innerHTML = 'Oletusarvo';
					selectLanguage.innerHTML = 'Valita';
					break;
			case 'fr':
					daysToNext.innerHTML = 'jours à '+halloween+' prochaine';
					selectDefault.innerHTML = 'Défaut';
					selectLanguage.innerHTML = 'Sélectionner';
					break;
			case 'gr':
					daysToNext.innerHTML = 'Ημέρες στο επόμενο '+halloween;
					selectDefault.innerHTML = 'Προεπιλογή';
					selectLanguage.innerHTML = 'Επιλέξτε';
					// installBtn.innerHTML = 'Εγκατάσταση';
					break;
			case 'is':
					daysToNext.innerHTML = 'dagar til næsta ' +halloween;
					selectDefault.innerHTML = 'Sjálfgefið';
					selectLanguage.innerHTML = 'Velja';
					break;
			case 'it':
					daysToNext.innerHTML = 'giorni al prossimo '+halloween;
					selectDefault.innerHTML = 'Predefinito';
					selectLanguage.innerHTML = 'Seleziona';
					// installBtn.innerHTML = 'Installare';
					break;
			case 'nl':
					daysToNext.innerHTML = 'dagen tot de volgende '+halloween;
					selectDefault.innerHTML = 'Kiezen';
					selectLanguage.innerHTML = 'Verzuim';
					break;
			case 'no':
					daysToNext.innerHTML = 'dager til neste '+halloween;
					selectDefault.innerHTML = 'Standard';
					selectLanguage.innerHTML = 'Velg';
					break;
			case 'pt':
					daysToNext.innerHTML = 'dias para o próximo '+halloween;
					selectDefault.innerHTML = 'Omissão';
					selectLanguage.innerHTML = 'Selecionar';
					// installBtn.innerHTML = 'Instalar';
					break;
			case 'ru':
					daysToNext.innerHTML = 'Дней до следующего '+halloween.replace('Halloween', 'Хэллоуина');
					selectDefault.innerHTML = 'дефолт';
					selectLanguage.innerHTML = 'выбрать';
					break;
			case 'sv':
					daysToNext.innerHTML = 'dagar till nästa '+halloween;
					selectDefault.innerHTML = 'Standard';
					selectLanguage.innerHTML = 'Välj';
					break;
			default:
					daysToNext.innerHTML = 'days to next '+halloween;
					selectDefault.innerHTML = 'Default';
					selectLanguage.innerHTML = 'Select';
					break;
		}
		idle();
	}

	translate();
	idle();
	setInterval(idle, 30000);
	
	var languageSelect = document.getElementById('language-select');
	var languagesLI = languageSelect.getElementsByTagName('li');
	var languageNo = languagesLI.length -1;
	
	shareFacebook = document.getElementById('share-facebook');
	var shareUl = document.getElementById('share');
	
	setInterval(function(){
		var width = parseInt(window.innerWidth || document.documentElement.offsetWidth || document.body.offsetWidth || 640);
		var height = parseInt(window.innerHeight || document.documentElement.offsetHeight || document.body.offsetHeight || 400);
		
		if (typeof document.body.style['font-size'] != 'undefined') {
			document.body.style['font-size'] = (width /1366 *150)+'px';
		}
		else {
			document.body.style = 'font-size: '+(width /1366 *150)+'px';
		}
		
		if (typeof languageSelect.style['font-size'] != 'undefined') {
				shareUl.style['font-size'] = languageSelect.style['font-size'] = (height /languageNo /2) +'px';
		}
		else {
				shareUl.style = languageSelect.style = 'font-size: '+(height /languageNo /2) +'px';
		}
	}, 100);
	
	for (var i=1; i<languagesLI.length; i++) {
		(function(li){
				li.addEventListener('click', function(){
						translate(li.getAttribute('data-lang'));
				});
		})(languagesLI[i]);
	}
	
	shareFacebook.addEventListener('click', function(){
		window.open('http://www.facebook.com/sharer.php?' +
					'u='+encodeURIComponent(location.href) +
					'&t='+encodeURIComponent(document.title),
					' sharer', 'toolbar=0, status=0, width=626, height=436');
		return false;
	});
	
	// Install
	(function(){
		if ((!navigator.mozApps) || (!navigator.mozApps.getSelf)) {
			/*-----------------------------------------------------------+
			|| Test to see if the Mozilla Apps Web Runtime is supported
			|| HACK: Testing for either mozApps OR mozApps.getSelf is a
			|| hack.
			|| This is needed because some pre-beta versions of Firefox
			|| have the object present but nit fully implemented.
			|| TODO: Update when Firefox Desktop & Mobile are complete.
			------------------------------------------------------------*/
			return;
		}
	 
		var MyAppSelf = navigator.mozApps.getSelf();
		MyAppSelf.onsuccess = function() {
			if (! this.result) {
				// Application is not "installed"
				var install = document.getElementById('install');
				install && install.setAttribute('class', '');
				install && (install.onclick = function() {
					var installation = navigator.mozApps.install('http://' + location.hostname +'/manifest.webapp');
					installation.onsuccess = function() {
						install.setAttribute('class', 'hidden');
						// alert("K.O. Timer has been successfully installed.....");
					}
					installation.onerror = function() {
						alert("APP: The installation FAILED : " + this.error.name +"\n"+
							  'http://' + location.hostname +'/manifest.webapp');
					}
				});
			}
			else {
				 // This "MozApp" is already installed.
				 //alert('App is already installed');
			}
			return;
		}
		MyAppSelf.onerror = function() {
			//alert('Error checking installation status: ' +this.error.message);
			return;
		}
	})();
}