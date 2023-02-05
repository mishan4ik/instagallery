let comment = document.getElementById("comment_photo");
let addComment = document.getElementById("addComment1");
let textComment = document.getElementById("comment_info1");

addComment.onclick = function(){

textComment.innerHTML +=  comment.value + "</br>"



}