import {createGlobalStyle} from "styled-components";

export const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 60,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

export const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#fff',
    backgroundColor: '#001529',
    padding: '1rem'
};

export const siderStyle: React.CSSProperties = {
   padding: '1rem',
};

export const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};

export const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
};
export const GlobalStyles = createGlobalStyle`

 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }


`