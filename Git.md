# Git Cheat Sheet

## git config

```
git config --global credential.helper cache .
```

## create and checkout a new branch

```
git checkout -b <new-branch-name> origin/
```

## switch to an existing branch

```
git checkout <branch-name>
```

## set upstream to be current branch when pushing

```
git branch --set-upstream-to=<parent-branch> <current-branch> 
```

## fetch from all branches

```
git fetch --all
```

## pull from specific branch

```
git pull --<verbose/quiet> <remote-branch> <branch-name>
```

## pull from upstream

```
git pull upstream
```

## fetching a remote PR into local repo

```
git fetch origin pull/ID/head:BRANCHNAME
```

## pull from current branch

```
git pull
```

## push and delete branch once done

```
git push origin --delete <branch-name>
```

## git stash untracked files also

```
git stash -u
```
## pop last stash

```
git pop
```