function success(position) {
    console.log(position);
}

function error() {
    alert("Lokasi tidak dapat di akses!");
}

function userLocation() {
    if (!navigator.geolocation) {
        alert(
            "Permintaan lokasi tidak didukung oleh browser, silahkan gunakan browser lain!"
        );
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function main() {
    const app = document.querySelector(".app");
    userLocation();
}

main();
