const gallery = document.getElementById("gallery");

window.onmousemove = e => {
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;
  
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
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