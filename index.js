const repo = 'api.github.com/repos/learn-co-curriculum/javascript-fetch-lab'

function getIssues() {
  const repo = 'cdhenry/javascript-fetch-lab'
  fetch(`${repo}/issues`, {
  })
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.length; i++){
        displayIssue(new Issue(data[i]));
      }
    });
}

function showIssues(json) {
  $('#issues').append(`<h4>Issues</h4><a href="${json.html_url}">${json.title}</a>`);
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }
  fetch(`${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => res.json()).then(getIssues());
}

function showResults(json) {
  $('#results').append(`<h4>Forked Successfully!</h4><a href="${json.html_url}">${json.full_name}</a>`);
}

function forkRepo() {
  fetch(`${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(showResults);
}

function getToken() {
  const token = 'e26ebb0f26582930c9d38ed53b7956278cf4fc11'
  return token
}
