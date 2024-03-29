/* eslint-disable eqeqeq */
/**************************************************
 * Implements Location service same as angular have
 *************************************************/

import { IsObjectHaveKeys } from 'common-js-util';

/**
 * takes search string and converts to corresponding object
 * @param  {string} searchString=''
 * e.x. ?query=menu_id=5 returns { menu_id: "5" }
 */
export function GenerateObjectFromUrlParams(searchString) {
    if (searchString) {
        // eslint-disable-next-line no-sequences
        return (searchString).replace(/(^\?)/, '').split("&").map(function (n) { return n = n.split(/=(.+)/), this[n[0]] = n[1], this }.bind({}))[0];
    } else {
        return {};
    }
}

export function SerializeObj(obj) {
    const queryString = Object.entries(obj).map(i => [i[0], encodeURIComponent(i[1])].join('=')).join('&');
    if (queryString) {
        return `?${queryString}`
    }
}

export function GetUrlParams(props) {
    return {
        queryString: Location.search(),
        params: props.match.params
    }
}

export class Location {
    // historyFetchMethod;

    static getHistoryMethod(method) {
        this.historyFetchMethod = method;
    }

    /**
     * used to get and set query strings
     * if obj is empty, works as getter, else as setter
     * @param  {object} obj - object params to be set as query param
     * @param  {boolean} reset=false}={} - if true, overrides existing query else extend previous query
     */
    static search(obj, { reset = false } = {}) {
        const location = window.location;
        let hash = window.location.hash.replace('#', '');
        let urlParams = GenerateObjectFromUrlParams(decodeURIComponent(location.search))

        if (hash) {
            urlParams = urlParams[hash] ? JSON.parse(urlParams[hash]) : {};
        }
        if (!obj) {
            hash = window.location.hash.replace('#', '');
            return urlParams;
        }

        const { history: History } = this.historyFetchMethod();
        const finalObj = {};

        Object.keys(obj).forEach((key) => {
            if (obj[key] == null && urlParams[key]) { // if any attribute is null, will remove from existing query
                delete urlParams[key];
            } else {
                finalObj[key] = obj[key];
            }
        });

        urlParams = reset ? { ...{}, ...finalObj } : { ...urlParams, ...finalObj };

        if (!Object.keys(urlParams).length || (!Object.keys(finalObj).length)) {
            History.push(location.pathname);
            return;
        }
        if (History) {
            let obj = {};
            if (hash) {
                obj[hash] = JSON.stringify(urlParams);
            } else {
                obj = urlParams;
            }
            let queryUrl = SerializeObj(obj);
            if (hash) {
                queryUrl = queryUrl + '#' + hash;
            }
            History.push(queryUrl);
        }
    }

    /**
     * used for navigating to different routes
     * @param  {string} {url}
     * @param  {string} {method} - used to select method for navigation, can be push, goBack (for pop operation), replace
     */
    static navigate({ url, method = 'push', queryParam }, e = {}) {
        if (IsObjectHaveKeys(queryParam)) {
            url += SerializeObj(queryParam);
        }
        const { history: History } = this.historyFetchMethod();

        if (method == 'push' && e && (e.metaKey || e.ctrlKey)) {
            var win = window.open(url, '_blank');
            win.focus();
            return;
        }
        History[method](url);
    }

    static back() {
        if (window.history.length > 2) {
            // if history is not empty, go back:
            this.navigate({ method: 'goBack' });
        } else {
            // go home:
            this.navigate({ method: 'push', url: '/' });
        }
    }

    /**
     * used for navigating to specified location
     * @param  {string} {url}
     * @param  {string} {method} - used to select method for navigation, can be push, goBack to specified scene
     */
    static backByLength(n) {
        n = -(n || 1);
        if (window.history.length > 2) {
            // if history is not empty, go back:
            this.navigate({ url: n, method: 'go' });
        } else {
            // go home:
            this.navigate({ method: 'push', url: '/' });
        }
    }
}

export function ExtractUrlFromSourceColumnDefinition(column) {
    return 'api/record/dataModel';
}
