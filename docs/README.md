# teyvat-corner
Teyvat Corner is a wiki, and interactive map site for Genshin Impact. A hobby site under construction.

## Data Contribution Guide
The data on this site is primarily written in Markdown which is a common format on the internet, one example is Reddit which lets users
choose Markdown as the markup language to use when commenting or making new post. As such, contributors should be somewhat familiar with it to contribute.
Have a look at this [guide](https://www.markdownguide.org/basic-syntax/) to familiarise yourself if you have never used it.

The Markdown files (our data) is stored alongside the source code in `src/data/`, which is hosted on GitHub, as such you should be familiar with git and have a GitHub account. For non-developers, this would prove to be a challenge especially with git, luckily Github provides a desktop application called [Github Desktop](https://desktop.github.com/) that makes this easy. Outside of that, the general process is `Fork (this repository) -> clone (to your desktop) -> make changes (add/edit/delete files) -> committing and pushing your changes to GitHhub -> make a Pull Request to the main repository (this one)`. 

For people new to software development this might be confusing, thus please make use of Google extensively and don't be afraid to ask (there's no stupid questions).

That's pretty much it really, the learning curve will be high for people who do not have development experience which is expected, but please do not be discourage to contribute.

## RoadMap 1.1
Ideally before 1.1 patch drops we should have all of these done,

- Added all data about items, quests, characters, etc to our wiki.
- Have a functional map with markers of Waypoints, Geo/Anemo-culuses, Shrine of Depths and Domains.
- Information on the sidebar when users click on those markers (general info, comments).
- Ability to mark geoculus as found/not found and save these to a file/localstorage/cloud services (GDrive, Dropbox etc).

Other tasks,

- Mobile support.
