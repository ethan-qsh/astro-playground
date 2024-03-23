import { sanityClient } from 'sanity:client'

export async function getSanity(query: any) {
	const response = await sanityClient.fetch(query)
	return response
}
