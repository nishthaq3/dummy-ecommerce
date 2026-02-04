const params=new URLSearchParams(window.location.search)
const id=params.get("id")

//window.location.search searched the url of the page for queryparam
//urlsearchparams converted it to an object
//.get functuon got us the string value it sent

//fetch api again, this time with the id used
const img=document.getElementById("image")
const title=document.getElementById("title")
const desc=document.getElementById("desc")
const category=document.getElementById("category")
const price=document.getElementById("price")
const ids=document.getElementById("ids")
const rating=document.getElementById("rating")

async function getProduct(){
	let res=await fetch(`https://fakestoreapi.com/products/${id}`)
	let data= await res.json()

	img.src=data.image;
	title.textContent=data.title;
	desc.textContent="Description: "+data.description
	category.textContent="Category: "+data.category
	price.textContent="Price: ₹"+data.price
	ids.textContent="ID: "+data.id
	rating.textContent="Rating: "+data.rating.rate

}
getProduct()