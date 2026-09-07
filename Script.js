async function kirimDataKeSheet(nama, harga) {
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbw_rJiZvUckSHGdssR7darIjcTMlsTuDOYGcRVA56bcXu4KBTjHrcQLjoZ1UvB5rXx1qQ/exec";
  
  const dataBaru = {
    sheetName: "Transactions",
    payload: [
      "TRX-" + Date.now(),
      new Date().toLocaleString(),
      nama,
      "Spa Treatment",
      harga
    ]
  };

  try {
    let response = await fetch(WEB_APP_URL, {
      method: "POST",
      body: JSON.stringify(dataBaru)
    });
    let hasil = await response.json();
    alert("Data berhasil tersimpan ke Google Sheets!");
    console.log(hasil);
  } catch (error) {
    alert("Gagal menyimpan data!");
    console.error(error);
  }
}
