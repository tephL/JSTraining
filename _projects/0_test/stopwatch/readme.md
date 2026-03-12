#### STOPWATCH - a simple js + html web app for running and seeing how much time you've spent on an activity you're doing. :D


### User Flow

1. Click Start - runs the stopwatch from 0 seconds
2. Idle Time   - the time increases as time goes on
3. Click Stop  - stops the timer and freezes the displayed time, and now shows the time interval from the clicking of the start button
4. End         - the user have the power to  either run it again by clicking the start button or finish their stopwatch session by exiting the webpage 


### Technical Flow

1. start() 
    - executed by the html's button triggers inrcement_interval which triggers the stopwatch().

2. stopwatch() 
    - upon initial execution it creates the start_time variable that will remain in a stuck state, because it will be referenced for the repeating checks of the curr_ms (current time in ms) in addSecond() to get their distance from each other.
    - calling returns the nested addSecond() or the closure so that it become accessible to the outside scope, which encapsulates the start_time property.

3. calculation
    - the millisecond (ms) of both the curr_ms and start_time are subtracted, which then results into their distance in ms (time_distance).

4. formatting
    - the time_distance variable is then given as an argument to a new Date() object so that its display could start from the time of Unix epoch (starting from epoch + time_distance in ms) instead of it being pure milliseconds
    - each parts of the final time_distance Date object are now exracted with Date's get methods, toString() for conversion, and padStart() for visual neatness.
        - one unqiue get is used which is .getUTCHours(). This was used to make the display the hour as 00, instead of the default one (08) 

5. HTML Modification
    - the result is then concatenated into one neat value and is passed to HTML through .textContent

6. Loop until Stop
    - this process goes on until thee user clicks the stop button which executes the stop() and clearInterval() for the global variable of the interval loop which halts the process

## This is genuinely a relatively easy now that i think about it. But I swear it was quite a challenge since i only used the official js documntation and no assistance from anything else.

