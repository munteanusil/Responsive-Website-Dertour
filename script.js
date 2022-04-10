function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }



  function openCards(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontenty");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinksy");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  let slideIndex = 0;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  let myTimer;
  let playing = true;

  showSlides();

  function showSlides() {
    if (playing) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      dots[slideIndex - 1].className += " active";
      slides[slideIndex - 1].style.display = "block";
      myTimer = setTimeout(showSlides, 6000); // Change every 2 seconds
    } else {
      return;
    }
  }

  function currentSlide(no) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex = no;
    slides[no - 1].style.display = "block";
    dots[no - 1].className += " active";
    clearTimeout(myTimer);
    myTimer = setTimeout(showSlides, 2000);
  }

  function manualControl(IncrementNumber) {
    var newslideIndex = slideIndex + IncrementNumber;
    if (newslideIndex < 4 && newslideIndex > 0) {
      currentSlide(newslideIndex);
    }
    if (newslideIndex == 4) {
      currentSlide(1);
    }
    if (newslideIndex == 0) {
      currentSlide(3);
    }
    
  }


//SCRIPT BACK TO TOP BUTTON//
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//SIDEBAR//

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

function w3_opentwo() {
  document.getElementById("mySidebartwo").style.display = "block";
}

function w3_closetwo() {
  document.getElementById("mySidebartwo").style.display = "none";
}
