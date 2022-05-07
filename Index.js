import {canvas,c,mouse, keyboard,Circluarobject, Rectangularobject, drawtext, deletetext} from './engine.js'
canvas.width = window.innerWidth
canvas.height = window.innerHeight
//stuff----------------------------------
let circle = new Circluarobject(90, 80, 50, 20, 16, "lightblue", undefined, 20)
let circle2 = new Circluarobject(280, 80, 50, 20, 16, "orangered", undefined, 20)
let rect = new Rectangularobject(70, 400, 380, 80, "violet", 20, 16, 20, 15)
let circ = new Circluarobject(900, 700, 40, 20, 16, "lightskyblue", undefined, 20, 15)
let re = new Rectangularobject(760, 500, 100, 100, "lightyellow", 20, 16, 20, 15)
//images----------------------------------
let reimg = new Image()
reimg.src = 'Image/icon.png'
let circleimg = new Image()
circleimg.src = 'Image/11660437246.png'
//animation
function animate(){
  c.clearRect(0, 0, canvas.width, canvas.height)
  circle.update(rect)
  circle.draw()
  circle2.update(rect)
  circle2.draw()
  circ.draw()
  rect.draw()
  re.draw()
  c.drawImage(reimg, re.x - 5, re.y - 5, 128, 128)
  c.drawImage(circleimg, circle.x - 60, circle2.y - 60, 120, 120)
drawtext("Chapter 3: The forest", 300, 50, "50px'Ubuntu'", "cyan")
  requestAnimationFrame(animate)
}
animate()
