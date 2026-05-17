// EDIT BY EMOM
// AUTO ISLAMIC TIME MESSAGE BOT

module.exports.config = {
  name: "autotime",
  version: "11.0",
  hasPermssion: 0,
  credits: "EMOM",
  description: "বাংলা ইসলামিক অটো টাইম মেসেজ",
  commandCategory: "group messenger",
  usages: "[]",
  cooldowns: 3
};

const messages = [
  {
    timer: "12:00:00 AM",
    message: [
`🌙 এখন রাত ১২টা বাজে
সবাই ঘুমিয়ে পড়ো 🥺❤️

✨ Tahajjud পড়তে ভুলবে না

𝐄𝐌𝐎𝐌 𝐁𝐎𝐓 🤖`
    ]
  },
  {
    timer: "5:00:00 AM",
    message: [
`🕌 ফজরের সময় হয়ে গেছে
সবাই নামাজ পড়ে নাও 🤲

𝐄𝐌𝐎𝐌 𝐁𝐎𝐓 🤖`
    ]
  },
  {
    timer: "7:00:00 AM",
    message: [
`☀️ সকাল হয়ে গেছে
ঘুম থেকে উঠে পড়ো 😺

🌸 সবাইকে শুভ সকাল

𝐄𝐌𝐎𝐌 𝐁𝐎𝐓 🤖`
    ]
  },
  {
    timer: "8:00:00 AM",
    message: [
`🍞 ব্রেকফাস্ট করে নাও সবাই 😋

📚 স্কুল / কলেজে যাওয়ার সময়

𝐄𝐌𝐎𝐌 𝐁𝐎𝐓 🤖`
    ]
  },
  {
    timer: "1:00:00 PM",
    message: [
`🌞 এখন দুপুর ১টা বাজে

🍛 সবাই খাবার খেয়ে নাও

🕌 জোহরের নামাজ পড়তে ভুলবে না

𝐄𝐌𝐎𝐌 𝐁𝐎𝐓 🤖`
    ]
  },
  {
    timer: "3:00:00 PM",
    message: [
`😴 বিকাল ৩টা বাজে

☕ একটু রেস্ট নাও সবাই

𝐄𝐌𝐎𝐌 𝐁𝐎𝐓 🤖`
    ]
  },
  {
    timer: "6:00:00 PM",
    message: [
`🌇 মাগরিবের আযান দিবে কিছুক্ষণ পরে

🕌 সবাই নামাজের প্রস্তুতি নাও

𝐄𝐌𝐎𝐌 𝐁𝐎𝐓 🤖`
    ]
  },
  {
    timer: "8:00:00 PM",
    message: [
`🌃 রাত ৮টা বাজে

📖 পড়াশোনা করো
📱 বেশি ফোন চালাইও না 😑

𝐄𝐌𝐎𝐌 𝐁𝐎𝐓 🤖`
    ]
  },
  {
    timer: "10:00:00 PM",
    message: [
`💤 রাত ১০টা বাজে

😴 সবাই ঘুমানোর প্রস্তুতি নাও

🕌 এশার নামাজ পড়ে নিও

𝐄𝐌𝐎𝐌 𝐁𝐎𝐓 🤖`
    ]
  }
];

module.exports.onLoad = ({ api }) => {
  setInterval(() => {
    const time = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka"
    }).split(", ")[1];

    const msg = messages.find(i => i.timer == time);

    if (msg) {
      global.data.allThreadID.forEach(threadID => {
        api.sendMessage(
          msg.message[Math.floor(Math.random() * msg.message.length)],
          threadID
        );
      });
    }
  }, 1000);
};

module.exports.run = async () => {};
