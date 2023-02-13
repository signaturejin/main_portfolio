//필요한 태그 생성
const gnb = document.querySelectorAll(".gnb > li");

//스크롤을 한번이라도 해야 클릭했을 때 넘어감
gnb.forEach((item,index)=>{
    item.addEventListener("click",(e)=>{
        //페이지 이동방지
        e.preventDefault();

        window.scrollTo(
            {
                top: secStart[index] /*- 83*/,
                behavior: "smooth"
            }
        );
    });
});