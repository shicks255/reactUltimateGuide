# React

### Why React

If we visit the dom manipulation javascript piece, there was a lot we had to do.  Instead of creating a bunch of individual button/label/text elements in HTML, we used Javascript to pull out the different text values and looped through, updating the dom as necessary.

We also setup the appropriate event handlers.

React is a way to simplify what we did with Javascript, making customizable chunks of code (referred to as components) that can be used and reused.

As indicated by the name, React components 'react' to things, automatically rerendering or redrawing themselves with the updates items.  This saves a lot of boilerplate that would be needed in order to select elements, update values, attach event handlers.

### What is React

The react library has a few fundamental principles that make up its core usage.

#### Virtual Dom

React uses something called a 'Virtual-DOM' to be very fast and performant.  At a high level, instead of making changes to the html document (DOM) directly, it stores a copy of the document tree in memory.  Any changes made via react update the virtual dom first.  React then decides what has changed in its virtual dom compared to the actual dom, and only updates the difference (a process called diffing).  This prevents a lot of unwasted dom manipulation so that react only repaints the neccesary changes.

#### Props & State

