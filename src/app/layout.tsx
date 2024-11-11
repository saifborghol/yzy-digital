import type { Metadata } from 'next';

import { Provider } from '@/components/ui/provider';
import { Layout } from '@/lib/layout';
import { ProductProvider } from '@/context/ProductContext';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'technical-test-for-yzy-by-saif';

export const metadata: Metadata = {
  title: { default: APP_NAME, template: '%s | technical-test-for-yzy-by-saif' },
  description: 'technical-test-for-yzy-by-saif',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ProductProvider>
          <Provider>
            <Layout>{children}</Layout>
          </Provider>
        </ProductProvider>
      </body>
    </html>
  );
};

export default RootLayout;
