function hideAndDisplay(divId)
{
	var div = document.getElementById(divId);
	switch(div){
		case "bio":
			setDisplayBlock("bio");
			setDisplayNone("work");
			setDisplayNone("social");
		 break;
		case "work":
			setDisplayGrid("work");
			setDisplayNone("bio");
			setDisplayNone("socials");
			break;
		case "social":
			setDisplayGrid("social");
			setDisplayNone("work");
			setDisplayNone("bio");
			break;
		default:
			setDisplayBlock("bio");
			setDisplayNone("work");
			setDisplayNone("social");
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