module.exports = () => {
    return`
           <div class="w-full h-full overflow-hidden" id="DocumentEditor">
                <div class="bg-works-document h-12 flex items-center px-1">
            <div  
                class="w-full h-full flex px-12">

                <!-- File Dropdown Menu -->
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                      <span class="font-normal">File</span>
                    </div>
                    <div tabindex="0" 
                       class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-auto max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16" style="transform: translateX(70%);">
                        <div class="grid grid-cols-1 gap-3 p-3">

                            <!-- New Documents Button -->
                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">New Document</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <!-- Add New Page Button -->
                            <button class="addDocumentPage outline-base-content text-start outline-offset-4 hover:bg-blue-500" onClick="addDocumentPage()">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-plus"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Add New Page</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <!-- Preview Button -->
                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-eye-fill"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Preview</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <!-- Close Button -->
                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500" onClick="closeDocumentFile()">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-x"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Close File</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <!-- Printer Button -->
                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-printer"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Print</span>
                                            <span class="text-netural text-sm">
                                                Ctrl+P
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </button>
                    
                        </div>
                    </div>
                </div>

                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                      <span class="font-normal">Edit</span>
                    </div>
                    <div tabindex="0" 
                    class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-auto max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16" style="transform: translateX(70%);">
                        <div class="grid grid-cols-1 gap-3 p-3">

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-1 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            "> 
                                                <i class="bi bi-arrow-90deg-left"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Undo</span>
                                            <span class="text-netural text-sm">
                                                Ctrl+Z
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-arrow-90deg-right"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Redo</span>
                                            <span class="text-netural text-sm">
                                                Ctrl+Y
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <div class="divider" style="margin: 0;"></div>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-scissors"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Cut</span>
                                            <span class="text-netural text-sm">
                                                Ctrl+X
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-files"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Copy</span>
                                            <span class="text-netural text-sm">
                                                Ctrl+C
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-scissors"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Paste</span>
                                            <span class="text-netural text-sm">
                                                Ctrl+V
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-scissors"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Select all</span>
                                            <span class="text-netural text-sm">
                                                Ctrl+A
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-search"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Find And Relpace</span>
                                            <span class="text-netural text-sm">
                                                Ctrl+F
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                      <span class="font-normal">View</span>
                    </div>
                    <div tabindex="0" 
                    class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-auto max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16" style="transform: translateX(70%);">
                        <div class="grid grid-cols-1 gap-3 p-3">

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">New Document</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-plus"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Add New Page</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-x"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Close File</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>

                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                      <span class="font-normal">Insert</span>
                    </div>
                    <div tabindex="0" 
                    class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-auto max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16" style="transform: translateX(70%);">
                        <div class="grid grid-cols-1 gap-3 p-3">

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">New Document</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-plus"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Add New Page</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-x"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Close File</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>

                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                      <span class="font-normal">Format</span>
                    </div>
                    <div tabindex="0" 
                    class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-auto max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16" style="transform: translateX(70%);">
                        <div class="grid grid-cols-1 gap-3 p-3">

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">New Document</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-plus"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Add New Page</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-x"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Close File</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>

                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                      <span class="font-normal">Tools</span>
                    </div>
                    <div tabindex="0" 
                    class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-auto max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16" style="transform: translateX(70%);">
                        <div class="grid grid-cols-1 gap-3 p-3">

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">New Document</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-plus"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Add New Page</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-x"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Close File</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>

                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                      <span class="font-normal">Table</span>
                    </div>
                    <div tabindex="0" 
                    class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-auto max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16" style="transform: translateX(70%);">
                        <div class="grid grid-cols-1 gap-3 p-3">

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">New Document</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-plus"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Add New Page</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-x"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Close File</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>

                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                      <span class="font-normal">Help</span>
                    </div>
                    <div tabindex="0" 
                    class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-auto max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16" style="transform: translateX(70%);">
                        <div class="grid grid-cols-1 gap-3 p-3">

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-file-earmark-text"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">New Document</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-plus"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Add New Page</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button class="outline-base-content text-start outline-offset-4 hover:bg-blue-500">
                                <span class="rounded-btn text-base-content block w-full cursor-pointer font-sans">
                                    <span class="grid grid-cols-5 grid-rows-3">
                                        <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">
                                                <i class="bi bi-x"></i>
                                            </span>
                                            <span class="flex-grow text-sm" style="
                                                text-align: center;
                                            ">Close File</span>
                                        </span>
                                    </span>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>

            </div>
                </div>
                <div class="bg-indigo-600 overflow-y-auto" style="height: calc(100% - 5rem); padding: 5% 8%" id="PageLayout">
                    
                </div>
                <div class="bg-works-document fixed bottom-0 px-4 h-8 flex items-center w-full border-t-2 border-solid border-base-content/20">
            <div>
                p>strong
            </div>
            <div class="ml-auto flex" style="width: 30%">
                <div class="flex items-center justify-center">
                    <div class="w-full" style="
                        --bs-progress-height: 1rem;
                        --bs-progress-font-size: 0.75rem;
                        --bs-progress-bg: #e9ecef;
                        --bs-progress-border-radius: 0.375rem;
                        --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
                        --bs-progress-bar-color: #fff;
                        --bs-progress-bar-bg: #0d6efd;
                        --bs-progress-bar-transition: width 0.6s ease;
                        display: flex;
                        height: var(--bs-progress-height);
                        overflow: hidden;
                        font-size: var(--bs-progress-font-size);
                        background-color: var(--bs-progress-bg);
                        border-radius: var(--bs-progress-border-radius);
                    ">
                        <div class="progress-bar bg-success" w-1/2
                            style="
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                overflow: hidden;
                                color: var(--bs-progress-bar-color);
                                text-align: center;
                                white-space: nowrap;
                                background-color: var(--bs-progress-bar-bg);
                                transition: var(--bs-progress-bar-transition);
                            "
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>
                <p>26 words</p>
            </div>
                </div>
           </div>
        `
}
