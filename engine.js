export const canvas = document.getElementById('canvas')
export const c = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
// mouse
export const mouse = {
  x: undefined,
  y: undefined, 
  click: false
}
canvas.addEventListener('mousedown', function(e){
  mouse.x = e.x
  mouse.y = e.y
  mouse.click = true
})
canvas.addEventListener('mouseup', function(){
  mouse.click = false
})
// keyboard
export const keyboard = {
  left_key: false,
  right_key: false,
  up_key: false,
  down_key: false
}
document.addEventListener('keydown', function(e){
  if(e.keyCode == 37){
    keyboard.left_key = true
    console.log('left')
  }
  if(e.keyCode == 39) {
    keyboard.right_key = true
    console.log('right')
  }
  if(e.keyCode == 38){
    keyboard.up_key = true
  }
  if(e.keyCode == 40){
    keyboard.down_key = true
  }
})
document.addEventListener('keyup', function(){
  keyboard.left_key = false
  keyboard.up_key = false
  keyboard.right_key = false
  keyboard.down_key = false
})
// dt
function tick() {
var lastUpdate = Date.now();
var now = Date.now();
    var dt = now - lastUpdate
    lastUpdate = now
}
// circle
let isrectcolliding = false
export class Circluarobject{
  constructor(x, y, raduis, speed, gravity, color, distance, jump){
    this.x = x
    this.y = y
    this.raduis = raduis
    this.speed = speed
    this.gravity = gravity
    this.color = color
    this.distance = distance
    this.jump = jump
  }
  update(rectangle) {
    this.y += this.gravity
    
   /* if(this.y > platform.y){
      this.y -= this.gravity
      keyboard.up_key = true
    }
   if(keyboard.up_key){
     up_keytime++
     this.y -= 26
   }
   setInterval(1000, 5000, function(){
     keyboard.up_key = false
   },5000)
   */
  }
  draw(){
    c.fillStyle = this.color
    c.beginPath()
    c.arc(this.x, this.y, this.raduis, 0, Math.PI * 2)
    c.fill()
    c.closePath()
  }
  add_platformer_movement(){
    if(keyboard.up_key){
      this.y -= this.jump
    }
    if(keyboard.left_key){
      this.x -= this.speed
    }
    if(keyboard.right_key){
      this.x += this.speed
      console.log('right')
    }
  }
}
//rectangle
export class Rectangularobject{
  constructor(x, y, width, height, color, speed, gravity, jump){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.speed = speed
    this.gravity = gravity
    this.jump = jump 
  }
  update() {
    this.y += this.gravity
  }
  draw() {
    c.fillStyle = this.color
    c.beginPath()
    c.fillRect(this.x, this.y, this.width, this.height)
    c.fill()
    c.closePath()
  }
  add_platformer_movement(){
    if(keyboard.up_key){
      this.y -= this.jump
    }
    if(keyboard.left_key){
      this.x -= this.speed
    }
    if(keyboard.right_key){
      this.x += this.speed
    }
  }
  add_Top_Down_Movement(){
    if(keyboard.up_key){
      this.y -= this.jump
    }
    if(keyboard.left_key){
      this.x -= this.speed
    }
    if(keyboard.right_key){
      this.x += this.speed
    }
    if(keyboard.down_key){
      this.y += this.speed
    }
  }
}
//triangle (not working)
class Triangularobject{
  constructor(startx, starty,angle1x, angle1y, angle2x, angle2y, speed, gravity, color){
    this.startx = startx
    this.starty = starty
    this.angle1x = angle1x
    this.angle1y = angle1y
    this.angle2x = angle2x
    this.angle2y = angle2y
    this.speed = speed
    this.gravity = gravity
    this.color = color
  }
  draw() {
    c.fillStyle = 'orangred'
    c.beginPath();
    c.moveTo(100, 100);
    c.lineTo(10, 100);
    c.lineTo(100, 25);
    c.fill();
  }
}
//i deeply regret that i tried to do collision (not working)
function RectCircleColliding(circle,rect){
    var distX = Math.abs(circle.x - rect.x-rect.w/2);
    var distY = Math.abs(circle.y - rect.y-rect.h/2);

    if (distX > (rect.w/2 + circle.r)) { return false; 
      console.log('yay')
    }
    if (distY > (rect.h/2 + circle.r)) { return false; 
      console.log("hmmmmmmmm")
    }

    if (distX <= (rect.w/2)) { return true;
    console.log("heeelllp")
      
    } 
    if (distY <= (rect.h/2)) { return true; 
      console.log('fuaaass')
    }

    var dx=distX-rect.w/2;
    var dy=distY-rect.h/2;
    return (dx*dx+dy*dy<=(circle.r*circle.r));
}
export function drawtext(text, x, y, font , color){
  c.fillStyle = color
  c.fillText(text, x, y)
  c.font = font
}
//sound (not working)
 function createsound(sound, source, pleay){
  sound = new Audio()
  sound.src = source
  sound.play()
}
//deleting text (not working)
function deletetext(sec){
  setInterval(drawtext, sec, function(){
    c.clearRect(0, 0, canvas.width, canvas.height)
  })
}
//resize issues(fixed)
window.addEventListener('resize', function(){
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})
//Circular collision
export function Check_Circle_Rect_Collision(circ, rect){
  if(circ.y > canvas.height){
      circ.y -= circ.gravity
    }
    if(circ.y > rect.y - 47){
      isrectcolliding = true
    }else{
      isrectcolliding = false
    }
    if(isrectcolliding){
      circ.y -= circ.gravity
    }
    if(!isrectcolliding){
      circ.gravity = circ.gravity
    }
}

export function Check_circle_collision(circle1, circle2){
  let iscirclecolliding = false
  const dx = circle1.x - circle2.x
  const dy = circle1.y - circle2.y
  circle1.distance = Math.sqrt(dx * dx, dy * dy)
  if(circle1.distance < circle2.raduis + circle2.raduis){
    iscirclecolliding = true
    }
}