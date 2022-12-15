declare module 'post-robot' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type ZalgoPromise<T = any> = Promise<T>;
  type CrossDomainWindowType = Window | null;
  type DomainMatcher = string | RegExp | string[];

  interface RegularRequestOptionsType {
    domain?: DomainMatcher | undefined;
    fireAndForget?: false | undefined;
    timeout?: number | undefined;
  }

  type ResponseMessageEvent<O = object> = {
    source: CrossDomainWindowType;
    origin: string;
    data: O;
  };

  interface FireAndForgetRequestOptionsType {
    domain?: DomainMatcher | undefined;
    fireAndForget?: true | undefined;
    timeout?: number | undefined;
  }

  export type HandlerType = (params: {
    source: CrossDomainWindowType;
    origin: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => void | any | ZalgoPromise<any>;

  type ErrorHandlerType = (err: unknown) => void;

  type CancelableType = {
    cancel: () => void;
  };

  type ServerOptionsType = {
    handler?: HandlerType;
    errorHandler?: ErrorHandlerType;
    window?: CrossDomainWindowType;
    name?: string;
    domain?: DomainMatcher;
    once?: boolean;
    errorOnClose?: boolean;
  };

  export function on(
    name: string,
    options: ServerOptionsType | HandlerType,
    handler?: HandlerType
  ): CancelableType;

  export function send<V = unknown, O = unknown>(
    win: CrossDomainWindowType,
    name: string,
    data?: V,
    options?: FireAndForgetRequestOptionsType & RegularRequestOptionsType
  ): Promise<ResponseMessageEvent<O>>;
}
