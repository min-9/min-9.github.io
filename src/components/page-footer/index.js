import React from 'react';

import './style.scss';

const PageFooter = ({ author, githubUrl }) => (
  <>
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        &copy; {new Date().getFullYear()}
        &nbsp;
        <a href={githubUrl}>{author}</a>
        &nbsp;powered by
        <a href="https://github.com/7indays/7indays.github.io">&nbsp;7INDAYS</a>
      </p>
    </footer>
  </>
);

export default PageFooter;
