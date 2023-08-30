var  named=document.querySelector("h5");
var addfriend=document.querySelector("#add");
var flag=0

addfriend.addEventListener("click",function(){
    if(flag==0){
        named.innerHTML="Friends"
        named.style.color="green"
        addfriend.innerHTML="Remove Friend"
        alert("Friends request Accepted")
        flag=1;
        

    }else{
        named.innerHTML="Stranger"
        named.style.color="red"
        addfriend.innerHTML="Add Friend"
        flag=0;
        alert("removed friend")
    }
  
})

//For likes

var photo=document.querySelector("img");
var likes=document.querySelector("i");

photo.addEventListener("dblclick",function(){
    likes.style.transform = "scale(1)";
    likes.style.opacity="0.8";
    

    setTimeout(function(){
        likes.style.opacity="0"
    },1000)
    setTimeout(function(){
        likes.style.transform = "scale(0)";
    },3000)

})

