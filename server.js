const express = require('express')
const {db, Users} = require('./db')
const app = express();

const server_port = process.env.PORT || 4040


app.set('view engine', 'hbs');
app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.get('/', (req, res)=>{
    res.render('userData')
})

app.post('/createPost', async (req, res)=>{
    const user = await Users.create({
        username : req.body.userName,
        perferdCodeLang : req.body.codeLang,
        stdInp : req.body.stdInp,
        sourceCode : req.body.srcCode
    })
    console.log(user)
    const posts = await Users.findAll()
    res.render('tableData', { posts: posts })
}) 

app.get('/getPosts', async (req, res)=>{
    const allPosts = await Users.findAll();
    res.render('tableData', { posts: allPosts })
})



db.sync()
.then(()=>{
    app.listen(server_port, ()=>{
        console.log(`server is running on http://localhost:${server_port}`);
    })
   })
   .catch((err)=>{
    console.error(err);
   })