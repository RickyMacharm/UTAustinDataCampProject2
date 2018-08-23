
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function showMap(evt, topic) {
    console.log('show map!')

    var map = d3.geomap.choropleth()
    .geofile('../assets/d3-geomap-1.0.2/topojson/world/countries.json')
    .colors(colorbrewer.YlGnBu[9])
    .column(topic)
    .format(format)
    .legend(true)
    .unitId('Country Code');

    var format = function(d) {
        d = d;
        return d3.format(',.01f')(d);
    }

    d3.csv(file_url, function(err, data){
        if (err) throw err;
        
        d3.select('#map')
        .datum(data)
        .call(map.draw, map);
    });
    
}