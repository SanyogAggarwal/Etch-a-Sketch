const rangeInput = document.getElementById("myRange");

const rangeOutput = document.getElementById("rangeOutput");

const pannel = document.querySelector('#pannel');

const buttons = document.querySelectorAll('button')

const button1 = document.querySelector('.button1')

const button2 = document.querySelector('.button2')

const button3 = document.querySelector('.button3')

const button4 = document.querySelector('.button4')

const button5 = document.querySelector('.button5')

// Change the id of the buttons when user clicks a button
buttons.forEach(button => {
    button.addEventListener("click" , function(event){
        const selectedbutton = event.target;
        selectedbutton.id = 'selected';

    buttons.forEach(b => {
        if(b !== selectedbutton){
            b.id = 'unselected';
        }
    })
    })
});


rangeOutput.textContent = `${rangeInput.value} X ${rangeInput.value}`;

rangeInput.addEventListener("input", function() {
    const gridSize = rangeInput.value;
    rangeOutput.textContent = `${gridSize} X ${gridSize}`;

    pannel.innerHTML = '';

    // Set the CSS variables for columns and rows
    pannel.style.setProperty('--columns', gridSize);
    pannel.style.setProperty('--rows', gridSize);

    // Create gridSize * gridSize number of divs
    const totalDivs = gridSize * gridSize;

    //Check that when the mouse is clicked and change color on the Basis of it
    let isMouseDown = false;

    document.addEventListener("mousedown" , function(){
            isMouseDown = true ;
    })

    document.addEventListener("mouseup" , function(){
        isMouseDown = false ;
    })

    pannel.addEventListener("mouseleave" , function(){
        isMouseDown = false ;
    })

    for (let i = 0; i < totalDivs; i++) {
        const MyDivs = document.createElement("div");
        MyDivs.classList.add("Newdiv");

        // Append the divs to the panel
        pannel.appendChild(MyDivs);
        
        const mycolor = document.querySelector('#mycolor')

        MyDivs.darkcolor = 0; 

        // Change color immediately when the mouse is first pressed down on a div
        MyDivs.addEventListener("mousedown", function() {
            if(button1.id == 'selected'){
                MyDivs.style.backgroundColor = mycolor.value;
            }else if(button2.id == 'selected'){
            let color = "#" + Math.floor(Math.random()*16777215).toString(16)
                MyDivs.style.backgroundColor = color;
            }else if(button4.id == 'selected'){
                MyDivs.style.backgroundColor = "";
                MyDivs.darkcolor = 0;
            }else if (button3.id == 'selected'){
                // increase the opacity of the div by 0.1
                if (MyDivs.darkcolor < 10) {
                    MyDivs.darkcolor++;

                let currentColor = MyDivs.style.backgroundColor;
                let alpha;

                if (!currentColor || currentColor === "rgba(0, 0, 0, 0)" || currentColor === "") {
                    alpha = 0.1;
                } else if (currentColor.startsWith("rgba")) {
                    alpha = parseFloat(currentColor.split(",")[3]?.trim().replace(")", "")) || 0;
                    alpha = Math.min(alpha + 0.1, 1);
                } else {
                    alpha = 0.1;
                }

                MyDivs.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
                }
            }
            
    
        });

        MyDivs.addEventListener("mouseover" , function(){
            if(isMouseDown){
                if(button1.id == 'selected'){
                    MyDivs.style.backgroundColor = mycolor.value;
                }else if(button2.id == 'selected'){
                let color = "#" + Math.floor(Math.random()*16777215).toString(16)
                    MyDivs.style.backgroundColor = color;
                }else if(button4.id == 'selected'){
                    MyDivs.style.backgroundColor = "";
                }else if (button3.id == 'selected'){
                    // increase the opacity of the div by 0.1
                    if (MyDivs.darkcolor < 10) {
                        MyDivs.darkcolor++;

                        let currentColor = MyDivs.style.backgroundColor;
                        let alpha;
        
                        if (!currentColor || currentColor === "rgba(0, 0, 0, 0)" || currentColor === "") {
                            alpha = 0.1;
                        } else if (currentColor.startsWith("rgba")) {
                            alpha = parseFloat(currentColor.split(",")[3]?.trim().replace(")", "")) || 0;
                            alpha = Math.min(alpha + 0.1, 1);
                        } else {
                            alpha = 0.1;
                        }
        
                        MyDivs.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
                        }
                    }
                }
            
            });
}

    // Clear all the background color from all the Divs
    button5.addEventListener("click" , function(){
        const allDivs = pannel.querySelectorAll('.Newdiv');
        allDivs.forEach(div => {
            div.style.backgroundColor = "";
            div.darkcolor = 0;
        })
    })
});

