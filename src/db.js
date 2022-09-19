import Dexie from "dexie"

export const db = new Dexie("myInsta")
// object stores
db.version(1).stores({
    // the first value in a pair
    // should be a key
    bio: ",name, about",
    // id will be autoincremented when
    // a new image is stored
    gallery: "++id, url",
})

export default db;