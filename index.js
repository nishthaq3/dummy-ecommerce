let btn=document.getElementById("searchBtn")
let allProducts=[]
//fetching api into a global array
async function getAPI(){
	let res=await fetch("https://fakestoreapi.com/products")
	let data= await res.json()
	allProducts=data

	showProducts(allProducts)
}
getAPI()

//creating info cards for the products
//create div
//add text to div
//append it to body
function showProducts(products){
	let container=document.getElementById("products")
	container.innerHTML=""
	//create a btn for each card, which shows its details
	products.forEach(p=>{
		let card=document.createElement("div")
		card.className="card";
		//we made a class for them so that styling is easy
		card.innerHTML=`
		<img src="${p.image}">
		<h5>${p.title}</h5>
		<p>Price: ₹${p.price}</p>
		`
		addDetails(card,p);
		//dotn send the entire array, just send a pratticular product
		container.appendChild(card)
	})
}
//now for the search button to work, we have to regisger it as an event
btn.addEventListener("click",()=>{
	//first store whatever value is beign typed into the button
	let text=document.getElementById("search").value
	//get the value beign typed in searchbox
	//now wat to do with that value?
	//filter it from the list of products that we have
	let filtered=allProducts.filter(p=>
		p.title.toLowerCase().includes(text.toLowerCase()))
		//searches the title after converting it to lower case and check if what user 
		//is typing is in the title
		showProducts(filtered)
})
function addDetails(card,product){
	//created a seperate func to add
	//buttons and then adding the event for the button
	let detailBtn=document.createElement("button")
	detailBtn.className="detailbtn"
	detailBtn.innerText="View details"
	
	detailBtn.addEventListener("click",()=>{
		//what to do after button is clicked?
		//make sure another tab opens which fetches the product by their id
		window.location.href=`productdetail.html?id=${product.id}`
	})

	card.appendChild(detailBtn);

	//window.location means this tab's location
	//href denotes what this tab points to
	//we are making it point topage productdetail.html whose url contains ?id=${product.id}
	//?id=${product.id} this is called a query parameter,syntax: ?key=value
	//query parameter lets u send data bw pages
	//now productdetail.html also recieves product id as data and can show the product using the id.
}