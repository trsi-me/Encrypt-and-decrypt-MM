const key = "mysecretkey12345";

function encryptText() {
    let text = document.getElementById("text").value;
    let encrypted = CryptoJS.AES.encrypt(text, key).toString();
    document.getElementById("encryptedText").innerText = encrypted; }

function decryptText() {
    let encryptedText = document.getElementById("encryptedText").innerText;
    let decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
    document.getElementById("decryptedText").innerText = decrypted; }