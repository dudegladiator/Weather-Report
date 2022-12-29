const options = {
	method: 'GET',
	headers: {
		
	}
};
const getweather =(city)=>{
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=501af1ee37f4965ebcf4b42f8a7be1f7&units=metric", options)
.then(response => response.json())
	.then(response =>{ 
        
        Kolkata.innerHTML=response.name
        
        ID26.innerHTML=Math.round(response.main.temp)
        Rain.innerHTML=response.weather[0].main
        ID7.innerHTML=response.wind.speed.toFixed(1)
        ID7_z.innerHTML=response.main.humidity.toFixed(0)
        ID7_.innerHTML=response.main.pressure.toFixed(0)/10
        ID15.innerHTML=response.clouds.all
        ID7_ba.innerHTML=Math.round((response.visibility)/1000)
        IN.innerHTML=response.sys.country
        ID20_bb.innerHTML=response.main.feels_like.toFixed(1)
        
        ID10d.src = "http://openweathermap.org/img/w/"+response.weather[0].icon+".png";
        
        
    })
	.catch(err => console.error(err));
}
    getweather("kharagpur")

       
