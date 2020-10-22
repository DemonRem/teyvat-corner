import React from 'react';

const TableOfContents = ({ toc }) => {
    if (!toc) {
        return null;
    }

    return (
        <div className='table-of-contents' dangerouslySetInnerHTML={{ __html: toc }} />
    );
}

export default TableOfContents;
