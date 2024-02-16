const posts=[
    {
        id:1,
        name:"Avani",
        desc:"I'm in LA looking for a job and it was an amazing. can't wait to get the interview. Wish me luck",
        place:"LA",
        image:"av.jpg",
        profile:"avan.png"
    },
    {
        id:2,
        name:"Sommen",
        desc:"This design take me 4 hours. Go vote for me at picture.com/sommenjpg.",
        place:"Somalia",
        image:"pic2.jpg",
        profile:"tech.jpg"
    },
    {
        id:3,
        name:"Nathy",
        desc:"Be greatfull for the life you're living.",
        place:"Somalia",
        image:"images/1 (1).jpg",
        profile:"images/1 (4).jpg"
    },
    {
        id:4,
        name:"Madi",
        desc:"I start using new foundation and its look amazing.",
        place:"Arizona",
        image:"madi.JPG",
        profile:"ma.jpg"
    }
]

const cont = document.querySelector(".post-container");
const disp = posts.map((post, index)=>{
    return `
    <div class="posts">
    <div class="post-top">
        <div class="profile-img">
            <img src="${post.profile}"/>
        </div>
        <div class="name">
            <h3>${post.name}</h3>
            <span>${post.place}  | 7h ago</span>
        </div>
    </div>
    <div class="post-middle">
        <p class="post-desc">${post.desc}</p>
        <div class="posted-img">
            <img src="${post.image}"/>
        </div>
        <p class="tags">#profile #Ethiopian</p>
    </div>
    <hr>
    <div class="post-bottom">
        <div class="p-left">
            <div class="left-icon" onclick= "liked()">
                <i class="fa-regular fa-thumbs-up" id="like"  ></i>
                <span>100</span>
            </div>
            <div class="left-icon">
                <i class="fa-regular fa-comment"></i>
                <span>50</span>
            </div>
            <div class="left-icon">
               <i class="fa-solid fa-share"></i>
                <span>20</span>
            </div>
        </div>
        <div class="right">
            <div class="right-icon">
                <i class="fa-regular fa-bookmark"></i>
             </div>
        </div>
    </div>
</div>`
});
function liked(){
    var like=document.getElementById("like");
    like.removeAttribute("class");
    like.setAttribute("class","fa-solid fa-thumbs-up");
    
}
cont.innerHTML = disp; 