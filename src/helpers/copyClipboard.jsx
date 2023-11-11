export default function copyToClipboard(norek) {
  const nomorRekeningElement = document.getElementById(norek);

  if (nomorRekeningElement) {
    const textToCopy = nomorRekeningElement.textContent;
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    // Optional: Tampilkan pesan atau perubahan warna tombol setelah menyalin
    alert("Nomor rekening berhasil disalin!");
  }
}
