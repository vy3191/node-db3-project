const db = require("../data/db-config");

function find() {
  
   return db("schemes").select();
}

function findById(id) {
  return db("schemes").where({id}).first();
}

function findSteps() {
  
}

function add(body) {
  const [id] = db("schemes").insert(body);
  return db("schemes").where({id}).first();
}

function update(){

}

function remove() {

}

module.exports = {
   find
}