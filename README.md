# Advent of Code 2021

My solutions to https://adventofcode.com/

Written in plain JS.

To run: `node ./solutions/day1/part1.js`

## Learning Log

### Day 3
Today I learned the global [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) method can convert binary (and other number systems) to decimal. Really glad I didn't have to do this myself! Although, I _do_ have fond memories of writing code to perform this sort of base conversion for one or two classes when I was getting my CS degree. Maybe I'll do it again for fun sometime, just not today 😅.

I also learned that [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) can be used on strings (I've used it on a NodeList in the past).

I was reminded that VS Code will offer to auto-complete a JSDoc when you type `/**` above a function. Somewhat related to that, my desire to document a function this way makes me want to switch to Typescript. Maybe I will for future challenges.

This day felt so much harder! I definitely can't get away with the somewhat "lazy" coding style I've been using so far -- writing large portions of code and doing big refactors without verifying that it works the way I think it does. At this point, I think I would go faster if I wrote tests first. I may try that too.