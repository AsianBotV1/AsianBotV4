let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = `
    *Hola 👋🏻, aquí encontrarás el Instagram oficial de mi owner*
*https://www.instagram.com*
    `.trim() 
    
    conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 bill  ᷦ×͜× 🔥*', 'status@broadcast')
    }
    handler.command = /^(ig|igofc|instagramofc)$/i
    
    module.exports = handler
