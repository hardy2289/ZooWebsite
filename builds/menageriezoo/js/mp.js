var map = null;
var shape = null;
var vezoosLayer = null;
// map object
var map = null;
// declairing route
var route = null;
//Delcairing an array of 4 zoos
var zoos= new Array(4) ;
//zoos points
var zoos_points = new Array(4);
// disable asynchronous call
$.ajaxSetup({
    async: false
});

function point(title,link,postcode,lat,lon)
{
    this.title=title;
    this.link=link;
    this.postcode=postcode;
    this.lat=lat;
    this.lon=lon;
}


// this function reads zoos json and load to zoos array
function Load_Zoos_Json() {

    try {

        $.ajax({
            url: '/content/json/zoos.json',
            datatype: 'json',
            type: 'get',
            success: function (data)
            {
                zoos = data;
            }

        });

    }

    catch (err)
    {
        alert(err.message);
    }
}
// this function creates zoos points
function Create_zoos_points()
{

    for (var i = 0; i < zoos.zoo.length; ++i)
    {
        // loop through zoos json and fill points
        zoos_points[i] = new point(zoos.zoo[i].Name, zoos.zoo[i].Link, zoos.zoo[i].postcode, zoos.zoo[i].lat, zoos.zoo[i].long);
    }


}
function GetMap()
{

    map = new VEMap('myMap');
    map.LoadMap();
    // Default black pool zoo
    var latLong = new VELatLong(53.81625, -3.011161);

    map.SetCenterAndZoom(latLong, 12);


    /* Adding an XML RSS feed */

    vezoosLayer = new VEShapeLayer();


    var veLayerSpec = new VEShapeSourceSpecification(VEDataType.GeoRSS, " FindMap/ZoosGeoRSS.xml", vezoosLayer);

    vezoosLayer.SetTitle('Zoos Layer');

    map.ImportShapeLayerData(veLayerSpec, onFeedLoad);


}


function showRoadMap()
{
    var s = map.GetMapStyle();
    if (s!=VEMapStyle.Road)
    {
        map.SetMapStyle(VEMapStyle.Road);
    }
}

function showHybridMap()
{
    var s = map.GetMapStyle();
    if (s!=VEMapStyle.Hybrid)
    {
        map.SetMapStyle(VEMapStyle.Hybrid);
    }
}

function setBirdseye()
{
    var s = map.GetMapStyle();
    if (map.IsBirdseyeAvailable() && s!=VEMapStyle.Birdseye)
    {
        if (document.getElementById("south").checked) { map.SetBirdseyeOrientation(VEOrientation.South); }
        else { map.SetBirdseyeOrientation(VEOrientation.North); }
    }
}

function ViewNorthSouth()
{
    var s = map.GetMapStyle();
    if (s==VEMapStyle.Birdseye)
    {
        if (document.getElementById("south").checked) { map.SetBirdseyeOrientation(VEOrientation.South); }
        else { map.SetBirdseyeOrientation(VEOrientation.North); }
    }
}


function ZoomIN()
{
    map.ZoomIn();
}

function ZoomOUT()
{
    map.ZoomOut();
}

function GetRoute()
{

    var e = document.getElementById("SelectStart");
    var index = e.selectedIndex;
    var latLong = new VELatLong(zoos_points[index].lat, zoos_points[index].lon);

    if (typeForm.routeType[0].checked) {
        routeType = VERouteType.Quickest;
    }

    else if (typeForm.routeType[1].checked) {
        routeType = VERouteType.Shortest;
    }
    route = map.GetRoute(txtStart.value, latLong, VEDistanceUnit.Miles, routeType, myCallback());

}
function myCallback()
{


}
function onFeedLoad()
{
    var numShapes = vezoosLayer.GetShapeCount();
    for(var i=0; i < numShapes; ++i)
    {
        var s = vezoosLayer.GetShapeByIndex(i);
        s.SetCustomIcon("/FindMap/smallK.gif");
    }

}


function PanTo(myPoint)
{
    var latLong = new VELatLong(myPoint.lat, myPoint.lon);

    map.SetCenterAndZoom(latLong, 16);
    //AddPin();

}
function AddPin() {
    var center = map.GetCenter();
    var pin = map.AddPushpin(center);
    pin.SetTitle('This is the title text');
    pin.SetDescription('This is the description text.');
}
function FindLoc()
{
    // This is a simple find function that finds addresses or postcodes e.g. in findWhere field: loftus road, london or W12 7PA
    // or businesses eg findWhat: QPR Fottball Club findWhere: London
    // the text fields are in the HTML after findLocation
    // some more sophisticated error checking is needed

    map.Find(document.getElementById('findWhat').value, document.getElementById('findWhere').value);
}


