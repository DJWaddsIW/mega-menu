import React from "react";
import styled from "styled-components";
import Options from "./Options";

const Wrapper = styled.span`
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0;
  background-color: white;
  text-align: left;
  padding: 0 calc(50vw - 640px);
  max-width: 1280px;
  justify-content: space-between;
`;

const CategoriesLeft = styled.ul`
  display: flex;
  max-width: ${props => props.hasRight ? '960px' : '1280px' };
  flex-wrap: wrap;
  @media screen and (max-width:960px) {
    max-width: ${props => props.hasRight ? '50%' : '100%' }
  }
  padding-bottom: 10px;
`;

const CategoriesRight = styled.ul`
  display: flex;
  flex-grow: 2;
`;

const ListItem = styled.li`
  border-right: 1px solid rgb(226, 232, 235);
  width: 320px;
  padding: 20px;
  box-sizing: border-box;
  flex-grow: 2;
`;

const RightListItem = styled(ListItem)`
  border: 0 none;
`;

const Link = styled.a`
  color: #032f61;
  text-decoration: none;
  display: block;
  font-weight: bolder;
  font-size: 16px;
  padding: 8px 10px 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.span`
  color: #032f61;
  display: inline-block;
  font-weight: bolder;
  font-size: 16px;
  padding: 8px 10px 16px;
`;

const SubMenu = ({ subCategories }) => {
  const leftItems = subCategories.filter(x => x.alignRight !== true);
  const rightItems = subCategories.filter(x => x.alignRight === true);
  return (
    <Wrapper>
      <CategoriesLeft hasRight={rightItems.length > 0}>
        {
          leftItems.map(subCategory => {
            return (
              <ListItem key={subCategory.title}>
                {subCategory.url !== undefined ? (
                  <Link href={subCategory.url}>{subCategory.title}</Link>
                ) : (
                  <Title>{subCategory.title}</Title>
                )}
                <Options links={subCategory.links} />
              </ListItem>
            );
          })}
      </CategoriesLeft>
      <CategoriesRight>
        {
          rightItems.map(subCategory => {
            return (
              <RightListItem key={subCategory.title}>
                {subCategory.url !== undefined ? (
                  <Link href={subCategory.url}>{subCategory.title}</Link>
                ) : (
                  <Title>{subCategory.title}</Title>
                )}
                <Options links={subCategory.links} />
              </RightListItem>
            );
          })}
      </CategoriesRight>
    </Wrapper>
  );
};

export default SubMenu;
