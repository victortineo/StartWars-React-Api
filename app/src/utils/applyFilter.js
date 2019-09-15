export const applySorter = (items, filter) => {
    return sorter(items, filter)
}

const sorter = (items, filter) => {
    return items.sort((a, b) => {
        let itemA;
        let itemB;
        let nameA;
        let nameB;
        switch (filter.order){
            case 'films':
                itemA = a.films.length
                nameA = a.name
                itemB = b.films.length
                nameB = b.name
                break
            case 'species':
                itemA = a.species[0] || 0
                nameA = a.name
                itemB = b.species[0] || 0
                nameB = b.name
                break
            case 'gender':
                itemA = a.gender
                nameA = a.name
                itemB = b.gender
                nameB = b.name
                break
            case 'name':
                itemA = ''
                nameA = a.name
                itemB = ''
                nameB = b.name
                break
            case 'starships': 
                itemA = a.starships.length
                nameA = a.name
                itemB = b.starships.length
                nameB = b.name
                break
            case 'vehicles':
                itemA = a.vehicles.length
                nameA = a.name
                itemB = b.vehicles.length
                nameB = b.name
                break
            default: break 

        }
        if(itemA === itemB)
        {
            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        }
        else
        {
            return (itemA < itemB) ? 1 : -1;
        }
    });
}