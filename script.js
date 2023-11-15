




setInterval(() => {


    let hour = document.getElementById('hour');

    let min = document.getElementById('min');

    let sec = document.getElementById('sec');

    d = new Date();

    let hours = d.getHours();

    let mins = d.getMinutes();

    let secs = d.getSeconds();


    hourRod = 30 * hours + mins / 2;

    minRod = 6 * mins;

    secRod = 6 * secs;

    hour.style.transform = `rotateZ(${hourRod}deg)`;

    sec.style.transform = `rotateZ(${secRod}deg)`;

    min.style.transform = `rotateZ(${minRod}deg)`;

}, 1000);





function getlocation() {
    navigator.geolocation.getCurrentPosition(position => {


        const { latitude, longitude } = position.coords;

        const url = ` https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;

        let Latitude = position.coords.latitude;
        let Longitude = position.coords.longitude;

        console.log(Latitude, Longitude);

                fetch(url).then(res => res.json()).then(data => {

        
                    console.table(data.address);
        
                    if (Latitude.toFixed(4) == "10.0790" && Longitude.toFixed(4) == "78.7775" && data.address.town == "Karaikudi" && data.address.amenity == "Veera Ortho Care Hospital" && data.address.road == "College Road") {
                        document.location = "index.html";
                        console.table(data.address);

                    }
        
                    else {

                        alert("Location Mismatched");
                        
                        var x = position.coords.latitude;
                        var y = position.coords.longitude ;
                        console.log(Latitude.toFixed(4));
                        console.log(Longitude.toFixed(4));

                    }
        
                }).catch(() => {
                    console.log("Error Fetching Data From API");
                });  


    });
}