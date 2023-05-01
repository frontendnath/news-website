"Use Strict"

const apiData = {

  apiKey: 'a522b96ab3d14dd5a0778a085e2703f5',
  baseUrl: 'https://newsapi.org/v2/everything',
  baseUrlForHeadlines: 'https://newsapi.org/v2/top-headlines'

}


// getting headline news

const headlineUrl = `${apiData.baseUrlForHeadlines}?country=ng&apiKey=${apiData.apiKey}`

getHeadlines(headlineUrl);

async function getHeadlines(headlineData) {

  const res = await fetch(headlineData);
  const headlineNewsData = await res.json();

  showHeadlines(headlineNewsData);

}

function showHeadlines(apiHeadlineData) {

  const headlineNews = [...apiHeadlineData.articles];

  headlineNews.forEach((data) => {

    const extractedHeadlineNews = [data];

    const headlineNewsEl = document.getElementById('headlineNewsEl');

    const spanElement = document.createElement('span');

    spanElement.classList.add('me-2');

    extractedHeadlineNews.forEach((item) => {

      spanElement.innerHTML = `${item.title}.`

    });

    headlineNewsEl.appendChild(spanElement);

  });

}


// getting first three headline news 

const nodeElement = document.getElementById('nodeElement');

const firstThreeNewsUrl = `${apiData.baseUrl}?q=current&apiKey=${apiData.apiKey}`;

async function getFirstThreeNews(firstThreeNewsData) {

  const res = await fetch(firstThreeNewsData);
  const responseData = await res.json();

  showFirstThree(responseData);

}

getFirstThreeNews(firstThreeNewsUrl);

function showFirstThree(apiFirstThreeData) {

  console.log(apiFirstThreeData)

  const firstNews = document.createElement('div');
  firstNews.classList.add('col-md-5');

  firstNews.innerHTML = `
  
    <div>

      <h3 class="text-dark fw-bold">
        ${apiFirstThreeData.articles[0].title}
      </h3>

      <div class="img_box">
        <img src=${apiFirstThreeData.articles[0].urlToImage} width="100%" />
      </div>

      <div class="mt-3">
        <div class="small text-muted">
          <i class="far fa-user me-2"></i> Author: ${apiFirstThreeData.articles[0].author}
        </div>

        <h6 class="text-dark mt-2 border-bottom pb-3">
          ${apiFirstThreeData.articles[0].description}
        </h6>

        <div class="mt-2">
          <p class="text-muted small">
            ${apiFirstThreeData.articles[0].content}
          </p>
        </div>

        <div class="mt-3">
          <a href=${apiFirstThreeData.articles[0].url} target="_blank" class="text-primary text-decoration-none d-flex align-items-center">
            Read more <i class="fas fa-arrow-right text-decoration-none ms-2"></i>
          </a>
        </div>
      </div>

    </div>

  `;

  const secondNews = document.createElement('div');
  secondNews.classList.add('col-md-4');

  secondNews.innerHTML = `
  
    <div>
      <div class="img_box">
        <img src=${apiFirstThreeData.articles[1].urlToImage} width="100%" />
      </div>

      <div class="mt-3">
        <div class="small text-muted">
          <i class="far fa-user me-2"></i> Author: ${apiFirstThreeData.articles[1].author}
        </div>

        <h6 class="text-dark mt-2 border-bottom pb-3">
          ${apiFirstThreeData.articles[1].description}
        </h6>

        <div class="mt-2">
          <p class="text-muted small">
            ${apiFirstThreeData.articles[1].content}
          </p>
        </div>

        <div class="mt-3">
          <a href=${apiFirstThreeData.articles[1].url} target="_blank" class="text-primary text-decoration-none d-flex align-items-center">
            Read more <i class="fas fa-arrow-right text-decoration-none ms-2"></i>
          </a>
        </div>
      </div>

    </div>

  `;

  const thirdNews = document.createElement('div');
  thirdNews.classList.add('col-md-3');

  thirdNews.innerHTML = `
  
    <div>
      <div class="img_box">
        <img src=${apiFirstThreeData.articles[2].urlToImage} width="100%" />
      </div>

      <div class="mt-3">
        <div class="small text-muted">
          <i class="far fa-user me-2"></i> Author: ${apiFirstThreeData.articles[2].author}
        </div>

        <h6 class="text-dark mt-2 border-bottom pb-3" style="font-size: .9rem;">
          ${apiFirstThreeData.articles[2].description}
        </h6>

        <div class="mt-2">
          <p class="text-muted small">
            ${apiFirstThreeData.articles[2].content}
          </p>
        </div>

        <div class="mt-3">
          <a href=${apiFirstThreeData.articles[2].url} target="_blank" class="text-primary text-decoration-none d-flex align-items-center">
            Read more <i class="fas fa-arrow-right text-decoration-none ms-2"></i>
          </a>
        </div>
      </div>

    </div>

  `;

  nodeElement.append(firstNews, secondNews, thirdNews);

}

