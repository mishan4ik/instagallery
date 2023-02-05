let comment = document.getElementById("comment_photo");
let addComment = document.getElementById("addComment3");
let textComment = document.getElementById("comment_info3");

addComment.onclick = function(){

textComment.innerHTML +=  comment.value + "</br>"



}