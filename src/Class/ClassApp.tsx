import { Component } from "react";
import { ClassSection } from "./ClassSection";
import { ClassDogs } from "./ClassDogs";
import { ActiveTab } from "../types";
import { ClassCreateDogForm } from "./ClassCreateDogForm";

export type ClassAppState = {
  activeTab: ActiveTab;
  favCount: number;
  unFavCount: number;
};

export class ClassApp extends Component<Record<string, never>> {
  state: ClassAppState = {
    activeTab: "none",
    favCount: 0,
    unFavCount: 0,
  };

  render() {
    const { favCount, unFavCount, activeTab } = this.state;
    return (
      <div className="App" style={{ backgroundColor: "goldenrod" }}>
        <header>
          <h1>pup-e-picker (Class Version)</h1>
        </header>
        <ClassSection
          activeTab={(tab: ActiveTab) => {
            this.setState({ activeTab: tab });
          }}
          favCount={favCount}
          unFavCount={unFavCount}
        >
          {activeTab === "none" ||
          activeTab === "favourite" ||
          activeTab === "unFavourite" ? (
            <ClassDogs
              activeTabAndSetCount={{
                favCount: (count) => {
                  this.setState({ favCount: count });
                },
                unFavCount: (count) => {
                  this.setState({ favCount: count });
                },
                activeTab: activeTab,
              }}
            />
          ) : (
            <ClassCreateDogForm />
          )}
        </ClassSection>
      </div>
    );
  }
}
