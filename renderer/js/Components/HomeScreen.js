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

<div id="modalEl">Hello</div>

<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="default-styled-tab-content">
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div>


      </div>
    </div>
  </div>
`
}


