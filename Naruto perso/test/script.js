<!-- <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
</head>
<body>
 <div class="slider-container slider-1">
  <div class="slider">
    <div class="baniere 1 d-flex">
      <img src="event1.png" alt="">
      <img src="event2.png" alt="">
      <img src="event3.png" alt="">
      <img src="event4.png" alt="">
      <img src="event1.png" alt="">
      <img src="event2.png" alt="">
  </div>
 </div> 
</body>
</html> -->





<!-- dropdown -->
<!-- <!DOCTYPE html>
<html>
<head>
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.dropbtn {
  color: black;
  padding: 15px;
  font-size: 25px;
  cursor: pointer;
  border-radius:50%;
  border: solid 2px black;
  
}
.dropbtn::before{
content: "\f078";
font-family: "Font Awesome 6 Free";
     position: absolute;
     top: 0px;
     left: 0px;
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 1em;
     font-weight: 600;
     background-color: orange;
     border-radius:50%;
  border: solid 2px black;
}

.dropbtn:hover, .dropbtn:focus {
  background-color:white;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 140px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  text-align:center;
  border-radius:2%;
}

.dropdown-content a {
  color: black;
  padding: 12px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: orange;}

.show {display: block;}
</style>
</head>
<body style="background-color:white;">

<h2>Clickable Dropdown</h2>
<p>Click on the button to open the dropdown menu.</p>

<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn"></button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</div>

<script> -->
<!-- /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
// </script>

// </body>
// </html> -->


<!-- <div class="mobilhead centered  d-flex center">
  <div class="mobilenav">
    <i class="fa-solid fa-circle-chevron-down dropdown"></i>
    <ul class="deroulant">
      
       </ul> 
  </div> -->

  <!-- coursel with fleche -->

  /* *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    background: black;
    font-family: Arial, Helvetica, sans-serif;
} */
/*
.d-flex{
    display: flex;
}

.slider-1{
    max-width: 60%; 
    margin: 100px auto;
    overflow: hidden;
    border: 1px solid aliceblue;
}

.slider-1 .slider{
    display: flex;
    animation: slider-1 15s infinite ease-in-out;
}

.slider-1 .baniere{
    background-color: gray;

    padding: 20px 10px;
    width: 100%;
color: aliceblue;
font-size: xx-large;
}


img{
height: 202px;
width: 33.333%;
padding: 0 10px;
object-fit: contain;
} */

/* 

5% trabsition 4*5= 20
nb de pause : 
il reste 80(%) /4 = 20 % par pause image
 20
 80/20 40%

*/
/* @keyframes slider-1 {
    0%,
    40% {
      transform: translateX(0);
    }
    45%,
    100% {
      transform: translateX(-100%);
    }
   
  } 



 */


/* oublei pas de le fermer */






  
  /* Verticale */
  
  /* .slider-2 {
    max-width: 600px;
    height: 200px;
    margin: 100px auto;
    overflow: hidden;
    border: 1px solid #f1f1f1;
  }
  .slider-2 .slider {
    height: 100%;
    animation: slider-2 12s infinite ease-in-out;
     */
    /* Pour inverser l'animation */
    /* display: flex; 
    flex-direction: column-reverse; */
  /* }
  .slider-2 p {
    flex-shrink: 0;
    padding: 72px 0;
    width: 100%;
    text-align: center;
    font-size: 45px;
    color: #f1f1f1;
  }
  @keyframes slider-2 {
    0%,
    20% {
      transform: translateY(0);
    }
    25%,
    45% {
      transform: translateY(-100%);
    }
    50%,
    70% {
      transform: translateY(-200%);
    }
    75%,
    95% {
      transform: translateY(-300%);
    }
    100% {
      transform: translateY(-400%);
    }
  } */</script>