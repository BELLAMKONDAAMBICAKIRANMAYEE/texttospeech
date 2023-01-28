function runSpeechRecognition()
{
    var output=document.getElementById("output");
    var action=document.getElementById("action");
 var SpeechRecognition=SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    console.log(recognition);

    recognition.onstart=function(){
        action.innerHTML ="<small>listening,please speak...</small>"
    }
    recognition.onspeechend=function(){
        action.innerHTML ="<small>listening,Hope you are completed...</small>"
    }
    recognition.onresult=function(event){

        var transcript = event.results[0][0].transcript;
var confidence =event.results[0][0].confidence;

console.log(transcript);
console.log(confidence);
        output.innerHTML ="<b>Text</b>"+transcript+"</br><b>Confidence</b>"+confidence;

    }
    recognition.start();
}