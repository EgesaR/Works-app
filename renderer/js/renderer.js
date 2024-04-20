const ipc = ipcRenderer
const minimizeBtn = document.getElementById('minimizeBtn')
const maximizeRestoreBtn = document.getElementById('maximizeRestoreBtn')
const closeBtn = document.getElementById('closeBtn')
const MainScreen = document.querySelector('.MainScreen')

const message = document.getElementById("message")
const millsecs = 100

const timer = setInterval(() => {
  setInterval(() => {
    setInterval(() => {
      setInterval(() => {
        message.innerHTML = "Done."
        //ipc.send('splashtimeout')
        clearInterval(timer);
      }, millsecs * 100);
      message.innerHTML = "Loading resources..."
      clearInterval(timer);
    }, millsecs * 90);
    message.innerHTML = "Getting resources..."
    clearInterval(timer);
  }, millsecs * 90);
  message.innerHTML = "Starting Process..."
  clearInterval(timer);
}, millsecs * 70);

//Minimize App
minimizeBtn.addEventListener('click', () => ipc.send('minimizeApp'))

function changeMaximizeRestoreBtn(isMaximizedApp){
  if(isMaximizedApp){
    maximizeRestoreBtn.title = 'Restore'
    maximizeRestoreBtn.innerHTML = 'R'
  }else{
    maximizeRestoreBtn.title = 'Maximize'
    maximizeRestoreBtn.innerHTML = 'M'
  }
}

ipc.on('isMaximized', () => changeMaximizeRestoreBtn(true))
ipc.on('isRestored', () => changeMaximizeRestoreBtn(false))

//Maximize Restore App
maximizeRestoreBtn.addEventListener('click', () => ipc.send('maximizeRestoreApp'))

//Close App
closeBtn.addEventListener('click', () => ipc.send('closeApp'))

document.querySelector('.MainScreen').innerHTML = Layout.layout({ content: App.layout })


const handleNotificationDrawer = () => {
  let notificationDrawer = document.getElementById('notificationDrawer')
  notificationDrawer.classList.toggle('translate-x-[100%]')
  notificationDrawer.classList.toggle('translate-x-0')
}
const handleSettingsDrawer = () => {
  let settingsDrawer = document.getElementById('settingsDrawer')
  settingsDrawer.classList.toggle('translate-x-[100%]')
  settingsDrawer.classList.toggle('translate-x-0')
}

/*
let letterHolder = document.querySelector('#letterHolder')
let numHolder = document.querySelector('#numHolder')
let cellsBody = document.querySelector('#columnBody')

let letterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let numOfRows = 35


for(var i = 0; i < letterArr.length; i++){
  let letterContainer = document.createElement('div')
  letterContainer.classList.add('border')
  letterContainer.classList.add('w-16')
  letterContainer.innerText += `${letterArr[i]}`

  letterHolder.appendChild(letterContainer)
}

function createCells(num){
  let columnHolder = document.createElement('div')
  columnHolder.classList.add('flex')
  columnHolder.style='height:30px'
  for (var letterindex = 0; letterindex < letterArr; letterindex++) {
    for (var columncellindex = 0; columncellindex < numOfRows; columncellindex++) {
      columnHolder.innerHTML += `
        <input class='${letterArr[letterindex]}${columncellindex} input border border-dashed border-dark p-0 w-16 h-full rounded-none form-control'>
      `
    }
  }
  cellsBody.appendChild(columnHolder)
}

for(var rows = 0; rows < numOfRows; rows++){
  createCells(rows)
}

for (var i = 0; i < numOfRows; i++) {
  let numberContainer = document.createElement('div')
  numberContainer.classList.add('border')
  numberContainer.style='height: 30px;'
  numberContainer.innerText += `${i}`

  numHolder.appendChild(numberContainer)
}
*/

