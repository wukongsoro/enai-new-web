// Script to generate QR codes for investor access
const QRCode = require('qrcode');
const path = require('path');

// Production URL (for printing/sharing) - NOTE: No "www" prefix
const PROD_URL = 'https://enai.ai/events/qatar-summit-2026?access=ENAI-INVESTOR-2026';

// Local testing URL
const LOCAL_URL = 'http://localhost:3000/events/qatar-summit-2026?access=ENAI-INVESTOR-2026';

const PROD_OUTPUT = path.join(__dirname, 'public', 'investor-access-qr.png');
const LOCAL_OUTPUT = path.join(__dirname, 'public', 'investor-access-qr-local.png');

async function generateQRCodes() {
    try {
        // Generate production QR code
        await QRCode.toFile(PROD_OUTPUT, PROD_URL, {
            type: 'png',
            width: 500,
            margin: 3,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            },
            errorCorrectionLevel: 'H'
        });
        console.log('✅ Production QR Code generated!');
        console.log(`📁 Saved to: ${PROD_OUTPUT}`);
        console.log(`🔗 URL: ${PROD_URL}\n`);

        // Generate local testing QR code
        await QRCode.toFile(LOCAL_OUTPUT, LOCAL_URL, {
            type: 'png',
            width: 500,
            margin: 3,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            },
            errorCorrectionLevel: 'H'
        });
        console.log('✅ Local Testing QR Code generated!');
        console.log(`📁 Saved to: ${LOCAL_OUTPUT}`);
        console.log(`🔗 URL: ${LOCAL_URL}\n`);

        console.log('📱 Access Token: ENAI-INVESTOR-2026');

        // Show terminal QR for production
        console.log('\n📱 Production QR (scan to verify):\n');
        const terminalQR = await QRCode.toString(PROD_URL, { type: 'terminal', small: true });
        console.log(terminalQR);
    } catch (err) {
        console.error('Error generating QR code:', err);
    }
}

generateQRCodes();
