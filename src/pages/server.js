require("dotenv").config();
const tls = require('tls');
const https = require('https')
const express = require("express");
var nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const app = express();
var mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require("cors");
app.use(bodyParser.json());
app.use(express.json())
var colors = require('colors');
const multer = require('multer');
const fs = require('fs');
const ejs = require('ejs')
var dateTime = require('node-datetime');
const { data } = require("jquery");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.set('view engine', 'ejs');


app.use(cors());





//create connection
//const conn =mysql.createConnection({
//  host:'localhost',
//user:'root',
//password: '',
//database:'shopping'
//});

//create connection
const conn = mysql.createConnection({
    host: 'sorosoke-app.com',
    user: 'sorosoke_sorosoke',
    password: '2oAfr48Xg2',
    database: 'sorosoke_track',
    //port:'3000'
});




//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});




colors.enable()

console.log('Error!'.underline.yellow);
console.log('Warning!'.red);
console.log('This is okay!'.green);



var dt = dateTime.create();

var formatted = dt.format('Y-m-d H:M:S');


//multer
var imagename = '';


const storage = multer.diskStorage({
    destination: './public/images',
    filename: (req, files, cb) => {
        return cb(null, `${files.fieldname}_${Date.now()}${path.extname(files.originalname)}`)
    }
})
const upload = multer({ storage: storage });
//const storage = multer.diskStorage({
// destination: (req, file, cb) => {
// cb(null, 'public');
// },
//filename:(req, file, cb) => {
// console.log(file);
//cb(null, file.originalname)

//}

//})
//var upload = multer({storage:storage});





//app.post('/uploading',upload.array('file',10),(req, res, next) =>{
//var fileinfo =req.files
//res.send(fileinfo);
//});

//jhgfd
//app.use('/file', express.static('public/images'));


app.get((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hell World! Node JS here we');
});








//mobile api
app.use("/filename", express.static("./public/images"))
app.post('/uplo', upload.array('filename', 2), (req, res) => {

    const fileinfo = req.files
    var filo = fileinfo[0].filename
    var filo1 = fileinfo[1].filename

    console.log(fileinfo[0].filename)
    console.log(fileinfo[1].filename)
    // filename:`http:54.150.175.15:3306/file/${req.file.image_name}`
    let data = {
        location: req.body.location, description: req.body.description, published: req.body.published, title: req.body.title, categore: req.body.categore, image_name: `http://api.shieldradr.com:3001/filename/${filo}`, image: `http://api.shieldradr.com:3001//filename/${filo1}`
    };

    console.log(data);
    let sql = "INSERT INTO spot SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

        res.send(results);
        ;
    });
});

//web api
app.post('/upload', upload.array('filename', 2), (req, res) => {

    const fileinfo = req.files
    var filo = fileinfo[0].filename
    var filo1 = fileinfo[1].filename

    console.log(fileinfo[0].filename)
    console.log(fileinfo[1].filename)
    // filename:`http:54.150.175.15:3306/file/${req.file.image_name}`
    let data = {
        location: req.body.location, dsc: req.body.description, pub: req.body.published, title: req.body.title, image_name: `http://api.shieldradr.com:3001//filename/${filo}`, image: `http://api.shieldradr.com:3001//filename/${filo1}`
    };

    console.log(data);
    let sql = "INSERT INTO hotspot SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

        res.send(results);
        ;
    });
});



app.post('/uploading', upload.array('filename', 2), (req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }


    console.log({ reqFiles })
    // var lohi =JSON.stringify(fileinfo);


    let data = { user_email: req.body.user_email, location: req.body.location, description: req.body.description, published: req.body.published, title: req.body.title, categore: req.body.categore, image: `${reqFiles}` };

    console.log(data);
    let sql = "INSERT INTO spot SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

        res.send(data);
        ;
    });
});

app.post('/uploadingweb', upload.array('filename', 2), (req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }


    console.log({ reqFiles })
    // var lohi =JSON.stringify(fileinfo);


    let data = { location: req.body.location, dsc: req.body.description, pub: req.body.published, title: req.body.title, categore: req.body.categories, phone: req.body.phone, address: req.body.address, image_name: `${reqFiles}` };

    console.log(data);
    let sql = "INSERT INTO hotspot SET ?"
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

        res.send(data);
        ;
    });
});





