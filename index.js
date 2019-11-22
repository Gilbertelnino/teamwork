const express = require('express');
const signup = require('./routes/signup');
const signin = require('./routes/signin');
const article = require('./routes/article');
const editArticle = require('./routes/editArticle');
const deleteArticle = require('./routes/deletearticle');
const comment = require('./routes/comment');
const feeds = require('./routes/feeds');
const viewSpecialArticle = require('./routes/special');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/auth/signup', signup);
app.use('/api/v1/auth/signin', signin);
app.use('/api/v1/articles', article);
app.patch('/api/v1/articles/:id', editArticle);
app.delete('/api/v1/articles/:id', deleteArticle);
app.post('/api/v1/articles/:id/comments', comment);
app.get('/api/v1/feeds', feeds);
app.get('/api/v1/articles/:id', viewSpecialArticle);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`app is listerning on port ${PORT}`));