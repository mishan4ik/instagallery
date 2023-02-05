let blockLike = document.getElementById("block_like");
let blockLike1 = document.getElementById("block_like1");
let blockLike2 = document.getElementById("block_like2");
let blockLike3 = document.getElementById("block_like3");
let blockLike4 = document.getElementById("block_like4");
let blockLike5 = document.getElementById("block_like5");
let like = document.getElementById("like");
let like1 = document.getElementById("like1");
let like2 = document.getElementById("like2");
let like3 = document.getElementById("like3");
let like4 = document.getElementById("like4");
let like5 = document.getElementById("like5");

let likes = 0
like.innerHTML = likes;
like1.innerHTML = likes;
like2.innerHTML = likes;
like3.innerHTML = likes;
like4.innerHTML = likes;
like5.innerHTML = likes;

blockLike.onclick = function(){

if(likes == 0){

    localStorage.setItem("likes",likes)
    likes = 1
    like.innerHTML = localStorage.getItem("likes"); 
}
else{
    localStorage.setItem("likes",likes)
    likes = 0
    like.innerHTML = localStorage.getItem("likes"); 

}

}

blockLike1.onclick = function(){

    if(likes == 0){
    
        localStorage.setItem("likes",likes)
        likes = 1
        like1.innerHTML = localStorage.getItem("likes"); 
    }
    else{
        localStorage.setItem("likes",likes)
        likes = 0
        like1.innerHTML = localStorage.getItem("likes"); 
    
    }
    
    }
    blockLike2.onclick = function(){

        if(likes == 0){
        
            localStorage.setItem("likes",likes)
            likes = 1
            like2.innerHTML = localStorage.getItem("likes"); 
        }
        else{
            localStorage.setItem("likes",likes)
            likes = 0
            like2.innerHTML = localStorage.getItem("likes"); 
        
        }
        
        }

        blockLike3.onclick = function(){

            if(likes == 0){
            
                localStorage.setItem("likes",likes)
                likes = 1
                like3.innerHTML = localStorage.getItem("likes"); 
            }
            else{
                localStorage.setItem("likes",likes)
                likes = 0
                like3.innerHTML = localStorage.getItem("likes"); 
            
            }
            
            }
            blockLike4.onclick = function(){

                if(likes == 0){
                
                    localStorage.setItem("likes",likes)
                    likes = 1
                    like4.innerHTML = localStorage.getItem("likes"); 
                }
                else{
                    localStorage.setItem("likes",likes)
                    likes = 0
                    like4.innerHTML = localStorage.getItem("likes"); 
                
                }
                
                }
                blockLike5.onclick = function(){

                    if(likes == 0){
                    
                        localStorage.setItem("likes",likes)
                        likes = 1
                        like5.innerHTML = localStorage.getItem("likes"); 
                    }
                    else{
                        localStorage.setItem("likes",likes)
                        likes = 0
                        like5.innerHTML = localStorage.getItem("likes"); 
                    
                    }
                    
                    }