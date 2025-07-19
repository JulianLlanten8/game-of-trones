import { ref } from 'vue'
import { get } from '@api/get'

const groupedByFamily = ref({})
const error = ref(null)
const loading = ref(false)

const URL = 'https://thronesapi.com/api/v2/Characters'

// Función para agrupar por familia de manera compatible
const groupByFamily = (characters) => {
  const normalize = (family) => {
    const map = {
      None: 'Wildlings',
      Unkown: 'Unknown',
      Unknown: 'Unknown',

      Stark: 'House Stark',
      Lanister: 'House Lannister',
      Lannister: 'House Lannister',

      Baratheon: 'House Baratheon',
      Targaryan: 'House Targaryen',
      Targaryen: 'House Targaryen',

      Tyrell: 'House Tyrell',
      Greyjoy: 'House Greyjoy',
      Lorath: 'Lorathi' // si quieres unificarlos también
    }

    return map[family] || family || 'Unknown'
  }

  return Object.groupBy(characters, (character) => {
    return normalize(character.family)
  })
}

// Función para obtener los personajes
const fetchCharacters = async () => {
  loading.value = true
  error.value = null

  try {
    const data = await get(URL)
    groupedByFamily.value = groupByFamily(data)
    return data
  } catch (e) {
    error.value = e
    throw e
  } finally {
    loading.value = false
  }
}

export { groupedByFamily, error, loading, fetchCharacters }
