var request = require('request');
var fs = require('fs');
var GITHUB_USER = "SpinnyFinny";
var GITHUB_TOKEN = "a1f46648acf06c1c61d3085f8eacc24fbcaff27d";
var repoOwner = 'tpope';
var repoName = 'vim-commentary';
var requestURL = {
  url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    "User-Agent": "SpinnyFinny"
  }
};


function getRepoContributors(repoOwner, repoName, cb) {
  request(requestURL, function(err, response, body){
    if (err) {
      cb(err);
    } else {
      var userInfo = JSON.parse(body);    // note that if we weren't busy, we'd check to see if `body` is even parseable, ha ha ha, be srs
      cb(null, userInfo);
      // console.log(userInfo);
    }


  })
}

function downloadImageByURL(url, filePath){

  if (!fs.existsSync('Avatars')){
    fs.mkdirSync('Avatars');
  }
  request.get(url)
    .on('error', function(err){
      throw err;
    })
    .on('response',function(response){
      console.log(response.statusCode);
    })
    .pipe(fs.createWriteStream(filePath));

}

getRepoContributors("fuck", "your mom", function(err, result){
  if (err) {
    console.log('Errors:', err);
  } else {
    console.log('Results:');
    userNamesAndAvatarURLs = []; //****************************************
    result.forEach(function(user){
      info = {}
      info.avatarURL = user.avatar_url
      info.userName = user.login
      userNamesAndAvatarURLs.push(info);
    })
    console.log(userNamesAndAvatarURLs)
  }
  // console.log(result[0].avatar_url)
})

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "./avatars/kvirani.jpg");
