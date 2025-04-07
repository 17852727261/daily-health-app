// 数据加密（AES-256）
function encryptData(data, key) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
  }
  
  // 数据解密
  function decryptData(cipherText, key) {
    const bytes = CryptoJS.AES.decrypt(cipherText, key);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
  
  // 防止 XSS 攻击
  function sanitizeInput(input) {
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }