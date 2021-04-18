# Instagram Bot

# Indice
- [Summary](#summary)
- [Dependencies](#dependencies)
- [Configuration File](#configuration-file)
- [How to use](#how-to-use)
- [What's next](#what's-next)
- [Version](#version)
- [About the author](#about-the-author)
- [Version](#version)

# Summary

This is a bot for instagram, it lets you performes automated like/comment given an hashtag, place or even an account.

# Dependecies

To use this bot you need to install:

- NodeJs v6.14.11
- Puppeteer v8.0.0

```
npm install puppteer
```
# Configuration File

You need to set this file ```config.json``` properly before starting

| Variable Name | Type | Meaning |
|---------------|------|---------|
|isNewAccount|```boolean```| Set this variable ``` true ``` if it's the first time logging with an account, set ```false``` otherwise.|
|dirName| ```string``` |Set directory name in order to avoid log-in every time. In case is the first time logging with an account specify a newly created directory.
|pageToGo| ```String[]```| Arrays of url destination from which retrive post to like/comment.|
|isAccount|```boolean```| Set ```true``` if destinations passed are account, ```false``` otherwise. |
|isPlace|```boolean```| Set ```true``` if destinations passed are places, ```false``` otherwise. |
|isHashtag|```boolean```| Set ```true``` if destinations passed are hashtags, ```false``` otherwise. |
|actionLike|```boolean```| Set ```true``` if the actiont to perform is Like, ```false``` otherwise. |
|actionComment|```boolean```| Set ```true``` if the actiont to perform is Comment, ```false``` otherwise. |
|delay|```number```| Set time between actions, need to be specified in ms. Suggested: >2000ms (2s). |
|setLimit|```boolean```| Set ```true``` if you wanna perfom action for a limitated number of post, ```false``` otherwise. |
|postCount|```number```| Need to be specified if ```setLimit``` is set ```true```.Set number of post on which perfom action. |
|username|```string```| your instagram username.|
|password|```string```| your instagram password.|

<br />

## Example

```
{
    "isNewAccount":true,
    "dirName":"./newAccount",
    "pageToGo": ["https://www.instagram.com/explore/locations/270531492/italy/"],
    "isAccount":false,
    "isPlace":true,
    "isHashtag":false,
    "actionLike":true,
    "actionComment":false,
    "delay":3000,
    "comment":"",
    "setLimit":false,
    "postCount":null,
    "username": "my_username",
    "password": "my_password"


}

```
# How to use

1) Download this repo
2) Create a directory inside the repo directory
3) Open with Visual Studio Code
4) Set the ```config.json``` file properly
5) Run ```npm start``` in VsCode terminal
6) Enjoy

# What's next

Other features will be developed in the future.

### Coming up next
- Some bug fixes
- Automation of action follow
- Automation of action unfollow
- Random comment from array
- User Interface

# Version

| Current Version | Date |
|---------------|--------|
|```v1.0.0```|``` 18 04 21 ```|

<br>

# Version History

| Current Version | Date | Update Log |
|---------------|--------|-------------|
|```v1.0.0```|``` 18 04 21 ```| First Version|

# About the author

<div style="display:flex; align-items:center">
<img src="https://avatars.githubusercontent.com/u/50336980?v=4" style="border-radius:50%; width:200px; margin-right:10px">
<blockquote style="width:100%;padding:10px; height:fit-content;">Hi, this is Salvatore. I'm 21 years old. I'm an italian Computer Science student </blockquote>
</div>
