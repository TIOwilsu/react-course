import React from 'react';
import { Container } from './style';

interface TabProductProps {
  tabs: {
    title: string;
    content: string | JSX.Element;
  }[];
}

export const TabProduct: React.FC<TabProductProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  return (
    <Container>
      <div className="tab-product__buttons" role="buttons">
        {tabs.map((tab, index) => (
          <button className="tab-product__button" onClick={() => setSelectedTab(index)} key={index}>
            {tab.title}
          </button>
        ))}
      </div>
      <h4 className="tab-product__title" role="title">
        {tabs[selectedTab].title}
      </h4>
      <div className="tab-product__content" role="content">
        {tabs[selectedTab].content}
      </div>
    </Container>
  );
};
