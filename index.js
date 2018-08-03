fetch('https://api.github.com/repos/:your_ghname/:your_repo/commits/:sha/comments', {
  method: 'POST',
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => console.log(res));

function showForkedRepo(res){
  `<div><li><a href="#" "${res}" onclick = "showCommits(this)">Show Commits</li></a></div>`
}

function getIssues() {
}

function showIssues(json) {
  `<div><li>"${json}"</li></div>`
}

function createIssue() {
  const title = {title: "${$('#title').val()}"}
  const body = {body: "${$('#body').val()}"}
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`api.github.com/repos/${repo}/issues`, {
    method: 'post',
    title: JSON.stringify(title),
    body: JSON.stringify(body),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json =>{$("#issues").html(showIssues(json))});
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
  }).then(res => res.json()).then(json =>{$("#results").html(showForkedRepo(json))});
}

function getToken() {
  const token = 'e26ebb0f26582930c9d38ed53b7956278cf4fc11'
  return token
  //return ''
}
