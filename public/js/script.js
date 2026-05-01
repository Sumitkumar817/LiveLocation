const socket = io();
let roomId = "";
let marker;

const map = L.map("map").setView([20.5937, 78.9629], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
}).addTo(map);

// check URL for room
const params = new URLSearchParams(window.location.search);
const existingRoom = params.get("room");

if (existingRoom) {
    roomId = existingRoom;
    socket.emit("join-room", roomId);
}

// generate random room
function createShareLink() {
    roomId = Math.random().toString(36).substring(2, 10);

    socket.emit("join-room", roomId);

    const link = `${window.location.origin}/?room=${roomId}`;
    document.getElementById("shareLink").value = link;
}

// send live location
if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        if (roomId) {
            socket.emit("send-location", {
                roomId,
                latitude,
                longitude
            });
        }
    });
}

// receive live location
socket.on("receive-location", ({ latitude, longitude }) => {
    if (marker) {
        marker.setLatLng([latitude, longitude]);
    } else {
        marker = L.marker([latitude, longitude]).addTo(map);
    }

    map.setView([latitude, longitude], 16);
});