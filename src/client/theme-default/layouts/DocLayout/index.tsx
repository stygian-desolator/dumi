import { useIntl, useOutlet, useRouteMeta } from 'dumi';
import Content from 'dumi/theme/slots/Content';
import Header from 'dumi/theme/slots/Header';
import Sidebar from 'dumi/theme/slots/Sidebar';
import React, { type FC } from 'react';
import Helmet from 'react-helmet';
import './index.less';

const DocLayout: FC = () => {
  const intl = useIntl();
  const outlet = useOutlet();
  const { frontmatter: fm } = useRouteMeta();

  return (
    <div className="dumi-default-doc-layout">
      <Helmet>
        <html lang={intl.locale.replace(/-.+$/, '')} />
        {fm.title && <title>{fm.title}</title>}
        {fm.title && <meta property="og:title" content={fm.title} />}
        {fm.description && <meta name="description" content={fm.description} />}
        {fm.description && (
          <meta property="og:description" content={fm.description} />
        )}
        {fm.keywords && (
          <meta name="keywords" content={fm.keywords.join(',')} />
        )}
        {fm.keywords && (
          <meta property="og:keywords" content={fm.keywords.join(',')} />
        )}
      </Helmet>
      <Header />
      <main>
        <Sidebar />
        <Content>{outlet}</Content>
      </main>
    </div>
  );
};

export default DocLayout;
