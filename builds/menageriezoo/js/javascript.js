
var map = null;
var route = null;
var routeType = null;

var shape;
var mapx, mapy;


function GetMap()
{
    map = new VEMap('myMap');
    map.LoadMap();
    map.AttachEvent('onclick', showPopupMenu);
    FindLoc();
    prepMenu();


}
function FindLoc()  {
    try { map.Find(null, "London,United Kingdom"); }
    catch(e) { alert(e.message); }
}

function GetRoute()
{
    if (typeForm.routeType[0].checked)
    {
        routeType = VERouteType.Quickest;
    }

    else if (typeForm.routeType[1].checked)
    {
        routeType = VERouteType.Shortest;
    }
    route = map.GetRoute(txtStart.value, txtEnd.value, VEDistanceUnit.Miles, routeType, myCallback());
}


function DeleteRoute()
{
    map.DeleteRoute();
}

function myCallback()
{
    // alert("The callback function has been called.");
}

function ShowDisambiguationDialog(v)
{
    map.ShowDisambiguationDialog(v);
}

function hidePopupMenu()
{
    var menu = document.getElementById('popupmenu').style.display='none';
}

function showPopupMenu(e)
{
    var menu = document.getElementById('popupmenu');
    if (e.rightMouseButton)
    {
        var latlong = map.LatLongToPixel(new VELatLong(e.mapX,e.mapY));
        var x = map.GetLeft();
        var y = map.GetTop();
        mapx = e.mapX;
        mapy = e.mapY;

        menu.style.display='block'; //Showing the menu
        menu.style.left = e.mapX + x; //Positioning the menu
        menu.style.top = e.mapY + y;
        if(e.elementID)
            shape = map.GetShapeByID(e.elementID);
    }
    else
    {
        hidePopupMenu();
    }

}
function deleteObject()
{
    if(shape)
        map.DeleteShape(shape);
    shape = null;
}

function StartGeocoding( address )
{
    map.Find(null,    // what
        address, // where
        null,    // VEFindType (always VEFindType.Businesses)
        null,    // VEShapeLayer (base by default)
        null,    // start index for results (0 by default)
        null,    // max number of results (default is 10)
        null,    // show results? (default is true)
        null,    // create pushpin for what results? (ignored since what is null)
        null,    // use default disambiguation? (default is true)
        null,    // set best map view? (default is true)
        GeocodeCallback);  // call back function
}
function GeocodeCallback (shapeLayer, findResults, places, moreResults, errorMsg)
{
    // if there are no results, display any error message and return
    if(places == null)
    {
        alert( (errorMsg == null) ? "There were no results" : errorMsg );
        return;
    }

    var bestPlace = places[0];

    // Add pushpin to the *best* place
    var location = bestPlace.LatLong;

    var newShape = new VEShape(VEShapeType.Pushpin, location);

    var desc = "Latitude: " + location.Latitude + "Longitude:" + location.Longitude;
    newShape.SetDescription(desc);
    newShape.SetTitle(bestPlace.Name);
    map.AddShape(newShape);
}
function onGeocodeClick()
{
    map.Clear();
    address = document.getElementById("txtWhere").value;
    StartGeocoding(address);
}

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
}function prepMenu()
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