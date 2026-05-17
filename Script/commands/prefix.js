const fs = require("fs");
const request = require("request");
const moment = require("moment-timezone");

module.exports.config = {
  name: "prefix",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "IMON",
  description: "Stylish Prefix Reply",
  commandCategory: "system",
  usages: "",
  cooldowns: 5
};

module.exports.handleEvent = async function ({ api, event }) {

  const { threadID, messageID, body } = event;

  if (!body || body.toLowerCase() !== "prefix") return;

  const time = moment.tz("Asia/Dhaka").format("HH:mm:ss | D/MM/YYYY");
  const day = moment.tz("Asia/Dhaka").format("dddd");

  const prefix = global.config.PREFIX;
  const botname = global.config.BOTNAME || "TIGER BOT";

  const link = [
    "https://i.imgur.com/abcd123.mp4",
    "https://i.imgur.com/xyz456.mp4"
  ];

  const video = link[Math.floor(Math.random() * link.length)];

  const path = __dirname + "/cache/prefix.mp4";

  request(encodeURI(video))
    .pipe(fs.createWriteStream(path))
    .on("close", () => {

      api.sendMessage({
        body: `
╔════════════════════╗
     ⚠️ PREFIX INFO ⚠️
╚════════════════════╝

┃ ✨ BOT NAME : ${botname}
┃ 🌐 SYSTEM : ONLINE
┃ ⚙️ PREFIX : ${prefix}
┃ 👑 OWNER : IMON
┃ ☢️ TEAM : TIGER MATE

━━━━━━━━━━━━━━━━━━

┃ 🗓️ DAY : ${day}
┃ ⏰ TIME : ${time}

━━━━━━━━━━━━━━━━━━

┃ 💬 TYPE :
┃ ➤ ${prefix}help
┃ ➤ ${prefix}menu
┃ ➤ ${prefix}owner

━━━━━━━━━━━━━━━━━━

『 TIGER MATE CYBER 』
     ☢️ ALWAYS ACTIVE ☢️

╔════════════════════╗
      THANKS FOR USING
╚════════════════════╝
`,
        attachment: fs.createReadStream(path)
      },
      threadID,
      () => fs.unlinkSync(path),
      messageID
      );

    });

};

module.exports.run = async () => {};
