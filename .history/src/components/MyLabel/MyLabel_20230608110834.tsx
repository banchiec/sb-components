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
	/**
	 * Si quiere todo capitalizado
	 */
	allcaps?: boolean
	/**
	 * Colores básicos del botón
	 */
	color?: 'primary' | 'secondary' | 'tertiary'
	/**
	 * Color del background
	 */
	fontColor?: string
}

export const MyLabel = ({
	allcaps = false,
	color = 'primary',
	label = 'No label',
	size = 'normal',
	fontColor = '',
}: MyLabelProps) => {
	return (
		<span className={`label ${size} text-${color}`} style={{ backgroundColor: `${fontColor}` }}>
			{allcaps ? label.toUpperCase() : label}
		</span>
	)
}
