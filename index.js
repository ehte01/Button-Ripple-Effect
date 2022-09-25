const buttonElement = document.querySelector(".btn")   // for class to get selected

// we need too add event listener to track the mouse movement over the button

buttonElement.addEventListener("mouseover",(event)=>{      // event is used to get the X,y and anything else related to mouseover
    const x=(event.pageX-buttonElement.offsetLeft);              // event.pageX give you X value bbut you need to find the value w.r.t the button position
                                            //so subtract from the position from the top of the page to where the button is located

    const y=(event.pageY-buttonElement.offsetTop);
// we need to set before element of css here but it is not part of the DOM so we need to make a variable in css
// to change the style property in css

buttonElement.style.setProperty("--xPos",x+"px");
buttonElement.style.setProperty("--yPos",y+"px");


                                        })


