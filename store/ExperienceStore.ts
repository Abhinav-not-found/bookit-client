import { create } from "zustand"

type ExperienceStore = {
  titles: string[]
  setTitles: (titles: string[]) => void
}

const useExperienceStore = create<ExperienceStore>((set) => ({
  titles: [],
  setTitles: (titles) => set({ titles }),
}))

export default useExperienceStore
