addNewWEField=()=>
{
    console.log("adding")
    let NewNode=document.createElement("textarea")
    NewNode.classList.add("form-control")
    NewNode.classList.add("weField")
    NewNode.setAttribute("rows",3)
    NewNode.classList.add("mt-2")
    NewNode.setAttribute("placeholder","Enter here")

    let weOb= document.getElementById("we")
    let WeAddButtonOb=document.getElementById("weAddButton")


    weOb.insertBefore(NewNode,WeAddButtonOb)
}


addNewAQField=()=>
{
    console.log("adding 2")
    let NewNode=document.createElement("textarea")
    NewNode.classList.add("form-control")
    NewNode.classList.add("eqField")
    NewNode.setAttribute("rows",3)
    NewNode.classList.add("mt-2")
    NewNode.setAttribute("placeholder","Enter here")
console.log("test")
    let aqOb= document.getElementById("aq")
    let aqAddButtonOb=document.getElementById("aqAddButton")
console.log("tste")

aqOb.insertBefore(NewNode,aqAddButtonOb)
console.log("final test")

}



//generate CV

generateCV=()=>
{
    console.log("TESTE26")
    //name validation
    let nameField=document.getElementById("nameField").value

    let allowedNameValue=/^[a-zA-Z ]+$/

    
    if(!allowedNameValue.exec(nameField))
    {
        alert("invalid name")
        return false
    }
let nameT1=document.getElementById("nameT1")

nameT1.innerHTML=nameField

let contactField=document.getElementById("contactField").value
let contactT=document.getElementById("contactT")

contactT.innerHTML=contactField


let addressField=document.getElementById("addressField").value
let addressT=document.getElementById("addressT")

addressT.innerHTML=addressField


let fbField=document.getElementById("fbField").value
let fbT=document.getElementById("fbT")

fbT.innerHTML=fbField


let instaField=document.getElementById("instaField").value
let instaT=document.getElementById("instaT")

instaT.innerHTML=instaField

let linkedField=document.getElementById("linkedField").value
let linkedT=document.getElementById("linkedT")

linkedT.innerHTML=linkedField

//setting objective

document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value

//setting work experience

let wes=document.getElementsByClassName("weField")
let str=""
for(let e of wes)
{
    str=str+`<li> ${e.value}</li>`
    
}
console.log(str)
document.getElementById("weT").innerHTML=str


//setting academic qualification

let aqs=document.getElementsByClassName("eqField")
let str1=""
for(let e of aqs)
{
    str1=str1+`<li>${e.value}</li>`
}

document.getElementById("aqT").innerHTML=str1

document.getElementById("nameT2").innerHTML="dumyy name"



//validation on image
let filePath=document.getElementById("imgField").value

let allowedExtension=/(\.jpg|\.jpeg|\.png|\.gif)$/i;

if(!allowedExtension.exec(filePath))
{
    alert("invalid file path")
     return false;
}

//code for setting image
let file=document.getElementById("imgField").files[0]
console.log(file)

let reader=new FileReader()
reader.readAsDataURL(file)
console.log(reader.result)

//set image to template
reader.onloadend=function(){
document.getElementById("imgTemplate").src=reader.result
}

document.getElementById("cv-form").style.display="none"
document.getElementById("cv-template").style.display="block"

}
//print CV

printCV=()=>
{
    console.log("print")
    window.print();
}

