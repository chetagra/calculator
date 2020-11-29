let AC= document.querySelector('#AC')
let cross= document.querySelector('#cross')
let percent= document.querySelector('#percent')
let divide= document.querySelector('#divide')
let seven= document.querySelector('#seven')
let eight=document.querySelector('#eight')
let nine= document.querySelector('#nine')
let multiply= document.querySelector('#multiply')
let four= document.querySelector('#four')
let five= document.querySelector('#five')
let six= document.querySelector('#six')
let subtract= document.querySelector('#subtract')
let one= document.querySelector('#one')
let two=document.querySelector('#two')
let three= document.querySelector('#three')
let add= document.querySelector('#add')
let decimal= document.querySelector('#decimal')
let zero= document.querySelector('#zero')
let parenthesis= document.querySelector('#parenthesis')
let equals= document.querySelector('#equals')
let result=document.querySelector('#result')


    one.addEventListener('click',()=>{
        
        result.innerText+=one.innerText
    })


    two.addEventListener('click',()=>{
        
        result.innerText+=two.innerText
    })

    three.addEventListener('click',()=>{
        
        result.innerText+=three.innerText
    })

    four.addEventListener('click',()=>{
        
        result.innerText+=four.innerText
    })

    five.addEventListener('click',()=>{
        
        result.innerText+=five.innerText
    })

    six.addEventListener('click',()=>{
        
        result.innerText+=six.innerText
    })

    seven.addEventListener('click',()=>{
        
        result.innerText+=seven.innerText
    })

    eight.addEventListener('click',()=>{
        
        result.innerText+=eight.innerText
    })

    nine.addEventListener('click',()=>{
        
        result.innerText+=nine.innerText
    })

    zero.addEventListener('click',()=>{
        
        result.innerText+=zero.innerText
    })

    multiply.addEventListener('click',()=>{
        
        result.innerText+=multiply.innerText
    })

    divide.addEventListener('click',()=>{
        
        result.innerText+=divide.innerText
    })

    add.addEventListener('click',()=>{
        
        result.innerText+=add.innerText
    })

    subtract.addEventListener('click',()=>{
        
        result.innerText+=subtract.innerText
    })

    percent.addEventListener('click',()=>{
        
        result.innerText+=percent.innerText
    })

    decimal.addEventListener('click',()=>{
        
        result.innerText+=decimal.innerText
    })
AC.onclick=()=>{
    result.innerText=""
}

cross.onclick=()=>{
  if(result.innerText==undefined){
      return
  }
  let str=result.innerText
  result.innerText=''
  for (let i = 0; i < str.length-1; i++) {
     result.innerText+=str.charAt(i)   
  }
}

parenthesis.addEventListener('click',()=>{
    let a=check(result.innerText)
    if(a){
        result.innerText+='('
    }
    else{
        result.innerText+=')'
    }
})


function check(str) {
    let x=true
    if(str==undefined){
       return x
    }
    for (let i = 0; i < str.length; i++) {
       if(str.charAt(i)=='('){
        x=false  
       }
       if(str.charAt(i)==')'){
           x=true
       }
    }
    return x
  }


equals.addEventListener('click',()=>{
   let x=eval(result.innerText)
   result.innerText=x
})
