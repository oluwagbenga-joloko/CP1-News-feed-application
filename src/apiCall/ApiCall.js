const Request = require('superagent');

const ApiCall = {
  /**
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
   * @param {string} source
   * @param {string} sort
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
