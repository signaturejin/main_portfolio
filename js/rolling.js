//left박스 태그
const left_box = document.querySelectorAll(".pf .left");
//left 박스 안 이미지들 태그
const imgs = document.querySelectorAll(".pf .left .move img");
//left박스 안 첫번째 이미지 태그
const first_img = document.querySelectorAll(".pf .left .move img:first-child");
//left박스 안 이미지들 다 같이 움직이게 할 태그(안움직이네)
const move_box = document.querySelectorAll(".pf .left .move");
//이미지들 높이값 담을 배열 생성
// let img_height = [];
let img_height = [-1982, -2116, -648];

// console.log(left_box);
// console.log(imgs);
// console.log(move_box);

/*
    1. 클론을 한다.
    2. append를 이용하여 left박스 뒤에 넣는다. left_box.append(clone_img)
    3. * img_height에 배열이 몇 개 담겨있는지 확인한다.
*/

//트렌스폼에 대입할 변수하나 생성
let trans_num = 0;

//-1을 곱한 move_box(안에 이미지들 있음) 높이값 배열에 대입
// move_box.forEach((item,index)=>{
//     img_height[index] = -1 * item.offsetHeight;
// });


//클론 한 이미지들 변수에 대입
//배열이 아니라서 slice 못함
// let clone_img = imgs.slice();
// console.log(imgs);


left_box.forEach((item,index)=>{
    item.addEventListener("mouseenter",()=>{

        //자동반복함수로 trans_num -= 1 해줌
        let rolling = setInterval(() => {
        
            trans_num -= 1;
            
            //태그에 대입
            imgs.forEach((item,index)=>{
                item.style.transform = `translateY(${trans_num}px)`;

                //trans_num이 이미지박스의 높이값과 같다면
                if(trans_num == img_height[index]){
                //  trans_num = 0; 
                    // 첫번째 이미지를 뒤에 넣어줌
                    move_box.append(first_img);
                }
            });
        
        }, 15);
    });

    item.addEventListener("mouseleave",()=>{
        clearInterval(rolling);
    });
});


