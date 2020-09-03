import axios from 'axios';

export const getDreams = () => {
  debugger
  return axios.get('/api/dreams')
};

export const getThisDream = (id) => {
    return axios.get(`/api/dreams/${id}`)
  };

export const changeDream = dream => {
  return axios.patch(`/api/dreams/${dream.id}`,
   dream)
}

export const makeDream = dream => {
  debugger
  return axios.post('/api/dreams',
   dream)
}

export const removeDream = dream => {
  debugger
  return axios.delete(`/api/dreams/${dream._id}`)
}