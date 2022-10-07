export interface GameParams {
  id: string;
  titulo: string;
  banner: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameParams;
    }
  }
}