//route for insert data 
//app.post('/uploa',upload,(req, res, next) => {

//  let data = {location:req.body.location,image_name:imagename,image_name1:imagename1};
//console.log(data);
//let sql = "INSERT INTO hotspot SET ?";
//let query = conn.query(sql, data,(err, results) => {
//  if(err)throw err;
//});
//});




//app.post('/hots',multipleUpload('file'),(req, res) => {
//  let data = {location:req.body.location,dsc: req.body.description,pub:req.body.published,title:req.body.title,image_name:imagename};
// console.log(data);
// let sql = "INSERT INTO hotspot SET ?";
// let query = conn.query(sql, data,(err, results) => {
//   if(err)throw err;
// res.json(results);
// }/);
//});



//route for delete enquery
app.get('/deleteh/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);

    let sql = "DELETE FROM hotspot WHERE id=" + id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)
    });
});












//route for enquery 
app.post('/location', (req, res) => {


    let sql = "update location SET lon='" + req.body.lon + "',lat='" + req.body.lat + "' WHERE id='" + req.body.id + "'";
    let data = "lon='" + req.body.lon + "',lat='" + req.body.lat + "'";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ data });
        console.log(results);
    });

});

//route for enquery 
app.get('/loee', (req, res) => {
    let sql = "SELECT * FROM location where id=1";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//app.post('/whsd',(req,res) => {
//wbm.start().then(async () => {
//  const phones = ['9917288280'];
//const message = 'Good Morning-12.261.39.*96.';
//await wbm.send(phones, message);
//await wbm.end();
//if(err)throw err;

//});
//})




//setInterval(function (){console.log(results)} , 5000);
//route for enquery 
app.get('/oyo', (req, res) => {
    let sql = "UPDATE victory SET col1='" + req.body.name + "' WHERE id=1";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
        console.log(results)
    });
});
//route for enquery 
app.get('/oyop', (req, res) => {
    let sql = "UPDATE product SET name='" + req.body.name + "',price='" + req.body.price + "' WHERE id=" + req.body.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
        console.log(results)
    });
});


//route for insert data to reasons (rea) 
app.post('/yio', (req, res) => {

    let data = { reason: req.body.setName };

    console.log(data);
    let sql = "INSERT INTO my SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;


    });
});

//route for enquery 
app.get('/enq', (req, res) => {
    let sql = "SELECT * FROM enquery";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


//route for delete enquery
app.get('/enuerydelete/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);

    let sql = "DELETE FROM enquery WHERE id=" + id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/Enwuiry');
    });
});



//route for list users
app.get('/plan', (req, res) => {
    let sql = "SELECT * FROM plans ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for plan edit
app.get('/edi/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);

    let sql = "SELECT * FROM plans WHERE id=" + id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for product update
app.post('/updat', (req, res) => {
    let sql = "UPDATE plans SET title='" + req.body.title + "',description='" + req.body.description + "',amount='" + req.body.amount + "'  WHERE id=" + req.body.id;
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });


});

//route for insert data to status
app.post('/rec/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);
    let data = req.body.setMessage;
    console.log(data);

    let sql = "UPDATE transactions SET status= ? WHERE id=" + id;
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

    });
});

//route for update status processing
app.post('/pro/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);
    let data = req.body.setMessage;
    console.log(data);
    let sql = "UPDATE transactions SET status= ? WHERE id=" + id;
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

    });
});

//route for update status recived
app.post('/pen/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);
    let data = req.body.setMessage;
    console.log(data);
    let sql = "UPDATE transactions SET status= ? WHERE id=" + id;
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

    });
});


//route for accept users
app.get('/merry/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);

    let sql = "insert into hotspot (user_email,location,dsc,pub,title,image_name,categore,phone,address) select user_email,location,description,published,title,image,categore,phone,address from spot where id=" + id

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});




//route for delete users from requst

app.get('/sharry/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "DELETE FROM spot WHERE id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});



//route for delete users
app.get('/rila/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "insert into reject(user_email,title,description,published,location,image_name,categore,phone,address) select user_email,title,description,published,location,image,categore,phone,address from spot where id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});

//route for select subscribe users
app.get('/sub', (req, res) => {
    let sql = "select * from subscribe;";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});



//route for delete users from request

app.get('/tila/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "DELETE FROM spot WHERE id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});

//route for activate users
app.get('/pinoa/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "insert into blockusers select * from subscribe where id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});

//route for delete blockusers

app.get('/noia/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "DELETE FROM subscribe WHERE id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});

//route for activate users
app.get('/mino/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "insert into subscribe select * from blockusers where id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});

//route for delete product

app.get('/kika/:id', function (req, res) {
    const id = req.params.id;

    console.log(id);
    let sql = "DELETE FROM blockusers WHERE id=" + id;

    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results)

    });

});


//route for block users
app.get('/nois', (req, res) => {
    let sql = "SELECT * FROM blockusers";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});



//route for list allhotspots
app.get('/allm', (req, res) => {
    let sql = "SELECT * FROM hotspot ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});





//route for list users
app.get('/users', (req, res) => {
    let sql = "SELECT * FROM users ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for insert data 
app.post('/Save', (req, res) => {
    let data = { username: req.body.username, email_address: req.body.email_address, password: req.body.password };
    console.log(data);
    let sql = "INSERT INTO register SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

    });
});


//route for list req hotspot
app.get('/hotti', (req, res) => {
    let sql = "SELECT * FROM spot ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


//route for list rejected users
app.get('/reje', (req, res) => {
    let sql = "SELECT reject.id,reject.user_email,reject.title,reject.location,reject.description,reject.published,reject.image_name,reject.categore,reject.phone,reject.address,my.reason from reject join my on reject.id = my.id";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


//route for list userlocation
app.get('/lusers', (req, res) => {
    let sql = "SELECT * FROM userlocation ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for list transactions
app.get('/history', (req, res) => {
    let sql = "SELECT * FROM transactions ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


//route for list count of users
app.get('/sums', (req, res) => {
    let sql = " select * from subscribe";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for list count of requests
app.get('/spots', (req, res) => {
    let sql = " select * from spot";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for latest requests
app.get('/newreq', (req, res) => {
    let sql = "SELECT * FROM spot WHERE LoginDate >= CURRENT_DATE";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


//route for list todays added users
app.get('/current', (req, res) => {
    let sql = "SELECT * FROM subscribe WHERE pdate >= CURRENT_DATE";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});





//app api
//route for list subscription plans
app.get('/subplan', (req, res) => {
    let sql = "SELECT * FROM plans ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


//app api
//route for list allhotspot users
app.get('/aphotspot', (req, res) => {

    let sql = "SELECT * FROM hotspot ";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

//app api
//route for getting the enquiry from users
//inserted data by users
app.post('/enquiryap', (req, res) => {
    let data = { name: req.body.name, email: req.body.email, phone: req.body.phone, message: req.body.message };
    console.log(data);
    let sql = "INSERT INTO enquery SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            res.send('some thing wrong')
        } else {
            res.send('enquiry sended')
        }

    });
});

//app api
//route for getting the Transaction history from users
//inserted data by users
app.post('/transaction', (req, res) => {
    let data = { user_email: req.body.user_email, transactionId: req.body.transactionId, transaction_status: req.body.transaction_status, payment_method: req.body.payment_method };
    console.log(data);
    let sql = "INSERT INTO transactions SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            res.send("false")
        } else {
            res.status(200).json("success");
        }
    });
});

//app api
//route for getting the hotspot data from users
//inserted data by users
app.post('/reqhotspot', (req, res) => {
    let data = { user_email: req.body.user_email, title: req.body.title, description: req.body.description, published: req.body.published, location: req.body.location, date: req.body.date };
    console.log(data);
    let sql = "INSERT INTO spot SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

    });
});

//app api
//route for getting the data from users
//inserted data by users
app.post('/sign', (req, res) => {
    let data = { username: req.body.username, email: req.body.email, phone: req.body.phone, password: req.body.password, pdate: req.body.pdate, edate: req.body.edate, status: "Active" };
    // Check if subscription exists in the request body
    if (req.body.subscription) {
        data.subscription = req.body.subscription;
    }
    console.log(data);
    let sql = "INSERT INTO subscribe SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.send('account created')
        }


    });
});



//admin login
//route for login page
app.post('/login', (req, res) => {

    let sql = "select * from login where username='" + req.body.username + "' and password='" + req.body.password + "'";
    console.log(sql);

    let query = conn.query(sql, (err, results) => {
        if (results.length == 0) {
            res.send("false")
        } else {
            res.status(200).json("success");
        }
    });
});
//app api
//route for getting the users lat long


app.post('/location', (req, res) => {
    let data = { lat: req.body.lat }

    setInterval(() =>
        console.log(data), 4000
    );
    let sql = "INSERT INTO loc SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

    });
});

//route for password update
app.post('/uppassdate/:email', function (req, res) {
    const email = req.params.email;
    console.log(email);
    let sql = "UPDATE subscribe SET password='" + req.body.password + "' WHERE email='" + req.params.email + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.status(200).json({ success: true });
    });


});




// app api
// sinup api for app
// app.post('/sign',(req, res) => {

//     let data = {username: req.body.username,email:req.body.email, password: req.body.password,subscription:req.body.subscription,date:req.body.date};
//     console.log(data);

//     let sql = "INSERT INTO subscribe SET ?";
//     let query = conn.query(sql, data,(err, results) => {
//         if(err){
//             res.send('user is already exist')
//         }else{
//             res.send('account created')
//         }

//         });
// });

//app api
//route for login page
app.post('/log', (req, res) => {
    let data = { email: req.body.email, password: req.body.password };
    console.log(data);
    let sql = "INSERT INTO subscribe SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            res.send('user is already exist')
        } else {
            res.json(results);
        }
    });
});

//api for userlogin
app.post('/userlog', (req, res) => {

    let sql = "select edate,subscription from subscribe where email='" + req.body.email + "' and password='" + req.body.password + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (results.length == 0) {
            res.send('wrong email or password')
        } else {
            res.send(results)
            // res.send('login succesfull',results)
        }
    });
});


//api for whatsapp
app.get('/okla/:email', function (req, res) {
    const email = req.params.email;
    console.log(email)
    res.write('just click on the link add email given below and get the location \n ');
    res.write('<a href=http://https://sorosoke-app.com/Usmap" \n');
    res.write('you can use this email to access the user location = ');
    res.write(email);


    res.end();
});



app.post('/chayt', (req, res) => {

    let sql = "UPDATE subscribe SET password='" + req.body.password + "' WHERE email='" + req.body.email + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (results.length == 0) {
            res.status(500).json({ success: false, });
        }

        else {
            res.status(200).json({ success: true });
        }
    });
});



//app api
//account data of user
app.get('/account/:email', function (req, res) {
    const email = req.params.email;
    console.log(email);

    let sql = "select username,email,subscription,phone from subscribe where email='" + req.params.email + "'";
    let query = conn.query(sql, (err, results) => {
        console.log(results);
        if (err) {
            res.send('wrong email')
        } else {
            res.json(results);
        }

    });
});


//app api
//app api for insert user emergency contect 
app.post('/Emergency', (req, res) => {
    let data = { id: req.body.id, Cname: req.body.Cname, Cphone: req.body.Cphone, email: req.body.email };
    console.log(data);
    let sql = "INSERT INTO emergency SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) {
            res.status(500).json({ success: false });
            // res.send('wrong email address')
        } else {
            res.status(200).json({ success: true });
        }
    });
});
//app api
//app api for get emergency users

app.get('/emselect/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);

    let sql = "select Cname,Cphone from emergency where id=" + id;
    let query = conn.query(sql, (err, results) => {
        console.log(results);
        if (err) throw err;
        res.json(results);
    });
});





//app api
//app api for delete emergency users
app.get('/emdelete/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);

    let sql = "delete from emergency where id=" + id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.status(200).json({ success: true });
    });
});



//api for forgot password
app.post('/userfor', (req, res) => {

    let sql = "select * from log where email='" + req.body.email + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (results.length == 0) {
            res.status(500).json({ success: false });
            // res.send('wrong email address')
        } else {
            res.status(200).json({ success: true });
        }
    });
});

// change password 

app.post('/change', (req, res) => {

    let sql = "select * from log where email='" + req.body.email + "' and password='" + req.body.password + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        console.log(results)
        if (results.length == 0) {
            res.status(500).json({ success: false });
        } else {
            let sql = "UPDATE log SET password='" + req.body.password1 + "' where email='" + req.body.email + "'";
            let query = conn.query(sql, (err, result) => {
                if (err) throw err;
                res.status(200).json({ success: true });


            });
        }
    });
});


app.post('/cha', (req, res) => {

    let sql = "select * from log where email='" + req.body.email + "' and password='" + req.body.password + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (results.length == 0) {
            res.status(500).json({ success: false, });
        } else {
            res.status(200).json({ success: true });
        }
    });
});






//route for password update
app.post('/passupdate', (req, res) => {
    let sql = "UPDATE log SET password='" + req.body.password + "' WHERE id=" + req.body.id;
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.status(200).json({ success: true });
    });


});





//route for delete user account
app.get('/accdelete/:email', function (req, res) {
    const email = req.params.email;
    console.log(email);

    let sql = "DELETE FROM subscribe WHERE email='" + req.params.email + "'";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send('user delete');
    });
});





//route for list req hotspot
app.get('/lock', (req, res) => {
    let sql = "SELECT lat FROM loc";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for list req hotspot
app.get('/lockup', (req, res) => {
    let sql = "SELECT lon FROM loc";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for list search user
app.get('/search/:username', function (req, res) {
    const username = req.params.username;
    console.log(username);

    let sql = "select * from subscribe where username='" + req.params.username + "'";
    let query = conn.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ success: false });
            // res.send('wrong email address')
        } else {
            res.json(results);
        }
    });
})


// ------------------------email send--------------------copy again

app.get("/rgotmail/:email", (req, res) => {
    try {
        const email = req.params.email;
        console.log(req.params);
        //   const result = passwordChangingMail(email);
        let sql = "select*from log where email='" + req.params.email + "'";

        let query = conn.query(sql, (err, results) => {
            console.log(results)
            if (results.length != 0) {
                res.status(200).json(true);


                var transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: "surbhigulhana3@gmail.com",
                        pass: "wxcmkmpfmtdquyrn",// generated ethereal password
                    },
                });

                // send mail with defined transport object
                var info = transporter.sendMail({

                    from: email, // sender address
                    to: "guruji740ji@gmail.com", // list of receivers
                    subject: email, // Subject line
                    text: "Hello world? we are here", // plain text body
                    html: "<b>Hello create your new password</b> <a href=http://localhost:3000/setpassword/${email}", // html body
                });

                console.log("Message sent: %s", info.messageId);
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...







            } else {
                res.status(200).json({ success: false });
            }

        });

        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...



    } catch (err) {
        console.log(err);
        res.status(500).json(false);
    }
});




// ------------------------email send-------------------- 

app.get("/api/sendforgotmail/:email", (req, res) => {
    try {
        const email = req.params.email;
        console.log(req.params);
        //   const result = passwordChangingMail(email);
        let sql = "select*from subscribe where email='" + req.params.email + "'";

        let query = conn.query(sql, (err, results) => {
            console.log(results)
            if (results.length != 0) {
                res.status(200).json(true);


                var transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true, // true for 465, false for other ports
                    auth: {
                        user: "surbhigulhana3@gmail.com",
                        pass: "myrzqwawoprowinm",// generated ethereal password
                    },
                });

                // send mail with defined transport object
                var info = transporter.sendMail({
                    from: "surbhigulhana3@gmail.com", // sender address
                    to: email, // list of receivers
                    subject: "Hello ✔", // Subject line
                    text: "Hello world? we are here", // plain text body
                    html: `<a href=https://shieldradr.com/Dyv/${email}`, // html body
                });

                console.log("Message sent: %s", info.messageId);
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...







            } else {
                res.status(200).json(false);
            }

        });

        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...



    } catch (err) {
        console.log(err);
        res.status(500).json(false);
    }
});





// change password for forgot password

app.post('/newpass', (req, res) => {

    let sql = "select *from log where email='" + req.body.email + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        console.log(results)
        if (results.length == 0) {
            res.status(500).json({ success: false });
        } else {
            let sql = "UPDATE log SET password='" + req.body.password + "' where email='" + req.body.email + "'";
            let query = conn.query(sql, (err, result) => {
                if (err) throw err;
                res.status(200).json({ success: true });


            });
        }
    });
});



app.post('/nowpass', (req, res) => {

    let sql = "select *from login where password='" + req.body.password + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        console.log(results)
        if (results.length == 0) {
            res.status(500).json({ status: false });
        } else {
            let sql = "UPDATE login SET password='" + req.body.password1 + "' where username= 'admin'";
            let query = conn.query(sql, (err, result) => {
                if (err) throw err;
                res.status(200).json({ status: "success" });


            });
        }
    });
});


//api for search
app.post('/searchm', (req, res) => {

    let sql = "select * from subscribe where username='" + req.body.username + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (results.length == 0) {
            res.status(500).json({ success: false });
            // res.send('wrong email address')
        } else {
            res.json(results);
        }
    });
});

//route for list req hotspot
app.get('/categore', (req, res) => {
    let sql = "SELECT * FROM cate";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});
//app
//route for plan update
app.post("/planup", (req, res) => {

    let sql = "UPDATE subscribe SET subscription='" + req.body.subscription + "' WHERE email='" + req.body.email + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ status: false });
        } else {
            res.status(200).json({ status: "success" });
        }
    });


});

//route for hotspot update
app.post("/hotup", (req, res) => {

    let sql = "UPDATE spot SET phone='" + req.body.phone + "',address='" + req.body.address + "' WHERE user_email='" + req.body.user_email + "'";
    console.log(sql);
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });


});

//route for insert sub
app.post('/support', (req, res) => {
    let data = { name: req.body.name, email: req.body.email, message: req.body.message, location: req.body.locj }
    console.log(data);
    let sql = "INSERT INTO support SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for list req hotspot
app.get('/supportlist', (req, res) => {
    let sql = "SELECT * FROM support";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//route for delete undo subscribe users user status update 
app.post('/subuserupdate/:id', function (req, res) {
    const id = req.params.id;
    console.log(id);
    let data = req.body.status;
    console.log(data);
    let sql = "UPDATE subscribe SET status= ? WHERE id=" + id;
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;

    });
});

//route for list subs users
app.post('/listsusbinall', (req, res) => {
    let sql = "select * from subscribe where status='" + req.body.status + "'";
    let query = conn.query(sql, (err, results) => {
        console.log(results)

        if (err) throw err;
        res.json(results);
    });
});

// ------------------------email send-------------------- 

app.get("/api/sendforgotmailll/:email", (req, res) => {
    try {
        const email = req.params.email;
        console.log(req.params);
        //   const result = passwordChangingMail(email);
        let sql = "select*from subscribe where email='" + req.params.email + "'";

        let query = conn.query(sql, (err, results) => {
            console.log(results)
            if (results.length != 0) {
                res.status(200).json(true);


                var transporter = nodemailer.createTransport({
                    driver: "sendmail",
                    host: "smtp.mail.com",


                    port: 587,
                    secure: false, // true for 465, false for other ports
                    logger: true,
                    debug: true,
                    ignoreTLS: true, // add this

                    auth: {
                        user: "gurisachin09@gmail.com",
                        pass: "aaaxkxfoqsezzlrg"
                    },

                });

                // send mail with defined transport object
                var info = transporter.sendMail({
                    from: "gurisachin09@gmail.com", // sender address
                    to: email, // list of receivers
                    subject: "Reset Password", // Subject line
                    //  text: "Hello world? we are here", // plain text body
                    html: `<url href={http://shieldradr.com/Dyv/${email}`, // html body
                });

                console.log("Message sent: %s", info.messageId);
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...







            } else {
                res.status(500).json(false);
            }

        });

        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...



    } catch (err) {
        console.log(err);
        res.status(500).json(false);
    }
});





const sslServer = https.createServer(
    {

        key: fs.readFileSync(path.join(__dirname, 'cert', 'sorosoke-app.key')),
        cert: fs.readFileSync(path.join(__dirname, 'cert', 'sorosoke-app.crt')),
        ca: fs.readFileSync(path.join(__dirname, 'cert', 'sorosoke-app.ca-bundle')),


    },
    app

)

sslServer.listen(3005, () => console.log('secure server on port 3005'))

//app.listen(3001,()=>{
// console.log(`Server running at success 3001`);
//});
