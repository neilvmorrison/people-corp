import React from 'react';
import Document from 'next/document';
import {
  SheetsRegistry,
  JssProvider,
  createGenerateId,
  ThemeProvider,
} from 'react-jss';
import theme from '../components/lib/theme';

export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <ThemeProvider theme={theme}>
            <JssProvider registry={registry} generateId={generateId}>
              <App {...props} />
            </JssProvider>
          </ThemeProvider>
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    };
  }
}
