const promsify = (data: any) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

export async function retrieveData(searchTerm: string): Promise<any> {
  // const response = await fetch(`https://api.example.com/search?query=${searchTerm}`)
  // const data = await response.json()
  // return data.results

  return promsify([
    {
      id: 'id-1',
      title: 'DuckDuckGo — Privacy, simplified.',
      url: 'https://duckduckgo.com/',
    },
    {
      id: 'id-2',
      title: 'DuckDuckGo Privacy Browser - Apps on Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&hl=en_US&gl=US',
    },
    {
      id: 'id-3',
      title: 'DuckDuckGo - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/DuckDuckGo',
    },
  ])
}
