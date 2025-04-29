let mywindow = window.open("", "newwin", "width=300,height=200,scrollbars=yes ")
mywindow.document.write("<div style='height:1000px;'></div>")
mywindow.scrollTo(0, 1000)


// Delay scroll to allow content to render
setTimeout(() => {
    mywindow.scrollTo(0, mywindow.document.body.scrollHeight);
}, 200);

setTimeout(() => {
    if (!mywindow.cloesed) mywindow.close()
}, 400);


    mywindow.document.write("mohamed") // no proplem but it write on bottom of page

    let all_images = document.images
    let images = document.getElementsByTagName("img")

    let cityDropdown  = document.getElementById("city")

    showoptions = () => {
        for (let i =0 ; i < cityDropdown.length; i++){
            console.log(cityDropdown[i])
        }
    } 


let tables = document.getElementsByTagName("table")
let secondTableTDs = tables[1].getElementsByTagName("td")
console.log("TDs in second table:", secondTableTDs)

let allblue = document.getElementsByClassName("fontBlue")
let allBGrey = document.getElementsByClassName("BGrey")

console.log("Elements with class fontBlue:", allblue);
console.log("Elements with class BGrey:", allBGrey);


showInfo =()=>{
    const name = document.querySelector('[name="name"]').value;
    const age = document.querySelector('[name="age"]').value;
  
    const user = { name, age };
    console.log(user);
  
    return false;
}
