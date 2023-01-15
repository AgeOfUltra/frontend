let submit = document.querySelector('.submit');
let conatiner = document.querySelector('.conatiner');
let newValue = document.querySelector('.value');
let stars = document.getElementsByClassName('stars')[0].children;
for(let i of stars){
    i.onclick=()=>{
        i.children[0].checked = true;
        for(let j of stars){
            if(j.id==="isSelected")
                j.id = "prevSelected";
            else
                j.id = null;
        }
        i.id = "isSelected";
        console.log(i.getAttribute("class"))
    }
}


submit.onclick=()=>{
    let last_value  = document.querySelector('input[name="rateno"]:checked');
    last_value = last_value.getAttribute("id");
    newValue.textContent=last_value;
    conatiner.classList.add('thankyoucard')
    console.log("clicked");
}