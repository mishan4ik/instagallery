let comment = document.getElementById("comment_photo");
let addComment = document.getElementById("addComment5");
let textComment = document.getElementById("comment_info5");

addComment.onclick = function(){

textComment.innerHTML +=  comment.value + "</br>"



}