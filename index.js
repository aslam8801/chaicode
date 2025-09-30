require('dotenv').config()

const express = require('express')
const app = express();
const port = 3000;

const gitData = {
  "login": "aslam8801",
  "id": 235190780,
  "node_id": "U_kgDODgS5_A",
  "avatar_url": "https://avatars.githubusercontent.com/u/235190780?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/aslam8801",
  "html_url": "https://github.com/aslam8801",
  "followers_url": "https://api.github.com/users/aslam8801/followers",
  "following_url": "https://api.github.com/users/aslam8801/following{/other_user}",
  "gists_url": "https://api.github.com/users/aslam8801/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/aslam8801/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/aslam8801/subscriptions",
  "organizations_url": "https://api.github.com/users/aslam8801/orgs",
  "repos_url": "https://api.github.com/users/aslam8801/repos",
  "events_url": "https://api.github.com/users/aslam8801/events{/privacy}",
  "received_events_url": "https://api.github.com/users/aslam8801/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-09-29T21:16:25Z",
  "updated_at": "2025-09-29T21:16:25Z"
}
app.get("/", (req, res)=>{
    res.send("Hii, Developer, Keep hope and go all way");
})

app.get("/twitter", (req, res)=>{
    res.send("aslam@express.com")
})

app.get("/channel", (req, res) =>{
    res.send("<h1>Chai Aur code</h1>")
})

app.get("/youtube", (req, res) => {
    res.send("<a href='www.youtube.com'>youtube</a>")
})

app.get('/github', (req, res)=>{
    res.json(gitData)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Port listening at ${process.env.PORT}`);
})