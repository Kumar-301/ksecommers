
import { APIURL } from "./apiurl";
import axios from "axios";
function getProducts(){
    return axios.get(APIURL)
}
function deleteProducts(id){
    return axios.delete(`${APIURL}${id}`)
}
function addProducts(state){
    return axios.post(APIURL,state)
}
function getProductsbyId(id){
    return axios.get(`${APIURL}${id}`)
}
function updateProducts(id,state){
    return axios.put(`${APIURL}${id}`,state)
}
export {getProducts,getProductsbyId,updateProducts,addProducts,deleteProducts}
