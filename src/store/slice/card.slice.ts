import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import StyleSpy from "../../assets/images/logo-style-spy.svg";
import Devlens from "../../assets/images/logo-devlens.svg";
import SpeedBoost from "../../assets/images/logo-speed-boost.svg";
import JsonWizard from "../../assets/images/logo-json-wizard.svg";
import TabMaster from "../../assets/images/logo-tab-master-pro.svg";
import ViewPort from "../../assets/images/logo-viewport-buddy.svg";
import MarkupNotes from "../../assets/images/logo-markup-notes.svg";
import GridGuides from "../../assets/images/logo-grid-guides.svg";
import PalettePicker from "../../assets/images/logo-palette-picker.svg";

interface Card {
  id: number;
  title?: string;
  description?: string;
  removeStatus: boolean; // make it required for simplicity
  image?: string;
}

interface CardState {
  cards: Card[];
  filter: "All" | "active" | "inactive";
}

const initialState: CardState = {
  cards: [
    {
      id: 1,
      title: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      image: Devlens,
      removeStatus: true,
    },
    {
      id: 2,
      title: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      image: StyleSpy,
      removeStatus: true,
    },
    {
      id: 3,
      title: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading.",
      image: SpeedBoost,
      removeStatus: false,
    },
    {
      id: 4,
      title: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser.",
      image: JsonWizard,
      removeStatus: true,
    },
    {
      id: 5,
      title: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      image: TabMaster,
      removeStatus: true,
    },
    {
      id: 6,
      title: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser.",
      image: ViewPort,
      removeStatus: false,
    },
    {
      id: 7,
      title: "Markup Notes",
      description:
        "Enables annotation and notes directly onto webpages for collaborative debugging.",
      image: MarkupNotes ,
      removeStatus: true,
    },
    {
      id: 8,
      title: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      image: GridGuides, 
      removeStatus: false,
    },
    {
      id: 9,
      title: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      image: PalettePicker,
      removeStatus: true,
    },
  ],
  filter: "All",
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },

    removeCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);

    }, 

    toggleRemoveStatus: (state, action: PayloadAction<number>) => {
      const card = state.cards.find((card) => card.id === action.payload);
      if (card) {
        card.removeStatus = !card.removeStatus;
      }
    },

    setFilter: (state, action: PayloadAction<"All" | "active" | "inactive">) => {
      state.filter = action.payload;
    },
  },
});

export const { addCard, removeCard, toggleRemoveStatus, setFilter } =
  cardSlice.actions;

export const cardReducer = cardSlice.reducer;

