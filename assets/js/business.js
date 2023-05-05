"Use Strict"

// apiData

const apiData = {

  apiKey: 'xackVAOA4jtfwNEwdsEOBPex22JSKesB',
  apiEndpoint: 'https://api.nytimes.com/svc/topstories/v2/business.json'

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


  dataExtract.forEach((data) => {

    const mainExtract = [data];

    const businessNews = document.getElementById('businessNews');

    const subElement = document.createElement('div');

    subElement.classList.add('col-md-3', 'mt-3');

    mainExtract.forEach((item) => {
      

      subElement.innerHTML = `
      
      <div>
        <div>
          <div class="img_box mb-2">
            <div class="tag bg-white shadow text-dark fw-light">
              ${item.section}
            </div>

            <img src=${item.multimedia[0].url} width="100%" alt=${item.multimedia[0].caption} />
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
      </div>

    `

    })

    businessNews.appendChild(subElement);

  })

}