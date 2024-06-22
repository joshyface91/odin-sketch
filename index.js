
    const stylesheet = document.styleSheets[0];

    const center = document.querySelector(".center");
    center.style.display = 'flex';
    center.style.justifyContent = 'center';
    center.style.alignItems = 'center';
    center.style.flexDirection = 'column';

    //creates reset button for redefining the number of squares in the grid
    const reset = document.createElement("button");
    reset.textContent = "reset sketch-pad";


    //creates and defines the parentGrid element for FlexBox
    const parentGrid = document.createElement("div");
    parentGrid.setAttribute("id", "parent");
    parentGrid.style.height = "800px";
    parentGrid.style.width = "800px";
    parentGrid.style.border = "3px solid black";
    parentGrid.style.display = 'flex';
    parentGrid.style.justifyContent = 'center';
    parentGrid.style.alignItems = 'center';
    parentGrid.style.flexWrap = "wrap";

    center.append(reset);

    //add logic for button prompt
    let sizeDesign = prompt("Please enter a number more than 4 and less than 100 to determine your preferred sketch-pad size:", 16);

    if (sizeDesign == null || sizeDesign == "" || sizeDesign < 4 || sizeDesign > 100) {
        parentGrid.textContent = "Invalid size stipulation. Operation Cancelled.";
    } else {
        const clear = document.querySelectorAll(".child");
        for (i=0; i<clear.length; i++) {
            parentGrid.removeChild(clear[i]);
        }
    }

    let n = sizeDesign * sizeDesign;

    for (i=0; i<n; i++) {
        this["square"+i] = document.createElement("div");
        this["square"+i].classList.toggle("child", true);
        parentGrid.append(this["square"+i]);
    }

    stylesheet.insertRule(".child { height: " + 800 / sizeDesign + "px; width: " + 800 / sizeDesign + "px; }", 0);
    reset.addEventListener("click", resetGrid);
    function resetGrid() {
        
    }

    //add parentGrid to the visible body of the html
    center.appendChild(parentGrid);


    //adds a hover event to the children divs of the grid so that there is a background color change when the mouse hovers   
    const children = document.querySelectorAll(".child");
    for (i=0; i<children.length; i++) {
        children[i].addEventListener(
            "mouseover",
            (event) => {
                event.target.style.backgroundColor = "#999494";
                setTimeout(() => {
                    event.target.style.backgroundColor = "";
                }, 1000);
            },
            false,
        );
    }
    
    // children.addEventListener(
    //     "mouseover",
    //     (event) => {
    //         event.target.style.backgroundColor = "#999494";
    //         setTimeout(() => {
    //             event.target.style.backgroundColor = "";
    //         }, 1000);
    //     },
    //     false,
    // );



    //testing
    console.log();
