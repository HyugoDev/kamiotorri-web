






export default async function getLastEpisodes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ARUPPI}LastEpisodes`, { next: { revalidate: 300 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()

}

