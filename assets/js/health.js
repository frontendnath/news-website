"Use Strict"

// apiData

const apiData = {

  apiKey: 'xackVAOA4jtfwNEwdsEOBPex22JSKesB',
  headlineNews: 'https://api.nytimes.com/svc/news/v3/content/all/all.json',
  apiEndpoint: 'https://api.nytimes.com/svc/topstories/v2/automobiles.json'

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

// getting health news

const healthNewsURL = `${apiData.apiEndpoint}?api-key=${apiData.apiKey}`

async function getHealthNews(fetchAPIData) {

  const res = await fetch(fetchAPIData);
  const data = await res.json();

  showHealthNewsData(data);

}

getHealthNews(healthNewsURL);

function showHealthNewsData(collectedDataFromAPI) {

  const extractedDataFromResult = [...collectedDataFromAPI.results];

  extractedDataFromResult.forEach((data) => {

    const extractFromData = [data];

    const healthNews = document.getElementById('healthNews');

    const healthNewsSubElement = document.createElement('div');

    healthNewsSubElement.classList.add('col-md-3', 'mt-3');

    extractFromData.forEach((item) => {

      healthNewsSubElement.innerHTML = `
      
        <div>
          <div class="img_box">
            <img src=${item.multimedia[0].url} width="100%" alt=${item.multimedia[0].caption} />

            <div class="tag top-0 bg-white shadow">
              ${item.section}
            </div>
          </div>

          <div class="mt-3">
            <h6 class="title text-dark">
              ${item.title}
            </h6>

            <div class="text-muted small">
              Source: ${item.byline}
            </div>

            <p class="text-muted small mt-2">
              ${item.abstract}
            </p>

            <div class="mt-3">
              <a href=${item.url} class="text-primary text-decoration-underline" target="_blank">
                Read more
              </a>
            </div>
          </div>
        </div>

      `

    })

    healthNews.appendChild(healthNewsSubElement);

  })
  
}