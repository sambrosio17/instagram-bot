# Instagram Bot

# Index
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
npm install puppeteer
```
# Configuration File

You need to set this file ```config.json``` properly before starting

| Variable Name | Type | Meaning | status |
|---------------|------|---------|--------|
|isNewAccount|```boolean```| Set this variable ``` true ``` if it's the first time logging with an account, set ```false``` otherwise.| |
|dirName| ```string``` |Set directory name in order to avoid log-in every time. In case is the first time logging with an account specify a newly created directory. | |
|pageToGo| ```String[]```| Arrays of url destination from which retrive post to like/comment.| |
|isAccount|```boolean```| Set ```true``` if destinations passed are account, ```false``` otherwise. | deprecated |
|isPlace|```boolean```| Set ```true``` if destinations passed are places, ```false``` otherwise. | deprecated |
|isHashtag|```boolean```| Set ```true``` if destinations passed are hashtags, ```false``` otherwise. | deprecated |
|actionLike|```boolean```| Set ```true``` if the actiont to perform is Like, ```false``` otherwise. | |
|actionComment|```boolean```| Set ```true``` if the actiont to perform is Comment, ```false``` otherwise. | |
|delay|```number```| Set time between actions, need to be specified in ms. Suggested: >2000ms (2s). | |
|setLimit|```boolean```| Set ```true``` if you wanna perfom action for a limitated number of post, ```false``` otherwise. | |
|postCount|```number```| Need to be specified if ```setLimit``` is set ```true```.Set number of post on which perfom action. | |
|username|```string```| your instagram username.| |
|password|```string```| your instagram password.||

<br />

## Example

```json
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
|```v1.0.2```|``` 19 04 21 ```|

<br>

# Version History

| Current Version | Date | Update Log |
|---------------|--------|-------------|
|```v1.0.0```|``` 18 04 21 ```| First Version|
|```v1.0.1```|``` 18 04 21 ```| There's no more need to specify type of destination in ```config.json```, remove some unused dependencies|
|```v1.0.2```|``` 19 04 21 ```| Bug fix|
# About the author


<img src="https://avatars.githubusercontent.com/u/50336980?v=4">

<br>

>Hi, this is Salvatore. I'm 21 years old. I'm an italian 🇮🇹 Computer Science 💻 student but I also love watching movies🎥, traveling🛫 and listening to music🎵. I code in C, Java and also Javascript. I know how to work with databases and how to develop an android app. And so many other things but i'm lazy and I'm tired of writing this some sort of Bio. </blockquote>

<br>




[![Follow Me](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.it/salvatoreambrosio17)

[![Follow Me](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.it/sambrosio17.tech)

[![Follow Me](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Salvato11674611)




