// @ts-ignore
export const nasaApi = new axios.create({
  baseURL: 'https://api.nasa.gov',
  timeout: 20000,
  params: { api_key: "w587nM7wFTtxxIgueRbxzuByVObMKcbUUKAwh24b" }
})

