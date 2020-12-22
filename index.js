require('dotenv').config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_TOKEN);

client.messages.create({
				from: 'whatsapp:+14155238886',
				body: 'Hola',
				to: 'whatsapp:+5491124870351'
}).then(msg => console.log(msg.sid))
				.catch(error => {
								console.log(error);
				});
