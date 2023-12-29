let open = document.querySelector('#open-icon');
let container = document.getElementsByClassName('container3');
let close = document.getElementById('close-icon');
let navbar = document.getElementById('navbar');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let name = document.querySelector('.name');
let name1 = document.querySelector('.name1');
let name2 = document.querySelector('.name2');
let name3 = document.querySelector('.name3');
let para = document.querySelector('.para');
let para1 = document.querySelector('.para1');
let para2 = document.querySelector('.para2');
let para3 = document.querySelector('.para3');
let infomoon = document.querySelector('#info-moon');
let infomars = document.querySelector('#info-mars');
let infoeuropa = document.querySelector('#info-europa');
let infotitan = document.querySelector('#info-titan');
let boximg = document.querySelector('.box-img');
let boximg1 = document.querySelector('.box-img1');
let boximg2 = document.querySelector('.box-img2');
let boximg3 = document.querySelector('.box-img3');
let btn5 = document.querySelector('.btn5');
let btn6 = document.querySelector('.btn6');
let btn7 = document.querySelector('.btn7');
let btn8 = document.querySelector('.btn8');
let name4 = document.querySelector('.name4');
let name5 = document.querySelector('.name5');
let name6 = document.querySelector('.name6');
let name7 = document.querySelector('.name7');
let para4 = document.querySelector('.para4');
let para5 = document.querySelector('.para5');
let para6 = document.querySelector('.para6');
let para7 = document.querySelector('.para7');
let infomoon1 = document.querySelector('#info-moon1');
let infomars1 = document.querySelector('#info-mars1');
let infoeuropa1 = document.querySelector('#info-europa1');
let infotitan1 = document.querySelector('#info-titan1');
let boximg4 = document.querySelector('.box-img4');
let boximg5 = document.querySelector('.box-img5');
let boximg6 = document.querySelector('.box-img6');
let boximg7 = document.querySelector('.box-img7');
let circle1 = document.querySelector('.circle-1');
let circle2 = document.querySelector('.circle-2');
let circle3 = document.querySelector('.circle-3');
let circle4 = document.querySelector('.circle-4');
let circle5 = document.querySelector('.circle5');
let circle6 = document.querySelector('.circle6');
let circle7 = document.querySelector('.circle7');
let parent = document.querySelector('.parent');
let parent1 = document.querySelector('.parent1');
let parent2 = document.querySelector('.parent2');
let parent3 = document.querySelector('.parent3');
let parent4 = document.querySelector('.parent4');
let parent5 = document.querySelector('.parent5');
let parent6 = document.querySelector('.parent6');
let back = document.getElementsByClassName('back');
let forward = document.getElementsByClassName('forward');
let disp = document.getElementById("display");
let count = 0;

//navbar close and open //
function closenavbar() {
    navbar.style.width = '0';
    open.style.display = 'block';
    close.style.display = 'none'
};
function opennavbar() {
    navbar.style.width = '70%';
    open.style.display = 'none';
    close.style.display = 'block';
    container.style.opacity = "0.5";
};

