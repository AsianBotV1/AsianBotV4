let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = `
*⍣Zoot Revo⍣*
https://www.youtube.com/channel
Canal de buzoneo y metodos private
    `.trim() 
    
    conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 AsianBot  ᷦ×͜×*', 'status@broadcast')
    }
    handler.command = /^(zoot|ZootRevo|el ma negro)$/i
    
    module.exports = handler
