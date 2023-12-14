const reviews = [
    {
        id: 1,
        name:"Amitabh Bacchan",
        job: "Designer, Actor",
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5OXzOzMm0IxvWX31C_yeMBPLe_IigwyCPFiSy-v3bAeqD1g08",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odio voluptatum, doloremque iste numquam sint deserunt magnam quidem praesentium earum. Lorem ipsum dolor sit amet"
    },
    {
        id: 2,
        name:"Leonel Messi",
        job: "Footballer",
        img: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg",
        info:"Lionel Andrés Messi also known as Leo Messi, is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club"
    },
    {
        id: 3,
        name:"Cristiano Ronaldo",
        job: "Footballer, Artist",
        img:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSO9Xd_NJYU1FU2u886CDMp-pX-nffkmg_h0yhAKgLWCltFmAbQnt_nGdpEPgQZMZzw1k_pGxWjlD3U_Yk",
        info:"Cristiano Ronaldo dos Santos Aveiro GOIH ComM (born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team. Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards,[note 3] a record three UEFA Men's Player of the Year Awards, and four European Golden Shoes, the most by a European player. "
    },
]

const profileImg = document.querySelector('.profile img');
const authorName = document.querySelector('#name');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let ind = 0;

nextBtn.addEventListener('click', ()=>{
    ind++;
    ind = ind % reviews.length;
    const review = reviews[ind];
    updateData(review);
})

function updateData(review){
    console.log(review);
    profileImg.setAttribute('src', review.img);
    authorName.innerText = review.name;
    job.innerText = review.job;
    info.innerText = review.info.slice(0, 200) + "...";
}