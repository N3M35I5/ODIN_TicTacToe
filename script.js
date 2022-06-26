const gameboardModule = (() => {
    //console.log("Hi Mon");
    let board = [];
    const playerFactory = (name,symbol,turn,pos=[])=>{
        return {name,symbol,turn,pos};
    };
    const player1=playerFactory('Player1','X',true);
    const player2=playerFactory('Player2','O',false);
    const cells = document.querySelectorAll('.cells');
    cells.forEach(cell => {
        cell.addEventListener('click',(e)=>{
            if(player1.turn && cell.textContent == ''){
                board[e.target.id]=player1.symbol
                cell.textContent=player1.symbol;
                player1.turn=false;
                player2.turn=true;
            }
            else if (player2.turn && cell.textContent == ''){
                board[e.target.id]=player2.symbol
                cell.textContent=player2.symbol;
                player2.turn=false;
                player1.turn=true;
            }
            //console.log(board);
            validate();
        });        
    });
    const boardToArr = function(){
        let p1=[];
        let p2=[];
        for(let i=0 ; i<9; i++){
            if(board[i]==player1.symbol){
                p1.push(i);
            }
            else if(board[i]==player2.symbol){
                p2.push(i);
            }
        }
        player1.pos=p1;
        player2.pos=p2;
    };

    const isSubset = (array1, array2) => array2.every(element => array1.includes(element));

    const validate = function (){
        const winCombo = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        boardToArr();
        for(let w =0;w<winCombo.length;w++){
            winarr=winCombo[w];
            if(player1.pos.length>=3)
            {
                if(isSubset(player1.pos,winarr)){
                    result('W',player1.name);
                }
            }
            if(player2.pos.length>=3)
            {
                if(isSubset(player2.pos,winarr)){
                    result('W',player2.name);
                }
            }
        }
        if(player1.pos.length+player2.pos.length==9)
        {
            result('D');
        }
    };
    
    const result = function(status,name=''){
        const resultScreen = document.querySelector('.res');
        const resetBtn= document.createElement('button');
        resetBtn.textContent='Play Again';
        if(status=='D'){
            resultScreen.textContent='Draw...!';
            openTheWindow();
        }
        else if(status=='W'){
            resultScreen.textContent=name+' is the winner!';
            openTheWindow();
        }
        resultScreen.appendChild(resetBtn);
        resetBtn.addEventListener('click',()=>{
            cells.forEach(cell => {
                cell.textContent='';
            });
            board=[];
            player1.turn=true;
            player2.turn=false;
            closeTheWindow();
        });
    };
    function openTheWindow() {
        document.querySelector('.resultScreen').style.display = "block";
        blurBg();
    }
      
    function closeTheWindow() {
        document.querySelector('.resultScreen').style.display = "none";
        unBlurBg();
    }
    
    function blurBg(){
        const container = document.querySelector('.wrapper');
        container.classList.add('blur');
    }
    function unBlurBg(){
        const container = document.querySelector('.wrapper');
        container.classList.remove('blur');
    }
})();
