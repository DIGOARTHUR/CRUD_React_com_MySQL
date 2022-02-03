//MYSQL
// Username : root
//Password: 12345

const express = require("express")
const app = express();
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors');



const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "cruddatabase"
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))


con.connect(function (err) {
    if (err) throw err;
    console.log("Conectado!");
});

console.log()

///////////////////////
// OBTER DADOS
///////////////////////
app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM list_movies";
    con.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result);
    });
});


///////////////////////
// INSERÇÃO DE DADOS
///////////////////////
app.post("/api/insert", (req, res) => {
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlInsert = "INSERT INTO list_movies (movieName, movieReview) VALUES (?,?)";
    con.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(err);
    })
});

///////////////////////
// DELETAR DADOS
///////////////////////
app.delete("/api/delete/:movieName", (req, res) => {
    const name = req.params.movieName;
    const sqlDelete = "DELETE FROM list_movies WHERE movieName=?";

    con.query(sqlDelete, name, (err, result) => {
        if (err) console.log(err);

    })
});
///////////////////////
// UPDATE DADOS
///////////////////////
app.put("/api/update/", (req, res) => {
    const name = req.body.movieName;
    const review = req.body.movieReview;
    const sqlUpdate = "UPDATE list_movies SET  movieReview = ? WHERE movieName = ?";
    con.query(sqlUpdate, [review,name], (err, result) => {
        if (err) console.log(err);
    });
});

app.listen(3002, () => {
    console.log("running on port 3002")
});