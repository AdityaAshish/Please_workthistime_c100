var SpeechRecognition= window.webkitSpeechRecognition
var Recognition= new SpeechRecognition();

function start() {
    document.getElementById("textarea").innerHTML=""
    Recognition.start();

}

Recognition.onresult=function(event) {
    console.log(event);
    var content=event.results[0] [0].transcript;
    document.getElementById("textarea").innerHTML=content;
    if (content=="take my selfie") {
        console.log("Taking Selfie...");
        speak();
    }
}

function speak(){
    var synth=window.speechSynthesis;
    var speakdata= "taking your selfie in 5 seconds";
    var utterThis= new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function(){
    takeSnapshot();
    save();
},5000) 
}
 
camera= document.getElementById("webcam_div");
Webcam.set({
    width: 360, 
    height:250, 
    imageformat: "jpeg", 
    jpeg_quality:90
});

function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("selfieoutupt_div").innerHTML= '<img id="selfie_image" src="'+data_uri+'"/>';
    } );
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();

}
