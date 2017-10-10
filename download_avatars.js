var request = require('request');

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
    }


  })
}

function downloadImageByURL(url, filePath){

  request.get(url)
    .on('error', function(err){
      throw err;
    })
    .on('response',function(response){
      console.log(response.statusCode);
    })

}

getRepoContributors("fuck", "your mom", function(err, result){
  if (err) {
    console.log('Errors:', err);
  } else {
    console.log('Results:');
    result.forEach(function(element){
      console.log(element.avatar_url);
    })
  }
  // console.log(result[0].avatar_url)
})

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg");
