var v = 0 ;
document.querySelector('.button').addEventListener('click',()=>{
     if(v == 0 ){
     document.getElementById('lowest').style.cssText = "transform:translateY(0vh);"
     v = 1 ;
    }else{
      document.getElementById('lowest').style.cssText = "transform:translateY(14vh);"
     v = 0 ;
     }
})
var w = 0 ;
document.getElementById('pause_play_butt').addEventListener('click',()=>{
     if(w == 0 ){
    document.getElementById('play_butt').style.cssText = "display:none;"
    document.getElementById('pause_butt').style.cssText = "dispaly:block;"
     w = 1 ;
    }else{
    document.getElementById('play_butt').style.cssText = "dispaly:block;"
    document.getElementById('pause_butt').style.cssText = "display:none;"
     w = 0 ;
     }
})
