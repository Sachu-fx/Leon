let { fetchJson } = require('./index');
let config = require('./config');

module.exports = {
 home: 'https://api-toxic-devil.herokuapp.com',
 key: 'B3T4K3Y',
 chatgpt: async (query) => {
  let json = await fetchJson(`${home}/chatgpt?key=${key}&openai_key=${config.OPENAIKEY}&query=${query}`);
  return json.result;
 },
 dall_e: async (query) => {
  let json = await fetchJson(`${home}/dall-e?key=${key}&openai_key=${config.OPENAIKEY}&query=${query}`);
  return json.result;
 },
 github: async (type, value) => {
  type = type == 'user' ? 'github_user' : 'github_repo';
  let json = await fetchJson(`${home}/${type}?key=${key}&${type == 'github_user' ? 'username' : 'repo_url'}=${value}`);
  return json.result;
 },
 lyrics: async (song) => {
  let json = await fetchJson(`${home}/lyrics?key=${key}&song=${song}`);
  return json.result;
 }
}
