import { Meta, StoryObj } from '@storybook/react'
import { MyLabel } from '../../components/MyLabel/MyLabel'

const myLabel = {
	title: 'UI/Etiquetas/MyLabel',
	tags: ['autodocs'],
	component: MyLabel,
} satisfies Meta<typeof MyLabel>

export default myLabel
type Story = StoryObj<typeof myLabel>

// const Template:  = (args: {}) => <MyLabel {...args} />
export const basic: Story = {
	args: {
		size: 'normal',
		allcaps: false //true: capitalizar toda la palabra
	},
}
export const AllCaps: Story = {
	args: {
		size: 'normal',
		allCaps: true,
	},
}
export const Secondary: Story = { args: {
	size: 'normal'
	color: 'secondary'
} }
export const Tertiary : Story = { args: {
	size: 'normal'
	color: 'Tertiary'
} }
