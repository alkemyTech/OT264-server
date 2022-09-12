class ApiUtils {
  static async getBaseUrl(req) {
    return `${req.protocol}://${req.get('host')}${req.baseUrl}`;
  }
  static async getPagination(baseUrl, page, total) {
    const nextPage = total / 10 > page ? `${baseUrl}?page=${page + 1}` : null;
    const previousPage = page < 1 ? null : `${baseUrl}?page=${page - 1}`;
    const pages = { nextPage, currentPage: page, previousPage };

    return pages;
  }
}

module.exports = ApiUtils;
