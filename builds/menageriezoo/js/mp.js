function prepMenu()
{

    navRoot = document.getElementById("popupmenu");
    var items = navRoot.getElementsByTagName('li');
    for (i=0; i<items.length; i++)
    {
        node = items[i];
        if (node.nodeName=="LI")
        {
            node.onmouseover = function()
            {
                this.className+=" over"; //Show the submenu
            }
            node.onmouseout=function()
            {
                if (this.className.indexOf('pmenu') > 0)
                {
                    this.className="pmenu";
                }
                else {
                    this.className = "";
                }
            }
        }
    }
}