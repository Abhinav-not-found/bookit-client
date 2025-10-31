import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSearchStore = create()(

    (set) => ({
      search: null,
      setSearch: (search) => set({ search }),
      clearSearch: () => {
        set({ search: null });
      },
    }),
    {
      name: "userStorage",
    }

);

export default useSearchStore;
