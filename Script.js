async function kirimDataKeSheet(nama, harga) {
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbztCyJt90s6IRxgjEUN0frUAQC6DzLtWCfGNvcGOpA1XFYw5EEz8gz2IRFfYAiijfd7Ew/exec";
  
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
