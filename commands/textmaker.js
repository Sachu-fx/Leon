let { onCommand, textpro, loadLanguage } = require('../main/');
let { textmaker_desc, command, sample } = loadLanguage();
let config = require('../main/config');

onCommand(
  {
   command: 'textmaker',
   desc: textmaker_desc
  }, async (msg, text, client) => {

  await msg.reply(
   textmaker(
    [
     {
      command: 'candy',
      sample: 'tsZKJmk/fefcaed4e70b.jpg',
     },
     {
      command: 'neongalaxy',
      sample: '5WCy8Cz/4d33f5cc1bb2.jpg',
     },
     {
      command: 'christmas',
      sample: '0YTqK6g/270ce2781d08.jpg',
     },
     {
      command: 'xmas',
      sample: 'HhY0vYt/a67db6a50518.jpg',
     },
     {
      command: 'sparklexmas',
      sample: 'Y7tVfpj/ebb53230b8f3.jpg',
     },
     {
      command: 'sea',
      sample: 'VjLhb9F/473d2c036b27.jpg',
    },
    {
     command: 'scifi',
     sample: 'pZgKd3m/ad23369ec47c.jpg',
    }
   ])
  );
});

onCommand(
  {
   command: 'candy',
   hide: true
  }, async (msg, text, client) => {

   if (!text[1] && !msg.replied) return await msg.reply('_Please enter or reply to any text!_');
   if (!text[1] && !msg.replied.text) return await msg.reply('*❌ Reply to any text message only!*');
   let query = text[1] !== '' ? text[1] : msg.replied.text;
   await client.sendReply(
    { type: 'image', message: { url: (await textpro('candy', query)) }
   });
});

onCommand(
  {
   command: 'neongalaxy',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply('_Please enter or reply to any text!_');
  if (!text[1] && !msg.replied.text) return await msg.reply('*❌ Reply to any text message only!*');
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('neongalaxy', query)) }
  });
});

onCommand(
  {
   command: 'christmas',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply('_Please enter or reply to any text!_');
  if (!text[1] && !msg.replied.text) return await msg.reply('*❌ Reply to any text message only!*');
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('christmas', query)) }
  });
});

onCommand(
  {
   command: 'xmas',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply('_Please enter or reply to any text!_');
  if (!text[1] && !msg.replied.text) return await msg.reply('*❌ Reply to any text message only!*');
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('xmas', query)) }
  });
});

onCommand(
  {
   command: 'sparklexmas',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply('_Please enter or reply to any text!_');
  if (!text[1] && !msg.replied.text) return await msg.reply('*❌ Reply to any text message only!*');
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('sparklexmas', query)) }
  });
});

onCommand(
  {
   command: 'sea',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply('_Please enter or reply to any text!_');
  if (!text[1] && !msg.replied.text) return await msg.reply('*❌ Reply to any text message only!*');
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('sea', query)) }
  });
});

onCommand(
  {
   command: 'scifi',
   hide: true
  }, async (msg, text, client) => {

  if (!text[1] && !msg.replied) return await msg.reply('_Please enter or reply to any text!_');
  if (!text[1] && !msg.replied.text) return await msg.reply('*❌ Reply to any text message only!*');
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('scifi', query)) }
  });
});

function textmaker(commands) {
 return commands.map((command) => `_${command}_ : *${config.PREFIX + command.command}*\n_${sample}_ : *${'https://i.ibb.co/' + command.sample}*`).join('\n\n');
};
