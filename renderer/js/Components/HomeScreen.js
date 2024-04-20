const Appsidebar = require("./Appsidebar")
const NotificationDrawer = require("./NotificationDrawer")
const SettingsDrawer = require("./SettingsDrawer")


module.exports = () => {
  /*const documentTypeFilesGridList = [
    {
      fileIcon: "bi-file-earmark-word-fill",
      fileIconColor: "text-blue-500",
      extension: ".percept",
      inputColor: "info",
      fileIconTypeLabel: "Percept",
      
    },
    {
      fileIcon: "bi-file-earmark-text-fill",
      fileIconColor: "text-gray-500",
      extension: ".txt",
      inputColor: "primary",
      fileIconTypeLabel: "Text File",
    },
    {
      fileIcon: "bi-file-spreadsheet-fill",
      fileIconColor: "text-teal-700",
      extension: ".sst",
      inputColor: "success",
      fileIconTypeLabel: "Spreadsheet",
    },
    {
      fileIcon: "bi-file-ppt-fill",
      fileIconColor: "text-rose-500",
      extension: ".ptt",
      inputColor: "secondary",
      fileIconTypeLabel: "Presentation",
    },
    {
      fileIcon: "bi-file-post",
      fileIconColor: "text-blue-500",
      extension: ".pub",
      inputColor: "accent",
      fileIconTypeLabel: "Publish",
    },
    {
      fileIcon: "bi-database",
      fileIconColor: "text-warning",
      extension: ".dbs",
      inputColor: "warning",
      fileIconTypeLabel: "Database",
    },
  ]*/

  return`
  <div class="h-[90%] w-full mt-3">
    <div class="w-full h-[50px] px-4 flex items-center fixed">
      <div class="justify-end items-end flex flex-2 px-2 ml-auto">

        <div role="button" title="Refresh App" class="btn btn-ghost hover:bg-purple-300 rounded-full w-[40px] h-[40px] flex items-center justify-center mx-2 focus:outline-none focus:ring-2
          focus:ring-purple-500 focus:ring-offset-2" onclick="location.reload()">
          <span class="hidden font-normal md:inline">
            <i class="bi bi-repeat text-2xl"></i>
          </span>
        </div>
        

      </div>
    </div>

    ${Appsidebar()}

    <div class="w-full mt-[50px] pl-[5.5rem] fle" style="height: calc(100% - 50px)">
      ${NotificationDrawer()}
      ${SettingsDrawer()}
      <div class="tabPanel h-full w-[90%] rounded-tl-lg rounded-br-lg">
        <button class="btn" onclick="my_modal_3.showModal()">open modal</button>
        <dialog id="my_modal_3" class="modal">
          <div class="modal-box">
            <form method="dialog">
              <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div class="carousel w-[50%]">
              <div id="slide1" class="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" class="btn btn-circle">❮</a> 
                  <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide2" class="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" class="btn btn-circle">❮</a> 
                  <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide3" class="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" class="btn btn-circle">❮</a> 
                  <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide4" class="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" class="btn btn-circle">❮</a> 
                  <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div>
        </dialog>

        <div role="tablist" class="tabs tabs-bordered w-full">
          <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 1" />
          <div role="tabpanel" class="tab-content p-10">Tab content 1</div>
        
          <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 2" checked />
          <div role="tabpanel" class="tab-content p-10">Tab content 2</div>
        
          <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tab 3" />
          <div role="tabpanel" class="tab-content p-10">Tab content 3</div>
        </div>
      </div>
    </div>
  </div>
`
}

