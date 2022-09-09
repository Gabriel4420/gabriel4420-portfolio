/* eslint-disable import/no-anonymous-default-export */

const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.DATOCMS_API_TOKEN

const fetchCmsAPI = async (query: string, variables?: {}) => {
  //

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllTecnologies() {
  //
  const data = await fetchCmsAPI(
    `
  {
    allTechnologies {
      id
      name
      logo {
        alt
        url
      }
    }
  }
      `,
  )

  return data?.allTechnologies
}

export async function getAllServices() {
  const data = await fetchCmsAPI(`{allServices {
    title
    shortDescription
    icon {
      alt
      url
    }
  }}`)

  return data?.allServices
}

export async function getAllProjects() {
  const data = await fetchCmsAPI(`{allProjetos {
    imagemDoProjeto {
      url
      alt
    }
    linkDoProjeto
    titulo
    descriO
  }}`)

  return data?.allProjetos
}

export default { getAllTecnologies, getAllServices, getAllProjects }
