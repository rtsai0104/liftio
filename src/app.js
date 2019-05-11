const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const PORT = process.env.port || 3000;

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
app.use('/', router);
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/scripts'));
//Store all JS and CSS in Scripts folder.

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
