# Google Earth
Google Earth Widget for ESRI WebApp Builder 2.6


This widget opens a new window with Google Earth on the location the user clicks. 

How to configure:

The widget grabs the x,y latitude and longitude from the cursor where the user clicks in the original WebApp Builder viewer. It then opens a new tab on this location in Google Earth. You set the zoom level, tilt, and orientation in the URL parameter. I have currently rolled these into one string. It is simple. Just navigate to a view you want in Google Earth, and copy out that part of the URL after the comma and the coordinates, as in the example.  I provide it set at north in the example, but have used it successfully with various orientations and tilts. Paste into the Config field in the Setting.

Note that this also provides access to the ever-popular Google Street View, as in the lower-right of the Earth View.

Disclaimer: all code and instructions provided with no warranty or guarantee of any kind express or implied. 

