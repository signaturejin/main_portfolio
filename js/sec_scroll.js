window.addEventListener("scroll",()=>{

    //스크롤바 시작값 변수에 대입
    let scTop = window.scrollY;

    for(let i=0; i<sections.length; i++){
        if(scTop >= secStart[i] && scTop < secStart[i + 1]){
            gnb_color(i);
        }
        else if(scTop >= secStart[sections.length - 1]){
            gnb_color(sections.length - 1);
        }
    }
});

//해당 영역 도착하면 li색깔이 변하는 함수
let gnb_color = (index)=>{
    //활성화 전 전부 비활성화
    gnb.forEach((item,index)=>{
        item.classList.remove("on");
    });
    gnb[index].classList.add("on");
}