const repo = 'learn-co-curriculum/javascript-fetch-lab'
const gh = 'api.github.com/repos'

function showForkedRepo(res){
  `<div><li>"${res}"</li></div>`
}

function getIssues() {
  fetch(`${gh}/${repo}/issues`)
    .then(res => res.json()).then(showIssues(json))
}

function showIssues(json) {
  return json.map(issue =>{
     $('#issues').append(`<h4>Issues</h4><a href="${json.html_url}">${json.title}</a>`);
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const issuedata = {title: title, body: body}
  fetch(`${gh}/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(issuedata)
  }).then(res => res.json()).then(getIssues())
  }

function showResults(json) {
  $('#results').append(`<h4>Forked Successfully!</h4><a href="${json.html_url}">${json.full_name}</a>`);
}

function forkRepo() {
  fetch(`${gh}/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(showResults)
}

function getToken() {
  const token = 'e26ebb0f26582930c9d38ed53b7956278cf4fc11'
  return token
}
