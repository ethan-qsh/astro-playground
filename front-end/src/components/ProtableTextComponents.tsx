import React from 'react'
import { urlForImage } from '../lib/urlForImage'
// React icon for a link with fill color

export const myPortableTextComponents = {
	types: {
		image: ({ value }: any) => {
			const imageUrl = urlForImage(value).format('webp').url()
			return <img src={`${imageUrl}`} alt="test alt" />
		},
		list: (node: any) => {
			return (
				<ul>
					{node.children.map((child: any, index: any) => (
						<li key={index}>{child}</li>
					))}
				</ul>
			)
		},
		divider: ({ value }: any) => {
			return <div style={{ height: `${value.height}px` }} />
		}
	},

	marks: {
		span: ({ children }: any) => <sup className="sup">{children}</sup>,
		link: (node: any) => {
			return (
				<a href={node.value.link} target={node.value._blank ? '_blank' : undefined}>
					{node.children}
				</a>
			)
		}
	}
}
