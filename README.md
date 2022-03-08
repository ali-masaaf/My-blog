### <p align="center"> My-blog <p>
<p align="center">A minimalistic personal blog site, where everyone can share his personal thoughts, storys, or diaries...</p>

----

### Clone the project

In the project directory run this command 
```
git clone --branch  dev https://github.com/ali-masaaf/my-blog.git
```

### Run the app

In the project directory:
1. Run the json server to consume the blogs data using this command:
```
npx json-server --watch data/db.json --port 8080
```
2. Run the app in the development mode: 
```
npm start
```
3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### Contribut
 
 1. Clone dev branch from the repository:
 ```
 git clone --branch  dev https://github.com/ali-masaaf/my-blog.git
 ```
 
 2. Check out the branch related to the issue you want to contribute on:
 ```
 git checkout -b <branch name>
 ```
 
> We use a branch naming convention, you have to name your branch respecting the syntax below:
> 
> `<ref>-<name>-<issue name>` ex: `1-feat-create-gitignore-file`
 
 3. Stage your work tracked files with
 `git add <file1> <file2> <...>` or `git add *` to add all filles in one time.
 
 4. Commit your work
```
 git commit -m '<commit name>'
```

> We use also a [commit naming convension](https://www.conventionalcommits.org/en/v1.0.0/) here is the syntax:
> `<type>: <description>`
> or you can use this form with more details:
> ```
> <type>(<optional  scope>): <subject>
> <BLANK LINE>
> <optional body>
> <BLANK LINE>
> <optional  footer (s)
> ```
> Allowed Commit \<types\>:
> <html>
> <body>
> <!--StartFragment--><p dir="auto" style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.5em; font-weight: 600; line-height: 1.25; padding-bottom: 0.3em; border-bottom: 1px solid var(--color-border-muted); color: rgb(201, 209, 217); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(13, 17, 23); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"></p>
>
>Commit Type | Title | Description | Emoji
>-- | -- | -- | --
>feat | Features | A new feature | ✨
>fix | Bug Fixes | A bug Fix | 🐛
>docs | Documentation | Documentation only changes | 📚
>style | Styles | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) | 💎
>refactor | Code Refactoring | A code change that neither fixes a bug nor adds a feature | 📦
>perf | Performance Improvements | A code change that improves performance | 🚀
>test | Tests | Adding missing tests or correcting existing tests | 🚨
>build | Builds | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) | 🛠
>ci | Continuous Integrations | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) | ⚙️
>chore | Chores | Other changes that don't modify src or test files | ♻️
>revert | Reverts | Reverts a previous commit | 🗑
> <!--EndFragment-->
> </body>
> </html>
>
>
5. Push your work:
```
git push origin <branch name> : <branch name>
``` 
6. Create a pull request from My-blog github repository.

> _After that, your branch will get merged to the Dev branch with all commits and it will be deleted after approving the work._


