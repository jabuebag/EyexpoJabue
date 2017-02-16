var eyexpoFrame = document.getElementById('myFrame');
if (eyexpoFrame != null) { //if the container is visible on the page
    eyexpoFrame.contentWindow.open = function(url, windowName, windowFeatures) {
        // do whatever you want here (e.g. open an ajax modal frame)
        // window.alert(url);
        if (url.indexOf('winniechung') !== -1) {
            eyexpoFrame.setAttribute("src", "vr/winniechung/index.html?vr");
        }

        if (url.indexOf('sfu') !== -1) {
            eyexpoFrame.setAttribute("src", "vr/sfu/index.html?vr");
        }

        if (url.indexOf('newoffice') !== -1) {
            eyexpoFrame.setAttribute("src", "vr/newoffice/index.html?vr");
        }

        if (url.indexOf('vancouver') !== -1) {
        	eyexpoFrame.setAttribute("src", "vr/vancouver/index.html?vr");
        }

        if (url.indexOf('stanleypark') !== -1) {
            eyexpoFrame.setAttribute("src", "vr/stanleypark/index.html?vr");
        }

        if (url.indexOf('driving') !== -1) {
            eyexpoFrame.setAttribute("src", "vr/driving/index.html?vr");
        }

        if (url.indexOf('carshow') !== -1) {
            eyexpoFrame.setAttribute("src", "vr/carshow/index.html?vr");
        }
    };
}
