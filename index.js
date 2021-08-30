

var back_scene = document.getElementById('back_scene');
// let elem = document.getElementById('playg');
// if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) { /* Safari */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE11 */
//     elem.msRequestFullscreen();


// var audioo = document.getElementById('md');
// audioo.onplay();
//   }
var time = 40;
//time interval
// var time_interval = setInterval(() => {
//     time = time - 1;
//     console.log(time);
// }, 1000);
var win_widt = parseInt(window.getComputedStyle(back_scene,null).getPropertyValue('width'));
var div_by_ten = Math.round(win_widt/5)*5;
console.log(win_widt);
let interval = setInterval(() => {
    
    let back_scene_left = parseInt(window.getComputedStyle(back_scene,null).getPropertyValue('left'));
    let next_back = back_scene_left - 5;
    back_scene.style.left=next_back+"px";
    // console.log(next_back);
    // console.log(Math.abs(next_back));
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

const jump = (stop_anim)=>{
    document.getElementById('runner').style.animation="jmp 0.8s linear";
    setTimeout(stop_anim,800)
    
}


const stop_anim = ()=>{
    document.getElementById('runner').style.animation="";

}

const speed_inc = ()=>{
    let car = document.getElementById('runner');
    let car_left = parseInt(window.getComputedStyle(car,null).getPropertyValue('left'));
    let new_position = car_left + 10;
    car.style.left = new_position+"px";

}