let number;

const generate_number=()=>
{
    let n1=Math.random();
    let n2=n1*10

   n2= Math.trunc(n2)

   //console.log(n2)

   number=(n2%6)+1
   console.log(number)

}



const generate_number_btn_click=()=>
{
    
    document.getElementById("section1").style.display="none"
    document.getElementById("section2").style.display="none"

    document.getElementById("section3").style.display="block"
    
  
    setTimeout(() => {
        generate_number()
document.querySelector("#field").value=""


        document.getElementById("section1").style.display="none"
        document.getElementById("section2").style.display="block"
        document.getElementById("section3").style.display="none"


    }, 3000);

      
   

}


const check_number=()=>
{
    
    let value=document.querySelector("#field").value

    if(value==number)
    {
        //alert("Congrats! You won the game")
        document.getElementById("result_field").innerHTML="Congrats! You won the game"
    }
    else{
        //alert("OOPS!! Your guess is wrong")
        document.getElementById("result_field").innerHTML="OOPS!! Your guess is wrong"
    }

    generate_number_btn_click();
    
}