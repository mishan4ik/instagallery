let comment = document.getElementById("comment_photo");
let addComment = document.getElementById("addComment4");
let textComment = document.getElementById("comment_info4");

addComment.onclick = function(){

textComment.innerHTML +=  comment.value + "</br>"



}