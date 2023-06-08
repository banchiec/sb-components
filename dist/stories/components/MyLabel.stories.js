import { MyLabel } from '../../components/MyLabel/MyLabel';
var myLabel = {
    title: 'UI/Etiquetas/MyLabel',
    tags: ['autodocs'],
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
};
export default myLabel;
// const Template:  = (args: {}) => <MyLabel {...args} />
export var basic = {
    args: {
        size: 'normal',
        allcaps: false //true: capitalizar toda la palabra
    }
};
export var AllCaps = {
    args: {
        size: 'normal',
        allcaps: true
    }
};
export var Secondary = {
    args: {
        size: 'normal',
        color: 'secondary'
    }
};
export var Tertiary = {
    args: {
        size: 'normal',
        color: 'tertiary'
    }
};
export var CustomFontColor = {
    args: {
        size: 'h1',
        fontColor: '#5517ac'
    }
};
