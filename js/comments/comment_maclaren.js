let comment = document.getElementById("comment_photo");
let addComment = document.getElementById("addComment");
let textComment = document.getElementById("comment_info");

addComment.onclick = function(){

textComment.innerHTML +=  comment.value + "</br>"



}
