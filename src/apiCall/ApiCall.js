const Request = require('superagent');

const ApiCall = {
  /**
   * gets news source from newsapi
   * @returns {object} list of news source
   */
  getSources() {
    this.url = 'https://newsapi.org/v1/sources?language=en';
    return Request.get(this.url).then((res) => {
      const sourcelist = JSON.parse(res.text);
      return sourcelist.sources;
    }, () => {
    });
  },
  /**
   * gets articles from news api
   * @param {string} source news source
   * @param {string} sort news article sort parameter
   * @returns {object} articles
   */
  getNews(source = '', sort = '') {
    const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${sort}&apiKey=${process.env.API_KEY}`;
    return Request.get(url).then((res) => {
      const news = JSON.parse(res.text);
      return news.articles;
    }, () => {
    });
  }
};
export default ApiCall;
