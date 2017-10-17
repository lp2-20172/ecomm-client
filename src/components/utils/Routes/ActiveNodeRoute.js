import find from 'lodash/find';
import { matchPath } from 'react-router'

import { pageToTitle } from '../Core'


const findActiveNodeRoute = (currentPages, url, title = { "parent": "", "children": "" }) => {
    const activePage = find(currentPages, page => {
        if (page.routes) {
            title.parent = pageToTitle(page)
            const mp = matchPath(url.pathname, page)
            //return url.pathname.indexOf(page.path) !== -1
            return mp
        }
        // Should be an exact match if no children
        if (matchPath(url.pathname, page)) {
            title.children = pageToTitle(page)
        }

        //return url.pathname === page.path
        return matchPath(url.pathname, page)
    })
    //console.log('activePage:' + JSON.stringify(activePage))
    if (!activePage) {
        return { activePage: null, title: { "parent": null, "children": null } }
    }

    // We need to drill down
    //if (activePage.path !== url.pathname) {
    if (!matchPath(url.pathname, {
        path: activePage.path,
        exact: true,
        strict: false
    })

    ) {
        return findActiveNodeRoute(activePage.routes, url, title)
    }

    return { activePage, title }
}

export default findActiveNodeRoute

/**
 * 
 * 
const pageToTitle2 = (currentPages, url, titulo = {"parent":"","children":""}) => {

  const activePage = find(currentPages, page => {
      if (page.routes) { 
          titulo.parent=page.title
          console.log('titulo:'+titulo)
          return url.pathname.indexOf(page.path) !== -1
      }
      
      // Should be an exact match if no children
      if (url.pathname === page.path) {
        titulo.children=page.title
      }
      return url.pathname === page.path
  })
  //titulo = titulo+titulo
  console.log('activePage:' + JSON.stringify(activePage))
  

  if (!activePage) {
      return null
  }

  // We need to drill down
  if (activePage.path !== url.pathname) {
      return pageToTitle2(activePage.routes, url, titulo)
  }

  return {activePage, titulo}
}

function getTitle(routes, location) {
  let title = ''
  for (let i = routes.length - 1; i >= 0; i -= 1) {
      //console.log('getTitle.location.pathname:' + JSON.stringify(location.pathname))
      //
      const mp = matchPath(location.pathname, routes[i])
      //console.log('getTitle.mp:' + JSON.stringify(mp))
      if (mp) {
          //console.log('mp:' + JSON.stringify(mp))
          title = title + routes[i].title // + " " + routes[i].routes.title
          if (routes[i].routes) {
              for (let j = routes[i].routes.length - 1; j >= 0; j -= 1) {
                  const ch = matchPath(location.pathname, routes[i].routes[j])
                  //console.log('getTitle.ch:' + JSON.stringify(ch))
                  if (ch) {
                      //console.log('mp:' + JSON.stringify(mp))
                      title = title + "> " + routes[i].routes[j].title
                  }
              }
          }
          if (routes[i].hasOwnProperty('title')) {
              return title
          }

      }
      // }
  }

  return null;
}
 */