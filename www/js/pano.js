var eyexpoFrame = document.getElementById('myFrame');
if (eyexpoFrame != null) { //if the container is visible on the page
    eyexpoFrame.contentWindow.open = function(url, windowName, windowFeatures) {
        // do whatever you want here (e.g. open an ajax modal frame)
        // window.alert(url);
        eyexpoFrame.setAttribute("src", "vr/office/index.html?vr");
    };
}
