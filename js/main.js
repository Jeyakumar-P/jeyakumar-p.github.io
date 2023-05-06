function HideShowFaq1(){
    let ques = document.getElementById("faq-ques1");
    let ans = document.getElementById("faq-ans1");
    let ah = document.getElementById("black-hide1");
    let as = document.getElementById("orange-show1");
    if(ah.style.display === "block"){
        as.style.display = "block";
        ah.style.display = "none";
        ans.style.display = "block";
        ques.style.color = "#ee8a4c";
    } else {
        as.style.display = "none";
        ah.style.display = "block";
        ans.style.display = "none";
        ques.style.color = "#000";
    }
}

function HideShowFaq2(){
    let ques = document.getElementById("faq-ques2");
    let ans = document.getElementById("faq-ans2");
    let ah = document.getElementById("black-hide2");
    let as = document.getElementById("orange-show2");
    if(ah.style.display === "block"){
        as.style.display = "block";
        ah.style.display = "none";
        ans.style.display = "block";
        ques.style.color = "#ee8a4c";
    } else {
        as.style.display = "none";
        ah.style.display = "block";
        ans.style.display = "none";
        ques.style.color = "#000";
    }
}






function HideShowFaq(){
    var mainOc=document.getElementById("mainUl");
    var subLi=document.getElementById("has-sub");
    let ques = document.getElementById("faq-ques2");
    let ans = document.getElementById("faq-ans2");
    let ah = document.getElementById("black-hide2");
    let as = document.getElementById("orange-show2");
    for(var i=0;i<subLi.length;i++){
        subLi[i].addEventListener("Click",function()
        {
            var currentTab = document.getElementsByClassName("active");
            currentTab[0].className = currentTab[0].className.replace("active");
            this.className += "active";
        });
    }

    
    if(ah.style.display === "block"){
        as.style.display = "block";
        ah.style.display = "none";
        ans.style.display = "block";
        ques.style.color = "#ee8a4c";
    } else {
        as.style.display = "none";
        ah.style.display = "block";
        ans.style.display = "none";
        ques.style.color = "#000";
    }

}

