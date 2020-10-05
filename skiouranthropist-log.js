/* Unsurprisingly, an introductory text written by a programmer
is pretty poorly written. And I'll be damned if they didn't 
present the information in a non-intuitive order as well.
This is my attempt to clean this up and make it legible for someone who  has spent a lot of time reading prose
not programming*/

/* So, in the quest to determine our subject's Skiouranthropy, 
there are several tasks to accomplish.
Briefly, we need

1) To record data to work with,
2) A method to access that data,
3) A method to calculate correlations,
4) To apply that method to the data,
5) And finally analyse the results
So let's get started shall we?*/

/*
Task #1: Recording the data

This would be the variable and the function used to log entries
into the journal. Note: we aren't going to use this function in this example;
the subject has already done this for us. */

let journal = [];

function addEntry(events, squirrel) {
    journal.push({ events, squirrel });
}

// After three months, the data:

let JOURNAL = [
    { events: ["carrot", "exercise", "weekend"], squirrel: false },
    {
        events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
        squirrel: false,
    },
    {
        events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
        squirrel: false,
    },
    {
        events: [
            "brussel sprouts",
            "ice cream",
            "brushed teeth",
            "computer",
            "weekend",
        ],
        squirrel: false,
    },
    {
        events: [
            "potatoes",
            "candy",
            "brushed teeth",
            "exercise",
            "weekend",
            "dentist",
        ],
        squirrel: false,
    },
    {
        events: [
            "brussel sprouts",
            "pudding",
            "brushed teeth",
            "running",
            "weekend",
        ],
        squirrel: false,
    },
    {
        events: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
        squirrel: false,
    },
    {
        events: ["bread", "beer", "brushed teeth", "cycling", "work"],
        squirrel: false,
    },
    { events: ["cauliflower", "brushed teeth", "work"], squirrel: false },
    { events: ["pizza", "brushed teeth", "cycling", "work"], squirrel: false },
    { events: ["lasagna", "nachos", "brushed teeth", "work"], squirrel: false },
    { events: ["brushed teeth", "weekend", "touched tree"], squirrel: false },
    {
        events: ["lettuce", "brushed teeth", "television", "weekend"],
        squirrel: false,
    },
    { events: ["spaghetti", "brushed teeth", "work"], squirrel: false },
    { events: ["brushed teeth", "computer", "work"], squirrel: false },
    { events: ["lettuce", "nachos", "brushed teeth", "work"], squirrel: false },
    { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["brushed teeth", "work"], squirrel: false },
    { events: ["cauliflower", "reading", "weekend"], squirrel: false },
    { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
    { events: ["lasagna", "brushed teeth", "exercise", "work"], squirrel: false },
    {
        events: ["spaghetti", "brushed teeth", "reading", "work"],
        squirrel: false,
    },
    {
        events: ["carrot", "ice cream", "brushed teeth", "television", "work"],
        squirrel: false,
    },
    { events: ["spaghetti", "nachos", "work"], squirrel: false },
    {
        events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
        squirrel: false,
    },
    { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },
    {
        events: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
        squirrel: false,
    },
    {
        events: ["potatoes", "ice cream", "brushed teeth", "work"],
        squirrel: false,
    },
    { events: ["peanuts", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["potatoes", "exercise", "work"], squirrel: false },
    { events: ["pizza", "ice cream", "computer", "work"], squirrel: false },
    { events: ["lasagna", "ice cream", "work"], squirrel: false },
    { events: ["cauliflower", "candy", "reading", "weekend"], squirrel: false },
    {
        events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
        squirrel: false,
    },
    { events: ["potatoes", "brushed teeth", "work"], squirrel: false },
    { events: ["carrot", "work"], squirrel: false },
    { events: ["pizza", "beer", "work", "dentist"], squirrel: false },
    { events: ["lasagna", "pudding", "cycling", "work"], squirrel: false },
    {
        events: ["spaghetti", "brushed teeth", "reading", "work"],
        squirrel: false,
    },
    {
        events: ["spaghetti", "pudding", "television", "weekend"],
        squirrel: false,
    },
    {
        events: ["bread", "brushed teeth", "exercise", "weekend"],
        squirrel: false,
    },
    { events: ["lasagna", "peanuts", "work"], squirrel: true },
    { events: ["pizza", "work"], squirrel: false },
    { events: ["potatoes", "exercise", "work"], squirrel: false },
    { events: ["brushed teeth", "exercise", "work"], squirrel: false },
    {
        events: ["spaghetti", "brushed teeth", "television", "work"],
        squirrel: false,
    },
    { events: ["pizza", "cycling", "weekend"], squirrel: false },
    { events: ["carrot", "brushed teeth", "weekend"], squirrel: false },
    { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
    { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
    {
        events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
        squirrel: false,
    },
    { events: ["potatoes", "peanuts", "brushed teeth", "work"], squirrel: false },
    {
        events: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
        squirrel: false,
    },
    {
        events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
        squirrel: false,
    },
    {
        events: ["lasagna", "brushed teeth", "cycling", "weekend"],
        squirrel: false,
    },
    {
        events: [
            "cauliflower",
            "peanuts",
            "brushed teeth",
            "computer",
            "work",
            "touched tree",
        ],
        squirrel: false,
    },
    {
        events: ["lettuce", "brushed teeth", "television", "work"],
        squirrel: false,
    },
    {
        events: ["potatoes", "brushed teeth", "computer", "work"],
        squirrel: false,
    },
    { events: ["bread", "candy", "work"], squirrel: false },
    { events: ["potatoes", "nachos", "work"], squirrel: false },
    {
        events: ["carrot", "pudding", "brushed teeth", "weekend"],
        squirrel: false,
    },
    {
        events: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
        squirrel: false,
    },
    { events: ["brussel sprouts", "running", "work"], squirrel: false },
    { events: ["brushed teeth", "work"], squirrel: false },
    { events: ["lettuce", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["candy", "brushed teeth", "work"], squirrel: false },
    {
        events: ["brussel sprouts", "brushed teeth", "computer", "work"],
        squirrel: false,
    },
    { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
    { events: ["cauliflower", "brushed teeth", "weekend"], squirrel: false },
    {
        events: ["spaghetti", "candy", "television", "work", "touched tree"],
        squirrel: false,
    },
    { events: ["carrot", "pudding", "brushed teeth", "work"], squirrel: false },
    { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
    {
        events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
        squirrel: false,
    },
    { events: ["pizza", "brushed teeth", "work"], squirrel: false },
    { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
    {
        events: ["bread", "beer", "computer", "weekend", "touched tree"],
        squirrel: false,
    },
    { events: ["brushed teeth", "running", "work"], squirrel: false },
    {
        events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
        squirrel: false,
    },
    {
        events: ["lasagna", "brushed teeth", "television", "work"],
        squirrel: false,
    },
    {
        events: ["cauliflower", "brushed teeth", "running", "work"],
        squirrel: false,
    },
    { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["carrot", "reading", "weekend"], squirrel: false },
    { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
    { events: ["potatoes", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["lasagna", "ice cream", "work", "touched tree"], squirrel: false },
    {
        events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
        squirrel: false,
    },
    { events: ["pizza", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
    {
        events: ["bread", "brushed teeth", "television", "weekend"],
        squirrel: false,
    },
    {
        events: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
        squirrel: false,
    },
];

// This makes sure the data is exported in node.js —
// `require('./path/to/journal.js')` will get you the array.
// Ignore this for now; I'll return to this when I learn node.js.
if (
    typeof module != "undefined" &&
    module.exports &&
    (typeof window == "undefined" || window.exports != exports)
)
    module.exports = JOURNAL;
if (typeof global != "undefined" && !global.JOURNAL) global.JOURNAL = JOURNAL;

/* Please note the object keys & values and the nested arrays 
this will help A LOT in what you're about to read.
For the purpose of the following functions:
an EVENT is a value inside an array that is the value of the key: events in the objects contained in the single value array of journal.

e.g. JOURNAL = [...{
        events: [..."peanuts",...],
        squirrel: false,
    },...]

On this day, our subject recorded in the journal eating peanuts. "peanuts" is the event. 
    */

/*Task #2: Accessing the data

Now that we've got the data, we need a way to access it 
and it would help if we could organize it as well.
What we really need is a list of all the events,
that way we have variables to enter into our calculations later.

So let's go ahead and write a function that does just that.
To do so we need to create a function that dives down into
The array assigned to JOURNAL
The objects inside that array
The key of 'events' inside each object and
The value paired to 'events'
Which is an array containing the values we need
That's a DEEP DIVE so let's take it a step at a time*/

function journalEvents(journal) {
    // setting an empty var array to put the events in
    let events = [];
    // assigning var 'entry' to each journal obj
    for (let entry of journal) {
        // assigning var 'event' to each 'entry' w/ the key of events
        for (let event of entry.events) {
            // conditional to prevent duplicates: if the array events we just created does NOT include the target event
            if (!events.includes(event)) {
                // then we push that event into the array
                events.push(event);
            }
        }
    }
    // and return it with all of the event values
    return events;
}

journalEvents(JOURNAL); //returns below

/*
[
  'carrot',       'exercise',
  'weekend',      'bread',
  'pudding',      'brushed teeth',
  'touched tree', 'nachos',
  'cycling',      'brussel sprouts',
  'ice cream',    'computer',
  'potatoes',     'candy',
  'dentist',      'running',
  'pizza',        'work',
  'beer',         'cauliflower',
  'lasagna',      'lettuce',
  'television',   'spaghetti',
  'reading',      'peanuts'
]
*/

/* Alright, so we have the list. Now what? Well, the data still
 isn't organized in a way that's helpful. Remember, the 
 objective is to determine the correlation between specific events
 and whether or not our subject transformed into a mouse.
 How might we do that? Let's think: there have to be four variables.

 Using 'peanuts' as an example:
 1) The subject did not eat peanuts and did not turn into a squirrel that night. Let's call this (false, false) 
 2) The subject ate peanuts and did not turn into a squirrel that night. Let's call this (true, false)
 3) The subject did not eat peanuts and turned into a squirrel that night
 Let's call this (false, true)
 4) The subject ate peanuts and turned into a squirrel that night 
 Let's call this (true, true)

 Since we're going to be counting the number of occurences for each of these variable,
 they'll be represented numerically. What's good for ordering numeric values?
 Arrays! You bet! In order to be non-arbitrary, we'll transcribe the index value of the array in binary thus:

(true, true) => 11 = 3;
(true, false) => 10 = 2;
(false, true) => 01 =  1;
(false, false) => 00 = 0;

Now we're getting somewhere! 
Let's create a function that extracts a specific event from the journal
and creates an array based on the index-values above.
Okay, one step at a time*/

//1) create a function that takes an EVENT and the journal as parameters
function arrayFor(event, journal) {
    //2) stages an array
    let array = [0, 0, 0, 0];
    // 3) loops over every entry i.e. OBJECT in the journal
    for (let i = 0; i < journal.length; i++) {
        // 4) Defines what an entry is and
        // 5) Assigns each entry object an appropriate index while

        let entry = journal[i],
            index = 0; //default(false, false)

        // 6) Evaluating if the entry object contains the event as a value under the key events using methods includes()
        if (entry.events.includes(event)) index += 1; //(false, true)

        // 7)Evaluating if the entry key squirrel is true
        if (entry.squirrel) index += 2; //if prev true (true, true) i.e. 3 : (true, false) i.e. 2

        // 8)And moving on to the next entry object
        array[index] += 1;
    }
    // 9)Before returning the completed array
    return array;
}

console.log(arrayFor("peanuts", JOURNAL)); //[77, 8, 0, 5]

/*
HOT PEANUTS!
(squirrel transformation, ate peanuts)

(true, true) => 3 = 5;
(true, false) => 2 = 0;
(false, true) => 1 =  8;
(false, false) => 0 = 77;

*/

/*Task #3: Calculating Correlation

So now we've got a list of events to draw from,
and a way to meaningfully represent the data numerically.
We're set to begin calculations. Mind you, I'm no statistician, but I do know a few things. 
First, correlation is a measure of dependence between statistical variables.
Secondly, correlation between variables is usually expressed as a value that ranges from -1 to 1. 
Zero correlation means the variables are not related. 
A correlation of one indicates that the two are perfectly related. 
Negative one also means that the variables are perfectly related but that they are opposites—when one is true, the other is false.
Finally, to calculate the measure of correlation between two variables, we can use the phi coefficient (ϕ).

phi coefficient = ((true, true) * (false, false)) - ((true, false) * (false, true))/
sqrt of((true, -) * (false, -) * (-, true) * (-, false))

For the event 'peanuts', the calculation would be this:

phi coefficient = ((5) * (77)) - ((0) * (8))/
sqrt of((5) * (85) * (13) * (77))

So what we need now is to translate this calculation into a function.
This should be relatively straightforward as long as we keep our
array index-values and what they represent in terms of true/false in mind
*/

function phi(arr) {
    return (
        (arr[3] * arr[0] - arr[2] * arr[1]) /
        Math.sqrt(
            (arr[3] + arr[2]) *
            (arr[1] + arr[0]) *
            (arr[3] + arr[1]) *
            (arr[2] + arr[0])
        )
    );
}

/*Task #4: Application

Now we just need to plug the 'peanut' array into the function and
viola!
*/

phi([77, 8, 0, 5]); //0.59026798116852

/*
But hold on! We're not done yet! What about all those other events?
They're important too! We've got to get to the bottom of the subject's
bizarre transformations. Looks like it's time for another function.
This one needs to:
1) Loop over every event item in the events array
2) Return it to a function that constructs a numerical array
3) And return that array to a function that calculates the phi coefficient 

Fortunately for us, JavaScript is pretty flexible about where we
input our functions. For example, we can use them as variables
in loops and even pass them as parameters in other functions.
So let's take full advantage of this functionality  
*/
// since journalEvents(JOURNAL) evaluates to an array, lets use it as such in this for of loop
for (let event of journalEvents(JOURNAL)) {
    // and since arrayFor creates the array needed for phi we'll pass it as its parameter
    console.log(event + ":", phi(arrayFor(event, JOURNAL)));
}

/*
carrot: 0.014097096860865023
exercise: 0.06859943405700354
weekend: 0.13719886811400708
bread: -0.07575540190785703
pudding: -0.06482037235521644
brushed teeth: -0.3805211953235953
touched tree: -0.08084520834544433
nachos: -0.07043451251197408
cycling: -0.08084520834544433
brussel sprouts: -0.05230657809659414
ice cream: -0.08084520834544433
computer: 0.06859943405700354
potatoes: -0.08574929257125442
candy: 0.12964074471043288
dentist: -0.036563621206356534
running: -0.09050203323329065
pizza: 0.06859943405700354
work: -0.13719886811400708
beer: -0.05230657809659414
cauliflower: -0.08084520834544433
lasagna: 0.08084520834544433
lettuce: -0.07043451251197408
television: -0.08084520834544433
spaghetti: 0.242535625036333
reading: 0.11068280537595927
peanuts: 0.59026798116852
*/

/*Task #5: Analysis

Hmm, these are some interesting results but again:
the duty to our subject is to identify the source of his affliction.
We're closer now, but nothing conclusive just yet.
So let's narrow the range of our search with a conditional
that filters for greater than 0.1 or less than -0.1
*/

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(arrayFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}

/*
weekend: 0.13719886811400708
brushed teeth: -0.3805211953235953
candy: 0.12964074471043288
work: -0.13719886811400708
spaghetti: 0.242535625036333
reading: 0.11068280537595927
peanuts: 0.59026798116852
*/

/* Wow. Okay. It's not looking so good for peanuts,
and a lot better for brushing teeth. Let's see what happened
 on the days our subject ate peanuts and did not brush their teeth.
 To do this, we'll push a new value into each entry
 that obtains these conditions*/

for (let entry of JOURNAL) {
    if (
        entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")
    ) {
        entry.events.push("peanut breath");
    }
}

// And now, calculating the correlation
console.log(phi(arrayFor("peanut breath", JOURNAL)));
// 1...

/*
By Jove! We've done it! Get our subject a toothbrush, stat!
And tell them to stay clear of peanuts if they wish to remain cured!!!
*/