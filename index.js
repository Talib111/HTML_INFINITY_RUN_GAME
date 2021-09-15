

var back_scene = document.getElementById('back_scene');

var time = 40;

var win_widt = parseInt(window.getComputedStyle(back_scene,null).getPropertyValue('width'));
var div_by_ten = Math.round(win_widt/5)*5;
console.log(win_widt);
let interval = setInterval(() => {
    
    let back_scene_left = parseInt(window.getComputedStyle(back_scene,null).getPropertyValue('left'));
    let next_back = back_scene_left - 5;
    back_scene.style.left=next_back+"px";
    
    if(Math.abs(next_back) === div_by_ten){
    back_scene.style.left=div_by_ten+"px";
    // console.log(win_widt);

    }

    let score = document.getElementById('score');
    score.innerHTML = parseInt(score.innerHTML)+1;
    
}, time);


const stop_int=()=>{
    clearInterval(interval);
}

// var audio = new Audio('myaud.mp3')
var audio = new Audio('myaud.mp3')
var shootSound = new Audio('shoot.wav')
// shootSound.playbackRate = 2
audio.playbackRate = 1.5

const jump = (stop_anim)=>{
    //activate jump sound
    
     audio.play()
    document.getElementById('arrow').style.animation="shoot 0.8s linear";
    document.getElementById('runner').style.animation="jmp 0.8s linear";
    setTimeout(stop_anim,800)
    
}


const stop_anim = ()=>{
    document.getElementById('runner').style.animation="";
    document.getElementById('arrow').style.animation="";

}

const speed_inc = ()=>{
    let car = document.getElementById('runner');
    let car_left = parseInt(window.getComputedStyle(car,null).getPropertyValue('left'));
    let new_position = car_left + 10;
    car.style.left = new_position+"px";

}

const fire = ()=>{
    shootSound.currentTime = 0
    shootSound.play()
    document.getElementById('shootarrow').style.animation="shoot_me 0.4s linear";
    setTimeout(stop_shoot,400)
}
const stop_shoot = ()=>{
    document.getElementById('shootarrow').style.animation="";

}