import axios from "axios"

export default async function getExperience() {
  try {
    const res = await axios.get("http://localhost:8000/experiences")
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export async function getExperienceDetail(id: string) {
  try {
    const res = await axios.get(`http://localhost:8000/experiences/${id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
