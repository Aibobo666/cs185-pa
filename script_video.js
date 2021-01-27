//video modal

var modal_v = document.getElementById("videoModal");
var previews_v = document.getElementsByClassName("MP4");
var original_v = document.getElementById("og-video");


for (var i = 0; i < previews_v.length; i++) {

    previews_v[i].onclick = function(e) {

        modal_v.classList.add("open");
        original_v.src = this.getElementsByTagName('source')[0].src;
        original_v.load();
    }
}

modal_v.addEventListener("click", (e) =>{
    if(e.target.classList.contains("modal_v")){
        modal_v.classList.remove("open");
        original_v.classList.remove("open");
    }
})