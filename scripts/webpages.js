function hideAndDisplay(divId)
{
	var div = document.getElementById(divId);
	switch(div){
		case "about":
			setDisplayBlock("about");
			setDisplayNone("projects");
			setDisplayNone("socials");
		 break;
		case "projects":
			setDisplayGrid("projects");
			setDisplayNone("about");
			setDisplayNone("socials");
			break;
		case "socials":
			setDisplayGrid("socials");
			setDisplayNone("projects");
			setDisplayNone("about");
			break;
		default:
			setDisplayBlock("about");
			setDisplayNone("projects");
			setDisplayNone("socials");
	}

}

function setDisplayBlock(divId)
{
	var div = document.getElementById(divId);
	div.style.display = "block";
}

function setDisplayGrid(divId)
{
	var div = document.getElementById(divId);
	div.style.display = "grid";
}

function setDisplayNone(divId)
{
	var div = document.getElementById(divId);
	div.style.display = "none";
}