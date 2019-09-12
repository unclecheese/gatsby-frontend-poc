import React from 'react';
import { useSiteTree, createMenuBuilder } from 'gatsby-source-silverstripe/lib';
import { Link } from 'gatsby';

const Menu = ({ pageID, level }) => {
    // const siteTree = useSiteTree();
    // const menuBuilder = createMenuBuilder(siteTree);
///    const menuItems = menuBuilder(pageID, level);
const menuItems = [];
    return (
        <nav>
        <ul className={`nav`}>
            {menuItems.map(item => {
                <li key={item.id}><Link to={item.link}>{item.SilverStripeSiteTree.menuTitle}</Link></li>
            })}
        </ul>
        </nav>
    )
};

export default Menu;