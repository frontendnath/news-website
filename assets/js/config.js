"Use Strict"

const apiData = {

  // newYork times api

  apiKey: 'xackVAOA4jtfwNEwdsEOBPex22JSKesB',
  worlNews: 'https://api.nytimes.com/svc/topstories/v2/world.json',
  headlineNews: 'https://api.nytimes.com/svc/news/v3/content/all/all.json',
  mostPopular: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json'

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

  const extractNews = [...worldNewsData.results]

  extractNews.shift();

  extractNews.forEach((data) => {

    const mainExtractForNodeEl = [data];

    const currentNewsEl = document.getElementById('currentNews');

    const subElement = document.createElement('div');

    subElement.classList.add('col-md-4', 'mt-3');

    mainExtractForNodeEl.forEach((item) => {

      console.log(item)

      subElement.innerHTML = `
      
        <div>
          <div class="img_box">
            <img src=${item.multimedia[0].url} width="100%" alt=${item.multimedia[0].caption} />

            <div class="bg-white tag position-absolute top-0 shadow">
              ${item.subsection}
            </div>
          </div>

          <div class="mt-3">
            <h4>
              ${item.title}
            </h4>

            <div class="mt-2">
              <p class="text-muted small">
                ${item.abstract} - ${item.byline}
              </p>

              <div class="mt-2">
                <a href=${item.url} target="_blank" class="text-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

      `;

    });

    currentNewsEl.appendChild(subElement);
    
  });

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
