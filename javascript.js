const requestButton = document.querySelector(".request-button");

function onGranted() {
    requestButton.style.background = "green";
}

function onDenied() {
    requestButton.style.background = "red";
}

requestButton.onclick = function() {
    Push.Permission.request(onGranted, onDenied);
}
