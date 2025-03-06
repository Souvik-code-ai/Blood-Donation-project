let a=document.getElementById("submit");
a.addEventListener("click",()=>{
    const hospital=document.getElementById("hospital").value;
    console.log(hospital);
    const country=document.getElementById("country").value;
    console.log(country);
    const state=document.getElementById("state").value;
    console.log(state);
    const address=document.getElementById("address").value;
    console.log(address);
    const contact=document.getElementById("contact").value;
    console.log(contact);
    const email=document.getElementById("email").value;
    console.log(email);
    const reg=document.getElementById("reg").value;
    console.log(reg);
    const pwd=document.getElementById("pwd").value;
    console.log(pwd);
    valid_pwd(pwd);

});
function valid_pwd(pwd)
{
    let pwd_length=pwd.length;
    console.log(typeof(pwd));
    console.log(pwd_length);
    let char_int;
    let flag=0;
    if(pwd_length<8)
    {
        flag=1;
    }
    let k;
    let len_1=0;
    let len_2=0;
    for(k=0;k<pwd_length;k++)
    {
        if(parseInt(pwd[k])>=0)
        {
            len_1++;
        }
    }
  //  console.log(len_1);
    for(k=0;k<pwd_length;k++)
    {
        if((pwd[k]==' ')||(pwd[k]=='/'))
        {
            flag=1;
            break;
        }
    }
    for(k=0;k<pwd_length;k++)
    {
        char_int=pwd[k].charCodeAt();
       // console.log(char_int);
        if((char_int>=65)&&(char_int<91))
        {
            len_2++;
        }
    }
    //console.log(len_2);
    if(len_1==0)
    {
        flag=1;
    }
    if(len_2==0)
    {
        flag=1;
    }
    //console.log(flag);
    if(flag==1)
    {
        let new_tag=document.createElement("div");
        new_tag.innerHTML="<p>Invalid Password<p>";
        new_tag.style.color="red";
        new_tag.style.height="25px";
        document.querySelector("#pwd").after(new_tag);
    }
}
let selected=document.querySelectorAll("#state_name");/* when we are accessing select tag to access for creating options in 
js we should always use querySelectorAll  there may be one or more than one options*/

for (let select of selected) {
    for (let currCode of statename)
         {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if(newOption.value==="WestBengal")
      {
        newOption.selected="selected";
      }
      select.append(newOption);
    }
}