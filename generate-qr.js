// Script to generate the investor access QR code
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const ACCESS_URL = 'https://www.enai.ai/events/qatar-summit-2026?access=ENAI-INVESTOR-2026';
const OUTPUT_PATH = path.join(__dirname, 'public', 'investor-access-qr.png');

async function generateQRCode() {
    try {
        await QRCode.toFile(OUTPUT_PATH, ACCESS_URL, {
            type: 'png',
            width: 400,
            margin: 2,
            color: {
                dark: '#1E3A3A',  // ENAI brand teal
                light: '#FFFFFF'
            },
            errorCorrectionLevel: 'H'
        });
        console.log('✅ QR Code generated successfully!');
        console.log(`📁 Saved to: ${OUTPUT_PATH}`);
        console.log(`\n🔗 URL encoded: ${ACCESS_URL}`);
        console.log(`\n📱 Access Token: ENAI-INVESTOR-2026`);
    } catch (err) {
        console.error('Error generating QR code:', err);
    }
}

generateQRCode();
