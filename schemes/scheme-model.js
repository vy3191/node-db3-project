const db = require("../data/db-config");

function find() {
  
   return db("schemes").select();
}

function findById(id) {  
  return db("schemes").where({id}).first();
}

function findSteps() {
  
}

async function add(body) {
  const [id] = await db("schemes").insert(body);
  return db("schemes").where({id}).first();
}

async function update(body,id){
   await db("schemes").where({ id }).update(body);
   return findById(id)
}

function remove() {

}

module.exports = {
   find,
   findById,
   add,
   remove,
   update
}