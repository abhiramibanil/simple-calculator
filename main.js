//display content in calscreen
const displayContent=(content)=>{
    calcScreen.value+=content
}
// clear content of calscreen
const clearAllContent=()=>{
    calcScreen.value=""
    calcScreen.placeholder="0"
}
//result display in calcScreen 
const showResult=()=>{
   // calcScreen.value=eval(calcScreen.value)
//try-catch-finally
try{
    console.log("TRY BLOCK");
    calcScreen.value=eval(calcScreen.value)
}catch(err){
console.log("CATCH BLOCK");
console.log(err);
calcScreen.value=""
calcScreen.placeholder="SYNTAX ERROR.....!!!"
}finally{
    console.log("finally Block :Task Completed");
}
}
//remove last
const removelast=()=>{
calcScreen.value=calcScreen.value.slice(0,-1)
}