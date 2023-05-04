"Use Strict"

const apiData = {

  // newYork times api

  apiKey: 'xackVAOA4jtfwNEwdsEOBPex22JSKesB',
  headlineNews: 'https://api.nytimes.com/svc/news/v3/content/all/all.json',

  usNews: 'https://api.nytimes.com/svc/topstories/v2/us.json'

}

// getting headlineNews

const date = new Date();

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

// get us politics news

const usNewsURL = `${apiData.usNews}?api-key=${apiData.apiKey}`;

async function getUsNews(fetchUSNewsAPI) {

  const res = await fetch(fetchUSNewsAPI);
  const data = await res.json();

  showUSNews(data);

}

getUsNews(usNewsURL);

function showUSNews(dataFromUSNewsAPI) {

  const extractNewsFromAPI = [...dataFromUSNewsAPI.results];

  extractNewsFromAPI.forEach((data) => {

    const usPolitics = document.getElementById('usPolitics');

    const subElement = document.createElement('div');

    const mainExtract = [data];

    subElement.classList.add('col-md-3', 'mt-3');
    
    mainExtract.forEach((item) => {

      subElement.innerHTML = `
      
        <div>
          <div>
            <div class="img_box mb-2">
              <div class="tag bg-white shadow text-dark fw-light">
                ${item.item_type} | ${item.section}
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

    });

    usPolitics.appendChild(subElement);

  })

}

// show scrollToTopBtn

const scrollToTop = document.getElementById('scrollToTop');

window.onscroll = () => {

  if(window.scrollY >= 60 ) {

    scrollToTop.classList.add('show');

  } else {

    scrollToTop.classList.remove('show');

  }

}

scrollToTop.onclick = () => {

  document.documentElement.scrollTop = 0;

}