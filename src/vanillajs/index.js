window.onscroll = function() {toggleButtonsOnScroll()};

function toggleButtonsOnScroll() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("up").className = "directing-btn";
    document.getElementById("down").className = "";
  } else {
    document.getElementById("down").className = "directing-btn";
    document.getElementById("up").className = "";
    document.getElementById("up").className = "invisible";

  }
  if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480){
    document.getElementById('reach-us').className = "fixed-get-started";
  }
  else{
    document.getElementById('reach-us').className = "hide";
  }
}

export const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

