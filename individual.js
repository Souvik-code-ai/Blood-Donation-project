let b=document.getElementById("submit");
let a=document.getElementById("age");
a.addEventListener("click",()=>{
    const first=document.getElementById("first").value;
    let i;
    let len_first=first.length;
    for(i=0;i<len_first;i++)
    {
        if(parseInt(first[i])>=0)
        {
            let new_line=document.createElement("div");
            new_line.innerHTML="<p>Only Letters are allowed</p>";
            /*new_line.style.backgroundColor="red";*/
            new_line.style.color="red";
            new_line.style.height="25px";
            document.querySelector("#first").after(new_line); 
            break;
        }
    }

   // console.log(first);
    const last=document.getElementById("last").value;
    console.log(last);
    let len_second=last.length;
    for(i=0;i<len_second;i++)
        {
            if(parseInt(last[i])>=0)
            {
                let new_second_line=document.createElement("div");
                new_second_line.innerHTML="<p>Only Letters are allowed</p>";
                /*new_line.style.backgroundColor="red";*/
                new_second_line.style.color="red";
                new_second_line.style.height="25px";
                document.querySelector("#last").after(new_second_line); 
                break;
            }
        }
    const country=document.getElementById("country").value;
    console.log(country);
  /*  const state=document.getElementById("state").value;
    console.log(state);*/
    const address=document.getElementById("address").value;
    console.log(address);
    let date=document.getElementById("date").value;
    console.log(date);
    let res=age_cal(date);
    /*document.querySelector("#age").addEventListener("click",()=>
        {
            document.getElementById("age").value=2025-res;
        });*/
    console.log(typeof(date));
    let age=document.getElementById("age").value;
    console.log(age);
    let d=new Date();
    let present=d.getFullYear();
    console.log(present);
    let val=present-res;
    console.log(val);
    if(val<15)
    {
        document.querySelector("#gen").style.visibility="hidden";
        let quote=document.createElement("div");
        quote.innerHTML="<p>Age limit  should not be less than 15</p>";
        quote.style.height="25px";
        quote.style.color="red";
        quote.style.backgroundColor="white";
        document.querySelector("#age_tag").after(quote);
        document.querySelector("#age").style.visibility="hidden";
        document.querySelector("#age_tag").style.visibility="hidden";

    }
    else{
        document.getElementById("age").value=val;
    }

})
b.addEventListener("click",()=>{
    const gender=document.getElementById("gender").value;
    console.log(gender);
    const bg=document.getElementById("bg").value;
    console.log(bg);
    const contact=document.getElementById("contact").value;
    console.log(contact);
    const email=document.getElementById("email").value;
    console.log(email);
    const card=document.getElementById("card").value;
    console.log(card);
    const cn=document.getElementById("cn").value;
    console.log(cn);
    valid_card(cn);
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
function valid_card(cn)
{
    let card_len=cn.length;
    let k;
    for(k=0;k<card_len;k++)
    {
        if(cn[k]==' ')
        {
            let new_tag=document.createElement("div");
            new_tag.innerHTML="<p>Invalid Card Number<p>";
            new_tag.style.color="red";
            new_tag.style.height="25px";
            document.querySelector("#cn").after(new_tag);
        }
    }
}
function age_cal(date)
{
    let a=[];
    let k;
    for(k=0;k<4;k++)
    {
        a.push(parseInt(date[k]));
    }
    console.log(a);
    let arr=a.reduce((prev,pre)=>{
        return ((prev*10)+pre);
    });
    return arr;
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
   



