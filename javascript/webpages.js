function changeDivDisplayed(divId)
{
	switch(divId)
	{
	      case: "about"
		displayBlock("about");
		hideDiv("socials");
	        hideDiv("projects");
		break;
	
	      case: "socials"
		displayBlock("socials");
		hideDiv("about");
		hideDiv("projects");
		break;
	
	      case: "projects"
		displayBlock("projects");
		hideDiv("about");
		hideDiv("socials");
		break;
	     
	     default:
		diplayBlock("about");
		hideDiv("projects");
		hideDiv("socials");
		break;
	}
}
