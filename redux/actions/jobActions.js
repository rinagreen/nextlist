import { jobsConstants } from '../constants';
const axios = require('axios');

export const fetchAllJobs = () => dispatch => {
  dispatch({ type: jobsConstants.FETCH_JOBS_REQUEST });
  const config =  {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      "Accept": "application/json",
      'Cache-Control': 'no-cache',
    },
    withCredentials: true,
    credentials: 'same-origin'
  }
  fetchAllJobsService(config)
  .then( res => {
    dispatch({ type: jobsConstants.FETCH_JOBS_SUCCESS, payload: res });
  }).catch((error) => {
    console.log(error); 
    dispatch({ type: jobsConstants.FETCH_JOBS_FAILED });
  });
} 

/**
 * Services
 */
const fetchAllJobsService = (config) => {
  const corsAnywhere = `https://cors-anywhere.herokuapp.com/`
  return fetch( `${corsAnywhere}https://jobs.github.com/positions.json?description=api`, config ).then(res => res.json())
}


 