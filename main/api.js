let { fetchJson, key: getKey } = require('./index');
let config = require('./config');

let home = 'https://toxic-devil-api.onrender.com'
let key = getKey(); // Please replace this with your own key.

module.exports = {
 anime: async (type) => {
  let json = await fetchJson(`${home}/random/anime?key=${key}&type=${type}`);
  return json.result;
 },
 chatgpt: async (query) => {
  let json = await fetchJson(`${home}/ai/chatgpt?key=${key}&openai_key=${config.OPENAIKEY}&query=${query}`);
  return json.result;
 },
 cat: async (type, say) => {
  if (type == 'fact') {
   let json = await fetchJson(`${home}/random/cat-fact?key=${key}`);
   return json.result;
  } else {
   let json = await fetchJson(`${home}/random/cat?key=${key}&type=${type}${say !== undefined ? '' : '&text='+say}`);
   return json.result;
  }
 },
 dog: async (type) => {
  if (type == 'fact') {
   let json = await fetchJson(`${home}/random/dog-fact?key=${key}`);
   return json.result;
  } else {
   let json = await fetchJson(`${home}/random/dog?key=${key}&type=${type}`);
   return json.result;
  }
 },
 dall_e: async (query) => {
  let json = await fetchJson(`${home}/ai/dall-e?key=${key}&openai_key=${config.OPENAIKEY}&query=${query}`);
  return json.result;
 },
 emoji_mix: async (emo1, emo2) => {
  let json = await fetchJson(`${home}/other/emoji-mix?key=${key}&emoji1=${emo1}&emoji2=${emo2}`);
  return json.result[0];
 },
 lyrics: async (song) => {
  let json = await fetchJson(`${home}/search/lyrics?key=${key}&song=${song}`);
  return json.result;
 },
 random_uid: async (len, type) => {
  let url = `${home}/random/uid?key=${key}&length=${len}&charSet=`
  type = String(type).toLowerCase() == 'false' ? 'alphanumeric' : String(type).toLowerCase()
  if (type == 'upper_alpha') {
   url += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else if (type == 'lower_alpha') {
   url += 'abcdefghijklmnopqrstuvwxyz';
  } else if (type == 'upper_alphanumeric') {
   url += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  } else if (type == 'lower_alphanumeric') {
   url += 'abcdefghijklmnopqrstuvwxyz0123456789';
  } else if (type == 'numeric') {
   url += '0123456789';
  } else if (type == 'alpha') {
   url += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  } else if (type == 'alphanumeric') {
   url += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  }
  let json = await fetchJson(url);
  return json.result;
 },
 google: async (type, value, value_two) => {
  let url = home
  if (type == 'search') {
   url += `/search/google?key=${key}&query=${value}&lang=en&safe=false`
  } else if (type == 'image_search') {
   url += `/search/google_image?key=${key}&query=${value}&safe=false`
  } else if (type == 'google_translator') {
   url += `/other/google_translate?key=${key}&text=${value}&lang_to=${value_two}`
  } else if (type == 'google_tts') {
   url += `/other/google_tts?key=${key}&slow=false&text=${value}&lang=${value_two}`
  }
  let json = await fetchJson(url);
  return json.result;
 },
 github: async (type, value) => {
  let json = await fetchJson(`${home}/stalk/${type == 'user' ? 'github_user' : type == 'repo' ? 'github_repo' : 'github_user'}?key=${key}&${type == 'user' ? `username=${value}` : type == 'repo' ? `repo_url=${value}` : `username=${value}`}`);
  return json.result;
 },
 count: async (start, end) => {
  let json = await fetchJson(`${home}/other/count?key=${key}&start=${start}&end=${end}`);
  return json.result;
 },
 font: async (text, index) => {
  let json = await fetchJson(`${home}/other/font?key=${key}&text=${text}&index_number=${index}`);
  return json.result;
 },
 planetary: async () => {
  return (await fetchJson(`${home}/other/planetary?key=${key}`)).result;
 },
 screenshot: async (url) => {
  let json = await fetchJson(`${home}/other/screenshot?key=${key}&url=${url}`);
  return json.result;
 },
 short: async (url) => {
  try {
   let json = await fetchJson(`${home}/other/short?key=${key}&url=${url}`);
   return json.result;
  } catch {
   return false;
  }
 },
 unshort: async (url) => {
  let json = await fetchJson(`${home}/other/unshort?key=${key}&url=${url}`);
  return json.result;
 },
 telegram: async (type, query) => {
  let json = await fetchJson(`${home}/stalk/telegram_${type}?key=${key}&${type == 'user' ? type+'name' : type == 'group' ? type : type == 'channel' ? type : 'username'}=${query}`);
  return json.result;
 },
 wikipedia: async (query) => {
  let lang = (config.LANG == 'en' || config.LANG == 'eng' || config.LANG == 'english') ? 'en' : (config.LANG == 'ml' || config.LANG == 'mal' || config.LANG == 'malayalam') ? 'ml' : 'en';
  let json = await fetchJson(`${home}/search/wikipedia?key=${key}&query=${query}&lang=${lang}`);
  return json.result;
 }
};
