require('./db')
const Entity = require('./models/Entity')

const defaultThen = data => console.log('ok: ', data)

const entitiesToSeed = [
  { name: '1 entity', subEntities: new Array(10).fill(0).map((item, index) => ({name: `1 entity ${index + 1} subentity`}))},
  { name: '2 entity', subEntities: new Array(10).fill(0).map((item, index) => ({name: `2 entity ${index + 1} subentity`}))},
  { name: '3 entity', subEntities: new Array(10).fill(0).map((item, index) => ({name: `3 entity ${index + 1} subentity`}))},
  { name: '4 entity', subEntities: new Array(10).fill(0).map((item, index) => ({name: `4 entity ${index + 1} subentity`}))},
  { name: '5 entity', subEntities: new Array(10).fill(0).map((item, index) => ({name: `5 entity ${index + 1} subentity`}))},
  { name: '6 entity', subEntities: new Array(10).fill(0).map((item, index) => ({name: `6 entity ${index + 1} subentity`}))},
  { name: '7 entity', subEntities: new Array(10).fill(0).map((item, index) => ({name: `7 entity ${index + 1} subentity`}))},
  { name: '8 entity', subEntities: new Array(10).fill(0).map((item, index) => ({name: `8 entity ${index + 1} subentity`}))},
  { name: '9 entity', subEntities: new Array(10).fill(0).map((item, index) => ({name: `9 entity ${index + 1} subentity`}))},
  { name: '10 entity', subEntities: new Array(10).fill(0).map((item, index) => ({name: `10 entity ${index + 1} subentity`}))},
]


async function seedEntities() {
  await Entity.create(entitiesToSeed).then(defaultThen)
}

async function clearEntites() {
  // removes all documents
  await Entity.deleteMany({}).then(defaultThen)
}
clearEntites()
seedEntities()
