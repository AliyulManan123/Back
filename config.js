/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6283146993017', 'Ikhsan', true],
  ['6283146993017'], 
  ['6283146993017'],
  ['6283146993017']
] // Nomor Owner

global.mods = ['6283146993017'] 
global.prems = ['6283146993017', '6283146993017', '6283146993017']

// Harus di isi
global.btc = 'isi_dulu' // https://api.botcahx.live
global.lann = 'isi_dulu' // https://api.betabotz.org

// Fitur dari https://api.betabotz.org (global.lann) : remini, toanime openai. mau request fitur? request aja nanti saya buatkan dari api itu

// Fitur dari https://api.botcahx.live (global.btc) : downloader douyin, cecan indo cina, asupan, dl twitter dll (contoh? cek video saya yang nero V3) mau request fitur? request aja nanti saya buatkan dari api itu

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'isi_dulu'
}

// Sticker WM
global.nans = 'ShanBot'
global.packname = 'Sticker by' 
global.author = '@shanbot' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/malasnulisnamapengguna\n' 
global.dygp = 'https://chat.whatsapp.com/KLbE1i5U4y9I0OVli5jcKM'
global.fgsc = 'Malas Menganggapi!' 
global.fgyt = 'http://ikhsanmaner.my.id/'
global.fgpyp = '-'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg'
global.thumb = 'https://i.ibb.co/y0vgNPT/20230723-112852.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})