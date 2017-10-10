var request = require('request');
var fs = require('fs');
var GITHUB_USER = "SpinnyFinny";
var GITHUB_TOKEN = "a1f46648acf06c1c61d3085f8eacc24fbcaff27d";
var repoOwner = process.argv[2]
var repoName = process.argv[3]

var requestURL = {
  url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    "User-Agent": "SpinnyFinny"
  }
};

function getRepoContributors(owner, name, cb) {
  request(requestURL, function(err, response, body){
    if (err) {
      cb(err);
    } else if (repoOwner === undefined || repoName === undefined){
      cb('Error, please enter a user *and* repo')
      return;
    } else if (response.statusCode !== 200) {
      cb('Invalid user or repo');
      return;
    }
    var userInfo = JSON.parse(body);
    cb(null, userInfo);
  });
}

function downloadImageByURL(url, filePath){
  if (!fs.existsSync('avatars')){
    fs.mkdirSync('avatars');
  }
  request.get(url)
    .on('error', function(err){
      throw err;
    })
    .pipe(fs.createWriteStream(filePath));
}

getRepoContributors(repoOwner, repoName, function(err, result){
  if (err) {
    console.log('Error:', err);
    return;
  }
  userNamesAndAvatarURLs = [];
  console.log('Downloading...')
  result.forEach(function(user) {
    var filePath = `avatars/${user.login}.jpg`;
    var url = user.avatar_url;
    downloadImageByURL(url, filePath)
  });
});






