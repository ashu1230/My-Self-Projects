//backensd call 

import axios from "axios"


export const apiClient = {
  async read(){
    //read

    try {
      const response = await axios.get(process.env.REACT_APP_NOTES_URL);
      return response.data.notes;
    } 
    catch(err) {
      throw err;
    }

    // try {
    //   const response = await axios.get(process.env.REACT_APP_NOTES_URL);
    //   return response.data.notes;
    // }
    // catch(err ){
    //   throw err;
    // }

    // const promise  = axios.get(process.env.REACT_APP_NOTES_URL);   //Async

    // console.log("promis is ", promise);
    // promise.then(result => {
    //   console.log('result is ', result.data.note);
    // }).catch(err => {
    //   console.log("error is ", err);
    // })
  },
  insert(){
    //insert
  },
  update(){

  },
  remove(){

  }
}