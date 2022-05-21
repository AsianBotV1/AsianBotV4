let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = `
    *⍣𝑻𝒐𝒏𝒚𝒙|ɴʙᴊ ×͜×⍣*
    El ma jakel
    ╔════⪼ཊ༼⚚༿𖤍༾⚚༽ཏ⪻════╗
Canal de YT: https://www.youtube.com
El ma jakel de iutu oiste elmano
    ╚════⪼ཊ༼⚚༿𖤍༾⚚༽ཏ⪻════╝
    `.trim() 
    
    conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥  ᷦ×͜×*', 'status@broadcast')
    }
    handler.command = /^(Tonyx.06|Tonyx|el ma jakel)$/i
    
    module.exports = handler
