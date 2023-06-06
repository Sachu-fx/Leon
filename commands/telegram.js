let { onCommand, loadLanguage } = require('../main/');
let api = require('../main/api');
let { tguser_desc, tgchannel_desc, tggroup_desc, need_username, need_group, need_channel, user_result, group_result, channel_result, no } = loadLanguage();

onCommand(
  {
   command: 'tguser',
   desc: tguser_desc,
   category: ['misc']
  }, async (msg, text, client) => {

  if (!text[1]) return await msg.reply(need_username);
  let user = await api.telegram('user', text[1]);
  let caption = user_result.format(user.username, user.name, user.bio == false ? no : user.bio, user.dm);
  await client.sendReply({ type: 'image', message: { url: user.pp }, caption });
});

onCommand(
  {
   command: 'tggroup',
   desc: tggroup_desc,
   category: ['misc']
  }, async (msg, text, client) => {

  if (!text[1]) return await msg.reply(need_group);
  let group = await api.telegram('group', text[1]);
  let caption = group_result.format(group.username, group.name, group.description == false ? no : group.description, group.members, group.online, group.dm);
  await client.sendReply({ type: 'image', message: { url: group.pp }, caption });
});

onCommand(
  {
   command: 'tgchannel',
   desc: tgchannel_desc,
   category: ['misc']
  }, async (msg, text, client) => {

  if (!text[1]) return await msg.reply(need_channel);
  let channel = await api.telegram('channel', text[1]);
  let caption = channel_result.format(channel.username, channel.name, channel.description == false ? no : channel.description, channel.subscribers, channel.dm);
  await client.sendReply({ type: 'image', message: { url: channel.pp }, caption });
});