// MOON //
function MOON(){
    boximg.style.display = 'none';
    boximg1.style.display = 'block';
    boximg2.style.display = 'none';
    boximg3.style.display = 'none';
    name.style.display = 'block';
    name1.style.display = 'none';
    name2.style.display = 'none';
    name3.style.display = 'none';
    para.style.display = 'none';
    para1.style.display = 'block';
    para2.style.display = 'none';
    para3.style.display = 'none';
    infomoon.style.display = 'flex';
    infomars.style.display = 'none';
    infoeuropa.style.display = 'none';
    infotitan.style.display = 'none';
    btn1.style.borderBottom = "4px solid whitesmoke";
    btn2.style.borderBottom = 'none';
    btn3.style.borderBottom = 'none';
    btn4.style.borderBottom = 'none';
    console.log(btn4)
};
// MARS //
function MARS(){
    boximg.style.display = 'block';
    boximg1.style.display = 'none';
    boximg2.style.display = 'none';
    boximg3.style.display = 'none';
    name.style.display = 'none';
    name1.style.display = 'block';
    name2.style.display = 'none';
    name3.style.display = 'none';
    para.style.display = 'block';
    para1.style.display = 'none';
    para2.style.display = 'none';
    para3.style.display = 'none';
    infomoon.style.display = 'none';
    infomars.style.display = 'flex';
    infoeuropa.style.display = 'none';
    infotitan.style.display = 'none';
    btn1.style.borderBottom = "none";
    btn2.style.borderBottom = '4px solid whitesmoke';
    btn3.style.borderBottom = 'none';
    btn4.style.borderBottom = 'none';
};
// EUROPA //
function EUROPA(){
    boximg.style.display = 'none';
    boximg1.style.display = 'none';
    boximg2.style.display = 'block';
    boximg3.style.display = 'none';
    name.style.display = 'none';
    name1.style.display = 'none';
    name2.style.display = 'block';
    name3.style.display = 'none';
    para.style.display = 'none';
    para1.style.display = 'none';
    para2.style.display = 'block';
    para3.style.display = 'none';
    infomoon.style.display = 'none';
    infomars.style.display = 'none';
    infoeuropa.style.display = 'flex';
    infotitan.style.display = 'none';
    btn1.style.borderBottom = "none";
    btn2.style.borderBottom = 'none';
    btn3.style.borderBottom = '4px solid whitesmoke';
    btn4.style.borderBottom = 'none';
};
// TITAN //
function TITAN(){
    boximg.style.display = 'none';
    boximg1.style.display = 'none';
    boximg2.style.display = 'none';
    boximg3.style.display = 'block';
    name.style.display = 'none';
    name1.style.display = 'none';
    name2.style.display = 'none';
    name3.style.display = 'block';
    para.style.display = 'none';
    para1.style.display = 'none';
    para2.style.display = 'none';
    para3.style.display = 'block';
    infomoon.style.display = 'none';
    infomars.style.display = 'none';
    infoeuropa.style.display = 'none';
    infotitan.style.display = 'flex';
    btn1.style.borderBottom = "none";
    btn2.style.borderBottom = 'none';
    btn3.style.borderBottom = 'none';
    btn4.style.borderBottom = '4px solid whitesmoke';
};

function slide1() {
    parent3.style.display = 'none';
    parent2.style.display = 'none';
    parent.style.display = 'none';
    parent1.style.display = 'grid';
    parent1.setAttribute('id','hide');
    circle1.removeAttribute('id','circle');
    circle3.removeAttribute('id','circle');
    circle4.removeAttribute('id','circle');
    circle2.setAttribute('id','circle');
}
function slide2() {
    parent3.style.display = 'none';
    parent2.style.display = 'none';
    parent.style.display = 'grid';
    parent.setAttribute('id','hide');
    parent1.style.display = 'none';
    circle2.removeAttribute('id','circle');
    circle4.removeAttribute('id','circle');
    circle3.removeAttribute('id','circle');
    circle1.setAttribute('id','circle');
}
function slide3() {
    parent.style.display = 'none';
    parent3.style.display = 'none';
    parent2.style.display = 'grid';
    parent2.setAttribute('id','hide');
    parent1.style.display = 'none';
    circle2.removeAttribute('id','circle');
    circle4.removeAttribute('id','circle');
    circle1.removeAttribute('id','circle');
    circle3.setAttribute('id','circle');
}
function slide4() {
    parent.style.display = 'none';
    parent2.style.display = 'none';
    parent3.style.display = 'grid';
    parent3.setAttribute('id','hide');
    parent1.style.display = 'none';
    circle2.removeAttribute('id','circle');
    circle1.removeAttribute('id','circle');
    circle3.removeAttribute('id','circle');
    circle4.setAttribute('id','circle');
}

function opene1() {
    parent5.setAttribute('id','parent');
    parent4.setAttribute('id','parent1');
    parent6.setAttribute('id','parent1');
    parent4.style.display = 'none';
    parent6.style.display = 'none';
    parent5.style.display = 'grid'
    circle6.setAttribute('id','circle');
    circle5.removeAttribute('id','circle');
    circle7.removeAttribute('id','circle');
}
function open2() {
    parent6.setAttribute('id','parent');
    parent5.setAttribute('id','parent1');
    parent5.removeAttribute('id','parent');
    parent4.setAttribute('id','parent1');
    parent4.style.display = 'none';
    parent5.style.display = 'none';
    parent6.style.display = 'grid'
    circle6.removeAttribute('id','circle');
    circle5.removeAttribute('id','circle');
    circle7.setAttribute('id','circle');
}
function open3() {
    parent6.removeAttribute('id','parent');
    parent4.setAttribute('id','parent');
    parent5.style.display = 'none';
    parent6.style.display = 'none';
    parent4.style.display = 'grid'
    circle7.removeAttribute('id','circle');
    circle6.removeAttribute('id','circle');
    circle5.setAttribute('id','circle');
}
    for(i = 0; i = 4; i++) {
        function crew() {
            count++
                if (count == 1) {
                    return slide1();
                } if (count == 2) {
                    return slide3();
                } if (count == 3){
                    return slide4()
                } if (count > 3){
                    return slide2();
                    
                }
        }
}

