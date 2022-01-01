---
layout: post
title: "Types of Software Development"
date: 2022-01-01
share:
  - twitter
  - mastodon
---

Hi!

Today I'm writing about the different types of software development, since something I myself might benefit from writing out (I'm better at writing things out than talking about them verbally). The software world is a rapidly shifting industry, and everywhere you read, you only get a little bit of the overall picture. I can't write anything all encompassing, but I hope to be able to help paint that picture about how the industry of software development works, and who's involved in it.

### Quick Tangent on Software Development Roles
Custom and extensible software is embedded in so many industries and profession types today, so the job descriptions for "developers"  you read about aren't even necessarily fully encompassing. There are plenty of non-typical professionals who still use, and develop software in their profession.

For example:

1. A systems administrator at your school might do some software development (or "scripting" when it's more single task oriented), and I'd consider them to be developers of a sort. They automate many tasks that are generally systems related

2. An analyst can do a variety of things with knowing how different types of programs they use work (i.e. RStudio, Tableau, Excel, Epic, etc), but eventually, they might need to extend beyond the core functions of the program or medium they're working in. If that's in Excel, they'd use Microsoft's language called Visual Basic for Applications, or something more cross-platform like Python (since Excel doesn't run on Linux, and it's not fully extensible on Mac) to hook into Excel and do some custom processing on the data. 

For these roles, whether a development language works directly with the program (as is the case with Python hooking into Excel files), or they need some intermediary format to work with data, there's always a way to do it - some are just better than others. Here are some popular formats to help extend things from programs into something more custom development capable:

- Comma separated value files
- JSON (formatted files)
- SQL
- XML (like JSON but older)

The strenghths offered by analysts, administrators, and other roles who understand how everything is extensible, is being more and more realized, making companies much more efficient. 

### Types of Development

---
1. Web Design
Web designers typically work with the more creative and visual side of web applications. Whether there's logic behind the scenes or not does not concern a web designer - they focus on the HTML (Hypertext Markup), it's Styling (CSS or SCSS), and maaaaybe a little bit of JavaScript to help apply styles, and load elements into the page in a way that doesn't skew the formatting.

Technologies:
- 45% HTML
- 45% CSS/SCSS/LESS/Stylus
- 10% Javascript (?)

2. Frontend Development
Frontend developers work on the part of the product with which the user interacts. They are primarily concerned with the user interface (UI), but also extend into working with the logic. For example, they might create the layout, visual aspects, and interactive elements of a website or app. However, their role isn’t identical to that of a UI or user experience (UX) designer. They also fix bugs and make certain that the UI can run on different browsers.

They must be highly proficient in programming and work closely with the backend developers to ensure that the two aspects of the product function cohesively. 

Technologies:
- 40% HTML
- 20% CSS
- 40% Javascript
 
3. Backend Development
In contrast, a backend developer works with the part of the product users can’t see — the back end. This professional builds the infrastructure that powers the website, app, or program, focusing on functionality, integration of systems, and core logic. They will also deal with the complex, underlying structure, ensuring strong performance, scalability, and security.

As we mentioned above, the frontend and backend developers work closely together to create a final product.

Examples of Technology stacks (offered by different proprietary or free companies):
- Microsoft: C#/F#/.NET/VB
- Oracle: Java
- Python: Python2, Python3
 
These developers tend to not only work on server logic to handle requests coming in from mobile and web applications, but also for logic as it talks to the database. Databases are very heavy programs that are designed to optimally retrieve huge amounts of data from a disk, and the logic for queries is typically abstracted away to programmers.

4. Database Development
Adatabase developer is responsible for building the database, modifying and designing existing or new programs, and ensuring that they satisfy the requirements of the users whilst maintaining good performance and organization. Databases do not handle renaming as well as programming languages do, so there's a lot of design decisions that are important to maintain -- a bad name of something in a database could cause a lot of headache. Sometimes, the roles of database administrator and developer do overlap (as mentioned above), but this depends on the needs of the client or employer.

Examples of a databases that a database developer might use:

- Microsoft SQL Server (structured tables look like an Excel table of values)

| ID | Value | ExtraValue
| - | - | - |
| 1 | something | |
| 2 | 2nd something | 2nd expanded |

- PostgreSQL (unstructured tables - can nest values inside other values. Similar to JSON format)
```Hl7
# Not nested
1
 \
  something
  |
  expanded
2
 \
  2nd something
  | 
  2nd expanded

# Nested
1
 \
  something
  \
   expanded
2
 \
  2nd something
  \ 
   2nd expanded
```


Lastly, a full-stack developer might consists of a combination of all these. They typically work for smaller companies, or for smaller products within larger companies, and have had enough experience in various areas that they fill whatever niche is in most demand in a given moment. 

Advantages to being a full stack developer:

- There's less communication needed on design decisions for logic that might require development on both the front and backend, so these developers are much more agile.
- Full-stack development is often advantageous because of the need for developers to reload websites or applications so frequently. If a fullstack developer can do both front-end and back-end changes at the same time when refreshing, they technically have to load it less (though this is probably a bad reason, because you should focus on one area first)
- Full-stack developers can create their own fully scalable product or application. 

Disadvantages:

- Get pulled in a bunch of different directions
- Master of none


### Learning Tools

There's various ways to learn development, and everywhere you read is going to be talking about getting hands on with it. And it's totally true. 

When I first started, I'd watch videos fully through and see everything I could do, but then at the end of the video if I tried to reproduce it, I'd be completely lost.

So, if you're watching videos on [Youtube](https://youtube.com), or reading through Tutorials on [Tutorials Point](https://tutorialspoint.com), try to make sure you're poking around at it. If you have an interactive prompt that you can try different values and play with the logic to see how it changes, you'll remember it better. If you have the files then to reference back to later, even better. So try to do both of those things more and more over time (at the VERY beginning, this feels like a chore... I get it)

With that in mind, reading things online and replicating it on a page like that is useful, and videos are useful. 

- Tutorials tend to be more boring, but they're fantastic for references (like [w3schools](https://w3schools.com) or [Tutorials Point](https://tutorialspoint.com)). While the code for these sites tends to not always be the most up-to-date or 'best practice', they're a great place to start and familiarize yourself with some of the syntax for any particular technology, before diving into any deeper tutorial. You might have some more gaps in your knowledge, but that's okay. The reference back part is nice.

- Videos tend to be more paid content (like [CodeAcademy](https://codeacademy), [Udemy](https://udemy.com), or [PluralSight](https://pluralsight.com)). Of those, I like pluralsight the most, I think. It helps you find a good learning path. Also, there's some great youtube teachers, or people who put some content out there for free. One of my favorite is [Wes Bos](https://wesbos.com), who you can follow on Twitter to feel more connected. He's a swell guy and pretty responsive.

  - For videos, the best ones will give you a [Github](https://github.com) link to clone or download you code from, such as this [link that links to my blog you can clone](https://github.com/mochsner/mochsner.github.io). I HIGHLY RECOMMEND CREATING AN ACCOUNT ON GITHUB. On the repository, you can fork that project they gave you. Then, you can clone your project locally (or change the domain extension from `.dev` to `.com`), make your changes, commit your changes with a comment, and go back in time to see how you changed the code over time. This process is called version control, and it is a life saver when you're lost in code.

#### Running Code Locally

At some point, when you're learning to code, you're going to have to start running code locally. You can get away from this for a while, but it's best to get familiar with it earlier than later. The defacto editor for web development nowadays seems to be [VS Code](https://code.visualstudio.com/learn/) - it's free, and has a great plugin ecosystem that allows you to get great syntax highlighting, and even compilers for styling. It's great on Windows, Mac, and Linux.


#### Web Development: Chrome Dev Tools

If you're doing web development, use Chrome. I don't care what computer you have. I've been in web development for a while, and due to philosophical reasons I'm anti-google for pretty much everything nowadays (Firefox or Iceraven are my preferred approach). BUT, I use Chrome. It'll save you some headache. Firefox is slow, and Safari is glitchy. The new Edge and Brave browsers run on Chrome, so you can use those if you prefer, but Chrome Dev tools are pretty great. (Ctrl + Shift + I)

![](/assets/img/2022-01-01-15-56-53.png)