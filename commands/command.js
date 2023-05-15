let { onCommand, removeCommand, commands, backup, loadLanguage } = require('../main/');
let { install_desc, commands_desc, remove_desc, need_install, invalid_url_install, unofficial_install, invalid_gist_url, invalid_command, installed_command, none_installed, need_remove, deleted_command } = loadLanguage();
let got = require('got');
let fs = require('fs');
let { installCommand, CommandsDB } = require('../database/command');

onCommand(
  {
   command: 'install',
   owner: true,
   desc: install_desc,
   category: ['owner']
  }, async (msg, text, client) => {

    if (!text[1]) return await msg.reply(need_install);
    if (!text[1].includes('gist.github.com') && !text[1].includes('gist.githubusercontent.com')) return await msg.reply(invalid_url_install)
    if (!text[1].includes('TOXIC-DEVIL/')) return await msg.reply(unofficial_install);
    let url = text[1].replace(/gist.github.com/g, 'gist.githubusercontent.com') + (text[1].includes('/raw/') ? '' : '/raw/');
    let response = await got(url);
    if (response.statusCode !== 200) return await msg.reply(invalid_gist_url) 
    let command_name = response.body?.split('command:')[1]?.replace(/'/g, '')?.split(',')[0]?.trim() || (Math.random() + 1).toString(36).substring(7);
    fs.writeFileSync('../commands/external/'+command_name+'.js', response.body);
    try {
     require('../commands/external/' + command_name);
    } catch (e) {
     if (!text[1].includes('TOXIC-DEVIL/')) return await msg.reply(unofficial_install+'\n```'+e+'```');
     await fs.unlinkSync('../commands/external/' + command_name + '.js')
     return await msg.reply(invalid_command+'\n```'+e+'```');
    }
    await installCommand(url, command_name)
    return await msg.reply(installed_command.format(command_name));
});

onCommand(
  {
   command: 'commands',
   owner: true,
   category: ['owner'],
   desc: commands_desc,
  }, async (msg, text, client) => {

    let commands = await CommandsDB.findAll();
    if (commands.length < 1) {
        return msg.reply(none_installed)
    } else {
        let list = commands.map((command) => '- _' + command.dataValues.name + '_ : ' + command.dataValues.url).join('\n\n');
        return await msg.reply(list);
    }
});

onCommand(
  {
   command: 'remove',
   owner: true,
   desc: remove_desc,
   category: ['owner']
  }, async (msg, text, client) => {

     if (!text[1]) return await msg.reply(need_remove);
     let command = await CommandsDB.findAll({ where: { name: text[1] } });
     if (command.length < 1) return await msg.reply(no_command_rem);
     await command[0].destroy();
     delete require.cache[require.resolve('../commands/external/' + text[1] + '.js')]
     fs.unlinkSync('../commands/external/' + text[1] + '.js');
     await removeCommand(text[1]);
     await msg.reply(deleted_command.format(text[1]));
});

onCommand(
  {
   command: 'disable',
   owner: true,
   desc: 'Disable',
   category: ['owner']
  }, async (msg, text, client) => {

  if (!text[1]) return await msg.reply('_Please enter a command name without prefix!_');
  let cmds = commands.allCommands.map(cmd => cmd.command);
  if (!cmds.includes(text[1].toLowerCase()))
   return await msg.reply('*❌ This is not a valid command or its not existsing!*\n*If ' + text[1].toLowerCase() + ' was an external command, try rechecking wheather its correctly installed using ' + config.PREFIX + 'commands.*');
  await removeCommand(text[1]);
  return await msg.reply('*☑️ Successfully disabled ' + text[1].toLowerCase() + '!*');
});

onCommand(
  {
   command: 'enable',
   owner: true,
   desc: 'Enable',
   category: ['owner']
  }, async (msg, text, client) => {

  if (!text[1]) return await msg.reply('_Please enter a command name without prefix!_');
  let cmds = backup.map(cmd => cmd.command);
  if (!cmds.includes(text[1].toLowerCase()))
   return await msg.reply('*❌ This is not a valid command or its not existsing!*\n*If ' + text[1].toLowerCase() + ' was an external command, try rechecking wheather its correctly installed using ' + config.PREFIX + 'commands.*');
  let allCmd = commands.allCommands.filter(cmd => cmds.includes(cmd));
  if (allCmd.length > 0) return await msg.reply('* ❌This command is already enabled!*');
  commands.allCommands.push(
    backup.filter(cmd => cmd.command == text[1].toLowerCase())[0]
  );
  return await msg.reply('*✅ Successfully disabled ' + text[1].toLowerCase() + '!*');
});
