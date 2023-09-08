


export default async function getDirectory() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ARUPPI}allDirectory`, { next: { revalidate: 86400 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()

}