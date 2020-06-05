const express = require('express');
const bodyParser = require('body-parser');
const mailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.post('/send', (req, res) => {
	const smtpTransport = mailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		auth: {
			user: 'your@email.com',
			pass: 'your-mail-password',
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	var content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

	const mail = {
		from: name,
		to: 'your@email.com',
		subject: 'New message from your website!',
		text: content,
	};

	smtpTransport.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				msg: 'fail',
			});
		} else {
			res.json({
				msg: 'success',
			});
		}

		smtpTransport.close();
	});
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Server started on port', port));
