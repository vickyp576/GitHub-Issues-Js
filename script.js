let issues = document.getElementById("issues");
let crntPage = document.getElementById("page-number");
let prevbtn = document.getElementById('prev');
let nxtbtn = document.getElementById('next');
let pageNum = 1;
let result = [];
gitIssues(pageNum);
prevbtn.addEventListener('click', ()=>{
  if(pageNum<=1) {
    alert("you can't go back")
}
else{
    pageNum--
    gitIssues(pageNum)
}
})
nxtbtn.addEventListener('click', ()=>{
  pageNum++;
  gitIssues(pageNum);
})
async function gitIssues(pageNum){
  crntPage.innerText =`Page - ${pageNum}`
  await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNum}&per_page=5`)
  .then(res=>res.json())
  .then(data=>result=data)
  .catch(e=>console.log(e))
  issues.innerHTML =""
    result.map(data =>{
        issues.innerHTML +=`<li>${data.title} </li>`
    })
}



 
  
  

  