import {c} from './canvas.js'

export function drawtext(text, x, y, font , color){
  c.fillStyle = color
  c.fillText(text, x, y)
  c.font = font
}

export function deletetext(text){
  text = ''
}
