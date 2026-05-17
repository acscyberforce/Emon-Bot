const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
  name: "owner",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "IMON",
  description: "Stylish Bot Owner Info",
  commandCategory: "admin",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {

  const path = __dirname + "/cache/owner.mp4";

  const msg = `
╔══════════════════════════════╗
      ⚠️ 𝗧𝗜𝗚𝗘𝗥 𝗠𝗔𝗧𝗘 𝗕𝗢𝗧 ⚠️
╚══════════════════════════════╝

👑 𝗢𝗪𝗡𝗘𝗥 : IMON VAI
☢️ 𝗧𝗘𝗔𝗠 : TIGER MATE CYBER
🛡️ 𝗦𝗧𝗔𝗧𝗨𝗦 : ONLINE 24/7
⚡ 𝗦𝗬𝗦𝗧𝗘𝗠 : ACTIVE

━━━━━━━━━━━━━━━━━━

🌐 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 :
https://facebook.com/61589357111143

💬 𝗠𝗘𝗦𝗦𝗘𝗡𝗚𝗘𝗥 :
https://m.me/61589357111143

🎥 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 :
NON

📍 𝗖𝗢𝗨𝗡𝗧𝗥𝗬 : BANGLADESH
🔥 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : TIGER BOT
⚙️ 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 : 2.0

━━━━━━━━━━━━━━━━━━

『 𝗧𝗜𝗚𝗘𝗥 𝗠𝗔𝗧𝗘 𝗖𝗬𝗕𝗘𝗥 』
      ☢️ NEVER GIVE UP ☢️

╔══════════════════════════════╗
      ⚠️ 𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 ⚠️
╚══════════════════════════════╝
`;

  const videoUrl = "https://i.imgur.com/BODoNAz.mp4";

  request(encodeURI(videoUrl))
    .pipe(fs.createWriteStream(path))
    .on("close", async () => {

      api.sendMessage(
        {
          body: msg,
          attachment: fs.createReadStream(path)
        },
        event.threadID,
        () => fs.unlinkSync(path)
      );

    });
};
