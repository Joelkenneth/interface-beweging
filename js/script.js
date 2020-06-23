/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


console.log("testing");





// Functie 1 - Biertje Drinken
function drinken() {
    document.getElementById("buttons");
    var video = document.getElementById('idlestate');
    video.src = "images/barjoe-drinken1.mp4";
    video.look = false;
    video.play();
    video.muted = false;
    document.getElementById('idlestate').addEventListener('ended', reload, false);

    function reload() {
        location.reload();
    }
}



// Functie 2 - Vallen van kruk
function vallen() {
    document.getElementById("buttons");
    var video = document.getElementById('idlestate');
    video.src = "images/barjoe-vallen1.mp4";
    video.look = false;
    video.play();
    video.muted = false;
    document.getElementById('idlestate').addEventListener('ended', reload, false);

    function reload() {
        location.reload();

    }
}

// Functie 3 - Tijd om naar huis te gaan 

function tijd() {
    document.getElementById("buttons");
    var video = document.getElementById('idlestate');
    video.src = "images/barjoe-tijd1.mp4";
    video.look = false;
    video.play();
    video.muted = false;
    document.getElementById('idlestate').addEventListener('ended', reload, false);

    function reload() {
        location.reload();

    }
}
