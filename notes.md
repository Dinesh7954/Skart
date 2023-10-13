
EXPRESS ==> framework for node.js
used  for routing ---   GET, POST , PUT , DELETE
GET - Data is visible in url 
routing -->    /profile           /contact 

nodemon -- npm i nodemon -g       // global
then run by ---->  npx nodemon filename.js


EXPORTING FILE ====>

module.exports = { first: d , e };         // module is object , exports is property
var data = require("./script2");           // require is function 


template engine ==> ejs is html with the power of doing calculation 
EJS  SETUP ====>
npm install ejs
create one views folder and inside it create ejs files
create any other  js file where configure ejs ---  app.set("view engine", "ejs");
write render there instead of send 
then in render function , mention the name of file that ejs file present in views folder without extension ejs 


static files setup ===>
create a folder public and inside it create three folders images , stylesheet , javascript 
configure static file in the script.js file  ==> app.use(express.static("./public"));  
link the stye.css file path in files