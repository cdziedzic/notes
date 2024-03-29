/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a2xhn6xwn9kqwjr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6rfhx07h",
    "name": "content",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a2xhn6xwn9kqwjr")

  // remove
  collection.schema.removeField("6rfhx07h")

  return dao.saveCollection(collection)
})
