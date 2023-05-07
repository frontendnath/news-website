"Use Strict"

// apiData

const apiData = {

  apiKey: 'xackVAOA4jtfwNEwdsEOBPex22JSKesB',
  headlineNews: 'https://api.nytimes.com/svc/news/v3/content/all/all.json',
  apiEndpoint: 'https://api.nytimes.com/svc/topstories/v2/health.json'

}

// getting headlineNews

const topHeadlineURL = `${apiData.headlineNews}?api-key=${apiData.apiKey}`;

async function topHeadlineNews(topHeadlineFetchAPI) {

  const res = await fetch(topHeadlineFetchAPI);
  const data = await res.json();

  showTopHeadlines(data);

}

topHeadlineNews(topHeadlineURL);

function showTopHeadlines(headlineNewsData) {

  const headlineNewsEl = document.getElementById('headlineNewsEl');

  const extractedHeadlineContnet = [...headlineNewsData.results];

  extractedHeadlineContnet.forEach((data) => {

    const spanElement = document.createElement('span');
    spanElement.classList.add('pe-2');

    const mainExtract = [data];

    mainExtract.forEach((item) => {

      spanElement.innerHTML = `${item.title}.`;

    });

    headlineNewsEl.appendChild(spanElement);

  });
  
}

const newsURL = `${apiData.apiEndpoint}?api-key=${apiData.apiKey}`;

async function getNewsData(newsData) {

  const res = await fetch(newsData);
  const data = await res.json();

  showNews(data);

}

getNewsData(newsURL);

function showNews(newsDataFromAPI) {

  const dataExtract = [...newsDataFromAPI.results];

  console.log(dataExtract);

  dataExtract.forEach((data) => {

    const mainExtract = [data];

    const healthNewsEl = document.getElementById('healthNews');

    const subElement = document.createElement('div');

    subElement.classList.add('col-md-3', 'mt-3');

    mainExtract.forEach((item) => {

      subElement.innerHTML = `
      
        <div>
          <div class="img_box mb-2">
            <div class="tag top-0 bg-white shadow fw-light text-dark">
              ${item.section}
            </div>

            <img src=${item.multimedia[0].url} width="100%" alt=${item.multimedia[0].caption} />
          </div>

          <div class="mt-3">
            <h6>
              ${item.title}
            </h6>
          </div>
        </div>

      `;

    });

    healthNewsEl.appendChild(subElement);

  })

}