async function getLifeNews(lifeNewsApi) {

  const res = await fetch(lifeNewsApi);
  const data = await res.json();

  showLifeNews(data);

}

const lifeStyleUrl = `${apiData.baseUrl}?q=lifestyle&apiKey=${apiData.apiKey}`;

getLifeNews(lifeStyleUrl);

function showLifeNews(fetchedNewsApi) {

  const trendingTagsEl = document.getElementById('trendingTagsEl');

  const latestNewsTag = document.createElement('div');
  latestNewsTag.classList.add('col-md-4');

  latestNewsTag.innerHTML = `
  
    <div class="bg-light border d-flex align-items-center p-2">
      <strong class="fs-5">LifeStyle</strong>
    </div>

    <div class="mt-2">
      <img src=${fetchedNewsApi.articles[0].urlToImage} width="100%" alt="">

      <div class="mt-3">
        <div class="small text-muted mb-2">
          <i class="far fa-user me-2"></i> Author: ${fetchedNewsApi.articles[0].author}
        </div>

        <h6>${fetchedNewsApi.articles[0].title}</h6>

        <p class="mt-3 text-muted small">
          ${fetchedNewsApi.articles[0].content}
        </p>

        <div class="mt-3">
          <a href=${fetchedNewsApi.articles[0].url} class="text-primary text-decoration-none d-flex align-items-center">
            Read more <i class="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>

  `

  trendingTagsEl.append(latestNewsTag);

}

async function getTechNews(techNewsApi) {

  const res = await fetch(techNewsApi);
  const data = await res.json();

  showTechNews(data);

}

const techNewsUrl = `${apiData.baseUrl}?q=tech&apiKey=${apiData.apiKey}`;

getTechNews(techNewsUrl);

function showTechNews(fetchedNewsApi) {

  const trendingTagsEl = document.getElementById('trendingTagsEl');

  const latestNewsTag = document.createElement('div');
  latestNewsTag.classList.add('col-md-4');

  latestNewsTag.innerHTML = `
  
    <div class="bg-light border d-flex align-items-center p-2">
      <strong class="fs-5">Tech</strong>
    </div>

    <div class="mt-2">
      <img src=${fetchedNewsApi.articles[0].urlToImage} width="100%" alt="">

      <div class="mt-3">

        <div class="small text-muted mb-2">
          <i class="far fa-user me-2"></i> Author: ${fetchedNewsApi.articles[0].author}
        </div>

        <h6>${fetchedNewsApi.articles[0].title}</h6>

        <p class="mt-3 text-muted small">
          ${fetchedNewsApi.articles[0].content}
        </p>

        <div class="mt-3">
          <a href=${fetchedNewsApi.articles[0].url} class="text-primary text-decoration-none d-flex align-items-center">
            Read more <i class="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>

  `

  trendingTagsEl.append(latestNewsTag);

}

async function getsportNews(techNewsApi) {

  const res = await fetch(techNewsApi);
  const data = await res.json();

  showsportNews(data);

}

const sportNewsUrl = `${apiData.baseUrl}?q=soccer&apiKey=${apiData.apiKey}`;

getsportNews(sportNewsUrl);

function showsportNews(fetchedNewsApi) {

  const trendingTagsEl = document.getElementById('trendingTagsEl');

  const latestNewsTag = document.createElement('div');
  latestNewsTag.classList.add('col-md-4');

  latestNewsTag.innerHTML = `
  
    <div class="bg-light border d-flex align-items-center p-2">
      <strong class="fs-5">Sports</strong>
    </div>

    <div class="mt-2">
      <img src=${fetchedNewsApi.articles[0].urlToImage} width="100%" alt="">

      <div class="mt-3">
        <div class="small text-muted mb-2">
          <i class="far fa-user me-2"></i> Author: ${fetchedNewsApi.articles[2].author}
        </div>

        <h6>${fetchedNewsApi.articles[0].title}</h6>

        <p class="mt-3 text-muted small">
          ${fetchedNewsApi.articles[0].content}
        </p>

        <div class="mt-3">
          <a href=${fetchedNewsApi.articles[0].url} class="text-primary text-decoration-none d-flex align-items-center">
            Read more <i class="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>

  `

  trendingTagsEl.append(latestNewsTag);

}