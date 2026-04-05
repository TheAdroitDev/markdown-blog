---
title: Git Tutorial
description: This is git tutorial designed for beginners and intermediate learners to master git concepts.
slug: git-tutorial
date: 01/07/2025
author: Shivam
image: https://avatars.githubusercontent.com/u/18133?s=280&v=4
---

# A Seamless Guide To Master Git

This chapter will be about getting started with Git. We will begin by explaining some background
on version control tools, then move on to how to get Git running on your system and finally how to
get it set up to start working with. At the end of this chapter you should understand why Git is
around, why you should use it and you should be all set up to do so.

## What is "version control" and why should you care?
VCS stands for Version Control System. It is a tool that helps manage and track changes to
source code or other files over time. VCS is essential for software development and other
projects where maintaining a history of changes, collaboration, and versioning is critical

## Why do we need VCS(Version Control System)?
-  **Tracking Changes** It records changes to files over time, enabling developers to see who
changed what and when.
-  **Collaboration Multiple people** can work on the same project simultaneously without
overwriting each other's work.
-  **Version History** It keeps a history of all changes, making it easy to revert to previous
versions if needed.
- **Backup and Recovery** Acts as a backup for the project.

## A Short History of Git
**Git**, a powerful version control system, was created by Linus Torvalds in 2005 to manage the development of the Linux kernel. Before Git, Linux developers used a proprietary system called BitKeeper for version control. However, conflicts arose between the BitKeeper team and the Linux community, leading Torvalds to develop an open-source alternative.

The goal was to create a tool that was:
1. Fast
2. Distributed, allowing developers to work offline
3. Reliable, with strong support for non-linear development

Today, it's the most popular version control system, powering platforms like GitHub, GitLab, and Bitbucket, transforming how teams collaborate on code.

## What is Git?
Git is a version control system **VCS** designed to track changes in source code and
collaborate efficiently with others. It is widely used for software development due to its
speed, flexibility, and support for non-linear workflows (e.g., branching and merging).

## Install
You can **donwload** it from here 
**[install git](https://git-scm.com/downloads)**

Check git version
```bash
git --version
```
### Before we dive into the coding part of Git let u know some basic command of Linux
## Basic Linux Commands
1. To make a new folder or directory 
```bash  
mkdir <directory-name>
```
2. Remove a directory
```bash
rmdir <directory-name>
```
3. List file and directories 
```bash
ls
```
- With details: ls -l
- Including hidden files: ls -a
4. Create a new file
```bash
touch <file-name>
```
5. Change directory
```bash
cd <directory>
```
- Go to the previous directory: cd - or cd ..
- Go to the home directory: cd ~
6. Present working directory
```bash 
pwd
```
7. View file contents
```bash
cat <file-name>
```
<!-- - to view compressed files you can use git
```bash
git catfile -p 
``` -->

## Git Command (CheatSheet)

### Most Used
**95%** of the time you will find yourself writing only these commands of git.
1. Initialize a new Git repository
```bash
git init
```
2. Show the status of the working
directory
```bash
git status
```
3. Stage all changes in the current
directory
```bash
git add .
```
4. Commit staged changes with a message
```bash
git commit -m "message" 
```
5. Push commits to a remote repository
```bash
git push
```
5. View commit history
```bash
git log 
```
- for oneline
```bash /--oneline/
git log --oneline
``` 

## Advanced Git

### Some Advanced concpets of Git
#### 1. What is **.git/** Directory?
The .git directory is a hidden folder created when you initialize a Git repository using the git init command. It is the core of your Git project and contains all the necessary metadata and history for the repository

if you go into the .git (hidden folder) by running the following command
```bash
cd .git
```
![Inside Git](https://humbletoolsmith.com/img/posts/a-look-inside-the-_git-folder/Git%20Folder%20Internals.png)

- **config** is a text file that contains your git configuration for the current repo.
- **HEAD** contains the current head of the repo.
- **hooks** contain any scripts that can be run before/after git does anything.
- **objects** contains the git objects, ie the data about the files, commits etc in your repo. We will go in depth into this in this blog.
- **refs** as we previously mentioned, stores references(pointers)

#### If you want to read file in .git folder you can use cat
```bash
git cat
```
![image-screenshot](/image-3.png)
![image-screenshot](/image-5.png)
but the file is compressed so in this case, use 
```bash /d439a4edae8ac1ff3bf6cc4f78b12b80f8bc87c5/
git cat-file -p d439a4edae8ac1ff3bf6cc4f78b12b80f8bc87c5
```

### 2. Complete Git Flow
![Gitflow Diagram](https://docs.chaicode.com/_astro/gitflow.CjDHzFoj_dc900.svg)
### 3. Git diff 
```bash
git diff
```
- The git diff is an informative command that shows the differences between two commits. It is used to compare the changes made in one commit with the changes made in another commit. 
- Git consider the changed versions of same file as two different files. Then it gives names to these two files and shows the differences between them.

## 