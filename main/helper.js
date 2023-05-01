let axios = require('axios');

async function bufferFrom(url, options = {}) {
 try {
  let res = await axios({ method: 'get', url, headers: { 'DNT': 1, 'Upgrade-Insecure-Request': 1 }, ...options })
  return res.data;
 } catch (err) {
  return err
 }
}

async function fetchJson(url, options = {}) {
 try {
  let res = await axios({ method: 'get', url, headers: { 'DNT': 1, 'Upgrade-Insecure-Request': 1 }, ...options })
  return res.data;
 } catch (err) {
  return err
 }
}

async function formatTime(time) {
 time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
 if (time.length > 1) {
   time = time.slice(1);
   time[5] = +time[0] < 12 ? ' AM' : ' PM';
   time[0] = +time[0] % 12 || 12;
 }
 return time.join('');
}

function getTime() {
 return new Date().toLocaleString(undefined, { timeZone: 'Asia/Kolkata' }).split(', ')[1]
}

async function msToTime(ms) {
 let time = new Date(ms);
 let hours = time.getUTCHours();
 let minutes = time.getUTCMinutes();
 let seconds = time.getUTCSeconds();
 return hours + ":" + minutes + ":" + seconds;
}

function isURL(url) {
 return (/^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/).test(url);
}

module.exports = { bufferFrom, fetchJson, formatTime, msToTime, getTime, isURL };
