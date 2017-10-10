var request = require('request');


function getRepoContributors(repoOwner, repoName, cb) {

}

getRepoContributors('tpope', 'vim-commentary', function(err, result){
  console.log('Errors:', err);
  console.log('Results:', result);

});