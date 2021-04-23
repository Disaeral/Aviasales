import {$host, $ticketsHost} from '.'

export const getSearchId = async () => {
    const {data} = await $host.get('/search')
    return data
}

export const getTickets = async (searchId) => {
    
    const idString = searchId.toString()
    const {data} = await $host.get('/tickets', {
        params:{
            searchId: searchId.searchId
        }
    })
    
    return data
}
