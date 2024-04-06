const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

function redirectTologinpage(){
  window.location.href="login.html"
}


function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(".cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
};

    cursorAnimation();