const TelegramBot = require('node-telegram-bot-api');
const token = '8518736211:AAGvURtuAzUZfyqqcs7rAW1H4XhNX-hUVzo';
const bot = new TelegramBot(token, { polling: true });

// Tin nhắn chào mừng tự động khi có người mới join
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (msg.new_chat_members) {
    msg.new_chat_members.forEach((newMember) => {
      const welcomeMessage = `𝐂𝐇À𝐎 𝐌Ừ𝐍𝐆 ĐẾ𝐍 𝐕Ớ𝐈 ĐẢ𝐎 𝐊𝐈𝐌 𝐂ƯƠ𝐍𝐆 💎 
Xin chào ${newMember.first_name}! 🎉
Chào mừng bạn đã chính thức đặt chân đến ĐẢ𝐎 𝐊𝐈𝐌 𝐂ƯƠ𝐍𝐆 nơi khai thác lợi nhuận bền vững cùng hệ sinh thái AI Blockchain và RSA độc đáo.
💠 𝐂á𝐜 𝐛ướ𝐜 𝐭𝐡𝐚𝐦 𝐠𝐢𝐚 𝐤𝐡𝐚𝐢 𝐭𝐡á𝐜 𝐊𝐢𝐦 𝐂ươ𝐧𝐠:
Bước 1: Chuẩn bị 𝐯í 𝐓𝐨𝐤𝐞𝐧 𝐏𝐨𝐜𝐤𝐞𝐭 trên đ.iện thoại.
Bước 2: Nạp sẵn 𝟏–𝟐 đô 𝐥𝐚 𝐁𝐍𝐁 để 𝐥à𝐦 𝐩𝐡í 𝐠𝐚𝐬 𝐠𝐢𝐚𝐨 𝐝ị𝐜
Bước 3: Sao chép link mời : https://mydiamondisland.com/auth/register/IRQPBEHD
Dán và đi Link Tokenpocket ở khu vực khám phá để tham gia Đảo Kim Cương
Tham gia nhóm zalo trao đổi cập nhật thông tin 
Link: https://zalo.me/g/piwjzn378`;

      // Gửi tin nhắn chào + nút Menu 3 gạch
      bot.sendMessage(chatId, welcomeMessage, {
        reply_markup: {
          inline_keyboard: [
            [{ text: '≡ Menu', callback_data: 'menu' }]
          ]
        }
      });
    });
  }
});

// Xử lý khi người dùng bấm nút "Menu"
bot.on('callback_query', (callbackQuery) => {
  const msg = callbackQuery.message;
  const chatId = msg.chat.id;

  if (callbackQuery.data === 'menu') {
    bot.sendMessage(chatId, 'Các link tham khảo:', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Telegram', url: 'https://t.me/+w5era90pAPRkYWE1' }],
          [{ text: 'Twitter (X)', url: 'https://twitter.com/' }],
          [{ text: 'Fanpage', url: 'https://www.facebook.com/share/1KXYvrrUwx/' }],
          [{ text: 'Nhóm Zalo', url: 'https://zalo.me/g/piwjzn378' }]
        ]
      }
    });
  }
});

























































































