const deleteProduct=(btn,cId,cToken)=>{
    // console.log(btn.parentNode.querySelector("[name=productId]").value);btn argument that i am accessing that i have pass as this 
    // and if you don't want to reload the page so use button as type="button" instead of submit and at where you are using javascript to fetch data so you don't need form tag

     
    const productElement=btn.parentNode.parentNode;
    const categoryId=cId;
    const csrfToken=cToken;
    // console.log(categoryId,csrfToken); 

    fetch("/admin/category/"+categoryId+"/delete",{
        method:"DELETE",
        headers:{
            "csrf-token":csrfToken
        }
    }).then((result)=>{
       return result.json();
    })
    .then((data)=>{
        // productElement.remove();//this not work in internet explorer
        productElement.parentNode.removeChild(productElement);
    })
    .catch((error)=>{console.log(error)});
};