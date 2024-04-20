module.exports = (icon, iconColor, extension, inputColor) => {
	return`
			<div class="fixed bg-white w-full h-full z-40" id="createFileContainer">
				<div class="w-full mb-4">
					<button class="btn btn-ghost rounded-btn" onClick="goBackHome()">
						<i class="bi bi-arrow-left"></i>
						<label>Back</label>
					</button>	
				</div>
				<div class="w-full h-60 bg-danger bg-red-500 flex items-center justify-center"
					 style="background: linear-gradient(to right, #e9e0ef, #a0abe7)">
					<div class="w-24 h-24 flex items-center justify-center" style="rgba(255, 255, 255, 0.6)">
						<i class="bi ${icon} ${iconColor} text-6xl"></i>
					</div>
				</div>
				<div class="pt-20 px-16">
					<div>
						<label class="sans-serif mr-6">File Name: </label>
						<input class="input input-sm input-${inputColor} outline-${inputColor} w-1/2 mr-3" placeholder="File Name" />
						<label class="sans-serif" id="extensionHolder">${extension}</label>
					</div>
				</div>
				<div class="pt-20 px-16">
					<div class="flex">
						<button 
							class="btn btn-ghost btn-outline w-3/12 h-1/2 rounded-btn ml-auto"
							onClick="goToEditor()"
						>
							<i class="bi bi-plus text-2xl"></i>
							Create
						</button>
					</div>
				</div>
			</div>
		`
}
