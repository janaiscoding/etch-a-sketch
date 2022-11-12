# etch-a-sketch
Project: Etch-A-Sketch from The Odin Project


https://www.theodinproject.com/lessons/foundations-etch-a-sketch
1.Created the repository 
2."Create a webpage with a 16x16 grid of square divs":
- I will be using loops for 16 x 16. 
- Now it's time to play with CSS to arrange them rows by columns. 
3. Set up a “hover” effect 
- Added an event listener for hover in the creating elements, on hover it calls the color function
4. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.
- Made button and added onclick event in html 
- we prompt for a new size, we clean the current grid and reuse the grid function with the new size
- Added regex pattern for size limits and number only validation. 
5. Extra rainbow & eraser
- Made buttons for default color, rainbow and eraser
- Made a function for styling purposes of "Activate button" which shows which mode is selected
- On each button click, i call the setCurrentMode function and i attribute it one of each 3 options
- In changecolor function, i will check which mode is selected, and i style the background of each value
- On load it will show which mode is activated by default
- For extra power, i'll make it draw just when mouse is also clicked, not just hovering
