# etch-a-sketch


- [Jana's Etch-A-Sketch Version 0.2](https://janaiscoding.github.io/etch-a-sketch/)

<h1> PATCH NOTES </h1>


<h3> Version 0.1 - 12/11/22</h3>

- Released the first version of the project. Currently Desktop-only mode.
- You can now select Canvas Size, Default Color mode, Rainbow Mode, Eraser. 


<h3>Version 0.2 - 12/11/22</h3>

- Added Color Picker Selection for more drawing possibilities!
- Adjusted styling in the Header/Footer sections.
- Fixed a regex validation bug when user canceled the Change Size prompt. 

<h3>Version 0.3 - 20/11/22</h3>

- Added the size slider as an option, along with the alert popup. (which can be fully removed soon) 
- Updated margins for more space around the canvas.


</br>
</br>
</br>
<h3> PROJECT DETAILS AND STEPS </h3>

https://www.theodinproject.com/lessons/foundations-etch-a-sketch

<h4> Created the repository </h4>

<h4> "Create a webpage with a 16x16 grid of square divs" </h4>

- I will be using loops for 16 x 16. 
- Now it's time to play with CSS to arrange them rows by columns. 

<h4> Set up a “hover” effect </h4>

- Added an event listener for hover in the creating elements, on hover it calls the color function.

<h4> Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. </h4>

- Made button and added onclick event in HTML. (Later moved in JS)
- Prompt for a new size, then clean the current grid and reuse the grid function with the new size from input.
- Add regex pattern for size limits and number only validation. 

<h4> BONUS POINTS HEHE </h4>

- Made buttons for each drawing mode.
- Created Rainbow style.
- Made a function for styling purposes of "Activate button" which shows which mode is selected.
- On each button click, I call the setCurrentMode function and I attribute it one of each 3 options. (Later 4)
- In changeColor function, I will check which mode is selected, and I style the background of each value.
- On load it will show which mode is activated by default and create the default canvas.
- For extra power, I'll make it draw just when mouse is clicked & hovering, not just hovering randomly.

 

