import './mylabel.css'

interface Props {
	label: string
	size: 'normal' | 'h1' | 'h2' | 'h3'
}

export const MyLabel = ({ label, size }: Props) => {
	return <span> Hola mundo</span>
}
