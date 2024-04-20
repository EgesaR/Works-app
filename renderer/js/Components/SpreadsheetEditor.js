module.exports = () => {
  let u = `<input class="input input-sm w-24 border border-solid rounded-0 outline-none" placeholder="" />`

  return`
      <div class="w-full h-screen overflow-hidden" id="SpreadsheetEditor">
        <div class="bg-works-spreedsheet h-12 flex items-center px-1">
          <div class="w-full h-full flex px-12">
                        <!-- File Dropdown Menu -->
                <div class="dropdown dropdown-end">
                      <div tabindex="0" role="button" class="btn btn-ghost">
                    <span class="font-normal">File</span>
                      </div>
                    </div>
          </div>
        </div>
            <div class="bg-indigo-600 overflow-y-auto"
                 style="height: calc(100% - 7rem);" id="PageLayout">
                <div class="tab-content h-full block" id="borderedTabContent">
                       <div class="grid2 tab-pane bg-white h-full fade active overflow-auto show"  id="bordered-home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="flex" style="width: 300%; margin-left: 20px;" id="letterHolder">
                        
                        </div>
                        <div class="flex h-full" id="">
                          <div class="block" id="numHolder">
                            
                          </div>
                          <div class="block h-full" id="columnBody">
                          
                          </div>
                          </div>
                        </div>
                        <div class="tab-pane bg-white h-full fade" id="bordered-profile" role="tabpanel" aria-labelledby="profile-tab">
                          Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
                        </div>
                        <div class="tab-pane bg-white h-full fade" id="bordered-contact" role="tabpanel" aria-labelledby="contact-tab">
                          Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                        </div>
                    </div>
            </div>
            <div class="bg-works-spreedsheet fixed bottom-0 px-4 h-16 flex flex-col items-center w-full border-t-2 border-solid border-base-content/20">
                <div class="w-full" style="height: 55%">
                  <ul class="nav nav-tabs nav-tabs-bordered h-full" id="borderedTab" role="tablist">
                            <li class="nav-item h-full" role="presentation">
                              <button class="nav-link h-full text-start hover:border-none w-40 ps-5 active" id="home-tab"
                                data-bs-toggle="tab" data-bs-target="#bordered-home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                            </li>
                            <li class="nav-item h-full" role="presentation">
                              <button class="nav-link h-full text-start hover:border-none w-40 ps-5" id="profile-tab" 
                                data-bs-toggle="tab" data-bs-target="#bordered-profile" type="button" role="tab" aria-controls="profile" aria-selected="false" tabindex="-1">Profile</button>
                            </li>
                            <li class="nav-item h-full" role="presentation">
                              <button class="nav-link h-full text-start hover:border-none w-40 ps-5" id="contact-tab" 
                                data-bs-toggle="tab" data-bs-target="#bordered-contact" type="button" role="tab" aria-controls="contact" aria-selected="false" tabindex="-1">Contact</button>
                            </li>
                         </ul>
                </div>
                <div class="w-full" style="height: 45%">
                  he
                </div>
                </div>
      </div>
    `

}