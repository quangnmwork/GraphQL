import create, { GetState, SetState } from "zustand";
import { IOption } from "../IType/IType";

export const useOption = create<IOption>(
  (set: SetState<IOption>, get: GetState<IOption>) => ({
    name: "book",
    switch: (switchValue: string) => {
      set({ name: switchValue });
    },
  })
);
