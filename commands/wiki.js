let { onCommand, loadLanguage } = require('../main/');
let api = require('../main/api');
let { wiki_desc, planetary_desc, wiki_need, wiki_invalid, wiki_result } = loadLanguage();

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
   .catch(async (_) => await client.sendReply({ type: 'image', message: { url } });
     return await msg.reply('*👆 ' + caption.slice(1));
  );
});
