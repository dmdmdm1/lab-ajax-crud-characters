class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + '/characters')
      .then(res => res.data);

  }

  getOneRegisterid(id) {
    return axios.get(this.BASE_URL + '/characters/' + id)
      .then(res => res.data);

  }

  createOneRegister(name, occupation, weapon, cartoon = false) {
    return axios.post(`http://localhost:8000/characters`, { name, occupation, weapon, cartoon })
      .then(res => res.data);

  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    return axios.put(this.BASE_URL + '/characters/', { name, occupation, weapon, cartoon })
      .then(res => res.data);
  }

  deleteOneRegister(id) {
    return axios.delete(this.BASE_URL + '/characters/' + id)

  }
}
