const string = `    .skin {
  position: relative;
}

.nose {
  position: relative;
  top: 120px;
  width: 0px;
  height: 0px;
  border-top: 7px solid black;
  border-left: 10px solid pink;
  border-right: 10px solid green;
  border-color: black transparent transparent;
  position: relative;
  left: 50%;
  margin-left: -10px;
}
.nose .nose_top {
  position: relative;
  top:-12px;
  transform: translateX(-50%);
  border-radius: 50% / 100% 100% 0 0;
  background: black;
  border-color: black;
  width: 20px;
  height: 5px;
  
}
.eyes {
  position: absolute;
  left: 50%;
  top: 55px;
  width: 64px;
  height: 64px;
  margin-left: -32px;
  border-radius: 50%;
  background: #2e2e2e;
  border: 2px solid black;

}

.eyes::before {
  position: relative;
  left: 5px;
  top: 2px;
  border-radius: 50%;
  display: block;
  content: '';
  width: 30px;
  height: 30px;
  border: 2px solid black;
  background: white;

}

.eyes.left {
  transform: translateX(-120px);
}

.eyes.right {
  transform: translateX(120px);
}

.mouth {
  position: absolute;
  height: 400px;
  left: 50%;
  top: 150px;
  width: 200px;
  height: 200px;
  margin-left: -100px;
  overflow: hidden;
}

.mouth .up .lip {
  width: 45px;
  height: 80px;
  border: 3px solid black;
  position: absolute;
  left: 50%;
  top: -34px;
  background: #FFE600;
  z-index: 1;
}

.mouth .up .lip.left {
  border-radius: 100% 0;
  border-left: 0px;
  border-top: 0px;
  margin-left: -66px;
  transform: rotate(55deg);
}

.mouth .up .lip.right {
  border-radius: 0 100%;
  border-right: 0px;
  border-top: 0px;
  margin-left: 22px;
  transform: rotate(-55deg);
}

.mouth .down {
  border: 3px solid black;
  width: 130px;
  height: 500px;
  position: absolute;
  top: -320px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: #971d17;
  overflow: hidden;
}

.mouth .down .tongue {
  position: absolute;
  top: 350px;
  width: 130px;
  height: 145px;
  border-radius: 50%;
  transform: translateX(-3px);
  background: #FF485F;
}

.face {
  position: absolute;
  top: 150px;
  width: 82px;
  height: 82px;
  border: 3px solid black;
  background: #F00;
  border-radius: 50%;
  left: 50%;
  margin-left: -41px;
}

.face.left {
  transform: translateX(200px);
}

.face.right {
  transform: translateX(-200px);
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }

  33% {
    transform: rotate(-15deg);
  }

  66% {
    transform: rotate(15deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.nose:hover {
  animation: wave .1s infinite linear;
}`
let n = 0
let time = 100
const run = () =>{
  n = n + 1
  if (n > string.length) {
    clearInterval(id)
    return
  }
  show_text.innerText = string.substr(0, n)
  anime.innerText = string.substr(0, n)
  show_text.scrollTop = show_text.scrollHeight
}

const play = ()=>{
  return setInterval(run,time)
}

let id = play()

let stop = ()=> window.clearInterval(id)

const toFast = ()=>{
  stop()
  time = 0
  id = play()
}

const toNormal = () =>{
  stop()
  time = 100
  id = play()
}

const toSlow = ()=>{
  stop()
  time = 300
  id = play()
}

pause.onclick = stop

start.onclick = ()=>{
  id = play()
}

fast.onclick = toFast

normal.onclick = toNormal

slow.onclick = toSlow