const BASE_URL = "loquesea"

const headers = {
  'Content-Type': 'application/json'
}

const get = async (endpoit) => {
  const res = await fetch(`${endpoit}`, { headers })
  return await res.json()
}

const post = async (endpoit, data) => {
  const res = await fetch(`${endpoit}`, {
    method: "POST",
    headers,
    body: JSON.stringify(data)
  })
  return await res.json()
}

const put = async (endpoit, data) => {
  const res = await fetch(`${endpoit}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(data)
  })
  return await res.json()
}

const del = async () => {
  const res = await fetch(`${endpoit}`, {
    method: "DELETE",
    headers
  })
  return await res.json()
}


export default { get, post, put, del }