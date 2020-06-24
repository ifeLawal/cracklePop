var submit = document.getElementById("submit");
var list = document.getElementById("cracklePop");
console.log(list.children);

// allow for a user to submit their own crackle pop value
submit.addEventListener("click", 
 function(event) {
    event.preventDefault();
     let num = parseInt(document.getElementById("number").value);
     console.log(num);
     if(Number.isInteger(num)) {
        cracklePop(num);
        console.log("I made it");
        document.getElementById("testMessage").innerHTML = "Here is Crackle Pop with the number you provided.";
     } else {
        cracklePop(Math.floor(Math.random() * 100));
        console.log("I also made it here somehow");
        document.getElementById("testMessage").innerHTML = "Sorry I could not understand the number you typed in. Here is a random Crackle Pop list instead."
     }
 }
)

// cracklePop 
// If the number is divisible by 3, print Crackle instead of the number. 
// If it's divisible by 5, print Pop. 
// If it's divisible by both 3 and 5, print CracklePop.
function cracklePop(number) {
    // let val = "";
    if(list.children.length > 1) {
        while(list.children.length > 0) {
            list.removeChild(list.children[0])
        }
        // while(list.children.length > 1) {
        //     list.children.removeChild(list.children[0])
        // }
    }
    for(let i =0; i <= number;i++) {
        let item = document.createElement("li");
        item.innerHTML = i != 0 ? 
                        i % 15 == 0 ? "CracklePop" : 
                        i % 5 == 0 ? "Pop" : 
                        i % 3 == 0 ? "Crackle" :
                        i : i;
        item.style.color = i != 0 ? 
                        i % 15 == 0 ? "red" : 
                        i % 5 == 0 ? "blue" : 
                        i % 3 == 0 ? "gray" :
                        "black" : "black";
        // if(i % 15 == 0) {
        //     item.innerHTML = "CracklePop";
        // } else if (i % 5 == 0) {
        //     item.innerHTML = "Pop";
        // } else if (i % 3 == 0) {
        //     item.innerHTML = "Crackle"
        // } else {
        //     val = i;
        // }
        
        list.appendChild(item);
    }
}

// use the default 1 to 100
cracklePop(100);
