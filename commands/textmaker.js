let { onCommand, textpro, loadLanguage } = require('../main/');
let { textmaker_desc, need_text, need_text_only, invalid_format_tm, command, sample } = loadLanguage();
let config = require('../main/config');

onCommand(
  {
   command: 'candy',
   hide: true
  }, async (msg, text, client) => {

   if (!text[1] && !msg.replied) return await msg.reply(need_text);
   if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
   let query = text[1] !== '' ? text[1] : msg.replied.text;
   await client.sendReply(
    { type: 'image', message: { url: (await textpro('candy', query)) }, quoted: false
   });
});

onCommand(
  {
   command: 'neongalaxy',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('neongalaxy', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'christmas',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('christmas', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'xmas',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('xmas', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'sparklexmas',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('sparklexmas', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'sea',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('sea', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'scifi',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('scifi', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'whitebear',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('whitebear', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'holographic',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('holographic', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'avengers',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('avengers', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'rainbow',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('rainbow', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'waterpipe',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('waterpipe', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'spooky',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('spooky', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'neongreen',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('greenneon', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'lion',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('lion', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'box',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('pencil', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'circuit',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('circuit', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'discovery',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('discovery', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'metalic',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('metalic', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'fiction',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('fiction', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'demon',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('demon', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'transformer',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('transformer', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'berry',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('berry', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'thunder',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('thunder', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'magma',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('magma', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'stone',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('stone', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'neonlight',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('neonlight', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'glitch',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('glitch', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'harrypotter',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('harrypotter', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'brokenglass',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('brokenglass', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'papercut',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('papercut', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'watercolour',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('watercolour', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'ice',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('ice', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'multicolour',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('multicolour', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'neondevil',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('neondevil', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'underwater',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('underwater', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'graffiti',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('graffiti', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'juice',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('juice', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'snow',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('snow', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'cloud',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('cloud', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'carbon',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('carbon', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'honey',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('honey', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'biscuit',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('biscuit', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'wood',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('wood', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'chocolate',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('chocolate', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'strawberry',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('strawberry', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'matrix',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('matrix', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'blood',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('blood', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'dropwater',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('dropwater', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'toxic',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('toxic', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'lava',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('lava', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'rock',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('rock', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'bloodglass',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('bloodglass', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'halloween',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('halloween', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'darkgold',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('darkgold', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'joker',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('joker', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'wicker',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('wicker', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'firework',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('firework', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'skeleton',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('skeleton', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'blackpink',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('blackpink', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'sand',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('sand', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'glue',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('glue', query)) }, quoted: false
  });
});

onCommand(
  {
   command: '1917',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('1917', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'leaves',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('leaves', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'paint',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('paint', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'pink',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('pink', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'metal',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('metal', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'burger',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('burger', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'comic',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('comic', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'typography',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('typography', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'orange',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('orange', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'valentine',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('valentine', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'glass',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('glass', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'sliced',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('sliced', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'thor',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  if (!query.includes('/') || query.includes('/') && query.split('/').length !== 2) return await msg.reply(invalid_format_tm);
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('thor', query.split('/').map((q) => q.trim()))) }
  });
});

onCommand(
  {
   command: 'bokeh',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('bokeh', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'glow',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('glow', query)) }, quoted: false
  });
});

onCommand(
  {
   command: 'kids',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('kids', query)) }, quoted: false
  });
});

function textmaker(commands) {
 return commands.map((cmd) => `_${command}_ : *${config.PREFIX + cmd.command}*\n_${sample}_ : *${'https://i.ibb.co/' + command.sample}*`).join('\n\n');
};
