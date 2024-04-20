module.exports = () => {
	return `
		<div data-theme="aqua" class="card shadow-xl fixed top-[65px] right-0 w-[85%] h-full p-2 rounded-l-md transition-transform ease-in-out duration-300 translate-x-[100%]" id="settingsDrawer">
        	<div class="flex flex-row items-center justify-center h-[15%]">
        	  
        		<div class="flex items-center justify-center w-[25%] ml-3">
        			<div className="avatar">
              			<div className="w-24 rounded-full">
              			  <img src="/home/oem/Desktop/sammike/img/sammike.jpg" class="w-12 rounded-full"/>
              			</div>
            		</div>
            		<div class="flex flex-col ml-4">
            			<label class="font-semibold text-lg">Hello World</label>
            			<label class="font-semibold opacity-60 text-md">helloworld@gmail.com</label>
            		</div>
        		</div>

        	  	<div class="flex items-center justify-center w-[50%] flex-col">
        	  		<h2 class="text-2xl font-semibold">Settings</h2>
        	  		<label className="input input-bordered flex items-center gap-2 mt-10">
        	  		  <input type="text" className="grow input input-bordered w-full flex-1" placeholder="Search" />
        	  		  <button class="btn btn-ghost rounded-full">
        	  		    <i class="bi bi-search font-bold"></i>
        	  		  </button>
        	  		</label>
        	  	</div>

        	  	<div class="flex items-center justify-center w-[25%]">
        	  		<button class="btn btn-ghost rounded-full">
        	  			<i class="bi bi-clouds font-semibold text-2xl"></i>
        	  		</button>
        	  		<input type="checkbox" value=""  class="toggle theme-controller" />
        	  	</div>
        	
        	</div>
      </div>
	`
}