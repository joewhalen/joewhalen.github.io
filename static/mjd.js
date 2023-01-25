function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
    var x = new Date();
    ms = Date.now()
    MJD = Math.floor((ms / 1000 / 86400 + 40587))
    document.getElementById('ct').innerHTML = "The current MJD is " + MJD;
    display_c();
 }