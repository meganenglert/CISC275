# CISC275 Portfolio
Megan Englert, menglert@udel.edu

[GitHub Repo Here!](https://github.com/meganenglert/CISC275)

## Installed VSCode, Node, and Typescript
I used [this tutorial](https://neu-se.github.io/CS4530-CS5500-Spring-2021/tutorials/week1-getting-started) to get it done. I also followed their instructions to make my first little [TypeScript program](https://github.com/meganenglert/CISC275/blob/master/hello-world.ts)!

*Reflection*: Other than a setting I had to change to be able to use TypeScript, this whole installation process went very smoothly. I really like VSCode! It's really intuitive in my opinion.

*Skills Practiced*: Visual Studio Code, TypeScript

## Added a kanban board to my portfolio repository

I was poking around on all of the tabs for my repository on GitHub and came across the `Projects` tab. I will use [this kanban board on my portfolio repository](https://github.com/meganenglert/CISC275/projects/1) to keep track of my TODOs. 

*Reflection*: This seems like a great built-in tool, especially for working in groups. It's really nice that it's within GitHub, rather than trying to have multiple websites to track.

*Skills Practiced*: Git

## Made my first website - "HTML Notes"

I found [html.com](https://html.com/) through Google and saw that they had a great page on some basic definitions and tags. My uncreative mind defaulted to using a [new HTML website](https://meganenglert.github.io/CISC275/first-website) to take notes on... HTML. I included an unordered list, a definition list, anchor tags, an image (a terrible picture of my guinea pig), a table, and some other tags that apply to text.

*Reflection*: Honestly, HTML is way easier than I thought it would be. It was a bit overwhelming to see all the tags used in class, especially with their different attributes, but I actually had the time to digest how the tags work. In writing this reflection, I also found it way easier to talk about my experience now that I know the "tag"/"attribute" terminology. It also took me a bit to figure out where the link to the webpage would actually be in GitHub Pages, so I learned a bit about that too!

*Skills Practiced*: Basics of the Web - HTML, Deploying with GitHub Pages

## Codecademy HTML Tutorial

![HTML Tutorial Badge](HTMLcomplete.png "HTML Tutorial Badge")

This tutorial took much longer than I expected it to, but I think it was incredibly helpful in getting me more advanced in HTML.

Some of the new topics taught in this course that were not in the html.com instructions I used before included:

- How to logically divide my document into a `head`, `body`, and different `div`s.
- More complex table options, including the `thead` and `tbody` tags to keep things organized and easier control style, `rowspan` and `colspan` to merge cells together, and `th` to add headings to rows and columns.
- How to use forms to get input from the user! This one is especially helpful for the website I'd like to make (see next portfolio item).

Overall, I really enjoyed this tutorial because it taught conventions and style in addition to what will make the code compile. Coding with good organization in HTML not only helps your collaborators working on the backend, but, as this tutorial taught, it also adds to the accessbility of the final product. It's really interesting how there are some tags that aren't really visible on the resulting page but have such a big effect on those who need screenreaders.

## Codecademy CSS Tutorial

I'm currently about a third of the way through this tutorial. HTML took a bit longer than expected but was really helpful, and so far, CSS is really great too!

## WhatNow - the meat of this portfolio (hopefully)

This week, I was aggressively scouring the internet to find task management/organization software with all of the functionalities I wanted, when I realized I could probably make it myself. 

I wrote a detailed explanation of the purpose and planned features for this web app in markdown just to get all of my ideas on paper, and you can find that on [the GitHub pages link](https://meganenglert.github.io/WhatNow/) for my [WhatNow repository](https://github.com/meganenglert/WhatNow).

For the sake of this portfolio, here is a summary of the planned features:
- Basic features
    - User interface to add a task and assign its priority
    - Button to randomly select a task, weighted by priority
    - Checkbox to complete a task
- Reach features
    - Database storage to allow for restarting the page without losing everything
    - Custom user tag system for filtering tasks
    - Time field for each task that can be used for filtering or viewing the estimated time needed to complete all tasks in a tag

In its current state, [the main WhatNow page](https://meganenglert.github.io/WhatNow/) has the following:
- Embedded audio!
    - WARNING: It autoplays. At least it theoretically should. 
    - It's from my favorite game ever, Rhythm Heaven Fever for Wii.
- Form structure with several input fields
    - Currently not actually connected to anything
- Stylesheet is in progress! 
    - I was literally learning CSS as I was going here, so I was mostly messing around with different tags to attempt to make something decent looking.
    - There are still a few things I'm trying to figure out, like getting the label for my embedded audio to be nicely aligned.
- Buttons link to my Portfolio and back to my Bus Ride Changelog of Chaos.
    - I have made almost all of my progress on this HTML file on a 5 hour round trip bus ride to and from Selbyville, DE. I did not have internet and then obviously could not make commits. So instead, I made the [Bus Ride Changelog](https://meganenglert.github.io/WhatNow/changelog) to document my progress.


## Big important note for Milestone 2 (please read me)
NOTE: The UD School of Music is taking a required trip for all of its ensembles today, 9/16. We will be gone from 10am until roughly midnight. I plan to work on the bus but I may not have internet access to push. I will keep a running list of pseudo commit messages on the page. As soon as we get home, I will be pushing these changes, but it may be a bit after midnight. Please still consider these changes to be a part of this week's milestone.

## First attempt at React
My first attempt at React went ... poorly. I wanted to try half-following Dr. Bart's tutorial while half doing my own thing, and it ended up breaking. I was also extremely tired while working on it so. That did not help the coherence of this project. 
[See my horrically failed React attempt here!](https://github.com/meganenglert/CISC275/tree/master/myfirstreact)

## TA Trainer! but make it... Jeopardy!

After visiting Dr. Bart's office hours, I finally figured out what React even *was*, so I sat down and started from scratch, recreating his work with some of my own additions along the way. 

I wanted to find a cool dataset of my own to put into the card prompt/reveal format, and I came across a [dataset with Jeopardy questions](https://www.reddit.com/r/datasets/comments/1uyd0t/200000_jeopardy_questions_in_a_json_file/). For my purposes, the data needed a bit of cleaning - mainly converting question point values into numbers - so I used my super cool Python Pandas skills to clean it up, take only a chunk of questions, and export it as a CSV, which I then converted to JSON online. [You can see my exported Jupyter Notebook with my Pandas work here!](https://meganenglert.github.io/CISC275/jeopardy_data_manipulation)

After probably 6 hours of just trying to get through the video while actually understanding everything, I had implemented all the features shown off in the video. I also added an option to record the Category title of custom questions. Within the next week, I'd like to add these features:
- Scoreboard with editable points for each team
- Better question display styling - maybe attempt to make it look like actually Jeopardy question cards?
- Random question selection by round - only round1 cards appear in round1, round2 in round2, etc.
- Wagering system for final Jeopardy

I tried and failed to deploy it with GitHub pages, so that's something I'm adding to the docket for next week. I tried to use [the page linked on Canvas](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f), but some funky things happened that I did not have the time to deal with for this milestone. [View my repository here!](https://github.com/meganenglert/ta-trainer-practice)



# Change Log
## Milestone 1:
- Installed VS Code, Node, and TypeScript
- Added a kanban board to my portfolio repository
- Made my first website with HTML, called "HTML Notes"

## Milestone 2:
- Completed Codecademy HTML Tutorial
- Began Codecademy CSS Tutorial - about 1/3 completed
- Brainstormed features for WhatNow, my plan for a web app
- Created some basic HTML and CSS for WhatNow homepage, including a form to add tasks, working buttons, and a changelog.

## Milestone 3: 
- Tried (and failed) React for the first time
- Followed along with Dr. Bart's TA trainer tutorial, switching out the CSV for Jeopardy questions
- Attempted to branch repository and deploy React app to GitHub pages (a fail)

# TODO
## Milestone 1:
- Try making some CSS changes on my HTML Notes website, including font color changes, background color changes, etc.
- Learn how to make branches using Git (and what branches actually are). I might use this feature to modify my website.
- Create a new website showcasing some cool features of BootStrap

## Milestone 2:
First off, I know that I am a bit behind right now. I've had some trouble getting settled this semester, but I am finally getting in the groove.

I really enjoyed the Codecademy HTML tutorial, and they have lots of free web dev tutorials, so I'll be focusing attention on those:
- Complete [Codecademy CSS tutorial](https://www.codecademy.com/learn/learn-css)
- Complete [Codecademy TypeScript tutorial](https://www.codecademy.com/learn/learn-typescript)
- Maybe not the whole thing since it's very long, but familarize myself with React using [Codecademy's tutorial](https://www.codecademy.com/learn/react-101)
- [Codecademy Bootstrap tutorial](https://www.codecademy.com/learn/learn-bootstrap)

Here are things related to my web app!
- Learn to use Git branches to add new features while still showing how the website progressed
- Using what I learned from the tutorial above, write some TypeScript to handle some of the more complex processes, such as selecting a random task and maintaining a list of all tasks
- Using what I learned from the tutorial above, begin to look for some Bootstrap features to add to simplify my code and help the aesthetics of the page

## Milestone 3:
- Debug deploying React apps on GitHub pages, get Jeopardy up on its own page
- Add previously described features to Jeopardy: scoreboard, question styling, round filtering, and wagering system
- Fork my Jeopardy repository and begin to modify it with some features not shown in Dr. Bart's video - such as drop down menus and more Bootstrap elements
- Improve my skills with unit testing using the completed TA trainer repository that Dr. Bart provided - aim for 100% code coverage

