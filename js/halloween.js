var halloween = '<em>Halloween</em>';
function translate(language) {
	var daysToNext = document.getElementById('days-to-next');
	var selectLanguage = document.getElementById('select-open');
	var selectDefault = document.getElementById('select-default');
	// var installBtn = document.getElementById('install');
	
	language = (language == '--') ? (navigator.language || navigator.userLanguage) : (language || localStorage['language'] || navigator.language || navigator.userLanguage);
	
	localStorage['language'] = language;
	
	switch (language.substring(0, 2)) {
		case 'da':
				daysToNext.innerHTML = 'dage til næste '+halloween;
				selectDefault.innerHTML = 'Standard';
				selectLanguage.innerHTML = 'Vælg';
				// installBtn.innerHTML = 'Installere';
				break;
		case 'de':
				daysToNext.innerHTML = 'Tage zum nächsten '+halloween;
				selectDefault.innerHTML = 'Default';
				selectLanguage.innerHTML = 'Wählen';
				// installBtn.innerHTML = 'Installiere';
				break;
		case 'en':
				daysToNext.innerHTML = 'days to next '+halloween;
				selectDefault.innerHTML = 'Default';
				selectLanguage.innerHTML = 'Select';
				// installBtn.innerHTML = 'Install';
				break;
		case 'eo':
				daysToNext.innerHTML = 'tagojn por la proksima '+halloween;
				selectDefault.innerHTML = 'Implicite';
				selectLanguage.innerHTML = 'Elekti';
				// installBtn.innerHTML = 'Instali';
				break;
		case 'es':
				daysToNext.innerHTML = 'días hasta la siguiente de '+halloween;
				selectDefault.innerHTML = 'Seleccionar';
				selectLanguage.innerHTML = 'Defecto';
				// installBtn.innerHTML = 'Instalar';
				break;
		case 'fi':
				daysToNext.innerHTML = 'päivää seuraavaan '+halloween;
				selectDefault.innerHTML = 'Oletusarvo';
				selectLanguage.innerHTML = 'Valita';
				// installBtn.innerHTML = 'Asentaa';
				break;
		case 'fr':
				daysToNext.innerHTML = 'jours à '+halloween+' prochaine';
				selectDefault.innerHTML = 'Défaut';
				selectLanguage.innerHTML = 'Sélectionner';
				// installBtn.innerHTML = 'Installer';
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
				// installBtn.innerHTML = 'Setja';
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
				// installBtn.innerHTML = 'Installeren';
				break;
		case 'no':
				daysToNext.innerHTML = 'dager til neste '+halloween;
				selectDefault.innerHTML = 'Standard';
				selectLanguage.innerHTML = 'Velg';
				// installBtn.innerHTML = 'Installere';
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
				// installBtn.innerHTML = 'устанавливать';
				break;
		case 'sv':
				daysToNext.innerHTML = 'dagar till nästa '+halloween;
				selectDefault.innerHTML = 'Standard';
				selectLanguage.innerHTML = 'Välj';
				// installBtn.innerHTML = 'Installera';
				break;
		default:
				daysToNext.innerHTML = 'days to next '+halloween;
				selectDefault.innerHTML = 'Default';
				selectLanguage.innerHTML = 'Select';
				// installBtn.innerHTML = 'Install';
				break;
	}
}

window.onload = function() {
	translate();
	
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
	}
	
	idle();
	setInterval(idle, 30000);
	
	var languageSelect = document.getElementById('language-select');
	var languagesLI = languageSelect.getElementsByTagName('li');
	var languageNo = languagesLI.length -1;
	
	/*var install = null;
	var manifest_url = 'http://mastro-elfo.github.io/halloween/manifest.webapp';
	if (location.href.indexOf('mastro-elfo.github.io/halloween/') != -1 && window.navigator && window.navigator.mozApps) {
		var request = window.navigator.mozApps.checkInstalled(manifest_url);
		request.onsuccess = function() {
				install = document.getElementById('install');
				install.addEventListener('click', function(){
					var request = window.navigator.mozApps.install(manifest_url);
					request.onerror = function(){
						alert('Error: '+ this.error.name);
					}
				});
		};
		request.onerror = function() {
				alert('Error: '+ this.error.name);
		}
	}*/
	
	setInterval(function(){
		var width = parseInt(window.innerWidth || document.documentElement.offsetWidth || document.body.offsetWidth || 640);
		var height = parseInt(window.innerHeight || document.documentElement.offsetHeight || document.body.offsetHeight || 400);
		
		if (typeof document.body.style['font-size'] != 'undefined') {
			document.body.style['font-size'] = (width /1366 *128)+'px';
		}
		else {
			document.body.style = 'font-size: '+(width /1366 *128)+'px';
		}
		
		if (typeof languageSelect.style['font-size'] != 'undefined') {
				languageSelect.style['font-size'] = (height /languageNo /2) +'px';
		}
		else {
				languageSelect.style = 'font-size: '+(height /languageNo /2) +'px';
		}
		
		/*if (install) {
				if (typeof languageSelect.style['font-size'] != 'undefined') {
						install.style['font-size'] = (height /languageNo /2) +'px';
				}
				else {
						install.style = 'font-size: '+(height /languageNo /2) +'px';
				}
		}*/
	}, 100);
	
	for (var i=1; i<languagesLI.length; i++) {
		(function(li){
				li.addEventListener('click', function(){
						translate(li.getAttribute('data-lang'));
				});
		})(languagesLI[i]);
	}
}