---
layout: post
title: "The Pheonix Project: A Novel about IT, DevOps, and Helping Your Business Win"
date: 2019-05-21
---

Finally finished "The Pheonix Project" a little over a week ago. Although I haven't read much this year with a customer go-live in April, it was definitely the best book I've read in a while. For comparison, the other books I've read recently consist of the Martian, Ready Player One... so maybe I just needed something a bit more technology-focused...

So overall, I'd definitely recommend the book. Having read [The Goal (by Eliyahu Goldratt)](https://read.amazon.com/kp/embed?asin=B002LHRM2O&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_umm5CbV2CEJ27) in my Operations Management curricula, it was a very subtle extension into the bottlenecks of dev & IT operations, which are often more difficult to pinpoint, because time is often being wasted behind the scenes, with employees doing X task on their computers (there's little visibility into the specifics of what employees are working on). Although there are many differences between IT & manufacturing, the book makes a good point about eliminating waste through various Lean methodologies, which the primary advisor in the book highlighted via his various "principles" and "ways".

Whilst the style of the book was remarkably scripted (it was a fun read), you'll just have to read it yourself if that's what you're going for.

<iframe type="text/html" width="336" height="550" frameborder="0" allowfullscreen style="max-width:100%" src="https://read.amazon.com/kp/card?asin=B078Y98RG8&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_Mmm5CbAKTP3JS" ></iframe>

### The Three Ways (according to Erik) - For those in Development, Operations, a bit of both, or just intersted in efficiency

__THE FIRST WAY__ emphasizes the performance of the entire system, as opposed to the performance of a specific silo of work or department. This can be as large as a divsion, or as small as an individual contributor - it just depends on the perspective of the employee and their scope of influence.
    - Outcomes
      - Never pass a known defect downstream (e.g. don't merge untested code)
      - Never allow local optimzation to create global degredatiion
      - Always seek to increase flow
      - Always seek profound understanding of the system

__THE SECOND WAY__ is about creating adjacent feedback loops between departments. The goal of any process improvement initiative is to shorten and amplify feedback loops (by improving visibility and communication)
    - Outcomes
      - Understanding and responding to all customers
      - Internal and external improvement to feedback loops / communication channels
      - Embedding knowledge in the right places (e.g. Dev needs to understand how their code gets to market)

__THE THIRD WAY__  is about creating a culture that fosters (1) continual experimentation and taking risks, open to learning from failure, and (2) understanding that repetition and practice is required to attain mastery.

It was stressed that taking risks are what ensure that we keep pushing to improve, even if it means going deeper into the danger zone than we've ever gone (this lines up with the 80% rule for Site-Reliability engineering at Google). The mastery is what helps make these risks effective, and save us if things go south.

    - Outcomes
      - Allocating time for the improvement of daily work (e.g. personal work projects)
      - Creating rituals that reward the team for taking risks (e.g. trying to deploy entirely autonomously, which can be anxiety inducing for an employee in production)
      - Introducing faults into the system to increase resilience (e.g. figuring out how we could break things, to figure out how to keep them from breaking in those situations)

~ mochsner
