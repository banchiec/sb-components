import { ComponentStory, Meta, StoryObj } from '@storybook/react'
import { MyLabel } from '../../components/MyLabel/MyLabel'

const myLabel = {
	title: 'UI/Etiquetas/MyLabel',
	component: MyLabel,
} satisfies Meta<typeof MyLabel>

export default myLabel
type Story = StoryObj<typeof myLabel>

// const Template:  = (args: {}) => <MyLabel {...args} />
export const basic: Story = { args: {} }
export const AllCaps: Story = { args: {} }
export const Secondary: Story = { args: {} }
