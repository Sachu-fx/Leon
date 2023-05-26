let { onCommand, loadLanguage } = require('../main/');
let api = require('../main/api');
let { wiki_desc, planetary_desc, vc_desc, wiki_need, wiki_invalid, wiki_result } = loadLanguage();
let { exec } = require('child_process');

let voices = {
 'blown': '-af acrusher=.1:1:64:0:log',
 'deep': '-af atempo=4/4,asetrate=44500*2/3',
 'earrape': '-af volume=12',
 'fast': '-filter:a "atempo=1.63,asetrate=44100"',
 'fat': '-filter:a "atempo=1.6,asetrate=22100"',
 'nightcore': '-filter:a atempo=1.06,asetrate=44100*1.25',
 'reverse': '-filter_complex "areverse"',
 'slow': '-filter:a "atempo=0.7,asetrate=44100"',
 'smooth': '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"',
 'squirrel': '-filter:a "atempo=0.5,asetrate=65100"'
};

onCommand(
  {
   command: 'wiki',
   desc: wiki_desc,
   category: ['misc']
  }, async (msg, text, client) => {

  if (!text[1]) return await msg.reply(wiki_need);
  let wiki = await api.wikipedia(text[1]), info = '';
  if (!wiki) info = wiki_invalid;
  info = wiki_result.format(wiki.title, wiki.info, wiki.url);
  return await msg.reply(info);
});

onCommand(
  {
   command: 'planetary',
   desc: planetary_desc,
   category: ['misc']
  }, async (msg, text, client) => {

  let planetary = await api.planetary();
  let url = planetary.image,
      caption = '*' + planetary.title + ' ( ' + planetary.date + ' )*\n\n```' + planetary.explanation + '```';
  await client.sendReply({ type: 'image', message: { url }, caption }).then(() => true)
   .catch(async (_) => {
     await client.sendReply({ type: 'image', message: { url } });
     return await msg.reply('*👆 ' + caption.slice(1));
    }
  );
});

onCommand(
  {
   command: 'vc',
   desc: vc_desc,
   category: ['misc']
  }, async (msg, text, client) => {

  if (!msg.replied) return await msg.reply('_Please reply to any audio or voice note to change voice!_');
  if (!text[1]) return await msg.reply('_Please enter a voice changer from below!_\n*- blown*\n*- deep*\n*- earrape*\n*- fast*\n*- fat*\n*- nightcore*\n*- reverse*\n*- slow*\n*- smooth*\n*- squirrel*');
  if (!msg.replied.audio) return await msg.reply('*❌ Reply to any audio only!*');
  let audio = await msg.load(msg.replied.audio);
  fs.writeFileSync('input_audio.mp3', audio);
  audio = 'input_audio.mp3'
  text[1] = text[1].toLowerCase().replace(/ /g, '');
  let command = voices[text[1]];
  if (command == undefined) return await msg.reply('*❌ Invalid voice changer, Please enter a valid voice changer from below!*\n*- blown*\n*- deep*\n*- earrape*\n*- fast*\n*- fat*\n*- nightcore*\n*- reverse*\n*- slow*\n*- smooth*\n*- squirrel*');
  exec(`ffmpeg -i ${audio} ${command} voice.mp3`, async (err, stderr, stdout) => {
    if (err) throw 'FFMPEG ERROR!';
    await client.sendReply({ type: 'audio', message: { url: 'voice.mp3' } });
    return await fs.unlinkSync('voice.mp3');
  });
});
