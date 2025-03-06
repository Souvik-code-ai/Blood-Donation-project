let a=document.getElementById("submit");
a.addEventListener("click",()=>{
    const range=document.getElementById("range").value;
    console.log(range);
    const feedback=document.getElementById("feedback").value;
    console.log(feedback);
    postfeedback();
});
function postfeedback(){
    document.querySelector("#help").style.visibility="hidden";
    let new_tag=document.createElement("div");
        new_tag.innerHTML="<p>Thanks for your kind response<p>";
        new_tag.style.color="red";
        new_tag.style.backgroundColor="white";
        new_tag.style.fontSize="100px";
        document.querySelector("body").append(new_tag);
}