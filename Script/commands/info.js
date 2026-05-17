module.exports.config = {
  name: "info",
  version: "3.0.0",
  hasPermssion: 0,
  credits: "IMON",
  description: "Stylish Owner Info",
  commandCategory: "For Users",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function ({ api, event, Threads, Users }) {

  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const moment = require("moment-timezone");

  const { threadID, messageID } = event;

  const threadSetting =
    (await Threads.getData(String(threadID))).data || {};

  const prefix =
    threadSetting.PREFIX || global.config.PREFIX;

  const botname =
    global.config.BOTNAME || "EMON CHAT BOT";

  const time = process.uptime();

  const hours = Math.floor(time / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = Math.floor(time % 60);

  const ping = Date.now();

  const date = moment
    .tz("Asia/Dhaka")
    .format("DD/MM/YYYY || HH:mm:ss");

  const path = __dirname + "/cache/info.jpg";

  const img =
    "https://i.imgur.com/g8lLEbn.jpeg",

  const callback = () =>
    api.sendMessage(
      {
        body: `
╔══════════════════════╗
      ⚠️ OWNER INFO ⚠️
╚══════════════════════╝

👑 OWNER : EMON VHAI
☢️ TEAM : TIGER MATE
🤖 BOT NAME : ${botname}

━━━━━━━━━━━━━━━━━━

⚙️ SYSTEM PREFIX : ${global.config.PREFIX}
🌐 GROUP PREFIX : ${prefix}

📦 TOTAL COMMANDS : ${global.client.commands.size}
⚡ BOT PING : ${Date.now() - ping}ms

━━━━━━━━━━━━━━━━━━

🕒 ACTIVE TIME :
${hours}H ${minutes}M ${seconds}S

📅 DATE : ${date}

━━━━━━━━━━━━━━━━━━

👥 TOTAL USERS :
${global.data.allUserID.length}

💬 TOTAL GROUPS :
${global.data.allThreadID.length}

━━━━━━━━━━━━━━━━━━

🌐 FACEBOOK :
https://facebook.com/profile.php?id=61589357111143

💬 WHATSAPP :
wa.me/8801XXXXXXXXX

━━━━━━━━━━━━━━━━━━

『 EMON CHAT BOT ⚠️ 』

☢️ THANKS FOR USING BOT ☢️

╔══════════════════════╗
        TIGER MATE
╚══════════════════════╝
`,
        attachment: fs.createReadStream(path)
      },
      threadID,
      () => fs.unlinkSync(path),
      messageID
    );

  return request(encodeURI(img))
    .pipe(fs.createWriteStream(path))
    .on("close", () => callback());
};
