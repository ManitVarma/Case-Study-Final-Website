Webcam.set({
    width: 310,
    hegiht: 300,
    img_formate: 'png',
    png_qualitiy: 90
})
camera = document.getElementById("camera")
Webcam.attach(camera)

function take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_img' src='"+data_uri+"'/>";
    });
}
console.log("ml5version", ml5.version);

classifier = ml5.imageClassifier("MobileNet", modelloaded);

function modelloaded(){
    console.log("modelloaded");
}
function Check(){
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);

}
function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object_div").innerHTML = result[0].label;
    }
}