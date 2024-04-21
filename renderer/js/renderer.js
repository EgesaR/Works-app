const ipc = ipcRenderer
const minimizeBtn = document.getElementById('minimizeBtn')
const maximizeRestoreBtn = document.getElementById('maximizeRestoreBtn')
const closeBtn = document.getElementById('closeBtn')
const MainScreen = document.querySelector('.MainScreen')

/*
const message = document.getElementById("message")
const millsecs = 100

const timer = setInterval(setSplashScreenMessage, millsecs * 30);

function setSplashScreenMessage() {
  message.innerHTML = "Starting Process..."
  let timer1 = setInterval(() => {
    if (message.innerHTML === "Starting Process...") { 
      clearInterval(timer)
      message.innerHTML = "Getting things ready..."
      let timer1 = setInterval(() => {
        if (message.innerHTML === "Getting things ready...") { 
          clearInterval(timer)
          message.innerHTML = "Getting things ready... 0%"
          let timer1 = setInterval(() => {
            if (message.innerHTML === "Getting things ready... 0%") { 
              clearInterval(timer)
              message.innerHTML = "Getting things ready... 10%"
              let timer1 = setInterval(() => {
                if (message.innerHTML === "Getting things ready... 10%") { 
                  clearInterval(timer)
                  message.innerHTML = "Getting things ready... 20%"
                  let timer1 = setInterval(() => {
                    if (message.innerHTML === "Getting things ready... 20%") { 
                      clearInterval(timer)
                      message.innerHTML = "Getting things ready... 30%"
                      let timer1 = setInterval(() => {
                        if (message.innerHTML === "Getting things ready... 30%") { 
                          clearInterval(timer)
                          message.innerHTML = "Getting things ready... 40%"
                          let timer1 = setInterval(() => {
                            if (message.innerHTML === "Getting things ready... 40%") { 
                              clearInterval(timer)
                              message.innerHTML = "Getting things ready... 50%"
                              let timer1 = setInterval(() => {
                                if (message.innerHTML === "Getting things ready... 50%") { 
                                  clearInterval(timer)
                                  message.innerHTML = "Getting things ready... 60%"
                                  let timer1 = setInterval(() => {
                                    if (message.innerHTML === "Getting things ready... 60%") { 
                                      clearInterval(timer)
                                      message.innerHTML = "Getting things ready... 70%"
                                      let timer1 = setInterval(() => {
                                        if (message.innerHTML === "Getting things ready... 70%") { 
                                          clearInterval(timer)
                                          message.innerHTML = "Getting things ready... 80%"
                                          let timer1 = setInterval(() => {
                                            if (message.innerHTML === "Getting things ready... 80%") { 
                                              clearInterval(timer)
                                              message.innerHTML = "Getting things ready... 90%"
                                              let timer1 = setInterval(() => {
                                                if (message.innerHTML === "Getting things ready... 90%") { 
                                                  clearInterval(timer)
                                                  message.innerHTML = "Getting things ready... 100%"
                                                  let timer1 = setInterval(() => {
                                                    if (message.innerHTML === "Getting things ready... 100%") { 
                                                      clearInterval(timer)
                                                      message.innerHTML = "Done ."
                                                      ipc.send('splashtimeout')
                                                      window.close()
                                                    }
                                                  }, millsecs * 25);
                                                }
                                              }, millsecs * 25);
                                            }
                                          }, millsecs * 25);
                                        }
                                      }, millsecs * 25);    
                                    }
                                  }, millsecs * 25);
                                }
                              }, millsecs * 25);
                            }
                          }, millsecs * 25);
                        }
                      }, millsecs * 25);
                    }
                  }, millsecs * 25);
                }
              }, millsecs * 25);
            }
          }, millsecs * 50);
        }
      }, millsecs * 50);
    }
  }, millsecs * 50);
}*/

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

import { Modal } from 'flowbite'

const $modalElement = document.querySelector('#modalEl');

const modalOptions = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    onHide: () => {
        console.log('modal is hidden');
    },
    onShow: () => {
        console.log('modal is shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
    }
}

const modal = new Modal($modalElement, modalOptions);

modal.show();


document.querySelector('.MainScreen').innerHTML = Layout.layout({ content: App.layout })

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

