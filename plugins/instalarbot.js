let handler = async m => m.reply(`
ASIANBot INSTALACION TERMUX OPCION 1 (GitHub)

termux-setup-storage

apt update && apt upgrade -y -y

apt install git -y

apt install nodejs -y

apt install ffmpeg -y

apt install imagemagick -y

git clone https://github.com

cd 

npm install

npm install -g npm@8.5.0

npm update

npm start

Para activar algunos comandos como el #añadir y #sacar el propietario del Bot debera usar el comando #enable restrict desde el numero que haya puesto en el archivo config.js

Si instalas el Bot con GitHub para obtener nuevamente el codigo QR, escribe en el termux: 
rm session.data.json 
npm start

(POR EL MOMENTO ES BOT DE USO PERSONAL, TODO DEBIDO A UN ERROR DE PROGRAMACIÓN, LES ESTARÉ ENSEÑANDO COMO CAMBIAR LOS NÚMEROS OWNERS PARA QUE PUEDAN UTILIZARLO SIN PROBLEMA ALGUNO EN LO QUE ARREGLO EL PROBLEMA EN GENERAL)
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
