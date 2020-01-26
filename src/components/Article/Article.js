import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Article.module.css";

Article.propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired,
    }),
    onClickArticle: PropTypes.func,
  };

  const titleLength = 65;
  const copyLength = 350;
 

  export default function Article({article:{id, title, copy}, onClickArticle}){
    return (
        <div className={styles.article} onClick={() => onClickArticle(id)}>
            <div className={styles.articleHeadlineContainer}>
                <span className={styles.articleHeadlineText}>{limitHeadline(title)}</span>
            </div>

            <div className={styles.articleCopy}>
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