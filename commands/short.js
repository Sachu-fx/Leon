let { onCommand, loadLanguage, isURL } = require('../main/');
let api = require('../main/api');
let { short_desc, unshort_desc, ss_need, invalid_url, already_short, need_short_url, not_short_url } = loadLanguage();

onCommand(
  {
   command: 'short',
   desc: short_desc,
   category: ['misc']
  }, async (msg, text, client) => {

  if (!text[1]) return await msg.reply(ss_need);
  if (!isURL(text[1])) return await msg.reply(ss_invalid);
  let res = await api.short(text[1]);
  if (!res) return await msg.reply(already_short);
  return await msg.reply(res.short_url);
});

onCommand(
  {
   command: 'unshort',
   desc: unshort_desc,
   category: ['misc']
  }, async (msg, text, client) => {

  if (!text[1]) return await msg.reply(need_short_url);
  if (!isURL(text[1])) return await msg.reply(invalid_url);
  if (!text[1].match(/https?:\/\/is\.gd\/[a-zA-Z0-9]+/)) return await msg.reply(not_short_url);
  let res = await api.unshort(text[1]);
  return await msg.reply(res.long_url);
});
