let comment = document.getElementById("comment_photo");
let addComment = document.getElementById("addComment2");
let textComment = document.getElementById("comment_info2");

addComment.onclick = function(){

textComment.innerHTML +=  comment.value + "</br>"



}
