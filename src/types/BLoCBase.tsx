import { ReactNode } from 'react';
import {
  BehaviorSubject,
  distinctUntilChanged,
  first,
  map,
  Observable,
  Subscription,
  switchMap,
} from 'rxjs';
import { modalHelper } from 'utils/modalHelper';
import { loadingStateHelper } from 'utils/loadingStateHelper';

/**
 * Constructor does not seem to guarantee run once when it comes to http requests
 * This is same as Angular's ngOnInit
 * Runs once when the BLoC is created
 * Use when you want to run logic on init. Never put any logic into ctor
 */
export interface IBLoCInitialisable {
  onInit?: () => void;
}

/**
 * In case there are any things that BLoC needs to clean up add this
 * interface to your bloc and you will be able to add logic
 * that you can run when BLoC gets destroyed
 */
export interface IBLoCDestroyable {
  onDestroy?: () => void;
}

/**
 * Type helper for BLoC wrapper component
 *
 * @param children  You can pass a ReactNode (as usial) or if you need you can pass in
 *                  a function that would pass in an instance of BLoC.
 *
 * @param Partial<State> Partial state that you may want to pass from main smart component
 * @
 */
export type BLoCParams<B extends BLoCBase<State>, State extends object, T = object> = T & {
  children?: ReactNode | ((bloc: B) => ReactNode | null) | undefined;
} & Partial<State>;
export const renderBlocChild = <T extends Readonly<BLoCBase<any>>>(children: any, bloc: T) =>
  typeof children !== 'function' ? children : children && (children as any)(bloc);

/**
 * Summary.       Your BLoC components should extand from this class.
 *
 * Description.   This class stores current BLoC state in a Subject.
 *                Class contains mutators and getter helper functions for dealing with state.
 *                Instance of this class should always be frozen to avoid introducing any mutable state
 *
 * @argument initState  Pass in any initial state that you want this BLoC to inialise with.
 */
export class BLoCBase<
  State extends { [key in string]: any },
  TLoading extends {
    [key in string]: string | boolean | undefined;
  } = {
    [key in string]: string | boolean | undefined;
  }
> {
  private readonly state: BehaviorSubject<State>;
  private subs: { [key in string]: Subscription } = {};
  private readonly loadingState = loadingStateHelper<TLoading>();
  public readonly $getLoading = this.loadingState.$getLoading;
  protected readonly _setLoading = this.loadingState.setLoading;
  protected readonly loadingStateHandler = this.loadingState.stateHandler;

  constructor(initState: State | null = null) {
    this.state = new BehaviorSubject<State>(initState || ({} as any));
  }

  /**
   * Adds subscription to the list of cleanups
   * Use when you need to directly sub to Observable from BLoC
   * @param sub Subscription object
   * @param key Key that you can use to cancel manual
   */
  protected addSub = (sub: Subscription, key?: string) => {
    key && this.unsub(key);
    this.subs[key ?? Object.keys(this.subs).length] = sub;
  };
  /**
   * Use to manualy unsub Sub that was added via addSub method
   * @param key Unique key that was passed using addSub
   */
  public unsub = (key?: string) => {
    if (!key) {
      Object.values(this.subs).forEach(s => s.unsubscribe());
    } else if (key && this.subs[key]) {
      this.subs[key].unsubscribe();
    }
  };

  /**
   * Returns current state as of now.
   * Use as a quick hand to get current state within BLoC
   * This is done to simplefy. Do not abuse.
   * Use getState instead if you can.
   * @param name State var name
   * @returns Frozen Readonly version of current state for given name
   */
  protected readonly currentState = <K extends keyof State>(name: K) => this.state.value[name];

  /**
   *
   * @param name Name of the state key that you would like to access
   * @returns An Observable that provide access to the key. This will only emit on distinct change.
   *          So when state is set if this key was not changed it will not emit.
   *          Note that if data type is not object (num,str,etc) observable will not re-emit until value has changed
   *          and object will emit if ref has changed
   */
  protected readonly $getState = <K extends keyof State>(name: K) =>
    this.state.pipe(
      map(a => a[name]),
      distinctUntilChanged()
    );

  /**
   *
   * @param mapper  a function that takes state and then allows you to create an observable from
   *                from a specific path
   * @returns Same as $getState
   */
  protected readonly $mapState = (mapper: (s: State) => any) =>
    this.state.pipe(map(mapper), distinctUntilChanged());

  /**
   *
   * @param name Key of the state to change
   * @param value New value, Must be different from prev value or it will not set. If object will freeze
   * @returns void
   */
  protected readonly setState = <K extends keyof State, Z extends State[K]>(
    name: K,
    value: Z
  ): void => {
    this.state.value[name] !== value &&
      this.state.next(
        Object.assign({}, this.state.value, {
          [name]: value && typeof value === 'object' ? Object.freeze(value) : value, // ensure state is immutable
        })
      );
  };

  /**
   *
   * @param name Key of the state to change
   * @param mutator Takes in a function that passes previous state and expects new state to be returned
   * @returns void
   */
  protected readonly mutateState = <K extends keyof State, Z extends State[K]>(
    name: K,
    mutator: (prev: Z) => Z
  ): void => {
    const prev = this.currentState(name);
    this.state.next(
      Object.assign({}, this.state.value, {
        [name]: mutator(prev),
      })
    );
  };

  /**
   *
   * @param partialState Pass in the whole new state object (partial) and it will override any matching state
   * @returns void
   */
  protected readonly setStates = (partialState: Partial<State>): void =>
    this.state.next(Object.assign({}, this.state.value, partialState));

  protected readonly firstAndSwitchMap = <T,>($ob: Observable<T>, res: (r: T) => Observable<any>) =>
    $ob.pipe(first(), switchMap(res));
}

export class BLoCWithModalsBase<
  State extends { [key in string]: any },
  TModals extends {
    [key in string]: object;
  } = {
    [key in string]: object;
  },
  TLoading extends {
    [key in string]: string | boolean | undefined;
  } = {
    [key in string]: string | boolean | undefined;
  }
> extends BLoCBase<State, TLoading> {
  private readonly modalState = modalHelper<TModals>();
  public $getModal = this.modalState.$getModal;
  protected _openModal = this.modalState.openModal;
  protected _closeModal = this.modalState.closeModal;
}
