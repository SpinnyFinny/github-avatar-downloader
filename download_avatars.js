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
  request(requestURL, function(err,response,body){

      var info = JSON.parse(body)
      console.log(info);

    })
}

getRepoContributors('tpope', 'vim-commentary', function(err, result){
  console.log('Errors:', err);
  console.log('Results:', result);

});
