//scrollreveal

window.sr = ScrollReveal();

sr.reveal('.animate-left' , {
  origin: 'left',
  duration: 1000,
  distance: '20rem',
  delay: 300
});

sr.reveal('.animate-right' , {
  origin: 'right',
  duration: 1000,
  distance: '20rem',
  delay: 600
});

sr.reveal('.animate-top' , {
  origin: 'top',
  duration: 1000,
  distance: '20rem',
  delay: 600
});

sr.reveal('.animate-bottom' , {
  origin: 'bottom',
  duration: 1000,
  distance: '20rem',
  delay: 600
});

// Clicktable images
  var x = document.getElementById("Clicktable-first");
  var y = document.getElementById("Clicktable-second");
  var k = document.getElementById("Clicktable-third");
  var m = document.getElementById("Clicktable-forth");
  var n = document.getElementById("Clicktable-fifth");
  var b = document.getElementById("Clicktable-sixth");
  var z = document.getElementById("Clicktable-origin");
  var text1 = document.getElementById("text1");
  var text2 = document.getElementById("text2");

function swaptext() {

  if (x.style.display == "block") {
    x.style.display = "none";
    z.style.display = "block";
  } else {
    x.style.display = "block";
    z.style.display = "none";
    y.style.display = "none";
    k.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    b.style.display = "none";
  }
}
function swaptextX2() {

  if (y.style.display == "block") {
    y.style.display = "none";
    z.style.display = "block";
  } else {
    y.style.display = "block";
    z.style.display = "none";
    x.style.display = "none";
    k.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    b.style.display = "none";
  }
}
function swaptextX3() {

  if (k.style.display == "block") {
    k.style.display = "none";
    z.style.display = "block";
  } else {
    k.style.display = "block";
    z.style.display = "none";
    y.style.display = "none";
    x.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    b.style.display = "none";
  }
}
function swaptextX4() {

  if (m.style.display == "block") {
    m.style.display = "none";
    z.style.display = "block";
  } else {
    m.style.display = "block";
    z.style.display = "none";
    y.style.display = "none";
    k.style.display = "none";
    x.style.display = "none";
    n.style.display = "none";
    b.style.display = "none";
  }
}
function swaptextX5() {

  if (n.style.display == "block") {
    n.style.display = "none";
    z.style.display = "block";
  } else {
    n.style.display = "block";
    z.style.display = "none";
    y.style.display = "none";
    k.style.display = "none";
    m.style.display = "none";
    x.style.display = "none";
    b.style.display = "none";
  }
}
function swaptextX6() {

  if (b.style.display == "block") {
    b.style.display = "none";
    z.style.display = "block";
  } else {
    b.style.display = "block";
    z.style.display = "none";
    y.style.display = "none";
    k.style.display = "none";
    m.style.display = "none";
    n.style.display = "none";
    x.style.display = "none";
  }
}


text2.style.display = "none";

function swap_text_and_img() {
 
  if (text2.style.display == "block"){
    text2.style.display = "none";
    text1.style.display = "block";
    document.getElementById("img1").src = "img/ori.jpg";
  } else {
    text2.style.display = "block";
    text1.style.display = "none";
    document.getElementById("img1").src = "img/ku.png";
  }
}

