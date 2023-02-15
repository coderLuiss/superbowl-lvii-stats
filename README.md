# SWBAT 🤓

Students will be able to demonstrate an understanding of github fundamentals by cloning a github project to their own workspace, creating a new feature branch, and merging that new branch into the main branch.

# Super Bowl LVII 🏈

Super Bowl LVII averaged 113 million viewers and was one of the most exciting games in Super Bowl history. It was only the 4th time that a team came back from a 10 point defecit to win the championship game.

For this project I've cloned this repository for you that contains a command-line utility to print all of the touchdowns and field goals from Super Bowl LVII in your terminal (or console). You will run and inspect the code, then create a new branch and update the code to print the name of the winning team.  Finally, you will merge your branch back into the main one.

# Project Requirements 👷
1. Open this repo in a new **codespace** by clicking on the `< > Code` button (above) then selecting the **Codespaces** tab and clicking on `+` or **Create codespace on main** (where `main` is the name of the default branch)
2. Open the Terminal in your codespace by clicking on the **hamburger icon** at the top-left, then clicking on **View** and then **Terminal**. The terminal may already be open by default.
3. The **Explorer** (on the left side of your codespace) lists all of the project files and directories. You can also type `ls -al` into your terminal to see the file structure there as well. 
4. Execute (run) the project code by typing either of the following commands into your terminal:
```
node ./index.js
```
```
npm start
```
Both of these commands do the same thing, the `npm start` script is configured in **package.json** for your convenience.

5. Inspect the output of the program in your terminal to make sure you see the game details and not an error.
6. If the project ran successfully, create a new branch where you can make changes, by typing the following command into your terminal:
```
git checkout -b "new-feature"
```
The `-b` flag tells git to create a new branch if the branch doesn't already exist

7. Notice that in the terminal your current branch changed from **(main)** to **(new-feature)** 
8. Write as much code as needed to `index.js` to display the winning team at the end of the output. **HINT:** Create variables to track the team names and final scores, then log it to the console at the end of the program.
9. **Commit** your code to the current branch (`new-feature`) by typing the following command into your terminal:
```
git commit -a -m "added victory message"
```
10. Switch back to the `main` branch by typing the following command into your terminal:
```
git checkout "main"
```
11. Notice that in the terminal your current branch changed from **(new-feature)** to **(main)** and the code you added has disappeared (?)
12. Switch back to the `new-feature` branch by typing the following command into your terminal:
```
git checkout "new-feature"
```
13. Notice that in the terminal your current branch changed from **(main)** to **(new-feature)** and the code that you wrote is back. Your changes live on this branch. You can switch to any other branch and your code will still be on this branch when you come back. When you are done testing and working on this branch you will then merge it with the default branch which, in most cases, is called `main` but you can name it whatever you want.
14. Switch back to `main` (step 11) **then** merge the code from `new-feature` into `main` by typing the following command into your terminal:
```
git merge "new-feature"
```
15. Notice that your code now appears in your `main` branch.
16. Backup your CLI history to submit with your assignment by typing the following command into your terminal:
```
history > cli-backup.txt
```
17. Commit your cli history to the `main` branch by typing the following command into your terminal:
```
git commit -a -m "added cli history"
```
17. Take a screenshot of your codespace and submit to canvas!
18. 🎉🎉🎉

# You just learned how to:
✅ Create a codespace on GitHub

✅ Run a NodeJS project

✅ Create a new branch with git

✅ Commit new code to a branch with git

✅ Swith branches with git

✅ Merge branches with git
