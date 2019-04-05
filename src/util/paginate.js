import _ from 'lodash';


export function paginate(items, pageSize, pageNumber){
//calculate the startIndex of the items in the array
const startIndex = (pageNumber - 1) * pageSize ;

return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();






}