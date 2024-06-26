import manifest from "./manifest.gen.ts";
import type { Manifest } from "./manifest.gen.ts";
import type { App, AppContext as AC } from "deco/mod.ts";

export interface State {
  
}
export type MyApp = App<Manifest, State>;
export default function App(
  state: State,
): MyApp {
  return {
    manifest,
    state,
  };
}

export type AppContext = AC<MyApp>;