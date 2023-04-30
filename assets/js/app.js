"Use Strict"

const apiData = {

  apiKey: 'pub_2143166a94aeb909af273e669c3e25fc5cfa3',
  baseUrl: 'https://newsdata.io/api/1/'

};

const contentNode = document.getElementById('contentNode');

const searchForm = document.getElementById('searchForm');

searchForm.onsubmit = (e) => {

  e.preventDefault()

  const searchInputValue = document.getElementById('searchInput').value;
  
  console.log(searchInputValue);

};

getArticles(`${apiData.baseUrl}news?apiKey=${apiData.apiKey}`);

async function getArticles(url) {

  const res = await fetch(url);
  const data = await res.json();


  showArticles(data);

}

function showArticles(articles) {

  contentNode.innerHTML = '';



  const articleDataInArray = [articles];
  
  console.log(articleDataInArray)

  // articleDataInArray.push(articles.articles);

  // articleDataInArray.forEach((data) => {

  //   const articleMainEl = document.createElement('div');
  //   articleMainEl.classList.add('col-md-4', 'mt-3');

  //   articleMainEl.innerHTML = `
    
  //   <div>
  //     <img src=${data[0].urlToImage} width="100%" />
  //   </div>

  //   `

  //   console.log(data)

  //   contentNode.appendChild(articleMainEl);

  // });

}