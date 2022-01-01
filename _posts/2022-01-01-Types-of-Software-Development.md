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

### Types of *Stereotypical* Development

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