//필요한 태그 생성
const sections = document.querySelectorAll(".section");
const header = document.querySelector("#header");
//각 영역 시작위치값 담기 위한 배열변수
let secStart = [];

//스크롤 할 시
window.addEventListener("scroll",()=>{
    //스크롤바 y값 변수에 대입
    let scTop = window.scrollY;
    //각 영역들 시작위치값 배열에 대입
    sections.forEach((item,index)=>{
        secStart[index] = item.offsetTop;
    });

    if(scTop >= secStart[0] && scTop < secStart[1]){
        header.classList.remove("fixed");
    }    
    else if(scTop >= secStart[1] && scTop < secStart[2]){
        header.classList.add("fixed");
    }
});