import React from 'react';
import PropTypes from 'prop-types';

Article.propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }),
    onClickArticle: PropTypes.func,
  };

  const titleLength = 65;
  const copyLength = 390;

  export default function Article({article:{id, title, copy, state}, onClickArticle}){
    return (
        <div className={'article'} onClick={() => onClickArticle(id)}>
            <div className={`article-headline-container ${state}`}>
                <span className={'article-headline-text'}>{limitHeadline(title)}</span>
            </div>

                <div className={'article-copy'}>
                    {limitCopy(copy)}
                </div>

        </div>
    );
  }

  function limitHeadline(title){
    return title.length > titleLength ? title.substring(0, titleLength - 3) + "..." : title;
    
  }
  function limitCopy(copy){
    return copy.length > copyLength ? copy.substring(0, copyLength - 3) + "..." : copy;
  }