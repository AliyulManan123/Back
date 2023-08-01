function handler(m) {
  
  const kontak = {
	"displayName": 'Owner ShanBot',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:Ikhsan\nitem1.TEL;waid=6283146993017:6283146993017\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:https://s.id/AliyulManan\nEMAIL;Email Owner:aliyulmanan@gmail.com\nORG: Sv Aj kak, Nggak gigit kok\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler