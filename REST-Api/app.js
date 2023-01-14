let express  = require('express');
let app = express();
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
// let mongoURL = "mongodb://localhost:27017";
let mongoURL = "mongodb+srv://test:test1234@cluster0.lofuhf0.mongodb.net/?retryWrites=true&w=majority"
let port = 9500
let db;

// middleware (supporting library)
app.use(cors());
app.use(express.json())

//connect with mongodb
MongoClient.connect(mongoURL, {useNewUrlParser: true}, (err, dc) => {
    if (err) console.log('Error while connecting to Mongo');
    db = dc.db('myntra_clone');
    app.listen(port, () => {
        console.log('Server is running on port ' + port);
    })
})

app.get('/', (req, res) =>{
    res.send('<h1>Welcome hii!</h1>');
}) 

app.get('/categories', (req, res) =>{
    db.collection('category').find().toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
}) 

app.get('/products', (req, res) =>{
    // let id = req.params.id;
    let categoryId = req.query.categoryId
    let query = {}

    if (categoryId) {
        query = {category: categoryId}
    }
    console.log(categoryId);
    db.collection('products').find(query).toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
}) 

app.get('/products/:categoryId', (req, res) =>{
    let query = {}
    let categoryId = req.params.categoryId;
    let brand = req.query.brand
    let price = req.query.price
    let size = req.query.size
    let color = req.query.color
    
    if (brand) {
        query = {category: categoryId, brand: brand}
    } else if (size && color) {
        query = {category: categoryId, size: size, color: color}
    } else if (size) {
        query = {category: categoryId, size: size}
    } else if (color) {
        query = {category: categoryId, color: color}
    } 

    console.log(categoryId, brand, size, color);
    db.collection('products').find(query).toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
}) 

//add product to wishlist
app.post('/addToWishlist', async (req, res) => {
    console.log(req.body);
    await db.collection('wishlist').insert(req.body, (err, result) => {
        if(err) throw err;
        res.send('Item added in wishlist')
    })
})

//getting wishlist items
app.get('/myWishList/:email', (req, res) =>{
    if (req.params.email) {
        db.collection('wishlist').find({email: req.params.email}).toArray((err, result) => {
            if(err) throw err;
            res.send(result)
        })
    } else {
        console.log('no items found ', req.params.email);
        res.send("no items found")
    }
    
})

// placing order
app.post('/placeOrder', async (req, res) => {
    console.log(req.body);
    await db.collection('orders').insert(req.body, (err, result) => {
        if(err) throw err;
        res.send('order placed successfully');
    })
})

//getting orders
app.get('/viewOrder', (req, res) =>{
    let email = req.query.email
    let query = {};
    if (email) {
        query={email: email}
    } else {
        query={}
    }
    db.collection('orders').find(query).toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})

//update order
app.put('/updateOrder/:orderId', (req, res) => {
    let oid = Number(req.params.orderId)
    db.collection('orders').updateOne(
        {orderId: oid},
        {
            $set:{
                "status": req.body.status,
                "bank_name": req.body.bank_name,
                "date": req.body.date
            }
        }, (err, result) => {
            if (err) throw err;
            res.send('order Updated')
        }
    )
})

// Delete Order
app.delete('/deleteOrder/:deleteId', (req, res) => {
    let _id = mongo.ObjectId(req.params.deleteId);
    db.collection('orders').remove({_id}, (err, result) => {
        if (err) throw err;
        res.send("Order deleted successfully")
    })
})

//edu_project_myntra