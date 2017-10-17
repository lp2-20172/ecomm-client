import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:8003",
  
  headers: {
    "Content-Type": "application/json",
    "Authorization":'Bearer vQTQa5kl6m5wlhPTlMj2CeVI0UN957'
    
  }
})