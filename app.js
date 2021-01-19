const wp = require("web-push");

// console.log(wp.generateVAPIDKeys());

const publicKey = "BM9M9-VlY5VY47K_pdCzIx90JruMqIVY5NeKN1n0eBctXJZ5QU17VYdMTPXRh3GtQZyff6Mql4AbMvTvVlSZsdk";
const privateKey = "_DNHe-GVlveTA2Wcc50wxroiH3_47N5tHpoBxo8JNIA";

const sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/d0cHT_zXVtI:APA91bHERJRJzESJc_48sf8FWiLxLzyfDBwsYqhxXjD7bY2UIF4RmWsKVVWrfart9tZ6flmBbwQokaZsEa0cCKU_Vg9ePFj7m55rhew6T-b8Zo2D8jUlM8Jr0XAmkx00WplYM6JHOzqX",
  expirationTime: null,
  keys: {
    p256dh:
      "BFFGAIlO7nquj06SKsNSwPGocV4JZ60ZpqVK_tkgWfpOJiixShTHxNpq32pbB1z1XQGWg6sBg5vHDwj4cxcn-Lw",
    auth: "ZO84rQUXdNXtfUsqp78HkA",
  },
};

const payload = {
  notification: {
    data: {
      url: "https://mi7dev.com.br"
    },
    priority: "high",
    title: "Angular PWA - V1",
    body: 'It works.',
    vibrate: [100, 50, 100]
  }
};

wp.setVapidDetails("mailto:lex.itorino@gmail.com", publicKey, privateKey);

wp.sendNotification(sub, JSON.stringify(payload));