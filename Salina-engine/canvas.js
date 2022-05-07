import {mouse} from './Mouse.js'
export const canvas = document.getElementById('canvas')
export const c = canvas.getContext("2d");
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

canvas.addEventListener('mousedown', function(e){
  mouse.x = e.x
  mouse.y = e.y
  mouse.click = true
})
canvas.addEventListener('mouseup', function(){
  mouse.click = false
})

// circle

//i deeply regret that i tried to do collision (not working)
export const collision = {
  Circular_Collision: false,
  Rectangular_Circular_Collision: false,
  Rectangular_Collision: false
}
/*const collision = [{
   circular: false,
   Rectangular: false,
   Rectangular_Circular_Collision: false
}]
*/
function RectCircleColliding(circle,rect){
    var distX = Math.abs(circle.x - rect.x-rect.width/2);
    var distY = Math.abs(circle.y - rect.y-rect.height/2);

    if (distX > (rect.width/2 + circle.raduis)) { return false; 
      console.log('yay')
    }
    if (distY > (rect.height/2 + circle.raduis)) { return false; 
      console.log("hmmmmmmmm")
    }

    if (distX <= (rect.width/2)) { return true;
    console.log("heeelllp")
      
    } 
    if (distY <= (rect.height/2)) { return true; 
      console.log('fuaaass')
    }

    var dx=distX-rect.width/2;
    var dy=distY-rect.height/2;
    return (dx*dx+dy*dy<=(circle.raduis*circle.raduis));
}
let is_ground = false
export function Check_Rectangular_Collision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
          rect2.y = rect1.y - rect2.height
          is_ground = true
        }
}
//deleting text (not working)

//resize issues(fixed)
window.addEventListener('resize', function(){
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

//Circular collision
export function Check_circle_collision(circle1, circle2){
  const dx = circle1.x - circle2.x
  const dy = circle1.y - circle2.y
  circle1.distance = Math.sqrt(dx * dx + dy * dy)
  if(circle1.distance < circle2.raduis + circle1.raduis){
    collision.Circular_Collision = true
    }else{
      collision.Circular_Collision = false
    }
}

//runtime
export let ms = 0
export let sec = 0
export let min = 0
export let h = 0

export function timer() {
  ms++
  if(ms == 50) {
    sec += 1
    ms = 0
  }
  if (sec == 60) {
    min += 1
    sec = 0
  }
  if (min == 60) {
    h += 1
    min = 0
  }
}


export function drawtimer(x, y, font , color){
  c.fillStyle = color
  c.fillText(texttimer , x, y)
  c.font = font
}



//button
let OnClick = false
export class Button{
   constructor(x, y, width, height, background_color, stroke_color, btn_txt, txt_color){
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.background_color = background_color
      this.stroke_color = stroke_color
      this.btn_txt = btn_txt
      this.txt_color = txt_color
   }
   
   draw(){
     c.fillStyle = this.background_color
     c.strokeStyle = this.stroke_color
     c.beginPath()
     c.fillRect(this.x, this.y, this.width, this.height)
     c.strokeWidth = 6
     c.stroke()
   }
   
   drawtxt(){
     c.fillStyle = this.txt_color
     c.fillText(this.btn_txt, this.x + this.width/2, this.y + this.height/2)
   }
   
   ListenToClick() {
     if(mouse.x == this.x || this.x + this.width)
     {
       OnClick = true
     } 
     else
     {
       return 1
     }
   }
}

//sound
export class Sound {
   constructor(source) {
     this.self = new Audio(source)
   }
   
   play() {
     this.self.play()
   }
   
   stop() {
     this.self.stop()
   }
}
//

class Particles {
   constructor(x, y, raduis, color, particleRaduis) {
     this.x = x
     this.y = y
     this.raduis = raduis
     this.color = color
     this.particleRaduis = particleRaduis
   }
   
   show() {
     c.fillStyle = this.color
     c.beginPath()
     c.arc(this.x, this.y, this.raduis, 0, Math.PI * 2)
     
   }
}
