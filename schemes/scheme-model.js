const db = require("../data/db-config");

function find() {  
   return db("schemes").select();
}

function findById(id) {  
  return db("schemes").where({id}).first();
}

function findSteps(id) {  
  return db("steps")
         .join("schemes", "schemes.id", "steps.scheme_id")
         .where({"steps.scheme_id":id})
         .select("steps.id", "schemes.scheme_name", "steps.step_number","steps.instructions")
         .orderBy("steps.step_number")
}

async function add(body) {
  const [id] = await db("schemes").insert(body);
  return db("schemes").where({id}).first();
}


async function update(body,id){
   await db("schemes").where({ id }).update(body);
   return findById(id)
}

 function remove(id) {
   return db("schemes").where({id}).del();
}

// Stretch goal
function addStep(step, scheme_id) {
   const newStep = {...step, scheme_id}
   const [id] = db("steps").insert(newStep);
   return db("steps").where({id})
}
module.exports = {
   find,
   findById,
   add,
   remove,
   update,
   findSteps,
   addStep
}