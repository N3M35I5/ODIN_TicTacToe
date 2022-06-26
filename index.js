
/*let board = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
];
let symbol=1;
let clickCount = 0;

const cells=document.querySelectorAll('.cells');

const display = function(a){
    
    for(let i =0; i<3;i++){
        for(let j=0;j<3;j++){
            if(a[i][j]==0){
                cells[i*3+j].textContent="O";
            }
            if(a[i][j]==1){
                cells[i*3+j].textContent="X";
            }
        }
    }
};

const playerSwitch = function(){
    if(symbol==1)
        symbol=0;
    else
        symbol=1
};

cells.forEach(cell => {
    cell.addEventListener('click',(e)=>{
        num=parseInt(e.target.id.slice(-1));
        i=Math.floor((num-1)/3);
        j=(num-1)%3;
        if(board[i][j]==-1){
            clickCount+=1;
            board[i][j]=symbol;
            playerSwitch();
            display(board);
            validate();
        }
    });    
});

const validate = function(){
  for(leti=0;i<3;i++){
    if(board[i][0]==board[i][1] && board[i][1]==board[i][2] && board[i][1]!=-1){
        console.log('yes');
        return  0;
    }
  }  
  for(letj=0;j<3;j++){
    if(board[0][j]==board[1][j] && board[1][j]==board[2][j] && board[1][j]!=-1){
        console.log('No');
        return 0;
    }
  }  
  if(board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[1][1]!=-1){
    console.log('dd');
    return 0;
  }
  if(board[0][2]==board[1][1] && board[1][1]==board[2][0] && board[1][1]!=-1){
    console.log('kk');
    return 0;
  }
  console.log(clickCount);
  if(clickCount==9){
    console.log('Draw');
    return 0;
  }
};

const result = function(val){
    
};

display(board);
*/