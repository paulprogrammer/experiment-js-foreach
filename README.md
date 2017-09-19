# experiment-js-foreach
small experiment with javascript foreach routine in node.
Shows what to expect when trying a forEach() on an array vs. an object read from a yaml file.
# Usage
```
npm install
```
installs dependencies
```
node expariment.js
```
runs the expariment
# Expected Output
The expariment reads `the.yaml` file, which has an object and an array.  Both the object and the array are run through `forEach()` so the result can be observed.  We should expect to see the following:
```
╰─➤  node expariment.js
the parsed object
{ top: { obj: { foo: 'bar', baz: 'quux' }, arr: [ 'bar', 'quux' ] } }
[ 'bar', 'quux' ]
{ foo: 'bar', baz: 'quux' }
foreach() on array type
bar
quux
foreach() on object type
=== error in foreach() object
TypeError: ob.forEach is not a function
    at /Users/williamspaul/PROJ/experiment-js-foreach/expariment.js:30:6
    at tryToString (fs.js:457:3)
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:444:12)
```
which shows how the object is read and encoded, then the successful foreach on an array, followed by the error found when running forEach on the object type.