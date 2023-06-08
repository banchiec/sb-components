import { Meta } from '@storybook/react'
import { MyLabel } from '../../components/MyLabel/MyLabel'

const myLabel = {
	title: 'UI/Etiquetas/MyLabel',
	component: MyLabel,
} satisfies Meta<typeof MyLabel>

export default myLabel

const Template = () => <MyLabel />
export const basic = Template.bind({})
export const AllCaps = Template.bind({})
export const Secondary = Template.bind({})
