import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'q4iidoz7',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
})