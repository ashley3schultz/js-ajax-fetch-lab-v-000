
const postData = {
  body: 'Great stuff'
};

fetch('https://api.github.com/repos/:your_ghname/:your_repo/commits/:sha/comments', {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => console.log(res));

const showForkedRepo(res){
  `<div>
  <li>
  <a href="#" 
  data-repository="${repo.name}" 
  data-owner="${repo.owner.login}" 
  onclick = "showCommits(this)">
  Show Commits
  </li>
  </a>
  </div>`
})
} 

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`api.github.com/repos/${repo}`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => results =>{$("#results").html(showRepositories(json))});
}

function getToken() {
  const token = 'e26ebb0f26582930c9d38ed53b7956278cf4fc11'
  return token
  //return ''
}
