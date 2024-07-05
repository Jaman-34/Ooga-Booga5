let Monke;

function preload (){
    Monke = loadModel('/models/amongus', true);
}

function setup(){
    let canv = createCanvas(800, 800, WEBGL);
    canv.parent("pho");
}

function draw(){
    background(255);
    orbitControl();
    normalMaterial();
    model(amongus);

}