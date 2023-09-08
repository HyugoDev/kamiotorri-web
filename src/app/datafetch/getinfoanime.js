



export default async function getInfoAnime(title) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ARUPPI}moreInfo/${title}`, { next: { revalidate: 300 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}