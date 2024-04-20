module.exports = (
			dropdownContainerListItemClasses,dropdownContainerListItemIconClasses,
			dropdownContainerListItemText, dropdownContainerListItemSubText, dropdownContainerListItemSubTextClasses
) => {


	this.dropdownContainerListItemClasses = dropdownContainerListItemClasses || ""
	this.dropdownContainerListItemIconClasses = dropdownContainerListItemIcon || ""
	this.dropdownContainerListItemTextClasses = dropdownContainerListItemTextClasses || "badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
	this.dropdownContainerListItemText = dropdownContainerListItemText || "Drop Down Item"
	this.dropdownContainerListItemSubTextClasses = dropdownContainerListItemSubTextClasses || "font-[sans-serif]"
	this.dropdownContainerListItemSubText = dropdownContainerListItemSubText || ""

	return`
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
	`
}