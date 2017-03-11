# gpm.js 
[![Build Status](https://travis-ci.org/gpmer/gpm.js.svg?branch=master)](https://travis-ci.org/gpmer/gpm.js)
[![Dependency](https://david-dm.org/gpmer/gpm.js.svg)](https://david-dm.org/gpmer/gpm.js)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E=6.9-blue.svg?style=flat-square)

Git Package Manager, make you manage the repository easier

## Documentation

[简体中文](https://gpmer.github.io/gpm.js/#/zh-cn/)

[English](https://gpmer.github.io/gpm.js)

## Features

- [x] support Github, Gitlab, etc
- [x] add, remove, clean, cache, list commands
- [x] score, humanize, easier to manager
- [x] plugin support, more hook, it can help you do more thing
- [ ] add repository in multi directories

## Installation
```bash
npm install @axetroy/gpm -g
```

## Requirement

- nodejs>=6.9
- npm || yarn
- Git

## Supports

- [x] Windows
- [x] Linux
- [x] MacOS

## Usage

```bash
gpm -h
# or gpmx -h

# print out

   gpm 5.4.1 - Git Package Manager, make you manage the repository easier
     
   USAGE

     gpm <command> [options] 

   COMMANDS

     add <repo>                          add a repository to gpm                                                                
     remove                              Remove a repository from registry and disk                                             
     list [key]                          Display the all repositories in registry                                               
     clean                               Clear the cache, usually is /home/axetroy/.gpm/temp                                    
     find                                Find repository by a key, You can get all about the repository info                    
     relink                              Relink the base directory and gpm registry, like Angular, trigger the $digest in manual
     config <action> [key] [value]       Config　handler, <list|get|set|delete|reset> [key] [value]                             
     runtime                             Print the program runtime, useful for submit issue                                     
     import <div>                        Import local repository into gpm registry                                              
     help <command>                      Display help for a specific command                                                    

   GLOBAL OPTIONS

     -h, --help         Display help                                      
     -V, --version      Display version                                   
     --no-color         Disable colors                                    
     --quiet            Quiet mode - only displays warn and error messages
     -v, --verbose      Verbose mode - will also output debug messages    

```

### Config

this is a default config, it will be generated in ``~/.gpm`` by default

**~/.gpm/gpm.config.json**

```json
{
  "name": "gpm",
  "base": "gpm"
}
```

- name: user name
- base: the repositories base dir, all repository will be install in this dir

### Plugin

load plugin with option ``'-p, --plugin name'``

only support ``gpm add```, more hooks are coming soon.

plugin's name should match this pattern: ``gpm-plugin-${name}``

```bash
npm install gpm-plugin-npmi -g

gpm add https://github.com/zeit/release.git --plugin npmi

# it will run 'npm install' in the dist directory
```

plugin | description
------------ | -------------
[npmi](https://github.com/gpmer/gpm-plugin-npmi) | gpm plugin for run npm install after add repository
[pub](https://github.com/gpmer/gpm-plugin-pub) | gpm plugin for Dart project, run <pub get> after add repository

## Structure

```bash
.
├── github.com
│   ├── axetroy
│   │   ├── aabbcc
│   │   ├── build-cli -> /home/axetroy/develop/build-cli
│   │   ├── commander.dart
│   │   ├── contributors-stat
│   │   ├── event-emitter.dart
│   │   ├── event-emitter.js
│   │   ├── git-url-parse
│   │   ├── gpm.dart
│   │   ├── gpm.go
│   │   ├── labrador-cli
│   │   ├── labrador-demo
│   │   ├── ng-promise -> /home/axetroy/develop/ng-promise
│   │   ├── nmr
│   │   ├── protocols
│   │   ├── songojs -> /home/axetroy/develop/songojs
│   │   ├── url-parser
│   │   ├── wechatapp-dev-tool-linux
│   │   ├── wxapp-socket
│   │   └── ymli
│   ├── chentsulin
│   │   └── electron-react-boilerplate
│   ├── electron
│   │   └── electron-quick-start -> /home/axetroy/develop/electron-quick-start
│   ├── fenivana
│   │   └── wx-mina-html-view
│   ├── geeeeeeeeek
│   │   └── electronic-wechat -> /home/axetroy/develop/electronic-wechat
│   ├── gpmer
│   │   ├── gpm.js
│   │   └── gpm.ruby
│   ├── lidong1665
│   │   └── WeiXinProject
│   ├── maichong
│   │   └── labrador-demo
│   ├── zarknight
│   │   └── wx-falls-layout
│   └── zeit
│       └── nextgram
└── xxx.net(private git server)
    ├── axetroy
    │   ├── xxx
    │   ├── xxx -> /home/axetroy/develop/xxx
    │   ├── xxx -> /home/axetroy/develop/xxx
    │   ├── xxx
    │   ├── xxx -> /home/axetroy/develop/xxx
    │   ├── xxx -> /home/axetroy/develop/xxx
    │   └── xxx
    ├── xxx
    │   └── xxx
    └── xxx
        ├── xxx -> /home/axetroy/develop/xxx
        ├── xxx -> /home/axetroy/develop/xxx
        └── xxx -> /home/axetroy/develop/xxx
```

## Example

```bash
gpm add https://github.com/zeit/release.git
gpm add https://github.com/axetroy/gpm.git
gpm add https://github.com/axetroy/ymli.git

gpm ls

# print out
github.com: 
  axetroy: 
    gpm:  /home/axetroy/gpm/github.com/axetroy/gpm
    ymli: /home/axetroy/gpm/github.com/axetroy/ymli
  zeit: 
    release: /home/axetroy/gpm/github.com/zeit/release
```

## Uninstall

```bash
npm uninstall @axetroy/gpm -g
rm -rf ~/.gpm      # all file, cache, contain in this dir
```

## Contribute

```bash
git clone https://github.com/gpmer/gpm.js.git
cd ./gpm.js
yarn
./bin/gpm
```

You can flow [Contribute Guide](https://github.com/gpmer/gpm.js/blob/master/contributing.md)

## License

The [MIT License](https://github.com/gpmer/gpm.js/blob/master/LICENSE)
