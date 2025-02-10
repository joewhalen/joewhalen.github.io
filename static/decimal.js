function display_c(){
    var refresh=1; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
    var x = new Date();
    ms_offset = x.getTimezoneOffset() * 60 * 1000;
    ms = Date.now() - ms_offset;
    s = ((ms/1000) / 86400) % 1 * 86400; // seconds since start of new day
    ds = s * 100000/86400;
    timeString = Math.floor((ds/100/100)) + ":" +
         Math.floor(((ds/100)%100)).toString().padStart(2,'0') + ":" + Math.floor(ds%100%100).toString().padStart(2,'0');
    document.getElementById('ct_title').innerHTML = "Decimal Time - " + timeString;
    document.getElementById('ct').innerHTML = "The current Decimal Time is " + timeString;
    display_c();
 }
