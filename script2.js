const options2 = {
	method: 'GET',
	headers: {
		
	}
};
const wikipedia =(city)=>{
fetch('https://en.wikipedia.org/api/rest_v1/page/summary/'+city, options2)
	.then(response => response.json())
	.then(response =>{
         
         City.innerHTML=response.titles.canonical
         Kolkata_is_the_capital_of_the_.innerHTML=response.extract+response.extract_html
         
         
         
         
    })
	.catch(err => console.error(err));
}
wikipedia("kharagpur")