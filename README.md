# Advent of Code 2021

My solutions to https://adventofcode.com/

Written in plain JS.

To run: `node ./solutions/day1/part1.js`

## Learning Log

### Day 1

Spent most of this day getting my development environment up and running and getting familiar with how Advent of Code challenges work.

### Day 2

Today I ended up focusing on the design of the code. I did a lot of refactoring to try to get it to better relfect the problem domain. I also applied the principle of "isolating the thing that changes." In this case, it was the way the submarine commands are interpretted. Used dependency injection to accomplish this.

I could have kept refactoring, but, well... it was time to call it a night. 😴

Also, this one felt like it would have been a good one for Typescript.

### Day 3

Today I learned the global [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) method can convert binary (and other number systems) to decimal. Really glad I didn't have to do this myself! Although, I _do_ have fond memories of writing code to perform this sort of base conversion for one or two classes when I was getting my CS degree. Maybe I'll do it again for fun sometime, just not today 😅.

I also learned that [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) can be used on strings (I've used it on a NodeList in the past).

I was reminded that VS Code will offer to auto-complete a JSDoc when you type `/**` above a function. Somewhat related to that, my desire to document a function this way makes me want to switch to Typescript. Maybe I will for future challenges.

This day felt so much harder! I definitely can't get away with the somewhat "lazy" coding style I've been using so far -- writing large portions of code and doing big refactors without verifying that it works the way I think it does. At this point, I think I would go faster if I wrote tests first. I may try that too.

### Day 4

I worked on this one with many distractions in between, so not sure how long it really took me...

Finally got jest configured and started by writing tests before code. I think that helped my focus on one piece at a time when writing code and it helped me not to drift from the requirements.

Not sure if TDD was a factor in this, but I was able to reuse the same classes as-is from part 1 to part 2.

Lastly, I experimented with using [private methods and variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) inside my classes, denoted by `#`.