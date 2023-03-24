/* It's a mousemove event listener that moves the gallery element based on the mouse position. */

const gallery = document.getElementById("gallery");

window.onmousemove = e => {
  /* It's getting the mouse position. */
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  /* It's getting the mouse position. */
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  /* It's getting the maximum amount of pixels that the gallery can be moved. */
  const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;
  
  /* It's calculating the amount of pixels that the gallery should be moved based on the mouse
  position. */
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
/* It's animating the gallery element. */
  gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}

const tween1 = KUTE.fromTo(
    '#blob1',
    {path: '#blob1'},
    {path: '#blob2'},
    { repeat: 1, duration: 4000, yoyo: true }
)

const tween2 = KUTE.fromTo(
    '#blob1',
    {path: '#blob1'},
    {path: '#blob3'},
    { repeat: 1, duration: 4000, yoyo: true }
)

tween1.chain(tween2);
tween1.start();