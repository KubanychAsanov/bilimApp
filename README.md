<p align="center">
  <a href="https://bilimapp.herokuapp.com/">
    bilimApp<br/>
  </a>
</p>

# bilimApp
This is a platform where students, teachers, professionals, or anyone can share their experiences and skills by writing a blog.

##### Here you can:
- Read the latest news, experiences, stories of famous people, about technology, etc...
- Share with own experiences, etc...
- Edit, update or delete existing own blogs.

### Screenshots
<a href="https://i.imgur.com/6fubOnL.png"><img src="https://i.imgur.com/6fubOnL.png" width="600px"></a>

## API doc

To access swagger API doc click -->  <a href ="https://bilimapp.herokuapp.com/api-docs/">https://bilimapp.herokuapp.com/api-docs/</a>


## Resources used

- [Node JS](https://nodejs.org/en/about/)
- [Express](https://expressjs.com/ru/)
- [Handlebars](https://handlebarsjs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [MongoDB](https://www.mongodb.com/)
- [Swager](https://swagger.io/)


## The schema:

### Blogs
```
┌─────────────┬─────────┬───────┐
│ blogs       │ type    │ extra │
├─────────────┼─────────┼───────┤
│ title       │ string  │       │
│ description │ string  │       │
│ content     │ string  │       │
| img         | string  | link  |
| userId      | objectId| auto..|
| dateAdded   | Date    | auto..|
└─────────────┴─────────┴───────┘
```
### Users
```
┌─────────────┬─────────┬───────┐
│ users       │ type    │ extra │
├─────────────┼─────────┼───────┤
│ email       │ string  │       │
│ password    │ string  │       │
│ name        │ string  │       │
| surname     | string  | link  |
| userId      | objectId| auto..|
| dateAdded   | Date    | auto..|
└─────────────┴─────────┴───────┘
```
## ‍👨‍💻 ‍Contacts...

<a href="https://www.instagram.com/kuba.asanovv/"><img src="https://img.icons8.com/color/48/000000/instagram" width="60"></a>
<a href="https://www.linkedin.com/in/kubanych-asanov-07394b1b4/"><img src="https://img.icons8.com/color/48/000000/linkedin-circled.png" width="60"></a>
<a href="https://www.youtube.com/channel/UCneGkwC2dxnOc10q1Zlc0GQ"><img src="https://img.icons8.com/color/48/000000/youtube-play.png" width="60"></a>
<a href="https://kuba.go.kg/"><img src="https://img.icons8.com/ultraviolet/40/000000/domain.png" width="60"></a>