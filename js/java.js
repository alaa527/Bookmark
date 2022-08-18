
var Sitename=document.getElementById("Sitename");
var Siteurl= document.getElementById("Siteurl");
var arr;
if(localStorage.getItem("storage")==null){
    arr =[];

}
else{
    arr=JSON.parse(localStorage.getItem("storage"));
display();
}

function btnsubmit(){
    var list = { SiteName: Sitename.value, SiteUrl: Siteurl.value }; 
arr.push(list);
localStorage.setItem("storage", JSON.stringify(arr));
display();
}

function display(){
    
  var  hasala=``
for(var i=0;i<arr.length;i++){
    hasala += `
    <div class="my-5 pt-3 pb-3  container" style="background-color: #EEE;>
<h2  class="d-inline ">`+arr[i].SiteName+`</h2>

<div class="d-flex justify-content-center">
  <a href="`+arr[i].SiteUrl+`" target="_blank" class="btn btn-primary ">Visit</a>
  
  <button onclick="Delete(`+i+`)" class="btn btn-danger ml-3 ">Delete</button>
</div>
</div>

 `;
}
document.getElementById("section2").innerHTML = hasala;
}

function Delete(indexi){
    arr.splice(indexi,1);
    display();
    localStorage.setItem("mystorage",JSON.stringify(arr))
    
    }