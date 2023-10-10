// jsx ketika kita sedang merender tag tag yg ada html nya
// js jika tidak sama sekali menggunakan tag html

async function fetchBreedList({ queryKey }) {
    const animal = queryKey[1]

    if (!animal) return []

    const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)

    if (!res.ok) {
        throw new Error(`Breeds ${animal} fetch is not ok`)
    }

    return res.json()
}

export default fetchBreedList