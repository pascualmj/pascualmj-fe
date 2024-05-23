import React from 'react';
import { useBLoC } from 'hooks/useBLoC';
import { useInitBloc } from 'hooks/useInitBloc';
import { BLoCBase, BLoCParams, renderBlocChild } from 'types/BLoCBase';

type State = {};

class BLoC extends BLoCBase<State> {
  constructor() {
    super({});
  }
}

const Context = React.createContext<Readonly<BLoC>>({} as any);

export const useHomePageBLoC = () => useBLoC<BLoC>(Context);

export const HomePageBLoC: React.FC<BLoCParams<BLoC, State>> = ({ children }) => {
  const bloc = useInitBloc(() => new BLoC());
  return bloc ? <Context.Provider value={bloc}>{renderBlocChild(children, bloc)}</Context.Provider> : null;
};
