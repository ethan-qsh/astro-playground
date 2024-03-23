import sanity from '@sanity/astro'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	integrations: [
		sanity({
			projectId: 'y8nkm6ah',
			dataset: 'production',
			// Set useCdn to false if you're building statically.
			useCdn: false
		}),
		react()
	]
})
