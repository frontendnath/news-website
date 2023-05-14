"Use Strict"

const apiData = {

  apiKey: 'xackVAOA4jtfwNEwdsEOBPex22JSKesB ',
  apiPath: 'https://api.nytimes.com/svc/topstories/v2/',

};

// getting headlines

const headlineNewsFetchURL = `${apiData.apiPath}world.json?api-key=${apiData.apiKey}`;

async function headlineNewsFetchData(apiURL) {

  const res = await fetch(apiURL);
  const data = await res.json();

  showHeadlineNews(data);

}

headlineNewsFetchData(headlineNewsFetchURL);

function showHeadlineNews(newsData) {

  const headlineNewsElement = document.getElementById('headlineNews');

  // spreading the data gotten from the headlineNewsAPI
  const spreadHeadlineData = [...newsData.results]

  // looping through the spreadHeadlineData

  spreadHeadlineData.forEach((data) => {

    const spanElementsForHeadlineNewsElement = document.createElement('span');

    spanElementsForHeadlineNewsElement.classList.add('me-2');

    spanElementsForHeadlineNewsElement.innerHTML = `${data.title}.`;

    headlineNewsElement.appendChild(spanElementsForHeadlineNewsElement);

  });

}

// get world news

const worldNewsURL = `${apiData.apiPath}world.json?api-key=${apiData.apiKey}`;

async function getWorldNewsFetchData(apiURL) {

  const res = await fetch(apiURL);
  const data = await res.json();

  showWorldNews(data);

}

getWorldNewsFetchData(worldNewsURL);

function showWorldNews(newsData) {

  const worldNewsData = [...newsData.results];

  // const randomDataFromArray = Math.floor(Math.random() * worldNewsData.length);

  const worldNewsUpdateElement = document.getElementById('worldNewsUpdate');

  // console.log(worldNewsData);

  worldNewsUpdateElement.innerHTML = `
  
    <a href=${worldNewsData[1].url} class="text-decoration-none" target="_blank">
      <div class="img_box">
        <img src=${worldNewsData[1].multimedia[0].url} width="100%" alt=${worldNewsData[1].multimedia[0].caption} />

        <div class="tag text-danger bg-white">
          Breaking News
        </div>
      </div>

      <div class="title_box text-dark ps-md-3 pe-md-3 pt-4 pb-md-4">
        <h4>
          ${worldNewsData[1].title}
        </h4>

        <div class="mt-3">
          <p class="text-muted">
            ${worldNewsData[1].abstract}
          </p>

          <div class="mt-2 text-muted">
            - ${worldNewsData[1].byline === "" ? 'Null' : worldNewsData[1].byline}
          </div>
        </div>
      </div>
    </a>

  `;

}

// get poltics news to display in landing page

const politicalNewsURL = `${apiData.apiPath}politics.json?api-key=${apiData.apiKey}`;

async function getPoliticsNewsFetchData(apiURL) {

  const res = await fetch(apiURL);
  const data = await res.json();

  showPoliticalNewsData(data);

}

getPoliticsNewsFetchData(politicalNewsURL);

function showPoliticalNewsData(newsData) {

  console.log(newsData.results);

  const PoliticsElementFromHTML = document.getElementById('PoliticsElement');

  const colElmentForImage = document.createElement('div');
  const colElementForContent = document.createElement('div');

  colElmentForImage.classList.add('col-md-6');
  colElementForContent.classList.add('col-md-6');

  colElmentForImage.innerHTML = `
  
    <div class="img_box">
      <img src=${newsData.results[1].multimedia[0].url} width="100%" alt=${newsData.results[1].multimedia[0].caption} />
    </div>

  `;

  colElementForContent.innerHTML = `
  
    <div class="mt-2">
      <a href=${newsData.results[1].url} class="text-decoration-none text-dark" target="_blank">
        <h5 class="text-dark">
          ${newsData.results[1].title}
        </h5>
      </a>
      
      <div class="text-muted mt-2" style="font-size: .8rem;">
        ${newsData.results[1].abstract}
      </div>
    </div>

  `;

  PoliticsElementFromHTML.append(colElmentForImage, colElementForContent);

}