const Request = require('superagent');

const NewsApi = {
  /**
   * @description gets news source from news api
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
   * @description gets articles from news api
   * @param {string} source news source
   * @param {string} sort news article sort parameter
   * @returns {object} articles
   */
  getNews(source = '', sort = '') {
    const baseUrl = 'https://newsapi.org/v1/articles?source=';
    const key = process.env.API_KEY;
    const url = `${baseUrl}${source}&sortBy=${sort}&apiKey=${key}`;
    return Request.get(url).then((res) => {
      const news = JSON.parse(res.text);
      return news.articles;
    }, () => {
    });
  }
};
export default NewsApi;
