# etch-a-sketch
Project: Etch-A-Sketch from The Odin Project

- [Jana's Etch-A-Sketch Version 0.2](https://janaiscoding.github.io/etch-a-sketch/)

 - PATCH NOTES

- Version 0.1 


- Released the project! 
- You can now select Canvas Size, Default Color mode, Rainbow Mode, Eraser. 


- Version 0.2

- Added Color Picker Selection for more drawing possibilities!
- Adjusted styling in the Header/Footer sections.
- Fixed a regex validation bug when user canceled the Change Size prompt.





- PROJECT DETAILS AND STEPS

https://www.theodinproject.com/lessons/foundations-etch-a-sketch

1.Created the repository 

2."Create a webpage with a 16x16 grid of square divs":

- I will be using loops for 16 x 16. 
- Now it's time to play with CSS to arrange them rows by columns. 

3. Set up a “hover” effect 

- Added an event listener for hover in the creating elements, on hover it calls the color function.

4. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.

- Made button and added onclick event in HTML. (Later moved in JS)
- Prompt for a new size, then clean the current grid and reuse the grid function with the new size from input.
- Add regex pattern for size limits and number only validation. 

5. BONUS POINTS HEHE

- Made buttons for each drawing mode.
- Created Rainbow style.
- Made a function for styling purposes of "Activate button" which shows which mode is selected.
- On each button click, I call the setCurrentMode function and I attribute it one of each 3 options. (Later 4)
- In changeColor function, I will check which mode is selected, and I style the background of each value.
- On load it will show which mode is activated by default and create the default canvas.
- For extra power, I'll make it draw just when mouse is clicked & hovering, not just hovering randomly.

 

