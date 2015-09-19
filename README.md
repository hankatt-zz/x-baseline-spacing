# x-baseline-spacing
## A SASS function that negates the whitespace surrounding the x-height and baseline of a font.

The idea here is to easily specify a specific margin based on the baseline an x-height of a letter. Unfortunately this doesn't make it easy,
but it makes it easier by removing the need for measuring within the browser using OS X's screenshot tool.

####The problem: 
As of now specifying padding on an element adds it around the bounding box of the element.
This is troublesome as it disables me, as a designer, to specify spacing inbetween elements without implementing them to see their actual bounding boxes.

####The goal to solve:
As a designer I am interested in specifying this based on the x-height and baseline of a font.

####Why?
This provides more visual control as it is more inline with how we want to measure text elements;
based on visual weight rather than bounding box extremeties.

####What I propose
A function that lets you specify a desired margin on your text element,
but strip away the whitespace above the x-height of the text element you are working with,
and the whitespace below the baseline of the previous text element (if any).
```scss
@include adjusted-padding-top(30px, $current-font-size, $previous-font-size);
```
This example adds 30px inbetween two text elements,
measured from the baseline of the text element above and the x-height of the text element you are adding the spacing to.

#### Reflection
However this does not solve the actual problem which is that this is not how browsers work.
And it is in no way sustainable best practice.

The most sustainable solution would be to align how design tools and browser render text. But something more realistic would
be to use a design tool that render text using the same rendering engine as the browser.

I guess this repo is equally a reflection as it is a suggested, albeit un-sustainable, solution.
Or perhaps it is here to just highlight the issue.
