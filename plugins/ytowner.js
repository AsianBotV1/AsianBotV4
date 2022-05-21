let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = `
    *Hola 👋🏻, aquí encontrarás mi canal de YouTube ✅*
*https://www.youtube.com*
    `.trim() 
    
    conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 AsianBot  ᷦ×͜× 🔥*', 'status@broadcast')
    }
    handler.command = /^(ytowner|ytofc|youtubeofc)$/i
    
    module.exports = handler
