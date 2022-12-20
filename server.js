const QRCode =require ('qrcode')

    const generateQRcode = (text)=>{
        QRCode.toFile('./qr.png',text);
        QRCode.toString(text,{type:'terminal'})
      .then(url => {
        console.log(url)
      })
      .catch(err => {
        console.error(err)
      })
    }
    generateQRcode("www.google.com")



