module.exports = () => {
	return `
		<div class="flex items-center justify-center fixed mt-[50px] flex-col pl-3 transition duration-700" style="height: calc(100% - 50px);">
      		<div class="card relative h-[50%] flex items-center flex-col justify-center shadow-md">
      		
      		  <!-- Home Button --->
      		  <button role="button" class="btn btn-ghost rounded-full border 
      		    font-semibold w-[40px] h-[40px]
      		    flex items-center justify-center my-3 px-4
      		    overflow-x-hidden transition duration-400
      		    hover:bg-orange-400 hover:border-transparent
      		    hover:text-white hover:w-[max-content]
      		    focus:outline-none focus:ring-2
      		    focus:ring-orange-500 focus:ring-offset-2
      		    absolute left-0 -top-[20%] btnHover">
      		    <span class="hidden font-normal md:inline">
      		      <i class="bi bi-house text-2xl font-semibold"></i>
      		      <span class="text-lg hidden ml-3">
      		        Home
      		      </span>
      		    </span>
      		  </button>
  		
      		  <!-- Create Button -->
      		  <button role="button" class="btn btn-ghost rounded-full
      		    font-semibold w-[40px] h-[40px]
      		    flex items-center justify-center my-3 px-4
      		    overflow-x-hidden transition duration-400
      		    hover:bg-purple-400 hover:border-transparent
      		    hover:text-white hover:w-[max-content]
      		    focus:outline-none focus:ring-2
      		    focus:ring-purple-500 focus:ring-offset-2
      		    absolute left-0 top-[0%] btnHover">
      		    <span class="hidden font-normal md:inline">
      		      <i class="bi bi-plus text-2xl font-semibold"></i>
      		      <span class="text-lg hidden ml-3">
      		        Create
      		      </span>
      		    </span>
      		  </button>
  		
      		  <!-- Market Place Button -->
      		  <button role="button" class="btn btn-ghost rounded-full
      		    font-semibold w-[40px] h-[40px]
      		    flex items-center justify-center my-3 px-4
      		    overflow-x-hidden transition duration-400
      		    hover:bg-green-400 hover:border-transparent
      		    hover:text-white hover:w-[max-content]
      		    focus:outline-none focus:ring-2
      		    focus:ring-green-500 focus:ring-offset-2
      		    absolute left-0 top-[20%] btnHover">
      		    <span class="hidden font-normal md:inline">
      		      <i class="bi bi-shop text-2xl font-semibold"></i>
      		      <span class="text-lg hidden ml-3">
      		        Market Place
      		      </span>
      		    </span>
      		  </button>
  		
      		  <!-- Group Button -->
      		  <button role="button" class="btn btn-ghost rounded-full
      		    font-semibold w-[40px] h-[40px]
      		    flex items-center justify-center my-3 px-4
      		    overflow-x-hidden transition duration-400
      		    hover:bg-pink-400 hover:border-transparent
      		    hover:text-white hover:w-[max-content]
      		    focus:outline-none focus:ring-2
      		    focus:ring-pink-500 focus:ring-offset-2
      		    absolute left-0 top-[40%] btnHover">
      		    <span class="hidden font-normal md:inline">
      		      <i class="bi bi-people-fill text-2xl font-semibold"></i>
      		      <span class="text-lg hidden ml-3">
      		        Group
      		      </span>
      		    </span>
      		  </button>
  		
      		  <!-- Convert Button -->
      		  <button role="button" class="btn btn-ghost rounded-full
      		    font-semibold w-[40px] h-[40px]
      		    flex items-center justify-center my-3 px-4
      		    overflow-x-hidden transition duration-400
      		    hover:bg-teal-400 hover:border-transparent
      		    hover:text-white hover:w-[max-content]
      		    focus:outline-none focus:ring-2
      		    focus:ring-teal-500 focus:ring-offset-2
      		    absolute left-0 top-[60%] btnHover">
      		    <span class="hidden font-normal md:inline">
      		      <i class="bi bi-repeat text-2xl font-semibold"></i>
      		      <span class="text-lg hidden ml-3">
      		        Convert Docs
      		      </span>
      		    </span>
      		  </button>
  		
      		  <!-- Upload Button -->
      		  <button role="button" class="btn btn-ghost rounded-full
      		    font-semibold w-[40px] h-[40px]
      		    flex items-center justify-center my-3 px-4
      		    overflow-x-hidden transition duration-400
      		    hover:bg-pink-400 hover:border-transparent
      		    hover:text-white hover:w-[max-content]
      		    focus:outline-none focus:ring-2
      		    focus:ring-pink-500 focus:ring-offset-2
      		    absolute left-0 top-[80%] btnHover">
      		    <span class="hidden font-normal md:inline">
      		      <i class="bi bi-cloud-upload text-2xl font-semibold"></i>
      		      <span class="text-lg hidden ml-3">
      		        Upload
      		      </span>
      		    </span>
      		  </button>
      		</div>
    	</div>
	`
}