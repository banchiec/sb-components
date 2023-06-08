import './mylabel.css'

interface MyLabelProps {
	/**
	 * Este es el mensaje a mostrar en la etiqueta
	 * */
	label?: string
	/**
	 * Este es el tamaño de la etiqueta
	 * */
	size?: 'normal' | 'h1' | 'h2' | 'h3'
	allcaps: boolean
	color?: string
}

export const MyLabel = ({ label = 'No label', size = 'normal' }: MyLabelProps) => {
	return <span className={`${size}`}>{label}</span>
}
