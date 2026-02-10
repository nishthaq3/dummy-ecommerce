const params=new URLSearchParams(window.location.search)
const id=params.get("id")

//window.location.search searched the url of the page for queryparam
//urlsearchparams converted it to an object
//.get functuon got us the string value it sent

async function getProduct(){
	let res=await fetch(`https://fakestoreapi.com/products/${id}`)
	let data= await res.json()
	let detail=document.getElementById("productdetail")
	detail.innerHTML="";
	let detailcard=document.createElement("div")
	detailcard.className="productdetails"
	detailcard.innerHTML=`
	<img src=${data.image}>
	<h2>${data.title}</h2>
	<p>Description: ${data.description}</p>
	<h4>Category: ${data.category}</h4>
	<h4>Price: ₹${data.price}</h4>
	<h4>ID: ${data.id}</h4>
	<h4>Rating: ${data.rating.rate}</h4>
	`
	detail.appendChild(detailcard);

}
getProduct()