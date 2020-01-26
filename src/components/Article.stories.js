import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Article from './Article';

const defaultArticleText = `This is the body of the article and it will follow some rules of course. It is up to the designer to decide what those rules are, but the software engineers will have to implement those rules. Basically what everyone needs is an easy way to save compnents, and then look through them to find the right item for the job.`;

export default {
  component: Article,
  title: 'Sad Article display',
  copy: defaultArticleText, 
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const articleData = {
  id: '1',
  title: 'Read about the thing',
  copy: defaultArticleText, 
  state: 'standard',
  updatedAt: new Date(2019, 0, 1, 28, 0),
};

export const actionsData = {
  onClickArticle: action('onClickArticle'),
};

export const Default = () => {
  return <Article article={object('article', { ...articleData })} {...actionsData} />;
};

export const Highlighted = () => <Article article={object('article', { ...articleData, state: 'highlighted' })} {...actionsData} />;

export const Suppressed = () => (
  <Article article={object('article', { ...articleData, state: 'suppressed' })} {...actionsData} />
);

const longTitleString = 'You will not believe what these are doing in their every day shopping to save money' ;

export const LongHeadline = () => (
  <Article article={object('article', { ...articleData, title: longTitleString })} {...actionsData} />
);

const longCopyString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum varius vestibulum. Mauris bibendum erat eget sodales porta. Ut pharetra quis nisl eu dictum. Cras ornare at lacus non commodo. Suspendisse vitae velit ac ante pellentesque dignissim. Cras accumsan neque porttitor luctus elementum. Ut mattis risus tortor, at cursus diam pulvinar a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis quam eget mauris dictum aliquam nec tincidunt dui. Duis accumsan ex commodo, porttitor tellus sed, hendrerit mauris. Morbi varius cursus ornare. Suspendisse vel maximus ipsum. Ut eget pulvinar lacus. Phasellus sit amet egestas nunc. ` ;

export const LongCopy = () => (
  <Article article={object('article', { ...articleData, copy: longCopyString })} {...actionsData} />
);