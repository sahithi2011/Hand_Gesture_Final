prediction_1 ="";
prediction_2 ="";

Webcam.set({
    width:350,
    height:300,
    image_format : 'jpeg',
    jpeg_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'" />'
});

}


console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3qZ5Ro3ML/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The Hand Gesture Predicted Is " + prediction_1;
    speak_data_2 = "And The Hand Gesture Predicted Second Is " + prediction_2;
    var utter_this =new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    utter_this.rate = 1.0;
    synth.speak(utter_this);


}




function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
    
     //1st Prediction

    if(results[0].label == "amaizing"){
        document.getElementById("update_emoji").innerHTML = "&#128076;";
    }
    if(results[0].label == "best"){
        document.getElementById("update_emoji").innerHTML = "&#128077;";
    }
    if(results[0].label == "victory"){
        document.getElementById("update_emoji").innerHTML = "&#9996;";
    }
    if(results[0].label == "fight"){
        document.getElementById("update_emoji").innerHTML = "&#9994;";
    }
    if(results[0].label == "rock"){
        document.getElementById("update_emoji").innerHTML = "&#129304;";
    }
    if(results[0].label == "call_me"){
        document.getElementById("update_emoji").innerHTML = "🤙";
    }
    if(results[0].label == "namaste"){
        document.getElementById("update_emoji").innerHTML = "🙏";
    }
    
    //2nd Prediction
    
    if(results[1].label == "amaizing"){
        document.getElementById("update_emoji2").innerHTML = "&#128076;";
    }
    if(results[1].label == "best"){
        document.getElementById("update_emoji2").innerHTML = "&#128077;";
    }
    if(results[1].label == "victory"){
        document.getElementById("update_emoji2").innerHTML = "&#9996;";
    }
    if(results[1].label == "fight"){
        document.getElementById("update_emoji2").innerHTML = "&#9994;";
    }
    if(results[1].label == "rock"){
        document.getElementById("update_emoji2").innerHTML = "&#129304;";
    }
    if(results[1].label == "call_me"){
        document.getElementById("update_emoji2").innerHTML = "🤙";
    }
    if(results[1].label == "namaste"){
        document.getElementById("update_emoji2").innerHTML = "🙏";
    }
    }
    }





function modelLoaded(){
    console.log('Model Loaded!!');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}


    
   