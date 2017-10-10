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

getRepoContributors("fuck", "your mom", function(err, result){
  if (err) {
    console.log('Errors:', err);
  } else {
    // do okay shit
    console.log('Results:', result);
    result.forEach(function(element){
      console.log(element);
    })
  }
  console.log(result[0].avatar_url)
})
