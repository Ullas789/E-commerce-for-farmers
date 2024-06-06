const express = require("express")
const path = require("path")
const app = express()
const host = '127.0.0.1';
const port = process.env.PORT || 3000;
const hbs = require("hbs")
const { Collection, Jobcollection } = require("./mongodb")


const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')




app.use("/images", express.static(path.join(__dirname, "/public/images")));
app.use(express.json())
app.use(express.static('public/images'));
app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.urlencoded({ extended: false }));

// Route to display static src images
app.get("/static", (req, res) => {
    res.render("static");
});

// Route to display dynamic src images
app.get("/dynamic", (req, res) => {
    imageList = [];
    imageList.push({ src: "icons/flask.png", name: "flask" });
    imageList.push({ src: "icons/javascript.png", name: "javascript" });
    imageList.push({ src: "icons/react.png", name: "react" });
    res.render("dynamic", { imageList: imageList });
});



app.get('/', (req, res) => {
    res.render('index1')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/forgotpassword', (req, res) => {
    res.render('forgotpassword')
})
app.get('/personaldetail', (req, res) => {
    res.render('personaldetails')
})
app.get('/privacy', (req, res) => {
    res.render('privacy')
})
app.get('/resetpassword', (req, res) => {
    res.render('resetpassword')
})


app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/jobreg', (req, res) => {
    res.render('jobreg')
})
app.get('/futurenotify', (req, res) => {
    res.render('futurenotify')
})
app.get('/presentnotify', (req, res) => {
    res.render('presentnotify')
})
app.get('/oi', (req, res) => {
    res.render('oi')
})
app.get('/order', (req, res) => {
    res.render('order')
})
app.get('/index1', (req, res) => {
    res.render('index1')
})
app.get('/buy', (req, res) => {
    res.render('buy')
})
app.get('/sell', (req, res) => {
    res.render('sell')
})

app.post("/signup", async(req, res) => {
    const data = {
        firstname: req.body.fname,
        lastname: req.body.lname,
        email: req.body.email,
        phone: req.body.Phone,
        password: req.body.password
    }

    await Collection.insertMany([data]);
    res.render("home");





})


app.post("/jobreg", async(req, res) => {
    const data2 = {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        dl: req.body.dl,
        aadhaar: req.body.aadhaar,
        vnumber: req.body.vnumber
    }

    await Jobcollection.insertMany([data2]);
    res.render("task");





})

app.post('/login', async(req, res) => {

    try {
        const check = await Collection.findOne({ email: req.body.email })

        if (check.password === req.body.password) {
            res.render("home")
        } else {
            res.send("incorrect password")
            res.render("login")
        }


    } catch (e) {
        res.send("wrong details")


    }


})


app.listen(port, () => {
    console.log(`port connected ${port}`);
});