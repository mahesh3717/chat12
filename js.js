<script>
var transcription = document.getElementById('transcription');
var log = document.getElementById('log');
</script>
var start = document.getElementById('speechButton');
var clear = document.getElementById('clear-all');
var speaking = false;
window.SpeechRecognition = window.SpeechRecognition ||
	window.webkitSpeechRecognition ||
	null;
if (window.SpeechRecognition === null) {
	document.getElementById('unsupported').classList.remove('hidden');
	start.classList.add('hidden');
} else {
    var recognizer = new window.
    SpeechRecognition();
    recognizer.continuous = true;
    recognizer.onresult = function(event) {
    	transcription.textContent = '';
    	for (var i = event.resultIndex; i < event.
    	results.length; i++) {
            if (event.results[i].isFinal) {
            		transcription.textContent = event.results[i][0].transcript;
            	} else {
            		transcription.textContent += event.results[i][0].transcript;
            		}
            	}
            };
            recognizer.onerror = function(event) {
            	log.innerHTML = 'Recognition error: ' +
            	event.message + '<br />' + log.innerHTML;
            };
