function dataSuccess(position) {
    getDataPrayer(position.coords.latitude, position.coords.longitude);
}

function dataError() {
    alert("Lokasi tidak dapat di akses!");
}

(function () {
    if (!navigator.geolocation) {
        alert(
            "Permintaan lokasi tidak didukung oleh browser, silahkan gunakan browser lain!"
        );
    } else {
        navigator.geolocation.getCurrentPosition(dataSuccess, dataError);
    }
})();

const getDataPrayer = async (latitude, longitude) => {
    try {
        const urlPrayer = `http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=3`;
        const data = await fetch(urlPrayer);
        const response = await data.json();

        if (!data.ok) {
            console.log("eror");
        } else {
            renderDataPrayer(response.data);
        }
    } catch (error) {
        console.log(error);
    }
};

function renderDataPrayer(waktu) {
    let time = new Date();
    let today = time.getDate() - 1;
    let data = waktu[today].timings;
    let day = waktu[today].date.readable;
    const tableBox = document.querySelector(".data-prayer");
    const titleTime = document.querySelector(".title-prayer");
    let table = "";

    // for (let i in data) {
    //     table += `
    //     <tr>
    //         <th scope="row">${i}</th>
    //         <td>${data[i]}</td>
    //     </tr>
    //     `;
    // }

    for (let index = 0; index < 8; index++) {
        console.log(index);
    }
    // tableBox.innerHTML = table;
    titleTime.innerHTML = `Waktu ibadah anda pada ${day} : `;
}

function showDataPrayer(e) {
    return `
    <div class="col">
        <div class="time p-3">
            <h4>Fajr</h4>
            <p>04.25 (WIB)</p>
        </div>
    </div>`;
}
export { getDataPrayer };
