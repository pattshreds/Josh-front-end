# Josh.ai restyling

This is a recreation of Josh.ai's Nano page. I'm using React as the UI, and React Spring to animate elements.
<br><br>
One large goal I have with this project is to rebuild the image zoom effect seen as you scroll from the very top of www.Josh.ai/nano. This will take the longest amount of time so I've built the rest of the application first, and will go back to the first component afterwards.
<br><br>
## To-Do
<ul>
  <li> I have the array of images setup for the scrolling zoom component, I'm going to spend time figuring out how to achieve the same effect. <br> To do this I'm planning on using a state to hold the display property of the current index of the images array to block while the non-current indexes are set to none. Then I plan to loop through the array of images and use an onwheel method to change the current index which will set the previous index to display: none, and the next index to display: block as the user scrolls creating a zoom-in effect as the user scrolls until the last index is reached at which point the application will scroll to the following components. </li>
  <li> Animate the text elements in most or all of the components. </li>
  <li> Styling tweaks, and changes to make the applicaiton my own. </li>
</ul>

