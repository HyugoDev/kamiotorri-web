

export default async function getEpisodes(title) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ARUPPI}getEpisodes/${title}`, { next: { revalidate: 300 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}