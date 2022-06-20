import { Component, AfterViewInit, Input} from '@angular/core';

@Component({
  selector: 'multi-select-buttons-group',
  templateUrl: './multi-select-buttons-group.component.html',
  styleUrls: ['./multi-select-buttons-group.component.scss'],
})
export class MultiSelectButtonsGroupComponent implements AfterViewInit{ // OnInit {

  @Input() buttonsData: Array<IButtonData>;
  @Input() buttonWidth: string;
  @Input() buttonHeight: string;
  @Input() buttonBorderRadius: string;

  // About @Input instances :
  // 
  // - All @Input values ​​received can be "undefined" (if they are unused in the component instance of the template): so we apply a
  //  conditional test in the template using the Angular directives "ngStyle" or "style.<name of css property>".
  //
  // - In the template, the concatenated sentence sometimes includes the string '!important' to override a style already applied
  //  by global variable (from /themes/variables.scss)
  @Input() buttonForegroundColorChecked:string;
  @Input() buttonForegroundColorUnchecked:string;
  @Input() buttonBackgroundColorChecked:string;
  @Input() buttonBackgroundColorUnchecked:string;
  @Input() buttonBackgroundColor:string;
  
  @Input() buttonBorderColor:string;
  @Input() buttonBorderSize:string;
  @Input() buttonBorderStyle:string;
  
  constructor() {}

  ngAfterViewInit() {
    //console.log("this.buttonsData = ",this.buttonsData);
  }
  
 /**
   * [clickButtonChildElements : Artificially launch the checked / unchecked state toggle of the parent button of the clicked Dom elements (ion-icon and ion-label)]
   * @param {string} _idParentButton [description]
   * @param {Event} _event         [description]
   */
  clickButtonChildElements(_idParentButton:string, _event:Event)
  {
    // Prevent the "bubling" of the click event, which would otherwise launch clickButtonsGroupConditionsWeather. The problem: 
    //   we don't know his id !
    _event.preventDefault();
    _event.stopPropagation();
    _event.stopImmediatePropagation();

    let parentDomElement = document.getElementById(_idParentButton);
    this.toogleButtonState(parentDomElement, _idParentButton);
  }

  /**
   * [clickButton]
   * Limitation of this méthod : if the child elements of the button like ion-icon or ion-label are clicked, they trigger a 
   *   different and PRIORITY event, which prevents the triggering of this method : the clickButtonChildElements method is 
   *   made to take care of this.
   * @param {string} _eventTargerId [description]
   */
  // 
  clickButton(_eventTargerId:string){
    //console.log("clickButtonsGroupConditionsMeteo => _eventTargerId = ",_eventTargerId);
    let domElement = document.getElementById( _eventTargerId );
    this.toogleButtonState(domElement, _eventTargerId)
  }

  /**
   * [toogleButtonState The state becomes CHECKED ou UNCHECKED]
   * @param {any} _domElement         [description]
   * @param {string} _elementIdAttribute [description]
   */
  private toogleButtonState(_domElement:any, _elementIdAttribute:string)
  {
    
    const CHECKED_CLASS_NAME = "btn-checked";    // attributing the scss class name
    const UNCHECKED_CLASS_NAME= "btn-unchecked"; // attributing the scss class name
    
    //console.log("_domElement by Id",_domElement);
    //console.log(" _domElement.classList = ",_domElement.classList);

    // For each potentially affected class, switch from on to off, or vice versa
    _domElement.classList.toggle( UNCHECKED_CLASS_NAME );
    _domElement.classList.toggle( CHECKED_CLASS_NAME );
    
    let aClassesListe = _domElement.getAttribute("class").split(" ");
    if(aClassesListe.indexOf( UNCHECKED_CLASS_NAME )>=0){
      // Find array's index when id == _elementIdAttribute, to modify the "checked" state of this arrays's item
      this.buttonsData[ this.findKeyInArrayOfObject(this.buttonsData, _elementIdAttribute, "id") ].checked = false;
    }
    if(aClassesListe.indexOf(  CHECKED_CLASS_NAME )>=0){
      // Find array's index when id == _elementIdAttribute, to modify the "checked" state of this arrays's item
      this.buttonsData[ this.findKeyInArrayOfObject(this.buttonsData, _elementIdAttribute, "id") ].checked = true
    }
    // DEBUG
    //console.log('this.buttonsData = ',this.buttonsData);

  }

   /**
   * [findKeyInArrayOfObject Finds the array's index containing objects by : its property name and a search term]
   * @param  {Array<any>} _array      [description]
   * @param  {any}        _searchTerm [description]
   * @param  {string}     _property   [description]
   * @return {number}                 [description]
   */
  private findKeyInArrayOfObject(_array:Array<any>, _searchTerm:any, _property:string):number {
    for(var i = 0, len = _array.length; i < len; i++) {
        if (_array[i][_property] === _searchTerm)
          return i;
    }
    return -1;
  }

}

export class IButtonData{
  id: string ;  // set the id attribute of the html element
  iconName: string;// set the name property of an <ion-icon> component. WARNING: It cannot be used simultaneously with imageUrl nor svgUrl !
  svgUrl: string; // set the src property of an <ion-icon> component. WARNING: It cannot be used simultaneously with imageUrl nor iconName !
  imageUrl: string; // define the URL of an html <img> element. It cannot be used simultaneously with iconName nor svgUrl !
  label: string; // the caption of the button positioned after the button pictogram
  checked: boolean; //set button state on instance initialization
}
