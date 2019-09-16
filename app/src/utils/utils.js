export const getSpecie = (specieId, species) => {
    return specieId ? species.filter(specie => specie.id === specieId)[0] : 'N/A'
}

export const getRelatedFilms = (person, films) => {
    const relatedFilms = person.films.map(film => films.filter(i => film === i.id)[0])
    return relatedFilms
}

export const getHomeworld = (person, planets) => {
    const homeworld = planets.filter(i => person.homeworld === i.id)[0]
    return homeworld
}