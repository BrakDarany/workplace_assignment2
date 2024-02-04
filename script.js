const loadingIndicator = document.getElementById('loading-indicator');
async function fetchingData(){
    
    const response = await fetch("https://qqknevh7guimnafkkwce5ajl6a0rrjxb.lambda-url.us-east-1.on.aws");
    // console.log(response);
    var dataJson = await response.json();
    // console.log(dataJson);
    var array = dataJson.data.result.entities;
    // console.log(dataa.data.result.entities);
    let tableData = "";
    var countID = 0;
    array.forEach(element => {
        countID = countID +1;
        // console.log(element)
        tableData += ` 
        <tr id="test">
            <td style="text-align: center;">${countID}</td>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.cases_count}</td>
            <td>${element.description}</td>
            <td>${element.created_at}</td>
        </tr>`
    });
    // console.log(array)
   
    document.getElementById("table_body").innerHTML = tableData; 
    loadingIndicator.style.display = 'none'; 
}


fetchingData()