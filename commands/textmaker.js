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
     sample: 'P5NMFmk/097e571635a7.jpg'
    },
    {
     command: 'holographic',
     sample: 'QQYbdGp/b508de9af413.jpg'
    },
    {
     command: 'avengers',
     sample: 'https://i.ibb.co/'
    },
    {
     command: 'rainbow',
     sample: 'XFJNYPP/45357528363e.jpg'
    },
    {
     command: 'waterpipe',
      sample: 'xG5yvGX/0cfe74d854c6.jpg'
     },
     {
      command: 'spooky',
      sample: 'ZGVpY7r/f8cfcca45a9e.jpg'
     },
     {
      command: 'neongreen',
      sample: 'NTJVR92/1a85f5997500.jpg'
     },
     {
      command: 'lion',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'box',
      sample: 'KwLW4S0/6e5e4f20b6cb.jpg'
     },
     {
      command: 'pencil',
      sample: 'PQSF3mF/7d527a191546.jpg'
     },
     {
      command: 'circuit',
      sample: 'z5F58Sh/651d1366d79f.jpg'
     },
     {
      command: 'discovery',
      sample: 'zf8hWXC/f2a79e5d5b31.jpg'
     },
     {
      command: 'metalic',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'fiction',
      sample: 'PcstR0L/77f8a3b00518.jpg'
     },
     {
      command: 'demon',
      sample: 'LQ4H3Nh/3e6eb18e94d8.jpg'
     },
     {
      command: 'transformer',
      sample: '429SGgj/09a7ccca31b8.jpg'
     },
     {
      command: 'berry',
      sample: '5j0czF7/b0183cea0a93.jpg'
     },
     {
      command: 'thunder',
      sample: 'BfZ62j5/b14df0827dd0.jpg'
     },
     {
      command: 'magma',
      sample: 'CwK1tTB/963b3074eca6.jpg'
     },
     {
      command: 'stone',
      sample: 's3qkJXH/6635d4414089.jpg'
     },
     {
      command: 'neonlight',
      sample: 'NrR1sxf/81fc89ecd09e.jpg'
     },
     {
      command: 'glitch',
      sample: 'Fbjg114/3d504d660dd7.jpg'
     },
     {
      command: 'harrypotter',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'brokenglass',
      sample: 'B6Gjt6v/dbc5bbd514fc.jpg'
     },
     {
      command: 'papercut',
      sample: 'VMDv8TV/3a02ac1f3b83.jpg'
     },
     {
      command: 'watercolour',
      sample: 'Jksxr79/4de3f6e3dbd3.jpg'
     },
     {
      command: 'multicolour',
      sample: 'HGtXW9G/89a2a8ca0294.jpg'
     },
     {
      command: 'neondevil',
      sample: 'SXmDyMh/5b579b1ffbd8.jpg'
     },
     {
      command: 'underwater',
      sample: 'rHGp0WL/2a2a6a39e167.jpg'
     },
     {
      command: 'graffiti',
      sample: 'r5dk9pN/16c19ad2520a.jpg'
     },
     {
      command: 'snow',
      sample: 'WxjFFFk/3424e032472c.jpg'
     },
     {
      command: 'cloud',
      sample: 'nrYRmTz/4edcf8b1b1fc.jpg'
     },
     {
      command: 'carbon',
      sample: '4fRg5sf/72628cd1ed67.jpg'
     },
     {
      command: 'honey',
      sample: 'yByt788/e1cc1311be19.jpg'
     },
     {
      command: 'ice',
      sample: 'MRCSDjY/e314498ab630.jpg'
     },
     {
      command: 'juice',
      sample: 'ZhVvhwF/2c67cd155381.jpg'
     },
     {
      command: 'biscuit',
      sample: '0FVhgYH/37c1eed7f419.jpg'
     },
     {
      command: 'wood',
      sample: '0p5qnxY/f11da5c0fcc3.jpg'
     },
     {
      command: 'chocolate',
      sample: '2M2V8fQ/6672059da322.jpg'
     },
     {
      command: 'strawberry',
      sample: 'C210VhZ/4f924ed84210.jpg'
     },
     {
      command: 'matrix',
      sample: 'R6xRDFb/7ea6c7c0ed00.jpg'
     },
     {
      command: 'blood',
      sample: '7KHZszz/e0ac51c4dab9.jpg'
     },
     {
      command: 'dropwater',
      sample: 'cc0kZzj/3348fe416aac.jpg'
     },
     {
      command: 'toxic',
      sample: 'YDhLC6b/a7b2a4152117.jpg'
     },
     {
      command: 'lava',
      sample: '7QRm5Rs/dcf0ad415455.jpg'
     },
     {
      command: 'rock',
      sample: 'fndMfBf/159161e04a12.jpg'
     },
     {
      command: 'bloodglass',
      sample: 'tzXZ02K/80a37d480f59.jpg'
     },
     {
      command: 'halloween',
      sample: 'https://i.ibb.co/'
     },
     {
      command: 'darkgold',
      sample: 'ry3YNVW/36d0219aca54.jpg'
     },
     {
      command: 'joker',
      sample: 'WKNV2Qm/9e8506ca299c.jpg'
     },
     {
      command: 'wicker',
      sample: 'vwqSKTm/8df30900b08d.jpg'
     },
     {
      command: 'firework',
      sample: 'm0yxcrK/9f91faceee46.jpg'
     },
     {
      command: 'skeleton',
      sample: 'R9XQYb8/310159d818e4.jpg'
     },
     {
      command: 'blackpink',
      sample: '7204Z1g/112f99548d3e.jpg'
     },
     {
      command: 'sand',
      sample: 'vVW7WpZ/f3dec31277bc.jpg'
     },
     {
      command: 'glue',
      sample: 'hXh4kkm/b7cbbe2be6e5.jpg'
     },
     {
      command: '1917',
      sample: 'y6Hcf1P/8ba76f161603.jpg'
     },
     {
      command: 'leaves',
      sample: 'WgG0500/41e04b4f2dd1.jpg'
     },
     {
      command: 'pink',
      sample: 'kqPn1VK/a492137dc6b4.jpg'
     },
     {
      command: 'paint',
      sample: '3ChNSx9/d950b5eb2431.jpg'
     },
     {
      command: 'metal',
      sample: '1LfZ6Wy/1d4e81ff3f46.jpg'
     },
     {
      command: 'burger',
      sample: 'jZ9QCr8/b51f18cc58df.jpg'
     },
     {
      command: 'comic',
      sample: 'B67ZZSB/d164d20d91c7.jpg'
     },
     {
      command: 'typography',
      sample: 'zXYGWwC/122ef65d5ae6.jpg'
     },
     {
      command: 'orange',
      sample: 'h9rNqDT/01ac58300a75.jpg'
     },
     {
      command: 'valentine',
      sample: 'n7QNW3Y/fc4cba2a2dab.jpg'
     },
     {
      command: 'glass',
      sample: 'YtgXKK6/6e38acc78e7d.jpg'
     },
     {
      command: 'sliced',
      sample: 'dWYyRb8/3f43e9af1293.jpg'
     },
     {
      command: 'thor',
      sample: '9p87Lh8/0a1e4fe7b916.jpg'
     },
     {
      command: 'bokeh',
      sample: 'Gk5b2Hr/678a04438947.jpg'
     },
     {
      command: 'glow',
      sample: '7Nmq564/e79182f42818.jpg'
     },
     {
      command: 'kids',
      sample: '3hXTs7X/86943290eb35.jpg'
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
 return commands.map((cmd) => `_${command}_ : *${config.PREFIX + cmd.command}*\n_${sample}_ : *${'https://i.ibb.co/' + cmd.sample}*`).join('\n\n');
};
