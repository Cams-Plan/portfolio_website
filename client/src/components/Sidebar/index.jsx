import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Home',
    path: '/camille',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/camille/projects',
    icon: <FaIcons.FaTools />,
    cName: 'nav-text'
  },
//   {
//     title: 'References',
//     path: '/camille/references',
//     icon: <MdIcons.MdRateReview />,
//     cName: 'nav-text'
//   },
  {
    title: 'Blog',
    path: '/',
    icon: <CgIcons.CgWebsite />,
    cName: 'nav-text'
  },
  {
    title: 'Secret Page',
    path: '/secret',
    icon: <FaIcons.FaUserSecret />,
    cName: 'nav-text'
  }
];
