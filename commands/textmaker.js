let { onCommand, textpro, loadLanguage } = require('../main/');
let { textmaker_desc, need_text, need_text_only, invalid_format_tm, command, sample } = loadLanguage();
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
    },
    {
     command: 'whitebear',
     sample: 'https://i.ibb.co/'
    },
    {
     command: 'holographic',
     sample: 'https://i.ibb.co/'
    },
    {
     command: 'avengers',
     sample: 'https://i.ibb.co/'
    },
    {
     command: 'rainbow',
     sample: 'https://i.ibb.co/'
    },
    {
     command: 'waterpipe',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'spooky',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'neongreen',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'lion',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'box',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'pencil',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'circuit',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'discovery',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'metalic',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'fiction',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'demon',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'transformer',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'berry',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'thunder',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'magma',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'stone',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'neonlight',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'glitch',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'harrypotter',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'brokenglass',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'papercut',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'watercolour',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'multicolour',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'neondevil',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'underwater',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'graffiti',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'snow',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'cloud',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'carbon',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'honey',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'ice',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'juice',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'biscuit',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'wood',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'chocolate',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'strawberry',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'matrix',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'blood',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'dropwater',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'toxic',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'lava',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'rock',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'bloodglass',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'halloween',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'darkgold',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'joker',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'wicker',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'firework',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'skeleton',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'blackpink',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'sand',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'glue',
      sample: 'https://i.ibb.co/'
     },
     {
      command: '1917',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'leaves',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'pink',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'paint',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'metal',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'burger',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'comic',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'typography',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'orange',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'valentine',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'glass',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'sliced',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'thor',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'bokeh',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'glow',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'kids',
      sample: 'https://i.ibb.co/'
     }
   ])
  );
});

