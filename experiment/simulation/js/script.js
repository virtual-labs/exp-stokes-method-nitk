const canvas = document.querySelector("#simscreen");
const taskTitle = document.querySelector(".task-title");

function displayDiv(ele) {
  const taskScreen = document.querySelectorAll(".task-screen");
  taskScreen.forEach((task) => {
    task.classList.add("hide");
  });
  if (ele.classList.contains("tool-objective")) {
    document.querySelector(".objective").classList.remove("hide");
    taskTitle.textContent = "Objective";
    document.getElementById("variables").style.display = "none";
  }
  if (ele.classList.contains("tool-apparatus")) {
    document.querySelector(".apparatus").classList.remove("hide");
    taskTitle.textContent = "Apparatus";
    document.getElementById("variables").style.display = "none";
  }
  if (ele.classList.contains("tool-practice")) {
    document.querySelector(".practice").classList.remove("hide");
    taskTitle.textContent = "Experiment";
    document.getElementById("variables").style.display = "block";
  }
}

let size = 30;
let pcheck;
let gly_d = 1260;
let wa_d = 997;
let ho_d = 1420;
let glass_d = 2600;
let copper_d = 8600;
let r = size / 2;
let ball_density;
let liq_density;
let meu;
let res_liquid = "-";
let v;

function blurring() {
  if (blurr == true) {
    document.getElementById("simoptions").style.filter = "blur(2px)";
    document.getElementById("mainsimulation").style.filter = "blur(2px)";
    document.getElementById("buttondown").style.filter = "blur(2px)";
  } else if (blurr == false) {
    document.getElementById("simoptions").style.filter = "blur(0px)";
    document.getElementById("mainsimulation").style.filter = "blur(0px)";
    document.getElementById("buttondown").style.filter = "blur(0px)";
  }
}

// Next button
let a = 1;

function up() {
  a += 1;
  next();
}

function down() {
  a -= 1;
  next();
}

function next() {
  if (a == 1) {
    document.getElementById("buttondown").style.display = "none";
    document.getElementById("buttonup").style.display = "block";
    document.getElementById("content").style.display = "block";
    document.getElementById("content2").style.display = "none";
  } else if (a == 2) {
    // document.getElementById("Slider").disabled = true;
    // document.getElementById("Slider").style.opacity = 0.5;
    document.getElementById("buttondown").style.display = "block";
    document.getElementById("content").style.display = "none";
    document.getElementById("buttonup").style.display = "none";
    document.getElementById("content2").style.display = "block";
    document.getElementById("content3").style.display = "none";
    document.getElementById("observation").style.display = "none";
  } else if (a == 3) {
    document.getElementById("buttonup").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "block";
    // close();
    // plotting();
  }
}

let optionball;

// procedure selection
function update() {
  let select = document.getElementById("exp");
  optionball = select.options[select.selectedIndex].value;
  document.getElementById("insert").disabled = false;
  if (optionball == "copperball") {
    document.getElementById("copperball").style.display = "block";
    document.getElementById("glassball").style.display = "none";
    document.getElementById("cball1").style.display = "none";
    ball_density = copper_d;
    document.getElementById("balldensity").innerHTML =
      copper_d + " Kg/m<sup>3</sup>";
    pcheck = true;
    remove();
  } else if (optionball == "glassball") {
    document.getElementById("copperball").style.display = "none";
    document.getElementById("glassball").style.display = "block";
    document.getElementById("cball1").style.display = "none";
    ball_density = glass_d;
    document.getElementById("balldensity").innerHTML =
      glass_d + " Kg/m<sup>3</sup>";
    pcheck = false;
    remove();
  }
}

// document.getElementById("Slider").addEventListener("change", slidercurrent);

// function slidercurrent() {
//     size = Slider.value;
//     document.getElementById("diameter").innerHTML = (size - 10) + " mm";
//     let img = document.getElementById("copperball");
//     let img1 = document.getElementById("glassball");
//     img.style.width = `${size}px`;
//     img.style.height = `${size}px`;
//     img1.style.width = `${size}px`;
//     img1.style.height = `${size}px`;
// }

function insert() {
  if (optionliq == "Empty") {
    alert("Please select a liquid before inserting the ball.");
  } else {
    document.getElementById("liquid").disabled = true;
    document.getElementById("exp").disabled = true;
    document.getElementById("remove").style.display = "block";
    document.getElementById("insert").style.display = "none";
    document.getElementById("drop").disabled = false;
    // document.getElementById("Slider").disabled = true;
    // document.getElementById("Slider").style.opacity = 0.5;
    if (pcheck == true) {
      document.getElementById("cball1").style.display = "block";
      document.getElementById("copperball").style.display = "none";
      document.getElementById("cball1").style.height = `${size}px`;
      document.getElementById("gball1").style.display = "none";
    } else if (pcheck == false) {
      document.getElementById("gball1").style.height = `${size}px`;
      // document.getElementById('glassball').style.top='95px';
      // document.getElementById('glassball').style.left='478px';
      document.getElementById("cball1").style.display = "none";
      document.getElementById("gball1").style.display = "block";
      document.getElementById("glassball").style.display = "none";
    }
    document.getElementById("button-reset").click();
  }
}

