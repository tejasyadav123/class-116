noseX=0;
noseY=0;

function preload(){
img = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup(){
    canvas = createCanvas(300 , 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose' , gotposes)
}

function draw(){
    image(video , 0 , 0 , 300 , 300)
    //circle( noseX, noseY, 30)
    image(img, noseX-10, noseY-10, 30, 30)
}

function take_snapshot(){
    save('jokarFilter.png')
}

function modelLoaded(){
    console.log("posenet is loaded")
}

function gotposes(result){
if(result.length > 0){
    console.log(result)
    console.log("nose x =" + result[0].pose.nose.x)
    console.log("nose y =" + result[0].pose.nose.y)
    noseX=result[0].pose.nose.x
    noseY=result[0].pose.nose.y
}

}