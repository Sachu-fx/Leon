let { commands, onCommand, removeCommand } = require('./commands'), { textpro, photooxy } = require('./maker'), { loadAuthID } = require('./auth'), { fetchJson, bufferFrom, formatTime, msToTime, getTime, isURL } = require('./helper'), { toSticker, getExif, addExif, start, findSong, cut, removeBackground, upload, youtube, serializeClient, serializeMessage } = require('./main'), config = require('./config');

module.exports = {
 commands,
 onCommand,
 loadAuthID,
 serializeClient,
 serializeMessage,
 fetchJson,
 bufferFrom,
 formatTime,
 removeCommand,
 msToTime,
 toSticker,
 getExif,
 getTime,
 addExif,
 upload,
 textpro,
 photooxy,
 isURL,
 start,
 youtube,
 findSong,
 cut,
 removeBackground,
 loadLanguage: () => {
  let lang = config.LANG
  if (lang == 'en' || lang == 'eng' || lang == 'english') return require('../main/language/english');
  else if (lang == 'ml' || lang == 'mal' || lang == 'malayalam') return require('../main/language/malayalam');
  else return false;
 }
};
