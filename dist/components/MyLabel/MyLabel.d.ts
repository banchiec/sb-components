import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     * */
    label?: string;
    /**
     * Este es el tamaño de la etiqueta
     * */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Si quiere todo capitalizado
     */
    allcaps?: boolean;
    /**
     * Colores básicos del botón
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color del background
     */
    fontColor?: string;
}
export declare const MyLabel: ({ allcaps, color, label, size, fontColor, }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
