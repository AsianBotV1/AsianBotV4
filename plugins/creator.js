function handler(m) {
  this.sendContact(m.chat, '51965650863', 'Billi ᷦ×͜× - CREADOR - OFICIAL', m)
  this.sendContact(m.chat, '51965650863', 'Billi ᷦ×͜× - CREADOR - BOT', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i

module.exports = handler
