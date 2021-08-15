const getCountries=(value)=>{
    const xhr = new XMLHttpRequest();
    // data - API endpoint (URL which contains json data)
    xhr.open('GET','https://restcountries.eu/rest/v2/all');
    // xhr.responseType = 'json';    
    xhr.onload = () =>{
        const countries = xhr.response;    
        const countries_with_high_pop=[];        
        const val=JSON.parse(countries)
        for(let i in val)
        {
            let obj={};
            if(val[i].population>=10_00_00_000)
            {
                obj.name=val[i].name;
                obj.population=val[i].population;
                countries_with_high_pop.push(obj);
            }            
        }
        console.log(countries_with_high_pop);
    }    
    xhr.send();
}

getCountries();