function remove() {
  document.getElementById("result").disabled = true;
  document.getElementById("resulttext").style.display = "none";
  document.getElementById("liquid").disabled = false;
  document.getElementById("exp").disabled = false;
  document.getElementById("remove").style.display = "none";
  document.getElementById("insert").style.display = "block";
  document.getElementById("cball2").style.display = "none";
  document.getElementById("gball2").style.display = "none";
  document.getElementById("drop").disabled = true;
  // document.getElementById("Slider").disabled = false;
  // document.getElementById("Slider").style.opacity = 1;
  if (pcheck == true) {
    document.getElementById("cball1").style.display = "none";
    document.getElementById("copperball").style.display = "block";
    document.getElementById("gball1").style.display = "none";
  } else if (pcheck == false) {
    document.getElementById("cball1").style.display = "none";
    document.getElementById("gball1").style.display = "none";
    document.getElementById("glassball").style.display = "block";
  }
}

function dropball() {
  if (pcheck == true) {
    document.getElementById("cball2").style.height = `${size}px`;
    document.getElementById("cball1").style.display = "none";
    document.getElementById("cball2").style.display = "block";
    document.getElementById("cball2").style.animationName = "dropping";
    document.getElementById("copperball").style.display = "none";
  } else if (pcheck == false) {
    document.getElementById("gball2").style.height = `${size}px`;
    document.getElementById("gball2").style.animationName = "dropping";
    document.getElementById("gball1").style.display = "none";
    document.getElementById("gball2").style.display = "block";
    document.getElementById("glassball").style.display = "none";
    if (res_liquid == "Honey") {
      document.getElementById("gball2").style.animationDuration = "5s";
    } else if (res_liquid == "Glycerine") {
      document.getElementById("gball2").style.animationDuration = "5s";
    } else if (res_liquid == "Water") {
      document.getElementById("gball2").style.animationDuration = "5s";
    }
  }
  timer();
}

function Refresh() {
  window.location = window.location.href;
}
let optionliq = "Empty";
function updateliquid() {
  let select = document.getElementById("liquid");
  optionliq = select.options[select.selectedIndex].value;
  if (optionliq == "glycerine") {
    document.getElementById("glycerine").style.display = "block";
    document.getElementById("honey").style.display = "none";
    document.getElementById("water").style.display = "none";
    document.getElementById("liquiddensity").innerHTML =
      gly_d + " Kg/m<sup>3</sup>";
    res_liquid = "Glycerine";
    liq_density = gly_d;
  } else if (optionliq == "honey") {
    document.getElementById("honey").style.display = "block";
    document.getElementById("glycerine").style.display = "none";
    document.getElementById("water").style.display = "none";
    document.getElementById("liquiddensity").innerHTML =
      ho_d + " Kg/m<sup>3</sup>";
    res_liquid = "Honey";
    liq_density = ho_d;
  } else if (optionliq == "water") {
    document.getElementById("water").style.display = "block";
    document.getElementById("glycerine").style.display = "none";
    document.getElementById("honey").style.display = "none";
    document.getElementById("liquiddensity").innerHTML =
      wa_d + " Kg/m<sup>3</sup>";
    res_liquid = "Water";
    liq_density = wa_d;
  }
}

function timer() {
  setTimeout(starttim, 1000);
  setTimeout(stoptim, 4010);
  // setTimeout(stoptim,5000);
  var seconds = 0;
  var tens = 0;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  function starttim() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  function stoptim() {
    clearInterval(Interval);
    if (res_liquid == "Honey") {
      if (pcheck == true) {
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "40";
      } else if (pcheck == false) {
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "67";
      }
    } else if (res_liquid == "Glycerine") {
      if (pcheck == true) {
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "22";
      } else if (pcheck == false) {
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "33";
      }
    } else if (res_liquid == "Water") {
      if (pcheck == true) {
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "15";
      } else if (pcheck == false) {
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "18";
      }
    }
    document.getElementById("result").disabled = false;
  }

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
}

function result() {
  document.getElementById("resulttext").style.display = "block";
  document.getElementById("resliquid").innerHTML = res_liquid;

  if (optionliq == "glycerine") {
    meu = 0.95;
  } else if (optionliq == "water") {
    meu = 0.00089;
  } else if (optionliq == "honey") {
    meu = 10;
  }
  document.getElementById("viscocity").innerHTML = meu + " Nm<sup>-2</sup>s";
}

//Reset button function

function Refresh() {
  window.location = window.location.href;
}
