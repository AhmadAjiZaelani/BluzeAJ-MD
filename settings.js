const fs = require('fs')
const chalk = require('chalk')

//Message
global.message = {
  error: "Internal Server Error x_x",
  botNotAdmin: "Maaf, bot ini hanya dapat digunakan ketika bot menjadi admin grup.",
  isAdmin: "Hanya admin yang dapat menggunakan perintah ini.",
  isOwn: "Anda tidak dapat melakukan tindakan ini karena anda bukan owner",
  isOwn2: "Anda tidak dapat melakukan tindakan ini terhadap owner sendiri.",
  isMe: "Anda tidak bisa melakukan tindakan ini terhadap diri Anda sendiri.",
  isGroup: "Anda hanya bisa melakukan tindakan ini didalam group.",
  isMyLink: "Link tersebut adalah link group anda sendiri."
};

//Apikey && Logic Ai

global.APIs = {
	btz: 'https://api.betabotz.eu.org' // JAN UBAH
}

global.APIKeys = {
	'https://https://api.betabotz.eu.org': 'Btz-eSwqi' // Isi key lu
}

global.logic = 'Kamu adalah BetaBotz Ai';
global.btz = '' //Register di https://api.betabotz.eu.org

//Data
global.grubbot = ''
global.namabot = "BluzeAJ-MD" // UBAH JADI NAMA LU
global.namaowner = "Aji" // NAMA OWNER
global.footer_text = "© 2024" + BluzeAJ // NAMA BOT
global.pp_bot = "https://telegra.ph/file/77fa7adeb46b4eb554254-7967be6778d4bec339.jpg" // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6285117057679'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.fakelink = "https://api.betabotz.eu.org" // BEBAS ASAL JAN HAPUS

// NAME STICKER \\
global.packname = 'BETABOTZ'
global.author = 'API'

// TRUE OR FALSE \\

global.autoread = true
global.antispam = true // SARAN GUA TRUE AJA
global.autodownload = true
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})