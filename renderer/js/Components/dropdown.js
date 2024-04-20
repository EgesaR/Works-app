const dropdownItem = require("dropdownItem.js")

module.exports = (
	title, dropDownClasses, tabIndex, role, btnDropdownClasses, dropdownContainerClasses,
	dropdownContainerListClasses, dropdownContainerListItemObj ) => {

	this.title = title || "Drop Down"
	this.dropDownClasses = dropDownClasses "dropdown dropdown-end"
	this.tabIndex = tabIndex
	this.role = role || "button"	
	this.btnDropdownClasses = btnDropdownClasses || "btn btn-ghost"
	this.dropdownContainerClasses = dropdownContainerClasses || "dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5"
	this.dropdownContainerListClasses = dropdownContainerListClasses || "menu menu-sm gap-1"
	this.dropdownContainerListItemObj = dropdownContainerListItemObj

	return`
		<div title=${title} class=${dropDownClasses}>
			<div tabindex="${tabIndex}" role=${role} class=${btnDropdownClasses}>
				<i class="bi bi-translate text-xl fill-current"></i>
			</div>
			<div tabindex="${tabIndex}" class=${dropdownContainerClasses}>
				<ul class=${dropdownContainerListClasses}>
					<li>
						<button>
							<span class=${dropdownContainerListItemTextClasses}>
								${dropdownContainerListItemText}
							</span>
							<span>
								${dropdownContainerListItemSubText}
							</span>
						</button>
					</li>
				</ul>
			</div>
		</div>
	`
}

<div title="Change Language" class="dropdown dropdown-end">
                  <div
                    tabindex="0"
                    role="button"
                    class="btn btn-ghost"
                    aria-label="Language"
                  >
                    <i class="bi bi-translate text-xl fill-current"></i>
                    <svg
                      width="12px"
                      height="12px"
                      class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 2048 2048"
                    >
                      <path
                        d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    tabindex="0"
                    class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5">
                    <ul class="menu menu-sm gap-1">
                      <li>
                        <button>
                          <span
                            class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                            >AR</span
                          >
                          <span class="font-[sans-serif]">عربي</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>