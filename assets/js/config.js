"Use Strict"

const apiData = {

  // newYork times api

  apiKey: 'xackVAOA4jtfwNEwdsEOBPex22JSKesB',
  worlNews: 'https://api.nytimes.com/svc/topstories/v2/world.json',
  headlineNews: 'https://api.nytimes.com/svc/news/v3/content/all/all.json',
  mostPopular: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json',
  articlesEndpoint: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election'

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

// getting top-stories

const wordlNewsURL = `${apiData.worlNews}?api-key=${apiData.apiKey}`;

async function topWorlNews(worlNewsFetchAPI) {

  const res = await fetch(worlNewsFetchAPI);
  const data = await res.json();

  showTopWorlNews(data);

}

topWorlNews(wordlNewsURL);

function showTopWorlNews(worldNewsData) {

  const topStories = document.getElementById('topStories');

  const randomArrayDataFromAPI = Math.floor(Math.random() * worldNewsData.results.length);
  const randomArrayDataFromAPI2 = Math.floor(Math.random() * worldNewsData.results.length);
  const randomArrayDataFromAPI3 = Math.floor(Math.random() * worldNewsData.results.length);

  const topStoriesChildElement = document.createElement('div');
  const topStoriesChildElement2 = document.createElement('div');
  const topStoriesChildElement3 = document.createElement('div');

  topStoriesChildElement.classList.add('col-md-5', 'mt-3');
  topStoriesChildElement2.classList.add('col-md-4', 'mt-3');
  topStoriesChildElement3.classList.add('col-md-3', 'mt-3');

  topStoriesChildElement.innerHTML = `
  
    <div>
      <div>
        <h3 class="title text-dark">
          ${worldNewsData.results[randomArrayDataFromAPI].title}
        </h3>
      </div>

      <div class="mt-2">
        <div class="img_box">
          <div class="tag bg-white shadow text-dark fw-light">
            ${worldNewsData.results[randomArrayDataFromAPI].section}. ${worldNewsData.results[randomArrayDataFromAPI].subsection} 
          </div>

          <img src=${worldNewsData.results[randomArrayDataFromAPI].multimedia[0].url} width="100%" alt="${worldNewsData.results[randomArrayDataFromAPI].multimedia[0].caption}" />

          <div class="text-muted small">
            Image source: ${worldNewsData.results[randomArrayDataFromAPI].multimedia[0].copyright}
          </div>
        </div>

        <div class="mt-3">
          <div class="text-muted small">
            Source: ${worldNewsData.results[randomArrayDataFromAPI].byline}
          </div>

          <h6 class="text-dark">
            ${worldNewsData.results[randomArrayDataFromAPI].abstract}
          </h6>

          <div class="mt-3">
            <a href=${worldNewsData.results[randomArrayDataFromAPI].url} class="text-primary text-decoration-underline" target="_blank">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>

  `;

  topStoriesChildElement2.innerHTML = `
  
    <div>
      <div>
        <div class="img_box mb-2">
          <div class="tag bg-white shadow text-dark fw-light">
            ${worldNewsData.results[randomArrayDataFromAPI2].section}. ${worldNewsData.results[randomArrayDataFromAPI2].subsection} 
          </div>

          <img src=${worldNewsData.results[randomArrayDataFromAPI2].multimedia[0].url} width="100%" alt="${worldNewsData.results[randomArrayDataFromAPI2].multimedia[0].caption}" />

          <div class="text-muted small">
            Image source: ${worldNewsData.results[randomArrayDataFromAPI2].multimedia[0].copyright}
          </div>
        </div>

        <div class="mt-3">
          <h5 class="title text-dark">
            ${worldNewsData.results[randomArrayDataFromAPI2].title}
          </h5>

          <div class="text-muted small">
            Source: ${worldNewsData.results[randomArrayDataFromAPI2].byline}
          </div>

          <p class="text-muted small">
            ${worldNewsData.results[randomArrayDataFromAPI2].abstract}
          </p>

          <div class="mt-3">
            <a href=${worldNewsData.results[randomArrayDataFromAPI2].url} class="text-primary text-decoration-underline" target="_blank">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>

  `;

  topStoriesChildElement3.innerHTML = `
    
    <div>
      <div>
        <div class="img_box mb-2">
          <div class="tag bg-white shadow text-dark fw-light">
            ${worldNewsData.results[randomArrayDataFromAPI3].section}. ${worldNewsData.results[randomArrayDataFromAPI3].subsection} 
          </div>

          <img src=${worldNewsData.results[randomArrayDataFromAPI3].multimedia[0].url} width="100%" alt="${worldNewsData.results[randomArrayDataFromAPI3].multimedia[0].caption}" />

          <div class="text-muted small">
            Image source: ${worldNewsData.results[randomArrayDataFromAPI3].multimedia[0].copyright}
          </div>
        </div>

        <div class="mt-3">
          <h5 class="title text-dark">
            ${worldNewsData.results[randomArrayDataFromAPI3].title}
          </h5>

          <div class="text-muted small">
            Source: ${worldNewsData.results[randomArrayDataFromAPI3].byline}
          </div>

          <p class="text-muted small">
            ${worldNewsData.results[randomArrayDataFromAPI3].abstract}
          </p>

          <div class="mt-3">
            <a href=${worldNewsData.results[randomArrayDataFromAPI3].url} class="text-primary text-decoration-underline" target="_blank">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>

  `;

  topStories.append(topStoriesChildElement, topStoriesChildElement2, topStoriesChildElement3);

}

// get top news

const mostPopularNewsUrl = `${apiData.mostPopular}?api-key=${apiData.apiKey}`;

async function getPopularNews(fetchPopularNewsAPI) {

  const res = await fetch(fetchPopularNewsAPI);
  const data = await res.json();

  showPopularNews(data);

}

getPopularNews(mostPopularNewsUrl);

function showPopularNews(newsData) {

  const extractNewsData = [...newsData.results.books];

  extractNewsData.forEach((data) => {

    const mainExtract = [data];

    const topNews = document.getElementById('topNews');
    
    const topNewsSubEl = document.createElement('div');
    topNewsSubEl.classList.add('col-md-3', 'mt-3');

    mainExtract.forEach((item) => {

      topNewsSubEl.innerHTML = `
      
        <div>
          <div class="img_box mb-2">
            <img src=${item.book_image} width="100%" alt=${item.description} />
          </div>

          <div>
            <h5 class="text-dark">
              ${item.title}
            </h5>

            <p class="text-muted small mt-2">
              ${item.description}
            </p>

            <div class="mt-2 text-muted small">
              Author: ${item.author}.
            </div>

            <div class="mt-3">
              <a target="_blank" href=${item.buy_links[0].url} class="btn btn-primary btn-sm text-decoration-none">
                Get Book
              </a>
            </div>
          </div>
        </div>

      `

    })

    topNews.appendChild(topNewsSubEl);

  })

}

// get articles

const articlesURL = `${apiData.articlesEndpoint}&api-key=${apiData.apiKey}`;

async function getArticles(fetchArticlesAPI) {

  const res = await fetch(fetchArticlesAPI);
  const data = await res.json();

  showArticles(data);

}

getArticles(articlesURL);

function showArticles(articlesAPIData) {

  const extractedContent = [...articlesAPIData.response.docs];

  extractedContent.forEach((data) => {

    const mainExtract = [data];

    const articlesElement = document.getElementById('articlesElement');

    const subElement = document.createElement('div');

    subElement.classList.add('col-md-3', 'mt-3');

    console.log(data);

    mainExtract.forEach((item) => {

    subElement.innerHTML = `
  
      <div>
        <div>
          <div class="img_box mb-2">
            <div class="tag bg-white shadow text-dark fw-light">
              ${item.news_desk}. 
            </div>
  
            <img src=https://static01.nyt.com/${item.multimedia[0].url} width="100%" alt="${item.headline.main}" />
          </div>
  
          <div class="mt-3">
            <h6 class="title text-dark">
              ${item.headline.main}
            </h6>
  
            <div class="text-muted small">
              Source: ${item.byline.original}
            </div>
  
            <p class="text-muted small">
              ${item.abstract}
            </p>
  
            <div class="mt-3">
              <a href=${item.web_url} class="text-primary text-decoration-underline" target="_blank">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
  
    `;

    })

    articlesElement.appendChild(subElement);

  })

}