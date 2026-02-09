// [보안] 이제 실제 키는 Vercel 설정창에만 있습니다!
const CONFIG = {
    // Vercel 환경 변수에서 가져오는 설정
    API_KEY: window.API_KEY_ENV || "", 
    SPREADSHEET_ID: "1O4M_r_ZMNFOCRPlIuqMpgfwRtdUSAwY520lyrBX104Y",
    GAS_URL: "https://script.google.com/macros/s/AKfycbwsaZ9xNvPdZENLmjS-V0sWy22ItvR43YAr3b1K2qTkHrfjUgSedbqnAVpQ2hdc040T/exec",
    FIREBASE: {
        apiKey: window.API_KEY_ENV || "",
        main: "chat-9035a.firebaseapp.com",
        databaseURL: "https://chat-9035a-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "chat-9035a",
        storageBucket: "chat-9035a.firebasestorage.app",
        messagingSenderId: "807179401789",
        appId: "1:807179401789:web:644359473a0cb1e05f4854",
        measurementId: "G-BKQNKVRB8X"
    }
};
