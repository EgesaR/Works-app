module.exports = () => {
  return    `
      <div class="drawer-side z-40" style="scroll-behavior: smooth; scroll-padding-top: 5rem">
          <label
            for="drawer"
            class="drawer-overlay"
            aria-label="Close menu"
          ></label>
          <aside class="bg-base-100 min-h-screen w-80">
            <div
              data-sveltekit-preload-data=""
              class="bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex"
            >
              <a
                href="#"
                aria-current="page"
                aria-label="Homepage"
                class="flex-0 btn btn-ghost px-2"
                data-svelte-h="svelte-nce89e"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 415 415"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="82.5"
                    y="290"
                    width="250"
                    height="125"
                    rx="62.5"
                    fill="#1AD1A5"
                  ></rect>
                  <circle
                    cx="207.5"
                    cy="135"
                    r="130"
                    fill="black"
                    fill-opacity=".3"
                  ></circle>
                  <circle cx="207.5" cy="135" r="125" fill="white"></circle>
                  <circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle>
                </svg>
                <div class="font-title inline-flex text-lg md:text-2xl">
                  Works
                </div>
              </a>
              <div class="dropdown" data-sveltekit-preload-data="">
                <ul
                  tabindex="0"
                  class="dropdown-content menu menu-sm bg-base-200 rounded-box mt-7 w-36 border border-white/5 p-2 shadow-2xl outline outline-1 outline-black/5"
                >
                  <li>
                    <a href="#docs/changelog/"
                      ><svg
                        width="14"
                        height="14"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.81836 6.72729V14H13.0911"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C16.598 4 10.1351 8.02111 6.67677 13.9981"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M24.005 12L24.0038 24.0088L32.4832 32.4882"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      Changelog</a
                    >
                  </li>
                  <li></li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener, noreferrer"
                      href="https://v3.daisyui.com/"
                      >Version 3.x</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener, noreferrer"
                      href="https://v2.daisyui.com/"
                      >Version 2.x</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener, noreferrer"
                      href="https://v1.daisyui.com/"
                      >Version 1.x</a
                    >
                  </li>
                  <li></li>
                  <li>
                    <a href="#docs/roadmap/"
                      ><svg
                        width="14"
                        height="14"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 12L4 6V36L17 42L31 36L44 42V12L31 6L17 12Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M31 6V36"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17 12V42"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M10.5 9L17 12L31 6L37.5 9"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M10.5 39L17 42L31 36L37.5 39"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      Roadmap</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="h-4"></div>
            <ul class="menu px-4 py-0">
              <li>
                <details id="disclosure-docs" open="">
                  <summary class="group">
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 48 48"
                        class="text-orange-400 h-5 w-5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linejoin="bevel"
                        ></path>
                        <path
                          d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linejoin="bevel"
                        ></path>
                      </svg>
                    </span>
                    Docs
                  </summary>
                  <ul>
                    <li>
                      <a href="#docs/install/" class="group">
                        <span>Install</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#docs/use/"
                        class="group active active"
                      >
                        <span>Use</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#docs/customize/"
                        class="group"
                      >
                        <span>Customize components</span>
                      </a>
                    </li>
                    <li>
                      <a href="#docs/config/" class="group">
                        <span>Config</span>
                        <span class="badge badge-sm font-mono null"
                          >updated</span
                        >
                      </a>
                    </li>
                    <li>
                      <a href="#docs/colors/" class="group">
                        <span>Colors</span>
                        <span class="badge badge-sm font-mono null"
                          >updated</span
                        >
                      </a>
                    </li>
                    <li>
                      <a href="#docs/themes/" class="group">
                        <span>Themes</span>
                        <span class="badge badge-sm font-mono null"
                          >updated</span
                        >
                      </a>
                    </li>
                    <li>
                      <a
                        href="#docs/utilities/"
                        class="group"
                      >
                        <span>Utilities</span>
                        <span class="badge badge-sm font-mono null">new</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#docs/layout-and-typography/"
                        class="group"
                      >
                        <span>Layout &amp; Typography</span>
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details id="disclosure-components" open="">
                  <summary class="group">
                    <span
                      ><svg
                        class="w-5 h-5 text-green-600"
                        width="18"
                        height="18"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 29H6V43H20V29Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linecap="butt"
                          stroke-linejoin="bevel"
                        ></path>
                        <path
                          d="M24 4L34 21H14L24 4Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linecap="butt"
                          stroke-linejoin="bevel"
                        ></path>
                        <path
                          d="M36 44C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28C31.5817 28 28 31.5817 28 36C28 40.4183 31.5817 44 36 44Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="4"
                          stroke-linecap="butt"
                          stroke-linejoin="bevel"
                        ></path>
                      </svg>
                    </span>
                    Components
                  </summary>
                  <ul>
                    <li>
                      <h2 class="menu-title flex items-center gap-4 px-1.5">
                        <span class="text-base-content"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 48 48"
                            fill="none"
                            stroke="currentColor"
                            class="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 4V12"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M22 22L42 26L36 30L42 36L36 42L30 36L26 42L22 22Z"
                              fill="none"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M38.1421 9.85789L32.4853 15.5147"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M9.85787 38.1421L15.5147 32.4853"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M4 24H12"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M9.85795 9.85787L15.5148 15.5147"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                          </svg>
                        </span>
                        Actions
                      </h2>
                      <ul>
                        <li>
                          <a
                            href="#components/button/"
                            class="group"
                          >
                            <span>Button</span>
                            <span class="badge badge-sm font-mono null"
                              >updated</span
                            >
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/dropdown/"
                            class="group"
                          >
                            <span>Dropdown</span>
                            <span class="badge badge-sm font-mono null"
                              >updated</span
                            >
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/modal/"
                            class="group"
                          >
                            <span>Modal</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/swap/"
                            class="group"
                          >
                            <span>Swap</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/theme-controller/"
                            class="group"
                          >
                            <span>Theme Controller</span>
                            <span class="badge badge-sm font-mono null"
                              >new</span
                            >
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2 class="menu-title flex items-center gap-4 px-1.5">
                        <span class="text-base-content"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 48 48"
                            class="w-5 h-5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="4"
                              y="8"
                              width="40"
                              height="32"
                              rx="3"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linejoin="bevel"
                            ></rect>
                            <path
                              d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="4"
                            ></path>
                            <circle
                              r="2"
                              transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)"
                              fill="currentColor"
                            ></circle>
                            <circle
                              r="2"
                              transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)"
                              fill="currentColor"
                            ></circle>
                          </svg>
                        </span>
                        Data display
                      </h2>
                      <ul>
                        <li>
                          <a
                            href="#components/accordion/"
                            class="group"
                          >
                            <span>Accordion</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/avatar/"
                            class="group"
                          >
                            <span>Avatar</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/badge/"
                            class="group"
                          >
                            <span>Badge</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/card/"
                            class="group"
                          >
                            <span>Card</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/carousel/"
                            class="group"
                          >
                            <span>Carousel</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/chat/"
                            class="group"
                          >
                            <span>Chat bubble</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/collapse/"
                            class="group"
                          >
                            <span>Collapse</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/countdown/"
                            class="group"
                          >
                            <span>Countdown</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/diff/"
                            class="group"
                          >
                            <span>Diff</span>
                            <span class="badge badge-sm font-mono null"
                              >new</span
                            >
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/kbd/"
                            class="group"
                          >
                            <span>Kbd</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/stat/"
                            class="group"
                          >
                            <span>Stat</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/table/"
                            class="group"
                          >
                            <span>Table</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/timeline/"
                            class="group"
                          >
                            <span>Timeline</span>
                            <span class="badge badge-sm font-mono null"
                              >new</span
                            >
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2 class="menu-title flex items-center gap-4 px-1.5">
                        <span class="text-base-content"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 48 48"
                            class="h-5 w-5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30 19H20C15.5817 19 12 22.5817 12 27C12 31.4183 15.5817 35 20 35H36C40.4183 35 44 31.4183 44 27C44 24.9711 43.2447 23.1186 42 21.7084"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M6 24.2916C4.75527 22.8814 4 21.0289 4 19C4 14.5817 7.58172 11 12 11H28C32.4183 11 36 14.5817 36 19C36 23.4183 32.4183 27 28 27H18"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                          </svg>
                        </span>
                        Navigation
                      </h2>
                      <ul>
                        <li>
                          <a
                            href="#components/breadcrumbs/"
                            class="group"
                          >
                            <span>Breadcrumbs</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/bottom-navigation/"
                            class="group"
                          >
                            <span>Bottom navigation</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/link/"
                            class="group"
                          >
                            <span>Link</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/menu/"
                            class="group"
                          >
                            <span>Menu</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/navbar/"
                            class="group"
                          >
                            <span>Navbar</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/pagination/"
                            class="group"
                          >
                            <span>Pagination</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/steps/"
                            class="group"
                          >
                            <span>Steps</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/tab/"
                            class="group"
                          >
                            <span>Tab</span>
                            <span class="badge badge-sm font-mono null"
                              >updated</span
                            >
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2 class="menu-title flex items-center gap-4 px-1.5">
                        <span class="text-base-content"
                          ><svg
                            width="18"
                            height="18"
                            class="w-5 h-5"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 6H44V36H29L24 41L19 36H4V6Z"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M23 21H25.0025"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                            ></path>
                            <path
                              d="M33.001 21H34.9999"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                            ></path>
                            <path
                              d="M13.001 21H14.9999"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                            ></path>
                          </svg>
                        </span>
                        Feedback
                      </h2>
                      <ul>
                        <li>
                          <a
                            href="#components/alert/"
                            class="group"
                          >
                            <span>Alert</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/loading/"
                            class="group"
                          >
                            <span>Loading</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/progress/"
                            class="group"
                          >
                            <span>Progress</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/radial-progress/"
                            class="group"
                          >
                            <span>Radial progress</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/skeleton/"
                            class="group"
                          >
                            <span>Skeleton</span>
                            <span class="badge badge-sm font-mono null"
                              >new</span
                            >
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/toast/"
                            class="group"
                          >
                            <span>Toast</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/tooltip/"
                            class="group"
                          >
                            <span>Tooltip</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2 class="menu-title flex items-center gap-4 px-1.5">
                        <span class="text-base-content"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 48 48"
                            class="w-5 h-5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 42H43"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linejoin="bevel"
                            ></path>
                          </svg>
                        </span>
                        Data input
                      </h2>
                      <ul>
                        <li>
                          <a
                            href="#components/checkbox/"
                            class="group"
                          >
                            <span>Checkbox</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/file-input/"
                            class="group"
                          >
                            <span>File Input</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/radio/"
                            class="group"
                          >
                            <span>Radio</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/range/"
                            class="group"
                          >
                            <span>Range</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/rating/"
                            class="group"
                          >
                            <span>Rating</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/select/"
                            class="group"
                          >
                            <span>Select</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/input/"
                            class="group"
                          >
                            <span>Text input</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/textarea/"
                            class="group"
                          >
                            <span>Textarea</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/toggle/"
                            class="group"
                          >
                            <span>Toggle</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2 class="menu-title flex items-center gap-4 px-1.5">
                        <span class="text-base-content"
                          ><svg
                            width="18"
                            height="18"
                            class="w-5 h-5"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="6"
                              y="6"
                              width="36"
                              height="36"
                              rx="3"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linejoin="bevel"
                            ></rect>
                            <path
                              d="M6 22L42 22"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M29 22V6"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M26 6H32"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M6 19V25"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M42 19V25"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                              stroke-linejoin="bevel"
                            ></path>
                          </svg>
                        </span>
                        Layout
                      </h2>
                      <ul>
                        <li>
                          <a
                            href="#components/artboard/"
                            class="group"
                          >
                            <span>Artboard</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/divider/"
                            class="group"
                          >
                            <span>Divider</span>
                            <span class="badge badge-sm font-mono null"
                              >updated</span
                            >
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/drawer/"
                            class="group"
                          >
                            <span>Drawer</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/footer/"
                            class="group"
                          >
                            <span>Footer</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/hero/"
                            class="group"
                          >
                            <span>Hero</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/indicator/"
                            class="group"
                          >
                            <span>Indicator</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/join/"
                            class="group"
                          >
                            <span>Join (group items)</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/mask/"
                            class="group"
                          >
                            <span>Mask</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/stack/"
                            class="group"
                          >
                            <span>Stack</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h2 class="menu-title flex items-center gap-4 px-1.5">
                        <span class="text-base-content"
                          ><svg
                            width="18"
                            height="18"
                            viewBox="0 0 48 48"
                            class="w-5 h-5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linejoin="bevel"
                            ></path>
                            <path
                              d="M22 37H26"
                              stroke="currentColor"
                              stroke-width="4"
                              stroke-linecap="butt"
                            ></path>
                          </svg>
                        </span>
                        Mockup
                      </h2>
                      <ul>
                        <li>
                          <a
                            href="#components/mockup-browser/"
                            class="group"
                          >
                            <span>Browser</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/mockup-code/"
                            class="group"
                          >
                            <span>Code</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/mockup-phone/"
                            class="group"
                          >
                            <span>Phone</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#components/mockup-window/"
                            class="group"
                          >
                            <span>Window</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="#theme-generator/" class="group"
                  ><span
                    ><svg
                      class="h-5 w-5 text-fuchsia-400"
                      width="18"
                      height="18"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="butt"
                        stroke-linejoin="bevel"
                      ></path>
                      <path
                        d="M29.5856 18.4143L5.54395 42.4559"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="butt"
                        stroke-linejoin="bevel"
                      ></path>
                    </svg>
                  </span>
                  <span>Theme Generator</span>
                </a>
              </li>
              <li></li>
              <li>
                <a href="#store/" class="group"
                  ><span
                    ><svg
                      class="h-5 w-5"
                      width="18"
                      height="18"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.0391 22V42H8.03906V22"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="butt"
                        stroke-linejoin="bevel"
                      ></path>
                      <path
                        d="M5.84231 13.7766C4.31276 17.7377 7.26307 22 11.5092 22C14.8229 22 17.5276 19.3137 17.5276 16C17.5276 19.3137 20.2139 22 23.5276 22H24.546C27.8597 22 30.546 19.3137 30.546 16C30.546 19.3137 33.2518 22 36.5655 22C40.8139 22 43.767 17.7352 42.2362 13.7723L39.2337 6H8.84523L5.84231 13.7766Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linejoin="bevel"
                      ></path>
                    </svg>
                  </span>
                  <span>Store</span>
                  <span class="badge badge-sm font-mono badge-primary"
                    >new</span
                  >
                </a>
              </li>
              <li>
                <a href="#blog/" class="group"
                  ><span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"
                      ></path>
                      <path
                        d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </span>
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="#resources/videos/" class="group"
                  ><span
                    ><svg
                      width="18"
                      height="18"
                      viewBox="0 0 48 48"
                      class="w-5 h-5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linejoin="bevel"
                      ></path>
                      <path
                        d="M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linejoin="bevel"
                      ></path>
                    </svg>
                  </span>
                  <span>Resources</span>
                </a>
              </li>
              <li></li>
              <li>
                <a
                  href="#tailwindplay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group"
                  ><span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 54 33"
                    >
                      <g clip-path="url(#prefix__clip0)">
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                          clip-rule="evenodd"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="prefix__clip0">
                          <path fill="#fff" d="M0 0h54v32.4H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>Playground</span>
                  <svg
                    width="12"
                    height="12"
                    class="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H37V29"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="butt"
                      stroke-linejoin="bevel"
                    ></path>
                    <path
                      d="M11.5439 36.4559L36.9997 11"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="butt"
                      stroke-linejoin="bevel"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/saadeghi/daisyui"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group"
                  ><span
                    ><svg
                      width="18"
                      height="18"
                      class="h-5 w-5"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="butt"
                      ></path>
                      <path
                        d="M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="butt"
                      ></path>
                      <path
                        d="M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="butt"
                      ></path>
                      <path
                        d="M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="butt"
                      ></path>
                    </svg>
                  </span>
                  <span>GitHub</span>
                  <svg
                    width="12"
                    height="12"
                    class="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H37V29"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="butt"
                      stroke-linejoin="bevel"
                    ></path>
                    <path
                      d="M11.5439 36.4559L36.9997 11"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="butt"
                      stroke-linejoin="bevel"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://opencollective.com/daisyui"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group"
                  ><span
                    ><svg
                      width="18"
                      class="h-5 w-5"
                      height="18"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="4"
                        stroke-linecap="butt"
                        stroke-linejoin="bevel"
                      ></path>
                    </svg>
                  </span>
                  <span>Support daisyUI</span>
                  <svg
                    width="12"
                    height="12"
                    class="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H37V29"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="butt"
                      stroke-linejoin="bevel"
                    ></path>
                    <path
                      d="M11.5439 36.4559L36.9997 11"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-linecap="butt"
                      stroke-linejoin="bevel"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
            <div
              class="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"
            ></div>
          </aside>
    </div>    

    `
}