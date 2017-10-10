var request = require('request');

var GITHUB_USER = "SpinnyFinny";
var GITHUB_TOKEN = "a1f46648acf06c1c61d3085f8eacc24fbcaff27d";
var repoOwner = 'tpope';
var repoName = 'vim-commentary';
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';


function getRepoContributors(repoOwner, repoName, cb) {
  console.log(requestURL);
}

getRepoContributors('tpope', 'vim-commentary', function(err, result){
  console.log('Errors:', err);
  console.log('Results:', result);

});