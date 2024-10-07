function createCard(title, cName, views, monthsold, duration, thumbnail){
    let viewStr
    if (views<1000){
        viewStr=views
    }
    else if(views>1000000){
        viewStr=views/1000000+"M"
    }
    else{
        viewStr=views/1000+"K"
    }
    let html=`<div class="card">
            <div class="image">
            <img class="img1" src="${thumbnail}" alt="card_image">
            <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName}  .  ${viewStr} views  .  ${monthsold} months ago</p>
            </div>
        </div>`
        document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}
createCard("ABC", "qwer", 56000, 7, "31:22", "https://i.ytimg.com/vi/e0vge0v6_G8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCo_SJHls2SyNJbQXoePFxAaJ4CNQ")
document.title="Web Page-Cards Designed by JS"
