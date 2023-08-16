console.log("new features of js1")
console.log("new features of js2")
console.log("new features of js3")

//function scope
var compName="Test"



function test()
{
    if(3>2)
    {
        var x=12;
        console.log("value of x:"+ x);
    }
    console.log("outside block:"+x)
}




test()

//block scope
let x=123;
console.log(x)
x=1212
console.log(x)
const y=12;
console.log(y)
//y=222//TypeError: Assignment to constant variable.
console.log(y)


//Arrow function

//argument=>expression

//(arg1,arg2)=>expression

const square=(x)=>
 x*x

console.log("square of number is"+square(4))


let a=[3245,4567,9870]
a.forEach(e=>console.log(e))

//multi line string

let str=''
// let str1="jaskdfjk
// sdjsdgf" error is Unterminated string literal

// back tick will help in writing multiline string
let str2=`house 58
sudarshan housing 
kanpur`

console.log(str2)


let dynamicHtml=`
<form>
<input type="text" name="name"/>
<button>OK</buttons>
</form>
`
console.log(dynamicHtml)

//default parameters

const sum=(x=5,y=8)=>x+y

//let s23=
console.log(sum())
console.log(sum(2,4))

//template literal-->string interpolation

let x22=12;
let y22=45;

let str22=`value of x ${x22}`

console.log(str22)


//Destructuring assignments

let myarr=[22,55]
let x12=myarr[0]
console.log(x12)

let[x13,y13]=myarr
console.log(x13)
console.log(y13)


//Object destructure

let ob={
    name:"javascript",
    dbName:"mongodb"
}

let{name,dbName}=ob

console.log(name)
console.log(dbName)

console.log("heyyyy")
let myarr1=[22,55,234,345,265,798,456]
let[a23,b23,...rest1]=myarr1
console.log(a23)
console.log(b23)
console.log(rest1)


//Ehnanced Object literals

let student={
    name:"Peter",
    city:"Lucknow",
    display:function(){
        console.log(this.name+" "+this.city)
    }

}
console.log(student)
student.display()
//console.log(this.name) // as the let is scoped so it will print undefined

let address12="house 58",pin23="208024"
let person45={
    address12,
    pin23,
    display(){
        console.log(this.address12)
        console.log(this.pin23)
    }
};
console.log(person45)
person45.display()
//console.log(this.address12) // as the let is scoped so it will print undefined

function createObject(a,b,c)
{
    return {a,b,c}
}

let ob1=createObject(34,23,535)
console.log(ob1)


//promise in js- promise is object
let prom=new Promise((resolve,reject)=>{
    //server call asynchronous work

//     setTimeout(()=>{

//     let flag=true;

//     if(flag)
//     {
//         resolve()
//     }
//     else
//     {
//         reject()
//     }
// },5000)

})

prom.then(()=>{
    console.log("promise is resolved")
}).catch(()=>{
    console.log("promise is not resolved")
})

console.log("first line after creating Promise")
console.log("second line after creating Promise")
console.log("third line after creating Promise")
console.log("fourth line after creating Promise")

class studentt{
constructor(name,phone)
{
    this.name=name
    this.phone=phone

    console.log("object created")
}

display()
{
    console.log(this.name + ":" + this.phone)
}



}

let studenttt=new studentt("Ram","9857578")
let studenttt_=new studentt("Shyam","7666463")
studenttt.display()
studenttt_.display()


// promise use

let promi=new Promise((resolve,reject)=>
{ let age=28;

    if(age>18)
    {
        resolve()
    }
    else
    {
        reject()
    }

})

promi.then(()=>{

    console.log('elgible for vote')
}

).catch(()=>{

console.log('not eligible for vote')
})



