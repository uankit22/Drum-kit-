var noOfDrumBtn = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var btnName = this.innerHTML;
    makesound(btnName);
    animation(btnName);
  });


}
document.addEventListener("keydown", function(event) {
  makesound(event.key);
  animation(event.key);
});

function makesound(key) {

  switch (key) {
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "w":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case "a":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;
    default:
      console.log(btnName);
  }
}

function animation(btn) {
  var btnclicked =document.querySelector("." + btn);
  btnclicked.classList.add("pressed");
    setTimeout(function(btn) { btnclicked.classList.remove("pressed");}, 100);
}
