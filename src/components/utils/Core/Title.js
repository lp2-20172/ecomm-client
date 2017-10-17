//import find from 'lodash/find';
//import { matchPath } from 'react-router'

import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import titleize from './Titleize'


function pageToTitle(page: Object) {
    if (page.title) {
        return titleize(page.title)
    }

    const name = page.path.replace(/.*\//, '');

    if (page.path.indexOf('/api') === 0) {
        return upperFirst(camelCase(name));
    }

    return titleize(name);
}


export default pageToTitle
