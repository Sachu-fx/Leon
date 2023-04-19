let { fetchJson } = require('./index');
let config = require('./config');

module.exports = {
 home: 'https://toxic-devil-api.onrender.com',
 key: 'B3T4K3Y',
 chatgpt: async (query) => {
  let json = await fetchJson(`${home}/chatgpt?key=${key}&openai_key=${config.OPENAIKEY}&query=${query}`);
  return json.result;
 },
 cat: async (type, say) => {
  let json = await fetchJson(`${home}/cat?key=${key}&type=${type}${say !== undefined ? '' : '&text='+say}`);
  return json.result;
 },
 dall_e: async (query) => {
  let json = await fetchJson(`${home}/dall-e?key=${key}&openai_key=${config.OPENAIKEY}&query=${query}`);
  return json.result;
 },
 emoji_mix: async (emo1, emo2) => {
  let json = await fetchJson(`${home}/emoji-mix?key=${key}&emoji1=${emo1}&emoji2=${emo2}`);
  return json.result;
 },
 lyrics: async (song) => {
  let json = await fetchJson(`${home}/lyrics?key=${key}&song=${song}`);
  return json.result;
 },
 screenshot: async (url) => {
  let json = await fetchJson(`${home}/screenshot?key=${key}&url=${url}`);
  return json.result;
 },
 short: async (url) => {
  try {
   let json = await fetchJson(`${home}/short?key=${key}&url=${url}`);
   return json.result;
  } catch {
   return false;
  }
 },
 unshort: async (url) => {
  let json = await fetchJson(`${home}/unshort?key=${key}&url=${url}`);
  return json.result;
 },
 wikipedia: async (query) => {
  let lang = (config.LANG == 'en' || config.LANG == 'eng' || config.LANG == 'english') ? 'en' : (config.LANG == 'ml' || config.LANG == 'mal' || config.LANG == 'malayalam') ? 'ml' : 'en';
  let json = await fetchJson(`${home}/wikipedia?key=${key}&query=${query}&lang=${lang}`);
  return json.result;
 }
};
