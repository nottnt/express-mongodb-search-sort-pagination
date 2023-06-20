const generateSearchObj = (searchStr) => {
    try {
        const searchObj = JSON.parse(searchStr)
        const result = {}
        for (const search in searchObj) {
            result[search] = { $regex: '.*' + searchObj[search] + '.*' }
        }

        return result
    } catch (e) {
        return {}
    }
}

const generateSortObject = (sortStr) => {
    try {
        const sortObj = JSON.parse(sortStr)
        const result = {}
        for (const sort in sortObj) {
            result[sort] = sortObj[sort] === 'desc' ? -1 : 1 
        }

        return result
    } catch (e) {
        return {}
    }
}

const generatePaginationObject = (page = 1, perPage = 10) => {
    try {
        return { limit: Number(perPage), skip: Number(perPage) * Number(page) }
    } catch(e) {
        return { limit: 10, skip: 0 }
    }
}

module.exports = {
    generateSearchObj,
    generateSortObject,
    generatePaginationObject
} 