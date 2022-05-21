let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*_➡️ GRUPO(S) OFICIAL DE ASIANBOT_*
✅ https://chat.whatsapp.com
✅ https://chat.whatsapp.com/

*_➡️ GRUPO(S)_*
✅ https://chat.whatsapp.com
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'bill', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
