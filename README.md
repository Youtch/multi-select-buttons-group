# Multi-select-buttons-group
## Abstract
This component is a multiple choice button group for Ionic, based on a custom component, which provides the user with the means to select one or more options through a button group. Each includes a wording surmounted by an icon. Icons can be taken from ionicons, or an SVG vector image file, or a raster image file.
### Features
- Multi-select-buttons-group will replace the ion-select multi-select component when you want to display the options selection on the entire screen, without any modal opened. 
Alternatively a horizontal scrolling can also be integrated as a wrapper of the component instance.
- The data of an instance is contained in an array containing an object. The state toggling of a button will result to change this data (see the examples).
### UX good practices
When you offer an huge number of choices, it is preferable to distribute them inside several component instances: in order to maintain a visual clarity. Eventually you will consider going back to an ion-select component. 

## Using
2 types of component wrapper are provided in the source code of examples :
- the buttons are flowing in the page : filling horizontal and vertical space, depending on the width of the buttons (using of the css property flex-wrap)
- the buttons are scrolling horizontally, they can overflow the screen using scrolling. (using the classes scroll-x-wrapper and scroll-x-scroller provided).
### Data interface of button
```
export class IButtonData{
	id: string ;  		// set the id attribute of the html element
	iconName: string;	// set the name property of an <ion-icon> component. WARNING: It cannot be used simultaneously with imageUrl nor svgUrl !
	svgUrl: string; 	// set the src property of an <ion-icon> component. WARNING: It cannot be used simultaneously with imageUrl nor iconName !
	imageUrl: string; 	// define the URL of an html <img> element. It cannot be used simultaneously with iconName nor svgUrl !
	label: string; 		// the caption of the button positioned after the button pictogram
	checked: boolean; 	//set button state on instance initialization
}
```

## Specifications

### Input attributes :
#### 1) Data
- CF [Data interface of button](#data-interface-of-button)
#### 2) Size
- buttonWidth:*string* = button’s width. All units are accepted.
**Percentage** is applied in function of the parent element of the component instance.
buttonHeight:*string* = button’s height. All units are accepted.
**By default** : buttons are square (ratio 1 :1)
- buttonBorderRadius:*string* = button’s border radius. Unit : px (by default : 25px)

 
#### 3) Colors and borders
- buttonForegroundColorChecked:*string* = text and icon color of **checked** buttons 
- buttonBackgroundColorChecked :*string* = background color of **checked** buttons
- buttonForegroundColorUnchecked:*string* = text and icon color of **unchecked** buttons
- buttonBackgroundColorUnchecked :*string* = background color of **unchecked** buttons
- buttonBorderColor:*string* = border stroke **color** of buttons
- buttonBorderSize:*string* = border stroke **size** of buttons
- buttonBorderStyle:*string* = border stroke **style** (solid, dashed, etc…)<BR>
NB : to not apply a border, set ‘buttonBorderColor = none’ (by default) and ‘buttonBorderStyle = none’ (by default)

#### 4)	About color priority order
**Legend : 1 = maximum override (higher priority)**
1. **Local using : HTML element’s property of a component instance**<BR>
**Purpose** : to apply an individual theme to each instance.<BR>
Component instance properties (buttonForegroundColorSelected, buttonForegroundColorUnchecked etc): 
2. **Local using : page’s stylesheet**<BR>
**Purpose** : To apply the same theme in a page.<BR>
Edit the page's stylesheet by copying the classes you want to change from src/multi-select-buttons-group/multi-select-buttons-group.scss to your page's sheet. 
3. **Global using : all the app**<BR>
**Purpose** : to apply an identical theme to all instances of the application.<BR>
Define theses variables in themes/variables.scss :<BR>
	- --msbg-foreground-checked = text and icon color of **checked** buttons
	- --msbg-background-checked = background color of **checked** buttons 
	- --msbg-foreground-unchecked = text and icon color of **unchecked** buttons 
	- --msbg-background-unchecked = background color of **unchecked** buttons
	- --msbg-border-color = border stroke **color** of buttons
	- --msbg-border-size = border stroke **size** of buttons (unit : px)
	- --msbg-border-style = border stroke **style** of buttons (= ‘solid’, ‘dashed’, etc…)
	
Use it as you like :man_cook: !