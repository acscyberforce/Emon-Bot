module.exports.config = {
  name: "ajan",
  version: "2.0",
  hasPermssion: 0,
  credits: "TONMOY",
  description: "Bangladesh Ajan Time Auto Message",
  commandCategory: "Islamic",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {

  // 🇧🇩 Bangladesh Ajan Times
  const schedule = {

    "05:00 AM": {
      message: `
🕌 ━━━━【 BOT OWNER 】━━━━ 🕌

👑 OWNER : EMON
🤖 BOT : IM EMON CHAT BOT
🇧🇩 COUNTRY : BANGLADESH

🌙 ফজরের আজান দেওয়া হয়েছে
সবাই নামাজের প্রস্তুতি নিন 🤍

━━━━━━━━━━━━━━━━━━
`
    },

    "01:15 PM": {
      message: `
🕌 ━━━━【 BOT OWNER 】━━━━ 🕌

👑 OWNER : EMON
🤖 BOT : IM EMON CHAT BOT

☀️ জোহরের আজান দেওয়া হয়েছে
সবাই নামাজ আদায় করুন 🤍

━━━━━━━━━━━━━━━━━━
`
    },

    "04:30 PM": {
      message: `
🕌 ━━━━【 BOT OWNER 】━━━━ 🕌

👑 OWNER : EMON
🤖 BOT : IM EMON CHAT BOT

🌤️ আসরের আজান দেওয়া হয়েছে
নামাজের জন্য প্রস্তুতি নিন 🤍

━━━━━━━━━━━━━━━━━━
`
    },

    "06:35 PM": {
      message: `
🕌 ━━━━【 BOT OWNER 】━━━━ 🕌

👑 OWNER : EMON
🤖 BOT : IM EMON CHAT BOT

🌇 মাগরিবের আজান দেওয়া হয়েছে
সবাই নামাজ আদায় করুন 🤍

━━━━━━━━━━━━━━━━━━
`
    },

    "07:50 PM": {
      message: `
🕌 ━━━━【 BOT OWNER 】━━━━ 🕌

👑 OWNER : EMON
🤖 BOT : IM EMON CHAT BOT

🌌 ইশার আজান দেওয়া হয়েছে
আল্লাহর ইবাদতে মগ্ন হোন 🤍

━━━━━━━━━━━━━━━━━━
`
    }

  };

  const checkTime = async () => {

    // 🇧🇩 Bangladesh Time
    const currentTime = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka"
      })
    ).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    if (schedule[currentTime]) {

      const msg = {
        body: schedule[currentTime].message
      };

      global.data.allThreadID.forEach(threadID => {
        api.sendMessage(msg, threadID);
      });

      console.log("✅ Ajan Message Sent:", currentTime);
    }

    setTimeout(checkTime, 60000);
  };

  checkTime();
};

module.exports.run = async () => {};
