var clickBtn = document.getElementsByClassName('user')[0].getElementsByTagName('li');
var leftText = document.getElementsByClassName('leftText')[0].getElementsByClassName('choice')[0];
var rightText = document.getElementsByClassName('rightText')[0].getElementsByClassName('choice')[0];
var result = document.getElementsByClassName('result')[0];
var start = document.getElementsByClassName('start')[0]
var computerMove = document.getElementsByClassName('computer')[0].getElementsByTagName('ul')[0];
var group = ['石头','剪刀','布','石头'];
var time = 0;
var timer = null;
var user = 0;
var reset = document.getElementsByClassName('reset')[0]

  start.onclick = function () {
      clearInterval(timer)
    timer = setInterval( function () {
      if(computerMove.style.marginTop == '' || computerMove.style.marginTop == undefined || computerMove.style.marginTop == '-354px'){
          computerMove.style.marginTop = 0;
          time = 0; 
      }
      computerMove.style.marginTop = parseFloat(computerMove.style.marginTop) - 118 + 'px';
      time++;
      rightText.innerHTML = group[time]; 
    }, 70)

  }

  for(var i = 0; i < clickBtn.length; i++){
    (function(i){
        clickBtn[i].onclick = function (){
            if(timer == null ){
              alert('你还没点击开始游戏呢！');
              return;
            }
            if(result.innerHTML){
              alert('游戏已经结束了，重新开始吧！');
              return;
          }
            clickBtn[i].className = 'clicked' + (i + 1);
            leftText.innerHTML = group[i];
            clickBtn[i].style.border = '2px solid red'
            user = i;
            clearInterval(timer);
            if(time == 3){
                game(user, 0)
            }else {
                game(user, time)
            }
            
          }
    }(i))
  }
  function game(user, computer){
    var group = ['石头','剪刀','布'];
    if(computer - user == -1 || (user ==0 && computer == 2)){
       result.innerHTML = '你输了'
    }else if(computer - user == 1 || (user == 2 && computer == 0)){
       result.innerHTML = '你赢了'
    }else if(computer == user){
        result.innerHTML = '咋俩平局'
    }
}
    reset.onclick = function (){
        location.reload()
    }