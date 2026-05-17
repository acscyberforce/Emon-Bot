const os = require("os");

module.exports.config = {
  name: "uptime3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "EMOM",
  description: "Show bot uptime",
  commandCategory: "system",
  usages: "uptime3",
  cooldowns: 5,
  prefix: false
};

module.exports.run = async function ({ api, event }) {

  // Bot uptime
  const uptime = process.uptime();

  const days = Math.floor(uptime / (60 * 60 * 24));
  const hours = Math.floor((uptime % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((uptime % (60 * 60)) / 60);
  const seconds = Math.floor(uptime % 60);

  const uptimeText =
    `${days} Day(s) ${hours} Hour(s) ${minutes} Minute(s) ${seconds} Second(s)`;

  // Ping
  const start = Date.now();

  const ping = Date.now() - start;

  // RAM
  const totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
  const freeRam = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
  const usedRam = (totalRam - freeRam).toFixed(2);

  // Time
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    timeZone: "Asia/Dhaka",
    hour12: true
  });

  const date = now.toLocaleDateString("en-US");

  const msg = `
╔═════◇═════╗
      ⚡ EMON BOT⚡
╚═════◇═════╝

⏰ UPTIME: ${uptimeText}

📅 DATE: ${date}
🕒 TIME: ${time}

📶 PING: ${ping}ms

🧠 RAM USED: ${usedRam} GB
💾 TOTAL RAM: ${totalRam} GB

💻 HOST: ${os.hostname()}
🖥️ PLATFORM: ${os.platform()}

✅ BOT RUNNING SMOOTHLY
`;

  api.sendMessage(msg, event.threadID, event.messageID);
};
