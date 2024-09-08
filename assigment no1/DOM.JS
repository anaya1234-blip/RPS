let h2 = document. querySelector("h2");
 console.dir(h2.innerText);
 h2.innerText = h2.innerText + "from Apna College students";

 
 //let divs = document.querySelectorAll(".box");
 //console.log(divs);
   // let idx = 1;
   // for (div of divs) {
   //div.innerText = `new unique value ${idx}`;
    //idx++;
   // }

    //let div = document.querySelector("div");

    //div.style.backgroundColor = "green";
    //div.style.backgroundColor = "purple";
    //div.style.visibility ="hidden"

    //div.style.fontSize ="26px";
    //div.innerText="Hello!"
    //insert elements.
    //new element add in two process.
    //1:create. 2:add.
    let newBtn = document.createElement("button");
      console.log(newBtn);
      newBtn.innerText ="Click Me!";

      //node.append.
      //let div = document.querySelector("div");
         //div.after(newBtn);

//newheading.
  let newHeading = document.createElement("h1");
    newHeading.innerHTML="<i> h1, I am new!</i>"
    document.querySelector("body").prepend(newHeading);

    //1st answer.
    let newButton = document.createElement("button");
     newButton,innerText = "Click Me!";
     newButton.style.color="White";
     newButton.style.backgroundColor="red";
     document.querySelector("body").prepend(newButton);
   
     //second answer.
     let para = document.querySelector("p");

     //
     function display() {
                window.location.href="account.HTML";
     }
     //Switch case statement.
      let a = prompt("enter any name");
      switch (a) {
             case "arrvin":
              console.log("the name is arrvin");
              break;
              case "Alley":
                console.log("the name is Alley");
                break;
                case "Zalley":
                  console.log("the name is Zalley");
                  break;
                  default:
                  console.log("the name is not here")
      }

    //node.event =() => {
       //handle here
    //}

    let btn1 = document.querySelector ("#btn1");
     btn1. onclick =(e) => {
       console.log(e);
      console.log("HANDER1");
        let a = 25;
         a++;
         console.log(a); //25
     }

     let div = document.querySelector("div");
        div.onmouseover = () => {
           console.log("you are inside div");
        };

        btn2 . onclick = (e) => {
            console.log(e);
            console.log(e.target);
            console.log(e.type);
            console.log(e.clientX , e.clientY);
        }
 
        let title = document.querySelector("title");
          title.onmouseover = (e) => {
             console.log(e);
             console.log(e.target);
             console.log(e.type);
             console.log(e.clientX , e.clientY);
          }

          // event listeners.
          btn1. addEventListener("click",()=> {
             console.log("btn1 was clicked-handler1");
          });
          btn1. addEventListener("click",()=> {
            console.log("btn1 was clicked-handler2");
         });
        const handler3 = () => {
          console.log("btn1 was clicked - handler3");
        };
        btn1 .addEventListener("click",handler3);
        btn1.addEventListener("click",() => {
             console.log("btn1 was clicked - handler4");
        });
        btn1.removeEventListener("click",handler3);

     let modeBtn = document.querySelector("#mode");
     let body = document.querySelector("body");
     let currMode = "light";
        
        modeBtn.addEventListener("click", () => {
             console.log("you are trying to change mode")
        })

        modeBtn.addEventListener("click", () => {
          if (currMode === "light") {
           currMode = "dark";
           body.classList.add("dark");
           body.classList.remove("light");
          } else {
            currMode = "light";
            body.classList.remove("dark");
          }

          console.log(currMode);
        });

        let titleBtn = document.querySelector("#title");
           console.log("you are trying to change mode");