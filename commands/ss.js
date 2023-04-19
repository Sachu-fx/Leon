let { onCommand, loadLanguage, isURL } = require('../main/');
let api = require('../main/api');
let { ss_desc, spdf_desc, ss_need, ss_invalid } = loadLanguage();

onCommand(
  {
   command: 'ss',
   desc: ss_desc,
   category: ['misc']
  }, async (msg, text, client) => {

   if (!text[1]) return await msg.reply(ss_need);
   if (!isURL(text[1])) return await msg.reply(ss_invalid);
   await client.sendReply({ type: 'image', message: { url: (await api.screenshot(text[1])) } }).then(() => '')
    .catch(async (_) => {
     return await msg.reply(ss_invalid);
    }
   );
});
