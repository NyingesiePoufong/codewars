# codewars

Daily/weekly Javascript Codewars Practice and Solutions. 

I typically put the link to the problem in my solutions. 

The link to codewars is below:
https://www.codewars.com/dashboard

![codewars icon](https://i.imgur.com/2LTDqtO.png)


RC codewars
test inital commit

git status 
git add (add untracks untracked files to the git session )
git commit -m (update cloud file/respoitory; what people will actually see and updates snapshot)
git pull (bring to mac)
git push (send to cloud)

Last login: Fri Oct 11 17:37:54 on console
Resilients-MacBook-Pro-2:~ resilientcoders$
Resilients-MacBook-Pro-2:~ resilientcoders$ git status
fatal: not a git repository (or any of the parent directories): .git
Resilients-MacBook-Pro-2:~ resilientcoders$ git config user.name
Resilients-MacBook-Pro-2:~ resilientcoders$ pwd
/Users/resilientcoders
Resilients-MacBook-Pro-2:~ resilientcoders$ open .
Resilients-MacBook-Pro-2:~ resilientcoders$ cd desktop
Resilients-MacBook-Pro-2:desktop resilientcoders$ ls
Bootcamp_Patrice
Screen Shot 2019-09-12 at 11.07.59 AM.png
Screen Shot 2019-09-15 at 6.11.33 PM.png
Screen Shot 2019-09-21 at 11.54.06 PM.png
Screen Shot 2019-09-21 at 9.40.55 PM.png
Screen Shot 2019-09-21 at 9.43.00 PM.png
Screen Shot 2019-09-22 at 12.28.13 AM.png
Screen Shot 2019-10-02 at 5.31.11 PM.png
Screen Shot 2019-10-04 at 1.58.14 PM.png
practice2.zip
Resilients-MacBook-Pro-2:desktop resilientcoders$ https://github.com/NyingesiePoufong/codewars.git
-bash: https://github.com/NyingesiePoufong/codewars.git: No such file or directory
Resilients-MacBook-Pro-2:desktop resilientcoders$ git clone https://github.com/NyingesiePoufong/codewars.git
Cloning into 'codewars'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
Resilients-MacBook-Pro-2:desktop resilientcoders$ git status
fatal: not a git repository (or any of the parent directories): .git
Resilients-MacBook-Pro-2:desktop resilientcoders$ cd codewars
Resilients-MacBook-Pro-2:codewars resilientcoders$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
# This is Git's per-user configuration file.
Resilients-MacBook-Pro-2:codewars resilientcoders$ git add.
git: 'add.' is not a git command. See 'git --help'.

The most similar command is
	add
Resilients-MacBook-Pro-2:codewars resilientcoders$ git add .
Resilients-MacBook-Pro-2:codewars resilientcoders$ git commit -m "testing updates"
[master c8173c0] testing updates
 Committer: Resilient Coders <resilientcoders@Resilients-MacBook-Pro-2.local>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 8 insertions(+)
Resilients-MacBook-Pro-2:codewars resilientcoders$ git config --global --edit
Resilients-MacBook-Pro-2:codewars resilientcoders$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
Resilients-MacBook-Pro-2:codewars resilientcoders$ git push
Username for 'https://github.com': NyingesiePoufong
Password for 'https://NyingesiePoufong@github.com':
remote: Invalid username or password.
fatal: Authentication failed for 'https://github.com/NyingesiePoufong/codewars.git/'
Resilients-MacBook-Pro-2:codewars resilientcoders$ git push
Username for 'https://github.com': NyingesiePoufong
Password for 'https://NyingesiePoufong@github.com':
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 430 bytes | 430.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/NyingesiePoufong/codewars.git
   5feac6d..c8173c0  master -> master
Resilients-MacBook-Pro-2:codewars resilientcoders$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
Resilients-MacBook-Pro-2:codewars resilientcoders$ git branch
* master
Resilients-MacBook-Pro-2:codewars resilientcoders$ git log
commit c8173c037ee487f0fe84b3f83168b2b4b75f9952 (HEAD -> master, origin/master, origin/HEAD)
Author: Resilient Coders <resilientcoders@Resilients-MacBook-Pro-2.local>
Date:   Sun Oct 13 20:20:01 2019 -0400

    testing updates

commit 5feac6d27ee9f3836c1496206f3e3d9198fdbf9f
Author: NyingesiePoufong <56091487+NyingesiePoufong@users.noreply.github.com>
Date:   Sun Oct 13 20:08:28 2019 -0400

    Initial commit
Resilients-MacBook-Pro-2:codewars resilientcoders$ git push
Everything up-to-date
Resilients-MacBook-Pro-2:codewars resilientcoders$ cd ..
Resilients-MacBook-Pro-2:desktop resilientcoders$ git clone https://github.com/Resilient-Labs/slot-machine-2019-week05.git
Cloning into 'slot-machine-2019-week05'...
remote: Enumerating objects: 9, done.
remote: Total 9 (delta 0), reused 0 (delta 0), pack-reused 9
Unpacking objects: 100% (9/9), done.
Resilients-MacBook-Pro-2:desktop resilientcoders$ cd slot-machine-2019-week05/
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git branch
* master
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git checkout -b answer
Switched to a new branch 'answer'
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git status
On branch answer
nothing to commit, working tree clean
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git status
On branch answer
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	bell.png
	cherry.png
	go.png
	grape.png
	money_sign.png
	ready.jpg
	set.jpeg
	slotbox.css
	slotbox.html
	slotbox.js
	watermelon.jpg

nothing added to commit but untracked files present (use "git add" to track)
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git add .
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git commit -m "adding slotbox machine solution patrice"
[answer 068261d] adding slotbox machine solution patrice
 11 files changed, 144 insertions(+)
 create mode 100644 bell.png
 create mode 100644 cherry.png
 create mode 100644 go.png
 create mode 100644 grape.png
 create mode 100644 money_sign.png
 create mode 100644 ready.jpg
 create mode 100644 set.jpeg
 create mode 100644 slotbox.css
 create mode 100644 slotbox.html
 create mode 100644 slotbox.js
 create mode 100644 watermelon.jpg
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git status
On branch answer
nothing to commit, working tree clean
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git branch
* answer
  master
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git push
fatal: The current branch answer has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin answer

Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git push --set-upstream origin answer

remote: Permission to Resilient-Labs/slot-machine-2019-week05.git denied to NyingesiePoufong.
fatal: unable to access 'https://github.com/Resilient-Labs/slot-machine-2019-week05.git/': The requested URL returned error: 403
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git push --set-upstream origin answer
remote: Permission to Resilient-Labs/slot-machine-2019-week05.git denied to NyingesiePoufong.
fatal: unable to access 'https://github.com/Resilient-Labs/slot-machine-2019-week05.git/': The requested URL returned error: 403
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git clone https://github.com/NyingesiePoufong/slot-machine-2019-week05.git
Cloning into 'slot-machine-2019-week05'...
remote: Enumerating objects: 9, done.
remote: Total 9 (delta 0), reused 0 (delta 0), pack-reused 9
Unpacking objects: 100% (9/9), done.
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ cd ..
Resilients-MacBook-Pro-2:desktop resilientcoders$ git clone https://github.com/NyingesiePoufong/slot-machine-2019-week05.git
fatal: destination path 'slot-machine-2019-week05' already exists and is not an empty directory.
Resilients-MacBook-Pro-2:desktop resilientcoders$ https://github.com/NyingesiePoufong/slot-machine-2019-week05.git
-bash: https://github.com/NyingesiePoufong/slot-machine-2019-week05.git: No such file or directory
Resilients-MacBook-Pro-2:desktop resilientcoders$ git clone https://github.com/NyingesiePoufong/slot-machine-2019-week05.git
Cloning into 'slot-machine-2019-week05'...
remote: Enumerating objects: 9, done.
remote: Total 9 (delta 0), reused 0 (delta 0), pack-reused 9
Unpacking objects: 100% (9/9), done.
Resilients-MacBook-Pro-2:desktop resilientcoders$ cd slot-machine-2019-week05/
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git branch
* master
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git checkout -b answer
Switched to a new branch 'answer'
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git status
On branch answer
nothing to commit, working tree clean
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git status
On branch answer
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	bell.png
	cherry.png
	go.png
	grape.png
	money_sign.png
	ready.jpg
	set.jpeg
	slotbox.css
	slotbox.html
	slotbox.js
	watermelon.jpg

nothing added to commit but untracked files present (use "git add" to track)
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git add .
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git commit -m "adding slotbox machine solution patrice"
[answer 356fd9d] adding slotbox machine solution patrice
 11 files changed, 144 insertions(+)
 create mode 100644 bell.png
 create mode 100644 cherry.png
 create mode 100644 go.png
 create mode 100644 grape.png
 create mode 100644 money_sign.png
 create mode 100644 ready.jpg
 create mode 100644 set.jpeg
 create mode 100644 slotbox.css
 create mode 100644 slotbox.html
 create mode 100644 slotbox.js
 create mode 100644 watermelon.jpg
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git status
On branch answer
nothing to commit, working tree clean
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git branch
* answer
  master
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git push
fatal: The current branch answer has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin answer

Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git push --set-upstream origin answer
Enumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 8 threads
Compressing objects: 100% (13/13), done.
Writing objects: 100% (13/13), 309.87 KiB | 23.84 MiB/s, done.
Total 13 (delta 0), reused 0 (delta 0)
remote:
remote: Create a pull request for 'answer' on GitHub by visiting:
remote:      https://github.com/NyingesiePoufong/slot-machine-2019-week05/pull/new/answer
remote:
To https://github.com/NyingesiePoufong/slot-machine-2019-week05.git
 * [new branch]      answer -> answer
Branch 'answer' set up to track remote branch 'answer' from 'origin'.
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git clone https://github.com/NyingesiePoufong/todo-list-2019-week05.git
Cloning into 'todo-list-2019-week05'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 9 (delta 0), reused 0 (delta 0), pack-reused 6
Unpacking objects: 100% (9/9), done.
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ ls
README.md		grape.png		slotbox.css		watermelon.jpg
bell.png		money_sign.png		slotbox.html
cherry.png		ready.jpg		slotbox.js
go.png			set.jpeg		todo-list-2019-week05
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git status
On branch answer
Your branch is up to date with 'origin/answer'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	todo-list-2019-week05/

nothing added to commit but untracked files present (use "git add" to track)
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ git checkout .
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ cd..
-bash: cd..: command not found
Resilients-MacBook-Pro-2:slot-machine-2019-week05 resilientcoders$ cd ..
Resilients-MacBook-Pro-2:desktop resilientcoders$ git clone
fatal: You must specify a repository to clone.

usage: git clone [<options>] [--] <repo> [<dir>]

    -v, --verbose         be more verbose
    -q, --quiet           be more quiet
    --progress            force progress reporting
    -n, --no-checkout     don't create a checkout
    --bare                create a bare repository
    --mirror              create a mirror repository (implies bare)
    -l, --local           to clone from a local repository
    --no-hardlinks        don't use local hardlinks, always copy
    -s, --shared          setup as shared repository
    --recurse-submodules[=<pathspec>]
                          initialize submodules in the clone
    -j, --jobs <n>        number of submodules cloned in parallel
    --template <template-directory>
                          directory from which templates will be used
    --reference <repo>    reference repository
    --reference-if-able <repo>
                          reference repository
    --dissociate          use --reference only while cloning
    -o, --origin <name>   use <name> instead of 'origin' to track upstream
    -b, --branch <branch>
                          checkout <branch> instead of the remote's HEAD
    -u, --upload-pack <path>
                          path to git-upload-pack on the remote
    --depth <depth>       create a shallow clone of that depth
    --shallow-since <time>
                          create a shallow clone since a specific time
    --shallow-exclude <revision>
                          deepen history of shallow clone, excluding rev
    --single-branch       clone only one branch, HEAD or --branch
    --no-tags             don't clone any tags, and make later fetches not to follow them
    --shallow-submodules  any cloned submodules will be shallow
    --separate-git-dir <gitdir>
                          separate git dir from working tree
    -c, --config <key=value>
                          set config inside the new repository
    -4, --ipv4            use IPv4 addresses only
    -6, --ipv6            use IPv6 addresses only
    --filter <args>       object filtering

Resilients-MacBook-Pro-2:desktop resilientcoders$ git clone https://github.com/NyingesiePoufong/todo-list-2019-week05.git
Cloning into 'todo-list-2019-week05'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 9 (delta 0), reused 0 (delta 0), pack-reused 6
Unpacking objects: 100% (9/9), done.
Resilients-MacBook-Pro-2:desktop resilientcoders$ git branch
fatal: not a git repository (or any of the parent directories): .git
Resilients-MacBook-Pro-2:desktop resilientcoders$ cd todo-list-2019-week05/
Resilients-MacBook-Pro-2:todo-list-2019-week05 resilientcoders$ git branch
* master
Resilients-MacBook-Pro-2:todo-list-2019-week05 resilientcoders$ git checkout -b answer
Switched to a new branch 'answer'
Resilients-MacBook-Pro-2:todo-list-2019-week05 resilientcoders$ git status
On branch answer
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	todo.css
	todo.html
	todo.js
	todoTest.js

nothing added to commit but untracked files present (use "git add" to track)
Resilients-MacBook-Pro-2:todo-list-2019-week05 resilientcoders$ git add .
Resilients-MacBook-Pro-2:todo-list-2019-week05 resilientcoders$ git commit -m "adding to do list solutions patrice"
[answer cc084e5] adding to do list solutions patrice
 4 files changed, 180 insertions(+)
 create mode 100644 todo.css
 create mode 100644 todo.html
 create mode 100644 todo.js
 create mode 100644 todoTest.js
Resilients-MacBook-Pro-2:todo-list-2019-week05 resilientcoders$ git status
On branch answer
nothing to commit, working tree clean
Resilients-MacBook-Pro-2:todo-list-2019-week05 resilientcoders$ git branch
* answer
  master
Resilients-MacBook-Pro-2:todo-list-2019-week05 resilientcoders$ git push
fatal: The current branch answer has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin answer

Resilients-MacBook-Pro-2:todo-list-2019-week05 resilientcoders$ git push --set-upstream origin answer
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 2.30 KiB | 2.30 MiB/s, done.
Total 6 (delta 0), reused 0 (delta 0)
remote:
remote: Create a pull request for 'answer' on GitHub by visiting:
remote:      https://github.com/NyingesiePoufong/todo-list-2019-week05/pull/new/answer
remote:
To https://github.com/NyingesiePoufong/todo-list-2019-week05.git
 * [new branch]      answer -> answer
Branch 'answer' set up to track remote branch 'answer' from 'origin'.
Resilients-MacBook-Pro-2:todo-list-2019-week05 resilientcoders$
