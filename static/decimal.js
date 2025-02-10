function display_c(){
    var refresh=100000/86400; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
    var x = new Date();
    ms = Date.now()
    s = ((ms/1000) / 86400) % 1 * 86400; // seconds since start of new day
    console.log(s);
    ds = s * 100000/86400;
    document.getElementById('ct').innerHTML = "The current Decimal Time is " + Math.floor((ds/100/100)) + ":" + Math.floor(((ds/100)%100)) + ":" + Math.floor(ds%100%100);
    document.getElementById('ct_title').innerHTML = "Decimal Time - " + ds;
    display_c();
 }
