import { ComponentStory, Meta, StoryObj } from '@storybook/react'
import { MyLabel } from '../../components/MyLabel/MyLabel'

const myLabel = {
	title: 'UI/Etiquetas/MyLabel',
	component: MyLabel,
} satisfies Meta<typeof MyLabel>

export default myLabel
type Story = StoryObj<typeof myLabel>

const Template: ComponentStory<typeof MyLabel> = (args: {}) => <MyLabel {...args} />
export const basic = Template.bind({})
export const AllCaps = Template.bind({})
export const Secondary = Template.bind({})
