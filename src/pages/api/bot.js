// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const { name, number } = req.body;

    // Send a message to your Telegram profile
    const botToken = process.env.BOT_TOKEN; // Replace with your bot token
    const chatId = '-1002015384517'; // Replace with your chat ID
    const text = `<b>📌📌📌</b>\n\n<b>Ism Familya:</b> ${name},\n<b>Telefon raqam:</b> ${number} \n\n 👆👆👆👆`;

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
        }),
      }
    ).catch((error) => console.error(error));
    if (!response.ok) {
      console.error('Failed to send message to Telegram');
      res.status(500).end();
      return;
    }

    res.status(200).json({ status: 'success' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
