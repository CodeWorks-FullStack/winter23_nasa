// @ts-ignore
export const nasaApi = new axios.create({
  baseURL: 'https://api.nasa.gov',
  timeout: 20000,
  params: { api_key: "w587nM7wFTtxxIgueRbxzuByVObMKcbUUKAwh24b" }
})


// @ts-ignore
export const sandboxApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 2300,
  params: { stuff: 'no I do not need this' }
})
