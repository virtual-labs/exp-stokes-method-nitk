let size = 30;
let pcheck;

function blurring() {
    if (blurr == true) {
        document.getElementById("simoptions").style.filter = 'blur(2px)';
        document.getElementById("mainsimulation").style.filter = 'blur(2px)';
        document.getElementById("buttondown").style.filter = 'blur(2px)';
    } else if (blurr == false) {
        document.getElementById("simoptions").style.filter = 'blur(0px)';
        document.getElementById("mainsimulation").style.filter = 'blur(0px)';
        document.getElementById("buttondown").style.filter = 'blur(0px)';
    }
}

// Next button
let a = 1;

function up() {
    a += 1;
    next()
}

function down() {
    a -= 1;
    next()
}

function next() {
    if (a == 1) {
        document.getElementById("buttondown").style.display = 'none';
        document.getElementById("buttonup").style.display = 'block';
        document.getElementById("content").style.display = 'block';
        document.getElementById("content2").style.display = 'none';
    } else if (a == 2) {
        document.getElementById("buttondown").style.display = 'block';
        document.getElementById("content").style.display = 'none';
        document.getElementById("content2").style.display = 'block';
        document.getElementById("content3").style.display = 'none';
        document.getElementById("buttonup").style.display = 'none';
        document.getElementById("observation").style.display = 'none';
    } else if (a == 3) {
        document.getElementById("buttonup").style.display = 'none';
        document.getElementById("content2").style.display = 'none';
        document.getElementById("content3").style.display = 'block';
        closeobservation();
        plotting();
    }
}

// procedure selection
function update() {
    let select = document.getElementById('exp');
    let option = select.options[select.selectedIndex].value;
    if (option == 'copperball') {
        document.getElementById("copperball").style.display='block';
        document.getElementById("glassball").style.display='none';
        document.getElementById("cball1").style.display='none';
        pcheck = true;
        remove();
    }else if(option == 'glassball'){
        document.getElementById("copperball").style.display='none';
        document.getElementById("glassball").style.display='block';
        document.getElementById("cball1").style.display='none';
        pcheck = false;
        remove();
    }
    
}

document.getElementById("Slider").addEventListener("change", slidercurrent);

function slidercurrent() {
    size = Slider.value;
    let img = document.getElementById("copperball");
    let img1 = document.getElementById("glassball");
    img.style.width = `${Slider.value}px`;
    img.style.height = `${Slider.value}px`;
    img1.style.width = `${Slider.value}px`;
    img1.style.height = `${Slider.value}px`;
}


function insert(){
    document.getElementById("remove").style.display = 'block';
    document.getElementById("insert").style.display = 'none';
    document.getElementById("drop").disabled = false;
    document.getElementById("Slider").disabled = true;
    document.getElementById("Slider").style.opacity = 0.5;
    if (pcheck == true) {
        document.getElementById("cball1").style.display = 'block';
        document.getElementById("copperball").style.display = 'none';
        document.getElementById("cball1").style.height = `${size}px`;
        document.getElementById("gball1").style.display='none';
    } else if (pcheck == false) {
        document.getElementById("gball1").style.height = `${size}px`;
        // document.getElementById('glassball').style.top='95px';
        // document.getElementById('glassball').style.left='478px';
        document.getElementById("cball1").style.display='none';
        document.getElementById("gball1").style.display='block';
        document.getElementById('glassball').style.display='none';
    }
}

function remove(){
    document.getElementById("remove").style.display = 'none';
    document.getElementById("insert").style.display = 'block';
    document.getElementById('cball2').style.display='none';
    document.getElementById("gball2").style.display ='none';
    document.getElementById("drop").disabled = true;
    document.getElementById("Slider").disabled = false;
    document.getElementById("Slider").style.opacity = 1;
    if (pcheck == true) {
        document.getElementById("cball1").style.display='none';
        document.getElementById("copperball").style.display='block';
        document.getElementById("gball1").style.display='none';     
    } else if (pcheck == false) {
        document.getElementById("cball1").style.display='none';
        document.getElementById("gball1").style.display='none';
        document.getElementById('glassball').style.display='block'; 
    }
    
}

function dropball(){
    if(pcheck ==true){
        document.getElementById("cball2").style.height = `${size}px`;
        document.getElementById("cball1").style.display = 'none';
        document.getElementById("cball2").style.display = 'block';
        document.getElementById("cball2").style.animationName = 'dropping';
        document.getElementById("copperball").style.display='none';
    } else if (pcheck == false){
        document.getElementById("gball2").style.height = `${size}px`;
        document.getElementById("gball2").style.animationName='dropping';
        document.getElementById("gball1").style.display = 'none';
        document.getElementById("gball2").style.display = 'block';
        document.getElementById('glassball').style.display='none';
    }
    
}

function Refresh() {
    window.location = window.location.href;
};

function updateliquid() {
    let select = document.getElementById('liquid');
    let option = select.options[select.selectedIndex].value;
    if (option == 'glycerine') {
        document.getElementById("glycerine").style.display='block';
        document.getElementById("honey").style.display='none';
    }else if(option == 'honey'){
        document.getElementById("honey").style.display='block';
        document.getElementById("glycerine").style.display='none';
    }
    
}