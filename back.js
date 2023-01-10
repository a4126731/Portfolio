const colors = ['orange','orangered','darkorange', 'gold', 'tomato', 'goldenrod','yellow'],
      fire_spread = 15 // best range 10-20

function addParticle() {
  var fs = document.createElement('div'),
      skew = Math.random() < .5 ? Math.random()*fire_spread : -Math.random()*fire_spread
  fs.className = 'fire_shaft'
  
  fs.style.height = '1800px' 
  // var apple=Math.random()*10 + 50 + 'vh'
  let apple=1800 + 'vh'
console.log(apple)
  fs.style.transform = 'skew('+skew+'deg)'
  fs.style.left = Math.random()*100 + '%'
  var p = document.createElement('div')
  p.className = 'particle'
  p.style.background = colors[Math.floor(Math.random()*colors.length)]
  p.onanimationend = function() { this.remove() }  
  document.body.appendChild(fs).appendChild(p)
}

setInterval(addParticle,1000/20)