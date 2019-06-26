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
git branch --set-upstream-to=<current-branch> <parent-branch>
```

## fetch from all branches

```
git fetch --all
```

## pull from current branch

```
git pull
```

## push and delete branch once done

```
git push origin --delete <branch-name>
```
