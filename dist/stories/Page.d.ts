import './page.css';
export interface PageProps {
    user?: {};
    onCreateAccount: () => void;
    onLogin: () => void;
    onLogout: () => void;
}
export type User = {
    name: string;
};
export declare const Page: ({}: PageProps) => import("react/jsx-runtime").JSX.Element;
