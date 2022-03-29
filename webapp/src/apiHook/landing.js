
const hostURL = "http://localhost:5000";

function getLocation(data){
    const url = hostURL + '/api/locations' + '?country=' + data.country +'&region='+ data.region
    const request = new Request(url, {
        method: 'get', 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
    fetch(request).then((res) => { 
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json() 
        }else{
            alert('Could not get Bookings')
        }                
    }).catch((error) => {
        log(error)
    })
}


function getStyle(data){
    const url = hostURL + '/api/styles' + '?name=' + data.style
    const request = new Request(url, {
        method: 'get', 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
    fetch(request).then((res) => { 
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json() 
        }else{
            alert('Could not get Bookings')
        }                
    }).catch((error) => {
        log(error)
    })
}


function getTimeslot(data){
    const url = hostURL + '/api/timeslots' + '?start=' + data.start + '&end=' + data.end
    const request = new Request(url, {
        method: 'get', 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
    fetch(request).then((res) => { 
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json() 
        }else{
            alert('Could not get Bookings')
        }                
    }).catch((error) => {
        log(error)
    })
}


function getArtists(data){
    const url = hostURL + '/api/findArtists' + '?style=' + data.styleIDs + '&locationID=' + data.locationID
    const request = new Request(url, {
        method: 'get', 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });
    fetch(request).then((res) => { 
        if (res.status === 200) {
            // return a promise that resolves with the JSON body
            return res.json() 
        }else{
            alert('Could not get Bookings')
        }                
    }).catch((error) => {
        log(error)
    })
}