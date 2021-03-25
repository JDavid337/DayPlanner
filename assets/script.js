var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');
var button = document.getElementById('button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=0005f3f86d450aa28699c2489b4161a4')
  .then(response => response.json())
  .then(data => console.log(data))

  .catch(err => alert('Please enter a valid city name'))
})

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value + '&appid=0005f3f86d450aa28699c2489b4161a4';

    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
        for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
        }
    });
}

fetchButton.addEventListener('click', getApi);
