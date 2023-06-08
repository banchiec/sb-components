import './mylabel.css'

interface Props {
	label: string
	size: 'normal' | 'h1' | 'h2' | 'h3'
}

export const MyLabel = () => {
	return <span> Hola mundo</span>
}
