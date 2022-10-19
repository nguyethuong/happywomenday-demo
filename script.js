document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slideshow').appendChild(lists[0]);
}
document.getElementById('return').onclick = function(){
    let lists = document.querySelectorAll('item');
    document.getElementById('slideshow').appendChild(lists[lists.length-1]);
}
