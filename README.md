# bartzalewski.com-v2-mail
Mail API to make your Contact Form work using my Portfolio!

## How to make it work?

1. Download this (make it private repo)

2. cd bartzalewski.com-v2-mail

3. npm install

4. Edit index.js:

- Add your host
- Add your email & password

5. Host it for example on Heroku

6. Copy its link, go to Portfolio dir, and edit the "url"
(bartzalewski.com-v2/src/components/contact.js):
```
axios({
      method: "POST",
      url: "your-link.com/send",
      data: {
        name: name,
        email: email,
        message: message,
      },
    })
```

7. Congratulations, your Contact Form sends you emails!

## Follow me!

[Website](https://www.bartzalewski.com) • [Instagram](https://www.instagram.com/bart.code) • [YouTube](https://www.youtube.com/channel/UCwkU0-_RJbS16X5pbcW-tPQ)