onCommand(
  {
   command: 'candy',
   hide: true
  }, async (msg, text, client) => {

   if (!text[1] && !msg.replied) return await msg.reply(need_text);
   if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
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

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
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

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
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

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
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

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
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

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
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

  if (!text[1] && !msg.replied) return await msg.reply(need_text);
  if (!text[1] && !msg.replied.text) return await msg.reply(need_text_only);
  let query = text[1] !== '' ? text[1] : msg.replied.text;
  await client.sendReply(
   { type: 'image', message: { url: (await textpro('scifi', query)) }
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
   { type: 'image', message: { url: (await textpro('whitebear', query)) }
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
   { type: 'image', message: { url: (await textpro('holographic', query)) }
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
   { type: 'image', message: { url: (await textpro('avengers', query)) }
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
   { type: 'image', message: { url: (await textpro('rainbow', query)) }
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
   { type: 'image', message: { url: (await textpro('waterpipe', query)) }
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
   { type: 'image', message: { url: (await textpro('spooky', query)) }
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
   { type: 'image', message: { url: (await textpro('greenneon', query)) }
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
   { type: 'image', message: { url: (await textpro('lion', query)) }
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
   { type: 'image', message: { url: (await textpro('box', query)) }
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
   { type: 'image', message: { url: (await textpro('circuit', query)) }
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
   { type: 'image', message: { url: (await textpro('discovery', query)) }
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
   { type: 'image', message: { url: (await textpro('metalic', query)) }
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
   { type: 'image', message: { url: (await textpro('fiction', query)) }
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
   { type: 'image', message: { url: (await textpro('demon', query)) }
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
   { type: 'image', message: { url: (await textpro('transformer', query)) }
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
   { type: 'image', message: { url: (await textpro('berry', query)) }
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
   { type: 'image', message: { url: (await textpro('thunder', query)) }
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
   { type: 'image', message: { url: (await textpro('magma', query)) }
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
   { type: 'image', message: { url: (await textpro('stone', query)) }
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
   { type: 'image', message: { url: (await textpro('neonlight', query)) }
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
   { type: 'image', message: { url: (await textpro('glitch', query)) }
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
   { type: 'image', message: { url: (await textpro('harrypotter', query)) }
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
   { type: 'image', message: { url: (await textpro('brokenglass', query)) }
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
   { type: 'image', message: { url: (await textpro('papercut', query)) }
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
   { type: 'image', message: { url: (await textpro('watercolour', query)) }
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
   { type: 'image', message: { url: (await textpro('ice', query)) }
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
   { type: 'image', message: { url: (await textpro('multicolour', query)) }
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
   { type: 'image', message: { url: (await textpro('neondevil', query)) }
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
   { type: 'image', message: { url: (await textpro('underwater', query)) }
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
   { type: 'image', message: { url: (await textpro('graffiti', query)) }
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
   { type: 'image', message: { url: (await textpro('juice', query)) }
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
   { type: 'image', message: { url: (await textpro('snow', query)) }
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
   { type: 'image', message: { url: (await textpro('cloud', query)) }
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
   { type: 'image', message: { url: (await textpro('carbon', query)) }
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
   { type: 'image', message: { url: (await textpro('honey', query)) }
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
   { type: 'image', message: { url: (await textpro('biscuit', query)) }
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
   { type: 'image', message: { url: (await textpro('wood', query)) }
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
   { type: 'image', message: { url: (await textpro('chocolate', query)) }
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
   { type: 'image', message: { url: (await textpro('strawberry', query)) }
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
   { type: 'image', message: { url: (await textpro('matrix', query)) }
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
   { type: 'image', message: { url: (await textpro('blood', query)) }
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
   { type: 'image', message: { url: (await textpro('dropwater', query)) }
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
   { type: 'image', message: { url: (await textpro('toxic', query)) }
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
   { type: 'image', message: { url: (await textpro('lava', query)) }
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
   { type: 'image', message: { url: (await textpro('rock', query)) }
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
   { type: 'image', message: { url: (await textpro('bloodglass', query)) }
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
   { type: 'image', message: { url: (await textpro('halloween', query)) }
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
   { type: 'image', message: { url: (await textpro('darkgold', query)) }
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
   { type: 'image', message: { url: (await textpro('joker', query)) }
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
   { type: 'image', message: { url: (await textpro('wicker', query)) }
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
   { type: 'image', message: { url: (await textpro('firework', query)) }
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
   { type: 'image', message: { url: (await textpro('skeleton', query)) }
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
   { type: 'image', message: { url: (await textpro('blackpink', query)) }
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
   { type: 'image', message: { url: (await textpro('sand', query)) }
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
   { type: 'image', message: { url: (await textpro('glue', query)) }
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
   { type: 'image', message: { url: (await textpro('1917', query)) }
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
   { type: 'image', message: { url: (await textpro('leaves', query)) }
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
   { type: 'image', message: { url: (await textpro('paint', query)) }
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
   { type: 'image', message: { url: (await textpro('pink', query)) }
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
   { type: 'image', message: { url: (await textpro('metal', query)) }
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
   { type: 'image', message: { url: (await textpro('burger', query)) }
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
   { type: 'image', message: { url: (await textpro('comic', query)) }
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
   { type: 'image', message: { url: (await textpro('typography', query)) }
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
   { type: 'image', message: { url: (await textpro('orange', query)) }
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
   { type: 'image', message: { url: (await textpro('valentine', query)) }
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
   { type: 'image', message: { url: (await textpro('glass', query)) }
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
   { type: 'image', message: { url: (await textpro('sliced', query)) }
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
   { type: 'image', message: { url: (await textpro('bokeh', query)) }
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
   { type: 'image', message: { url: (await textpro('glow', query)) }
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
   { type: 'image', message: { url: (await textpro('kids', query)) }
  });
});

function textmaker(commands) {
 return commands.map((cmd) => `_${command}_ : *${config.PREFIX + cmd.command}*\n_${sample}_ : *${'https://i.ibb.co/' + command.sample}*`).join('\n\n');
};
