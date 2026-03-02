import express, { request, response } from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

const mock_users = [ 
                        {id: 1, username: "Stephen", gender:"male"},
                        {id: 2, username: "Mrs. Potato", gender:"female"},
                        {id: 3, username: "Woody", gender:"male"},
                        {id: 3, username: "Buzz", gender:"male"},
                   ];

app.get("/", (req, res) => {
    res.send("hello this is the home page");
});


app.get("/api/users", (request, response) => {
    const { 
        query:{filter, value}
    } = request;

    if(!filter || !value){ return response.status(200).send(mock_users) }

    const filteredUsers = mock_users.filter( (user) => {
        if(user[filter].includes(value)){
            return user;
        }
    });

    response.send(filteredUsers);

    console.log("this gets reached if both filter and value is present"); 
});


app.post("/api/users", (req, res) => {
    const newUser = req.body;

    const newUserv2 = {id: mock_users.length + 1, ...newUser};
    console.log(newUserv2);

    mock_users.push(newUserv2);
});


app.get("/api/users/:id", (req, res) => {
    const id = req.params.id;

    const parsedID = parseInt(id);
    if(isNaN(parsedID)){ return res.status(400).send("Baaaad. Invalid ID"); }

    const ID_info = mock_users.find( (user) => user.id === parsedID );

    if(!ID_info){
        return res.status(400).send({ msg:"cant find" });
    }

    return res.status(200).send(ID_info);
})


app.get("/api/pastries", (req, res) => {
    res.send([
        {name: "bread", calories: "100", sweet_lvl: "1"},
        {name: "cookies", calories: "400", sweet_lvl: "3"},
        {name: "brownies", calories: "700", sweet_lvl: "10"},
        {name: "spanish bread", calories: "200", sweet_lvl: "3"}
    ]);
});



app.listen(PORT, (PORT) => {
    console.log(`server started in ${PORT}`);
});
