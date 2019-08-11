let header = document.querySelector('.header__menu_mob');
let vis = document.querySelector('.vis');

if(window.innerWidth < 775){
    vis.style.visibility = 'hidden';
} 

header.onclick = function(){

    if(vis.style.visibility == 'hidden') {
        vis.style.visibility = 'visible';

    }  else  vis.style.visibility = 'hidden';
}
