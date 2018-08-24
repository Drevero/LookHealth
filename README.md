<p align="center">
<img src="https://raw.githubusercontent.com/Drevero/LookHealth/master/Screens/eyes.gif" width="250">
</p>
🔧 **Experimental app**
# *LookHealth*, look nice everyday

LookHealth is an experimental Cordova open source App, it fully compatible with Android and iOS.


The App is watching your head position in front of your smartphone, and give you a summary of your daily.
Thereby, you can know and discover your bad habits with your smartphone, and help yourself to correct them.

## Who it's work ?

We use the native js API of device accelerometer to obtain specific information of the Z position of the smartphone.
After some basics mathematicals operations, we store every fives seconds in local storage the stats and his interpretation. 
The App run in background, except when the phone is lock.

## Dependencies

To build your own LookHealth for each plateforms, you must install **npm** and **cordova** ( [more details](https://cordova.apache.org/docs/en/8.x/guide/cli/index.html) )
The App require two external plugins, **cordova-plugin-background-mode** and **cordova-plugin-local-notification** from the famous *Katzer*.

> $ cordova plugin add cordova-plugin-background-mode


>  $ cordova plugin add cordova-plugin-local-notification

## Screenshots

<img src="https://raw.githubusercontent.com/Drevero/LookHealth/master/Screens/GIF-Anim.gif" height="400"><img src="https://raw.githubusercontent.com/Drevero/LookHealth/master/Screens/V0_1.jpg" height="400">
