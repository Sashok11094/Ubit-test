export function getSortHeroes (heroes) {
    return[...heroes].sort((a, b) => b.health - a.health)
}