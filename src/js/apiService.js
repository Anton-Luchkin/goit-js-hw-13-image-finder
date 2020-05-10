const apiKey = '16457509-c82a76dcc46c9cf626ac69878';

export default {
  searchQuery: '',
  page: 1,
  
  fetchImg() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },

  set query(value) {
    this.searchQuery = value;
  },

};
