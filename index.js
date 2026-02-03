let allProducts=[]
//fetching api into a global array
async function getAPI(){
	let res=await fetch("https://fakestoreapi.com/products")
	let data= await res.json()
	allProducts=data

	showProducts()
}
getAPI()

//creating info cards for the products
//create div
//add text to div
//append it to body
function showProducts(){
	allProducts.forEach(p=>{
		let card=document.createElement("div")
		card.className="card";
		//we made a class for them so that styling is easy
		card.innerHTML=`
		<img src="${p.image}">
		<h5>${p.title}</h5>
		<h5>Price: ₹${p.price}</h5>
		`
		document.getElementById("products").appendChild(card)
	})
}
