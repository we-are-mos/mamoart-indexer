
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model OwnedNFT
 * 
 */
export type OwnedNFT = $Result.DefaultSelection<Prisma.$OwnedNFTPayload>
/**
 * Model PaintGrids
 * 
 */
export type PaintGrids = $Result.DefaultSelection<Prisma.$PaintGridsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more OwnedNFTS
 * const ownedNFTS = await prisma.ownedNFT.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more OwnedNFTS
   * const ownedNFTS = await prisma.ownedNFT.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ownedNFT`: Exposes CRUD operations for the **OwnedNFT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OwnedNFTS
    * const ownedNFTS = await prisma.ownedNFT.findMany()
    * ```
    */
  get ownedNFT(): Prisma.OwnedNFTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paintGrids`: Exposes CRUD operations for the **PaintGrids** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaintGrids
    * const paintGrids = await prisma.paintGrids.findMany()
    * ```
    */
  get paintGrids(): Prisma.PaintGridsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    OwnedNFT: 'OwnedNFT',
    PaintGrids: 'PaintGrids'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ownedNFT" | "paintGrids"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      OwnedNFT: {
        payload: Prisma.$OwnedNFTPayload<ExtArgs>
        fields: Prisma.OwnedNFTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnedNFTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnedNFTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnedNFTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnedNFTPayload>
          }
          findFirst: {
            args: Prisma.OwnedNFTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnedNFTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnedNFTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnedNFTPayload>
          }
          findMany: {
            args: Prisma.OwnedNFTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnedNFTPayload>[]
          }
          create: {
            args: Prisma.OwnedNFTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnedNFTPayload>
          }
          createMany: {
            args: Prisma.OwnedNFTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnedNFTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnedNFTPayload>[]
          }
          delete: {
            args: Prisma.OwnedNFTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnedNFTPayload>
          }
          update: {
            args: Prisma.OwnedNFTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnedNFTPayload>
          }
          deleteMany: {
            args: Prisma.OwnedNFTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnedNFTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnedNFTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnedNFTPayload>[]
          }
          upsert: {
            args: Prisma.OwnedNFTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnedNFTPayload>
          }
          aggregate: {
            args: Prisma.OwnedNFTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwnedNFT>
          }
          groupBy: {
            args: Prisma.OwnedNFTGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnedNFTGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnedNFTCountArgs<ExtArgs>
            result: $Utils.Optional<OwnedNFTCountAggregateOutputType> | number
          }
        }
      }
      PaintGrids: {
        payload: Prisma.$PaintGridsPayload<ExtArgs>
        fields: Prisma.PaintGridsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaintGridsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaintGridsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaintGridsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaintGridsPayload>
          }
          findFirst: {
            args: Prisma.PaintGridsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaintGridsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaintGridsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaintGridsPayload>
          }
          findMany: {
            args: Prisma.PaintGridsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaintGridsPayload>[]
          }
          create: {
            args: Prisma.PaintGridsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaintGridsPayload>
          }
          createMany: {
            args: Prisma.PaintGridsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaintGridsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaintGridsPayload>[]
          }
          delete: {
            args: Prisma.PaintGridsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaintGridsPayload>
          }
          update: {
            args: Prisma.PaintGridsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaintGridsPayload>
          }
          deleteMany: {
            args: Prisma.PaintGridsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaintGridsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaintGridsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaintGridsPayload>[]
          }
          upsert: {
            args: Prisma.PaintGridsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaintGridsPayload>
          }
          aggregate: {
            args: Prisma.PaintGridsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaintGrids>
          }
          groupBy: {
            args: Prisma.PaintGridsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaintGridsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaintGridsCountArgs<ExtArgs>
            result: $Utils.Optional<PaintGridsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    ownedNFT?: OwnedNFTOmit
    paintGrids?: PaintGridsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model OwnedNFT
   */

  export type AggregateOwnedNFT = {
    _count: OwnedNFTCountAggregateOutputType | null
    _avg: OwnedNFTAvgAggregateOutputType | null
    _sum: OwnedNFTSumAggregateOutputType | null
    _min: OwnedNFTMinAggregateOutputType | null
    _max: OwnedNFTMaxAggregateOutputType | null
  }

  export type OwnedNFTAvgAggregateOutputType = {
    id: number | null
    tokenId: number | null
  }

  export type OwnedNFTSumAggregateOutputType = {
    id: number | null
    tokenId: number | null
  }

  export type OwnedNFTMinAggregateOutputType = {
    id: number | null
    owner: string | null
    contract: string | null
    tokenId: number | null
    updatedAt: Date | null
  }

  export type OwnedNFTMaxAggregateOutputType = {
    id: number | null
    owner: string | null
    contract: string | null
    tokenId: number | null
    updatedAt: Date | null
  }

  export type OwnedNFTCountAggregateOutputType = {
    id: number
    owner: number
    contract: number
    tokenId: number
    updatedAt: number
    _all: number
  }


  export type OwnedNFTAvgAggregateInputType = {
    id?: true
    tokenId?: true
  }

  export type OwnedNFTSumAggregateInputType = {
    id?: true
    tokenId?: true
  }

  export type OwnedNFTMinAggregateInputType = {
    id?: true
    owner?: true
    contract?: true
    tokenId?: true
    updatedAt?: true
  }

  export type OwnedNFTMaxAggregateInputType = {
    id?: true
    owner?: true
    contract?: true
    tokenId?: true
    updatedAt?: true
  }

  export type OwnedNFTCountAggregateInputType = {
    id?: true
    owner?: true
    contract?: true
    tokenId?: true
    updatedAt?: true
    _all?: true
  }

  export type OwnedNFTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnedNFT to aggregate.
     */
    where?: OwnedNFTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnedNFTS to fetch.
     */
    orderBy?: OwnedNFTOrderByWithRelationInput | OwnedNFTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnedNFTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnedNFTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnedNFTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OwnedNFTS
    **/
    _count?: true | OwnedNFTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnedNFTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnedNFTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnedNFTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnedNFTMaxAggregateInputType
  }

  export type GetOwnedNFTAggregateType<T extends OwnedNFTAggregateArgs> = {
        [P in keyof T & keyof AggregateOwnedNFT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwnedNFT[P]>
      : GetScalarType<T[P], AggregateOwnedNFT[P]>
  }




  export type OwnedNFTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnedNFTWhereInput
    orderBy?: OwnedNFTOrderByWithAggregationInput | OwnedNFTOrderByWithAggregationInput[]
    by: OwnedNFTScalarFieldEnum[] | OwnedNFTScalarFieldEnum
    having?: OwnedNFTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnedNFTCountAggregateInputType | true
    _avg?: OwnedNFTAvgAggregateInputType
    _sum?: OwnedNFTSumAggregateInputType
    _min?: OwnedNFTMinAggregateInputType
    _max?: OwnedNFTMaxAggregateInputType
  }

  export type OwnedNFTGroupByOutputType = {
    id: number
    owner: string
    contract: string
    tokenId: number
    updatedAt: Date
    _count: OwnedNFTCountAggregateOutputType | null
    _avg: OwnedNFTAvgAggregateOutputType | null
    _sum: OwnedNFTSumAggregateOutputType | null
    _min: OwnedNFTMinAggregateOutputType | null
    _max: OwnedNFTMaxAggregateOutputType | null
  }

  type GetOwnedNFTGroupByPayload<T extends OwnedNFTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnedNFTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnedNFTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnedNFTGroupByOutputType[P]>
            : GetScalarType<T[P], OwnedNFTGroupByOutputType[P]>
        }
      >
    >


  export type OwnedNFTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    contract?: boolean
    tokenId?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ownedNFT"]>

  export type OwnedNFTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    contract?: boolean
    tokenId?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ownedNFT"]>

  export type OwnedNFTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    contract?: boolean
    tokenId?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ownedNFT"]>

  export type OwnedNFTSelectScalar = {
    id?: boolean
    owner?: boolean
    contract?: boolean
    tokenId?: boolean
    updatedAt?: boolean
  }

  export type OwnedNFTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner" | "contract" | "tokenId" | "updatedAt", ExtArgs["result"]["ownedNFT"]>

  export type $OwnedNFTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OwnedNFT"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      owner: string
      contract: string
      tokenId: number
      updatedAt: Date
    }, ExtArgs["result"]["ownedNFT"]>
    composites: {}
  }

  type OwnedNFTGetPayload<S extends boolean | null | undefined | OwnedNFTDefaultArgs> = $Result.GetResult<Prisma.$OwnedNFTPayload, S>

  type OwnedNFTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnedNFTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnedNFTCountAggregateInputType | true
    }

  export interface OwnedNFTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OwnedNFT'], meta: { name: 'OwnedNFT' } }
    /**
     * Find zero or one OwnedNFT that matches the filter.
     * @param {OwnedNFTFindUniqueArgs} args - Arguments to find a OwnedNFT
     * @example
     * // Get one OwnedNFT
     * const ownedNFT = await prisma.ownedNFT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnedNFTFindUniqueArgs>(args: SelectSubset<T, OwnedNFTFindUniqueArgs<ExtArgs>>): Prisma__OwnedNFTClient<$Result.GetResult<Prisma.$OwnedNFTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OwnedNFT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnedNFTFindUniqueOrThrowArgs} args - Arguments to find a OwnedNFT
     * @example
     * // Get one OwnedNFT
     * const ownedNFT = await prisma.ownedNFT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnedNFTFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnedNFTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnedNFTClient<$Result.GetResult<Prisma.$OwnedNFTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnedNFT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnedNFTFindFirstArgs} args - Arguments to find a OwnedNFT
     * @example
     * // Get one OwnedNFT
     * const ownedNFT = await prisma.ownedNFT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnedNFTFindFirstArgs>(args?: SelectSubset<T, OwnedNFTFindFirstArgs<ExtArgs>>): Prisma__OwnedNFTClient<$Result.GetResult<Prisma.$OwnedNFTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnedNFT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnedNFTFindFirstOrThrowArgs} args - Arguments to find a OwnedNFT
     * @example
     * // Get one OwnedNFT
     * const ownedNFT = await prisma.ownedNFT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnedNFTFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnedNFTFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnedNFTClient<$Result.GetResult<Prisma.$OwnedNFTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OwnedNFTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnedNFTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OwnedNFTS
     * const ownedNFTS = await prisma.ownedNFT.findMany()
     * 
     * // Get first 10 OwnedNFTS
     * const ownedNFTS = await prisma.ownedNFT.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownedNFTWithIdOnly = await prisma.ownedNFT.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnedNFTFindManyArgs>(args?: SelectSubset<T, OwnedNFTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnedNFTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OwnedNFT.
     * @param {OwnedNFTCreateArgs} args - Arguments to create a OwnedNFT.
     * @example
     * // Create one OwnedNFT
     * const OwnedNFT = await prisma.ownedNFT.create({
     *   data: {
     *     // ... data to create a OwnedNFT
     *   }
     * })
     * 
     */
    create<T extends OwnedNFTCreateArgs>(args: SelectSubset<T, OwnedNFTCreateArgs<ExtArgs>>): Prisma__OwnedNFTClient<$Result.GetResult<Prisma.$OwnedNFTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OwnedNFTS.
     * @param {OwnedNFTCreateManyArgs} args - Arguments to create many OwnedNFTS.
     * @example
     * // Create many OwnedNFTS
     * const ownedNFT = await prisma.ownedNFT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnedNFTCreateManyArgs>(args?: SelectSubset<T, OwnedNFTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OwnedNFTS and returns the data saved in the database.
     * @param {OwnedNFTCreateManyAndReturnArgs} args - Arguments to create many OwnedNFTS.
     * @example
     * // Create many OwnedNFTS
     * const ownedNFT = await prisma.ownedNFT.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OwnedNFTS and only return the `id`
     * const ownedNFTWithIdOnly = await prisma.ownedNFT.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnedNFTCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnedNFTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnedNFTPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OwnedNFT.
     * @param {OwnedNFTDeleteArgs} args - Arguments to delete one OwnedNFT.
     * @example
     * // Delete one OwnedNFT
     * const OwnedNFT = await prisma.ownedNFT.delete({
     *   where: {
     *     // ... filter to delete one OwnedNFT
     *   }
     * })
     * 
     */
    delete<T extends OwnedNFTDeleteArgs>(args: SelectSubset<T, OwnedNFTDeleteArgs<ExtArgs>>): Prisma__OwnedNFTClient<$Result.GetResult<Prisma.$OwnedNFTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OwnedNFT.
     * @param {OwnedNFTUpdateArgs} args - Arguments to update one OwnedNFT.
     * @example
     * // Update one OwnedNFT
     * const ownedNFT = await prisma.ownedNFT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnedNFTUpdateArgs>(args: SelectSubset<T, OwnedNFTUpdateArgs<ExtArgs>>): Prisma__OwnedNFTClient<$Result.GetResult<Prisma.$OwnedNFTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OwnedNFTS.
     * @param {OwnedNFTDeleteManyArgs} args - Arguments to filter OwnedNFTS to delete.
     * @example
     * // Delete a few OwnedNFTS
     * const { count } = await prisma.ownedNFT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnedNFTDeleteManyArgs>(args?: SelectSubset<T, OwnedNFTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnedNFTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnedNFTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OwnedNFTS
     * const ownedNFT = await prisma.ownedNFT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnedNFTUpdateManyArgs>(args: SelectSubset<T, OwnedNFTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnedNFTS and returns the data updated in the database.
     * @param {OwnedNFTUpdateManyAndReturnArgs} args - Arguments to update many OwnedNFTS.
     * @example
     * // Update many OwnedNFTS
     * const ownedNFT = await prisma.ownedNFT.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OwnedNFTS and only return the `id`
     * const ownedNFTWithIdOnly = await prisma.ownedNFT.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OwnedNFTUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnedNFTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnedNFTPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OwnedNFT.
     * @param {OwnedNFTUpsertArgs} args - Arguments to update or create a OwnedNFT.
     * @example
     * // Update or create a OwnedNFT
     * const ownedNFT = await prisma.ownedNFT.upsert({
     *   create: {
     *     // ... data to create a OwnedNFT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OwnedNFT we want to update
     *   }
     * })
     */
    upsert<T extends OwnedNFTUpsertArgs>(args: SelectSubset<T, OwnedNFTUpsertArgs<ExtArgs>>): Prisma__OwnedNFTClient<$Result.GetResult<Prisma.$OwnedNFTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OwnedNFTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnedNFTCountArgs} args - Arguments to filter OwnedNFTS to count.
     * @example
     * // Count the number of OwnedNFTS
     * const count = await prisma.ownedNFT.count({
     *   where: {
     *     // ... the filter for the OwnedNFTS we want to count
     *   }
     * })
    **/
    count<T extends OwnedNFTCountArgs>(
      args?: Subset<T, OwnedNFTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnedNFTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OwnedNFT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnedNFTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OwnedNFTAggregateArgs>(args: Subset<T, OwnedNFTAggregateArgs>): Prisma.PrismaPromise<GetOwnedNFTAggregateType<T>>

    /**
     * Group by OwnedNFT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnedNFTGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OwnedNFTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnedNFTGroupByArgs['orderBy'] }
        : { orderBy?: OwnedNFTGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OwnedNFTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnedNFTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OwnedNFT model
   */
  readonly fields: OwnedNFTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OwnedNFT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnedNFTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OwnedNFT model
   */ 
  interface OwnedNFTFieldRefs {
    readonly id: FieldRef<"OwnedNFT", 'Int'>
    readonly owner: FieldRef<"OwnedNFT", 'String'>
    readonly contract: FieldRef<"OwnedNFT", 'String'>
    readonly tokenId: FieldRef<"OwnedNFT", 'Int'>
    readonly updatedAt: FieldRef<"OwnedNFT", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OwnedNFT findUnique
   */
  export type OwnedNFTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnedNFT
     */
    select?: OwnedNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnedNFT
     */
    omit?: OwnedNFTOmit<ExtArgs> | null
    /**
     * Filter, which OwnedNFT to fetch.
     */
    where: OwnedNFTWhereUniqueInput
  }

  /**
   * OwnedNFT findUniqueOrThrow
   */
  export type OwnedNFTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnedNFT
     */
    select?: OwnedNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnedNFT
     */
    omit?: OwnedNFTOmit<ExtArgs> | null
    /**
     * Filter, which OwnedNFT to fetch.
     */
    where: OwnedNFTWhereUniqueInput
  }

  /**
   * OwnedNFT findFirst
   */
  export type OwnedNFTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnedNFT
     */
    select?: OwnedNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnedNFT
     */
    omit?: OwnedNFTOmit<ExtArgs> | null
    /**
     * Filter, which OwnedNFT to fetch.
     */
    where?: OwnedNFTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnedNFTS to fetch.
     */
    orderBy?: OwnedNFTOrderByWithRelationInput | OwnedNFTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnedNFTS.
     */
    cursor?: OwnedNFTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnedNFTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnedNFTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnedNFTS.
     */
    distinct?: OwnedNFTScalarFieldEnum | OwnedNFTScalarFieldEnum[]
  }

  /**
   * OwnedNFT findFirstOrThrow
   */
  export type OwnedNFTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnedNFT
     */
    select?: OwnedNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnedNFT
     */
    omit?: OwnedNFTOmit<ExtArgs> | null
    /**
     * Filter, which OwnedNFT to fetch.
     */
    where?: OwnedNFTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnedNFTS to fetch.
     */
    orderBy?: OwnedNFTOrderByWithRelationInput | OwnedNFTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnedNFTS.
     */
    cursor?: OwnedNFTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnedNFTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnedNFTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnedNFTS.
     */
    distinct?: OwnedNFTScalarFieldEnum | OwnedNFTScalarFieldEnum[]
  }

  /**
   * OwnedNFT findMany
   */
  export type OwnedNFTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnedNFT
     */
    select?: OwnedNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnedNFT
     */
    omit?: OwnedNFTOmit<ExtArgs> | null
    /**
     * Filter, which OwnedNFTS to fetch.
     */
    where?: OwnedNFTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnedNFTS to fetch.
     */
    orderBy?: OwnedNFTOrderByWithRelationInput | OwnedNFTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OwnedNFTS.
     */
    cursor?: OwnedNFTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnedNFTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnedNFTS.
     */
    skip?: number
    distinct?: OwnedNFTScalarFieldEnum | OwnedNFTScalarFieldEnum[]
  }

  /**
   * OwnedNFT create
   */
  export type OwnedNFTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnedNFT
     */
    select?: OwnedNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnedNFT
     */
    omit?: OwnedNFTOmit<ExtArgs> | null
    /**
     * The data needed to create a OwnedNFT.
     */
    data: XOR<OwnedNFTCreateInput, OwnedNFTUncheckedCreateInput>
  }

  /**
   * OwnedNFT createMany
   */
  export type OwnedNFTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OwnedNFTS.
     */
    data: OwnedNFTCreateManyInput | OwnedNFTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OwnedNFT createManyAndReturn
   */
  export type OwnedNFTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnedNFT
     */
    select?: OwnedNFTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnedNFT
     */
    omit?: OwnedNFTOmit<ExtArgs> | null
    /**
     * The data used to create many OwnedNFTS.
     */
    data: OwnedNFTCreateManyInput | OwnedNFTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OwnedNFT update
   */
  export type OwnedNFTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnedNFT
     */
    select?: OwnedNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnedNFT
     */
    omit?: OwnedNFTOmit<ExtArgs> | null
    /**
     * The data needed to update a OwnedNFT.
     */
    data: XOR<OwnedNFTUpdateInput, OwnedNFTUncheckedUpdateInput>
    /**
     * Choose, which OwnedNFT to update.
     */
    where: OwnedNFTWhereUniqueInput
  }

  /**
   * OwnedNFT updateMany
   */
  export type OwnedNFTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OwnedNFTS.
     */
    data: XOR<OwnedNFTUpdateManyMutationInput, OwnedNFTUncheckedUpdateManyInput>
    /**
     * Filter which OwnedNFTS to update
     */
    where?: OwnedNFTWhereInput
    /**
     * Limit how many OwnedNFTS to update.
     */
    limit?: number
  }

  /**
   * OwnedNFT updateManyAndReturn
   */
  export type OwnedNFTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnedNFT
     */
    select?: OwnedNFTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnedNFT
     */
    omit?: OwnedNFTOmit<ExtArgs> | null
    /**
     * The data used to update OwnedNFTS.
     */
    data: XOR<OwnedNFTUpdateManyMutationInput, OwnedNFTUncheckedUpdateManyInput>
    /**
     * Filter which OwnedNFTS to update
     */
    where?: OwnedNFTWhereInput
    /**
     * Limit how many OwnedNFTS to update.
     */
    limit?: number
  }

  /**
   * OwnedNFT upsert
   */
  export type OwnedNFTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnedNFT
     */
    select?: OwnedNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnedNFT
     */
    omit?: OwnedNFTOmit<ExtArgs> | null
    /**
     * The filter to search for the OwnedNFT to update in case it exists.
     */
    where: OwnedNFTWhereUniqueInput
    /**
     * In case the OwnedNFT found by the `where` argument doesn't exist, create a new OwnedNFT with this data.
     */
    create: XOR<OwnedNFTCreateInput, OwnedNFTUncheckedCreateInput>
    /**
     * In case the OwnedNFT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnedNFTUpdateInput, OwnedNFTUncheckedUpdateInput>
  }

  /**
   * OwnedNFT delete
   */
  export type OwnedNFTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnedNFT
     */
    select?: OwnedNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnedNFT
     */
    omit?: OwnedNFTOmit<ExtArgs> | null
    /**
     * Filter which OwnedNFT to delete.
     */
    where: OwnedNFTWhereUniqueInput
  }

  /**
   * OwnedNFT deleteMany
   */
  export type OwnedNFTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnedNFTS to delete
     */
    where?: OwnedNFTWhereInput
    /**
     * Limit how many OwnedNFTS to delete.
     */
    limit?: number
  }

  /**
   * OwnedNFT without action
   */
  export type OwnedNFTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnedNFT
     */
    select?: OwnedNFTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnedNFT
     */
    omit?: OwnedNFTOmit<ExtArgs> | null
  }


  /**
   * Model PaintGrids
   */

  export type AggregatePaintGrids = {
    _count: PaintGridsCountAggregateOutputType | null
    _avg: PaintGridsAvgAggregateOutputType | null
    _sum: PaintGridsSumAggregateOutputType | null
    _min: PaintGridsMinAggregateOutputType | null
    _max: PaintGridsMaxAggregateOutputType | null
  }

  export type PaintGridsAvgAggregateOutputType = {
    gridId: number | null
    tokenId: number | null
    block: number | null
  }

  export type PaintGridsSumAggregateOutputType = {
    gridId: number | null
    tokenId: number | null
    block: number | null
  }

  export type PaintGridsMinAggregateOutputType = {
    gridId: number | null
    nftAddress: string | null
    tokenId: number | null
    metadata: string | null
    painter: string | null
    block: number | null
    txHash: string | null
    paintedAt: Date | null
  }

  export type PaintGridsMaxAggregateOutputType = {
    gridId: number | null
    nftAddress: string | null
    tokenId: number | null
    metadata: string | null
    painter: string | null
    block: number | null
    txHash: string | null
    paintedAt: Date | null
  }

  export type PaintGridsCountAggregateOutputType = {
    gridId: number
    nftAddress: number
    tokenId: number
    metadata: number
    painter: number
    block: number
    txHash: number
    paintedAt: number
    _all: number
  }


  export type PaintGridsAvgAggregateInputType = {
    gridId?: true
    tokenId?: true
    block?: true
  }

  export type PaintGridsSumAggregateInputType = {
    gridId?: true
    tokenId?: true
    block?: true
  }

  export type PaintGridsMinAggregateInputType = {
    gridId?: true
    nftAddress?: true
    tokenId?: true
    metadata?: true
    painter?: true
    block?: true
    txHash?: true
    paintedAt?: true
  }

  export type PaintGridsMaxAggregateInputType = {
    gridId?: true
    nftAddress?: true
    tokenId?: true
    metadata?: true
    painter?: true
    block?: true
    txHash?: true
    paintedAt?: true
  }

  export type PaintGridsCountAggregateInputType = {
    gridId?: true
    nftAddress?: true
    tokenId?: true
    metadata?: true
    painter?: true
    block?: true
    txHash?: true
    paintedAt?: true
    _all?: true
  }

  export type PaintGridsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaintGrids to aggregate.
     */
    where?: PaintGridsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaintGrids to fetch.
     */
    orderBy?: PaintGridsOrderByWithRelationInput | PaintGridsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaintGridsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaintGrids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaintGrids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaintGrids
    **/
    _count?: true | PaintGridsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaintGridsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaintGridsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaintGridsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaintGridsMaxAggregateInputType
  }

  export type GetPaintGridsAggregateType<T extends PaintGridsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaintGrids]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaintGrids[P]>
      : GetScalarType<T[P], AggregatePaintGrids[P]>
  }




  export type PaintGridsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaintGridsWhereInput
    orderBy?: PaintGridsOrderByWithAggregationInput | PaintGridsOrderByWithAggregationInput[]
    by: PaintGridsScalarFieldEnum[] | PaintGridsScalarFieldEnum
    having?: PaintGridsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaintGridsCountAggregateInputType | true
    _avg?: PaintGridsAvgAggregateInputType
    _sum?: PaintGridsSumAggregateInputType
    _min?: PaintGridsMinAggregateInputType
    _max?: PaintGridsMaxAggregateInputType
  }

  export type PaintGridsGroupByOutputType = {
    gridId: number
    nftAddress: string
    tokenId: number
    metadata: string
    painter: string
    block: number
    txHash: string
    paintedAt: Date
    _count: PaintGridsCountAggregateOutputType | null
    _avg: PaintGridsAvgAggregateOutputType | null
    _sum: PaintGridsSumAggregateOutputType | null
    _min: PaintGridsMinAggregateOutputType | null
    _max: PaintGridsMaxAggregateOutputType | null
  }

  type GetPaintGridsGroupByPayload<T extends PaintGridsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaintGridsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaintGridsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaintGridsGroupByOutputType[P]>
            : GetScalarType<T[P], PaintGridsGroupByOutputType[P]>
        }
      >
    >


  export type PaintGridsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gridId?: boolean
    nftAddress?: boolean
    tokenId?: boolean
    metadata?: boolean
    painter?: boolean
    block?: boolean
    txHash?: boolean
    paintedAt?: boolean
  }, ExtArgs["result"]["paintGrids"]>

  export type PaintGridsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gridId?: boolean
    nftAddress?: boolean
    tokenId?: boolean
    metadata?: boolean
    painter?: boolean
    block?: boolean
    txHash?: boolean
    paintedAt?: boolean
  }, ExtArgs["result"]["paintGrids"]>

  export type PaintGridsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gridId?: boolean
    nftAddress?: boolean
    tokenId?: boolean
    metadata?: boolean
    painter?: boolean
    block?: boolean
    txHash?: boolean
    paintedAt?: boolean
  }, ExtArgs["result"]["paintGrids"]>

  export type PaintGridsSelectScalar = {
    gridId?: boolean
    nftAddress?: boolean
    tokenId?: boolean
    metadata?: boolean
    painter?: boolean
    block?: boolean
    txHash?: boolean
    paintedAt?: boolean
  }

  export type PaintGridsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gridId" | "nftAddress" | "tokenId" | "metadata" | "painter" | "block" | "txHash" | "paintedAt", ExtArgs["result"]["paintGrids"]>

  export type $PaintGridsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaintGrids"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      gridId: number
      nftAddress: string
      tokenId: number
      metadata: string
      painter: string
      block: number
      txHash: string
      paintedAt: Date
    }, ExtArgs["result"]["paintGrids"]>
    composites: {}
  }

  type PaintGridsGetPayload<S extends boolean | null | undefined | PaintGridsDefaultArgs> = $Result.GetResult<Prisma.$PaintGridsPayload, S>

  type PaintGridsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaintGridsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaintGridsCountAggregateInputType | true
    }

  export interface PaintGridsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaintGrids'], meta: { name: 'PaintGrids' } }
    /**
     * Find zero or one PaintGrids that matches the filter.
     * @param {PaintGridsFindUniqueArgs} args - Arguments to find a PaintGrids
     * @example
     * // Get one PaintGrids
     * const paintGrids = await prisma.paintGrids.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaintGridsFindUniqueArgs>(args: SelectSubset<T, PaintGridsFindUniqueArgs<ExtArgs>>): Prisma__PaintGridsClient<$Result.GetResult<Prisma.$PaintGridsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaintGrids that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaintGridsFindUniqueOrThrowArgs} args - Arguments to find a PaintGrids
     * @example
     * // Get one PaintGrids
     * const paintGrids = await prisma.paintGrids.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaintGridsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaintGridsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaintGridsClient<$Result.GetResult<Prisma.$PaintGridsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaintGrids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaintGridsFindFirstArgs} args - Arguments to find a PaintGrids
     * @example
     * // Get one PaintGrids
     * const paintGrids = await prisma.paintGrids.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaintGridsFindFirstArgs>(args?: SelectSubset<T, PaintGridsFindFirstArgs<ExtArgs>>): Prisma__PaintGridsClient<$Result.GetResult<Prisma.$PaintGridsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaintGrids that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaintGridsFindFirstOrThrowArgs} args - Arguments to find a PaintGrids
     * @example
     * // Get one PaintGrids
     * const paintGrids = await prisma.paintGrids.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaintGridsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaintGridsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaintGridsClient<$Result.GetResult<Prisma.$PaintGridsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaintGrids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaintGridsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaintGrids
     * const paintGrids = await prisma.paintGrids.findMany()
     * 
     * // Get first 10 PaintGrids
     * const paintGrids = await prisma.paintGrids.findMany({ take: 10 })
     * 
     * // Only select the `gridId`
     * const paintGridsWithGridIdOnly = await prisma.paintGrids.findMany({ select: { gridId: true } })
     * 
     */
    findMany<T extends PaintGridsFindManyArgs>(args?: SelectSubset<T, PaintGridsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaintGridsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaintGrids.
     * @param {PaintGridsCreateArgs} args - Arguments to create a PaintGrids.
     * @example
     * // Create one PaintGrids
     * const PaintGrids = await prisma.paintGrids.create({
     *   data: {
     *     // ... data to create a PaintGrids
     *   }
     * })
     * 
     */
    create<T extends PaintGridsCreateArgs>(args: SelectSubset<T, PaintGridsCreateArgs<ExtArgs>>): Prisma__PaintGridsClient<$Result.GetResult<Prisma.$PaintGridsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaintGrids.
     * @param {PaintGridsCreateManyArgs} args - Arguments to create many PaintGrids.
     * @example
     * // Create many PaintGrids
     * const paintGrids = await prisma.paintGrids.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaintGridsCreateManyArgs>(args?: SelectSubset<T, PaintGridsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaintGrids and returns the data saved in the database.
     * @param {PaintGridsCreateManyAndReturnArgs} args - Arguments to create many PaintGrids.
     * @example
     * // Create many PaintGrids
     * const paintGrids = await prisma.paintGrids.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaintGrids and only return the `gridId`
     * const paintGridsWithGridIdOnly = await prisma.paintGrids.createManyAndReturn({
     *   select: { gridId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaintGridsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaintGridsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaintGridsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaintGrids.
     * @param {PaintGridsDeleteArgs} args - Arguments to delete one PaintGrids.
     * @example
     * // Delete one PaintGrids
     * const PaintGrids = await prisma.paintGrids.delete({
     *   where: {
     *     // ... filter to delete one PaintGrids
     *   }
     * })
     * 
     */
    delete<T extends PaintGridsDeleteArgs>(args: SelectSubset<T, PaintGridsDeleteArgs<ExtArgs>>): Prisma__PaintGridsClient<$Result.GetResult<Prisma.$PaintGridsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaintGrids.
     * @param {PaintGridsUpdateArgs} args - Arguments to update one PaintGrids.
     * @example
     * // Update one PaintGrids
     * const paintGrids = await prisma.paintGrids.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaintGridsUpdateArgs>(args: SelectSubset<T, PaintGridsUpdateArgs<ExtArgs>>): Prisma__PaintGridsClient<$Result.GetResult<Prisma.$PaintGridsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaintGrids.
     * @param {PaintGridsDeleteManyArgs} args - Arguments to filter PaintGrids to delete.
     * @example
     * // Delete a few PaintGrids
     * const { count } = await prisma.paintGrids.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaintGridsDeleteManyArgs>(args?: SelectSubset<T, PaintGridsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaintGrids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaintGridsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaintGrids
     * const paintGrids = await prisma.paintGrids.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaintGridsUpdateManyArgs>(args: SelectSubset<T, PaintGridsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaintGrids and returns the data updated in the database.
     * @param {PaintGridsUpdateManyAndReturnArgs} args - Arguments to update many PaintGrids.
     * @example
     * // Update many PaintGrids
     * const paintGrids = await prisma.paintGrids.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaintGrids and only return the `gridId`
     * const paintGridsWithGridIdOnly = await prisma.paintGrids.updateManyAndReturn({
     *   select: { gridId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaintGridsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaintGridsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaintGridsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaintGrids.
     * @param {PaintGridsUpsertArgs} args - Arguments to update or create a PaintGrids.
     * @example
     * // Update or create a PaintGrids
     * const paintGrids = await prisma.paintGrids.upsert({
     *   create: {
     *     // ... data to create a PaintGrids
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaintGrids we want to update
     *   }
     * })
     */
    upsert<T extends PaintGridsUpsertArgs>(args: SelectSubset<T, PaintGridsUpsertArgs<ExtArgs>>): Prisma__PaintGridsClient<$Result.GetResult<Prisma.$PaintGridsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaintGrids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaintGridsCountArgs} args - Arguments to filter PaintGrids to count.
     * @example
     * // Count the number of PaintGrids
     * const count = await prisma.paintGrids.count({
     *   where: {
     *     // ... the filter for the PaintGrids we want to count
     *   }
     * })
    **/
    count<T extends PaintGridsCountArgs>(
      args?: Subset<T, PaintGridsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaintGridsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaintGrids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaintGridsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaintGridsAggregateArgs>(args: Subset<T, PaintGridsAggregateArgs>): Prisma.PrismaPromise<GetPaintGridsAggregateType<T>>

    /**
     * Group by PaintGrids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaintGridsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaintGridsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaintGridsGroupByArgs['orderBy'] }
        : { orderBy?: PaintGridsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaintGridsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaintGridsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaintGrids model
   */
  readonly fields: PaintGridsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaintGrids.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaintGridsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaintGrids model
   */ 
  interface PaintGridsFieldRefs {
    readonly gridId: FieldRef<"PaintGrids", 'Int'>
    readonly nftAddress: FieldRef<"PaintGrids", 'String'>
    readonly tokenId: FieldRef<"PaintGrids", 'Int'>
    readonly metadata: FieldRef<"PaintGrids", 'String'>
    readonly painter: FieldRef<"PaintGrids", 'String'>
    readonly block: FieldRef<"PaintGrids", 'Int'>
    readonly txHash: FieldRef<"PaintGrids", 'String'>
    readonly paintedAt: FieldRef<"PaintGrids", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaintGrids findUnique
   */
  export type PaintGridsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaintGrids
     */
    select?: PaintGridsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaintGrids
     */
    omit?: PaintGridsOmit<ExtArgs> | null
    /**
     * Filter, which PaintGrids to fetch.
     */
    where: PaintGridsWhereUniqueInput
  }

  /**
   * PaintGrids findUniqueOrThrow
   */
  export type PaintGridsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaintGrids
     */
    select?: PaintGridsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaintGrids
     */
    omit?: PaintGridsOmit<ExtArgs> | null
    /**
     * Filter, which PaintGrids to fetch.
     */
    where: PaintGridsWhereUniqueInput
  }

  /**
   * PaintGrids findFirst
   */
  export type PaintGridsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaintGrids
     */
    select?: PaintGridsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaintGrids
     */
    omit?: PaintGridsOmit<ExtArgs> | null
    /**
     * Filter, which PaintGrids to fetch.
     */
    where?: PaintGridsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaintGrids to fetch.
     */
    orderBy?: PaintGridsOrderByWithRelationInput | PaintGridsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaintGrids.
     */
    cursor?: PaintGridsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaintGrids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaintGrids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaintGrids.
     */
    distinct?: PaintGridsScalarFieldEnum | PaintGridsScalarFieldEnum[]
  }

  /**
   * PaintGrids findFirstOrThrow
   */
  export type PaintGridsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaintGrids
     */
    select?: PaintGridsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaintGrids
     */
    omit?: PaintGridsOmit<ExtArgs> | null
    /**
     * Filter, which PaintGrids to fetch.
     */
    where?: PaintGridsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaintGrids to fetch.
     */
    orderBy?: PaintGridsOrderByWithRelationInput | PaintGridsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaintGrids.
     */
    cursor?: PaintGridsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaintGrids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaintGrids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaintGrids.
     */
    distinct?: PaintGridsScalarFieldEnum | PaintGridsScalarFieldEnum[]
  }

  /**
   * PaintGrids findMany
   */
  export type PaintGridsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaintGrids
     */
    select?: PaintGridsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaintGrids
     */
    omit?: PaintGridsOmit<ExtArgs> | null
    /**
     * Filter, which PaintGrids to fetch.
     */
    where?: PaintGridsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaintGrids to fetch.
     */
    orderBy?: PaintGridsOrderByWithRelationInput | PaintGridsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaintGrids.
     */
    cursor?: PaintGridsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaintGrids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaintGrids.
     */
    skip?: number
    distinct?: PaintGridsScalarFieldEnum | PaintGridsScalarFieldEnum[]
  }

  /**
   * PaintGrids create
   */
  export type PaintGridsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaintGrids
     */
    select?: PaintGridsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaintGrids
     */
    omit?: PaintGridsOmit<ExtArgs> | null
    /**
     * The data needed to create a PaintGrids.
     */
    data: XOR<PaintGridsCreateInput, PaintGridsUncheckedCreateInput>
  }

  /**
   * PaintGrids createMany
   */
  export type PaintGridsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaintGrids.
     */
    data: PaintGridsCreateManyInput | PaintGridsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaintGrids createManyAndReturn
   */
  export type PaintGridsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaintGrids
     */
    select?: PaintGridsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaintGrids
     */
    omit?: PaintGridsOmit<ExtArgs> | null
    /**
     * The data used to create many PaintGrids.
     */
    data: PaintGridsCreateManyInput | PaintGridsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaintGrids update
   */
  export type PaintGridsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaintGrids
     */
    select?: PaintGridsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaintGrids
     */
    omit?: PaintGridsOmit<ExtArgs> | null
    /**
     * The data needed to update a PaintGrids.
     */
    data: XOR<PaintGridsUpdateInput, PaintGridsUncheckedUpdateInput>
    /**
     * Choose, which PaintGrids to update.
     */
    where: PaintGridsWhereUniqueInput
  }

  /**
   * PaintGrids updateMany
   */
  export type PaintGridsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaintGrids.
     */
    data: XOR<PaintGridsUpdateManyMutationInput, PaintGridsUncheckedUpdateManyInput>
    /**
     * Filter which PaintGrids to update
     */
    where?: PaintGridsWhereInput
    /**
     * Limit how many PaintGrids to update.
     */
    limit?: number
  }

  /**
   * PaintGrids updateManyAndReturn
   */
  export type PaintGridsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaintGrids
     */
    select?: PaintGridsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaintGrids
     */
    omit?: PaintGridsOmit<ExtArgs> | null
    /**
     * The data used to update PaintGrids.
     */
    data: XOR<PaintGridsUpdateManyMutationInput, PaintGridsUncheckedUpdateManyInput>
    /**
     * Filter which PaintGrids to update
     */
    where?: PaintGridsWhereInput
    /**
     * Limit how many PaintGrids to update.
     */
    limit?: number
  }

  /**
   * PaintGrids upsert
   */
  export type PaintGridsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaintGrids
     */
    select?: PaintGridsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaintGrids
     */
    omit?: PaintGridsOmit<ExtArgs> | null
    /**
     * The filter to search for the PaintGrids to update in case it exists.
     */
    where: PaintGridsWhereUniqueInput
    /**
     * In case the PaintGrids found by the `where` argument doesn't exist, create a new PaintGrids with this data.
     */
    create: XOR<PaintGridsCreateInput, PaintGridsUncheckedCreateInput>
    /**
     * In case the PaintGrids was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaintGridsUpdateInput, PaintGridsUncheckedUpdateInput>
  }

  /**
   * PaintGrids delete
   */
  export type PaintGridsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaintGrids
     */
    select?: PaintGridsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaintGrids
     */
    omit?: PaintGridsOmit<ExtArgs> | null
    /**
     * Filter which PaintGrids to delete.
     */
    where: PaintGridsWhereUniqueInput
  }

  /**
   * PaintGrids deleteMany
   */
  export type PaintGridsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaintGrids to delete
     */
    where?: PaintGridsWhereInput
    /**
     * Limit how many PaintGrids to delete.
     */
    limit?: number
  }

  /**
   * PaintGrids without action
   */
  export type PaintGridsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaintGrids
     */
    select?: PaintGridsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaintGrids
     */
    omit?: PaintGridsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OwnedNFTScalarFieldEnum: {
    id: 'id',
    owner: 'owner',
    contract: 'contract',
    tokenId: 'tokenId',
    updatedAt: 'updatedAt'
  };

  export type OwnedNFTScalarFieldEnum = (typeof OwnedNFTScalarFieldEnum)[keyof typeof OwnedNFTScalarFieldEnum]


  export const PaintGridsScalarFieldEnum: {
    gridId: 'gridId',
    nftAddress: 'nftAddress',
    tokenId: 'tokenId',
    metadata: 'metadata',
    painter: 'painter',
    block: 'block',
    txHash: 'txHash',
    paintedAt: 'paintedAt'
  };

  export type PaintGridsScalarFieldEnum = (typeof PaintGridsScalarFieldEnum)[keyof typeof PaintGridsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OwnedNFTWhereInput = {
    AND?: OwnedNFTWhereInput | OwnedNFTWhereInput[]
    OR?: OwnedNFTWhereInput[]
    NOT?: OwnedNFTWhereInput | OwnedNFTWhereInput[]
    id?: IntFilter<"OwnedNFT"> | number
    owner?: StringFilter<"OwnedNFT"> | string
    contract?: StringFilter<"OwnedNFT"> | string
    tokenId?: IntFilter<"OwnedNFT"> | number
    updatedAt?: DateTimeFilter<"OwnedNFT"> | Date | string
  }

  export type OwnedNFTOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    contract?: SortOrder
    tokenId?: SortOrder
    updatedAt?: SortOrder
  }

  export type OwnedNFTWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contract_tokenId?: OwnedNFTContractTokenIdCompoundUniqueInput
    AND?: OwnedNFTWhereInput | OwnedNFTWhereInput[]
    OR?: OwnedNFTWhereInput[]
    NOT?: OwnedNFTWhereInput | OwnedNFTWhereInput[]
    owner?: StringFilter<"OwnedNFT"> | string
    contract?: StringFilter<"OwnedNFT"> | string
    tokenId?: IntFilter<"OwnedNFT"> | number
    updatedAt?: DateTimeFilter<"OwnedNFT"> | Date | string
  }, "id" | "contract_tokenId">

  export type OwnedNFTOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    contract?: SortOrder
    tokenId?: SortOrder
    updatedAt?: SortOrder
    _count?: OwnedNFTCountOrderByAggregateInput
    _avg?: OwnedNFTAvgOrderByAggregateInput
    _max?: OwnedNFTMaxOrderByAggregateInput
    _min?: OwnedNFTMinOrderByAggregateInput
    _sum?: OwnedNFTSumOrderByAggregateInput
  }

  export type OwnedNFTScalarWhereWithAggregatesInput = {
    AND?: OwnedNFTScalarWhereWithAggregatesInput | OwnedNFTScalarWhereWithAggregatesInput[]
    OR?: OwnedNFTScalarWhereWithAggregatesInput[]
    NOT?: OwnedNFTScalarWhereWithAggregatesInput | OwnedNFTScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OwnedNFT"> | number
    owner?: StringWithAggregatesFilter<"OwnedNFT"> | string
    contract?: StringWithAggregatesFilter<"OwnedNFT"> | string
    tokenId?: IntWithAggregatesFilter<"OwnedNFT"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"OwnedNFT"> | Date | string
  }

  export type PaintGridsWhereInput = {
    AND?: PaintGridsWhereInput | PaintGridsWhereInput[]
    OR?: PaintGridsWhereInput[]
    NOT?: PaintGridsWhereInput | PaintGridsWhereInput[]
    gridId?: IntFilter<"PaintGrids"> | number
    nftAddress?: StringFilter<"PaintGrids"> | string
    tokenId?: IntFilter<"PaintGrids"> | number
    metadata?: StringFilter<"PaintGrids"> | string
    painter?: StringFilter<"PaintGrids"> | string
    block?: IntFilter<"PaintGrids"> | number
    txHash?: StringFilter<"PaintGrids"> | string
    paintedAt?: DateTimeFilter<"PaintGrids"> | Date | string
  }

  export type PaintGridsOrderByWithRelationInput = {
    gridId?: SortOrder
    nftAddress?: SortOrder
    tokenId?: SortOrder
    metadata?: SortOrder
    painter?: SortOrder
    block?: SortOrder
    txHash?: SortOrder
    paintedAt?: SortOrder
  }

  export type PaintGridsWhereUniqueInput = Prisma.AtLeast<{
    gridId?: number
    txHash?: string
    AND?: PaintGridsWhereInput | PaintGridsWhereInput[]
    OR?: PaintGridsWhereInput[]
    NOT?: PaintGridsWhereInput | PaintGridsWhereInput[]
    nftAddress?: StringFilter<"PaintGrids"> | string
    tokenId?: IntFilter<"PaintGrids"> | number
    metadata?: StringFilter<"PaintGrids"> | string
    painter?: StringFilter<"PaintGrids"> | string
    block?: IntFilter<"PaintGrids"> | number
    paintedAt?: DateTimeFilter<"PaintGrids"> | Date | string
  }, "gridId" | "txHash">

  export type PaintGridsOrderByWithAggregationInput = {
    gridId?: SortOrder
    nftAddress?: SortOrder
    tokenId?: SortOrder
    metadata?: SortOrder
    painter?: SortOrder
    block?: SortOrder
    txHash?: SortOrder
    paintedAt?: SortOrder
    _count?: PaintGridsCountOrderByAggregateInput
    _avg?: PaintGridsAvgOrderByAggregateInput
    _max?: PaintGridsMaxOrderByAggregateInput
    _min?: PaintGridsMinOrderByAggregateInput
    _sum?: PaintGridsSumOrderByAggregateInput
  }

  export type PaintGridsScalarWhereWithAggregatesInput = {
    AND?: PaintGridsScalarWhereWithAggregatesInput | PaintGridsScalarWhereWithAggregatesInput[]
    OR?: PaintGridsScalarWhereWithAggregatesInput[]
    NOT?: PaintGridsScalarWhereWithAggregatesInput | PaintGridsScalarWhereWithAggregatesInput[]
    gridId?: IntWithAggregatesFilter<"PaintGrids"> | number
    nftAddress?: StringWithAggregatesFilter<"PaintGrids"> | string
    tokenId?: IntWithAggregatesFilter<"PaintGrids"> | number
    metadata?: StringWithAggregatesFilter<"PaintGrids"> | string
    painter?: StringWithAggregatesFilter<"PaintGrids"> | string
    block?: IntWithAggregatesFilter<"PaintGrids"> | number
    txHash?: StringWithAggregatesFilter<"PaintGrids"> | string
    paintedAt?: DateTimeWithAggregatesFilter<"PaintGrids"> | Date | string
  }

  export type OwnedNFTCreateInput = {
    owner: string
    contract: string
    tokenId: number
    updatedAt?: Date | string
  }

  export type OwnedNFTUncheckedCreateInput = {
    id?: number
    owner: string
    contract: string
    tokenId: number
    updatedAt?: Date | string
  }

  export type OwnedNFTUpdateInput = {
    owner?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnedNFTUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnedNFTCreateManyInput = {
    id?: number
    owner: string
    contract: string
    tokenId: number
    updatedAt?: Date | string
  }

  export type OwnedNFTUpdateManyMutationInput = {
    owner?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnedNFTUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    owner?: StringFieldUpdateOperationsInput | string
    contract?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaintGridsCreateInput = {
    gridId: number
    nftAddress: string
    tokenId: number
    metadata: string
    painter: string
    block: number
    txHash: string
    paintedAt?: Date | string
  }

  export type PaintGridsUncheckedCreateInput = {
    gridId: number
    nftAddress: string
    tokenId: number
    metadata: string
    painter: string
    block: number
    txHash: string
    paintedAt?: Date | string
  }

  export type PaintGridsUpdateInput = {
    gridId?: IntFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    metadata?: StringFieldUpdateOperationsInput | string
    painter?: StringFieldUpdateOperationsInput | string
    block?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    paintedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaintGridsUncheckedUpdateInput = {
    gridId?: IntFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    metadata?: StringFieldUpdateOperationsInput | string
    painter?: StringFieldUpdateOperationsInput | string
    block?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    paintedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaintGridsCreateManyInput = {
    gridId: number
    nftAddress: string
    tokenId: number
    metadata: string
    painter: string
    block: number
    txHash: string
    paintedAt?: Date | string
  }

  export type PaintGridsUpdateManyMutationInput = {
    gridId?: IntFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    metadata?: StringFieldUpdateOperationsInput | string
    painter?: StringFieldUpdateOperationsInput | string
    block?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    paintedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaintGridsUncheckedUpdateManyInput = {
    gridId?: IntFieldUpdateOperationsInput | number
    nftAddress?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    metadata?: StringFieldUpdateOperationsInput | string
    painter?: StringFieldUpdateOperationsInput | string
    block?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    paintedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OwnedNFTContractTokenIdCompoundUniqueInput = {
    contract: string
    tokenId: number
  }

  export type OwnedNFTCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    contract?: SortOrder
    tokenId?: SortOrder
    updatedAt?: SortOrder
  }

  export type OwnedNFTAvgOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
  }

  export type OwnedNFTMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    contract?: SortOrder
    tokenId?: SortOrder
    updatedAt?: SortOrder
  }

  export type OwnedNFTMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    contract?: SortOrder
    tokenId?: SortOrder
    updatedAt?: SortOrder
  }

  export type OwnedNFTSumOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PaintGridsCountOrderByAggregateInput = {
    gridId?: SortOrder
    nftAddress?: SortOrder
    tokenId?: SortOrder
    metadata?: SortOrder
    painter?: SortOrder
    block?: SortOrder
    txHash?: SortOrder
    paintedAt?: SortOrder
  }

  export type PaintGridsAvgOrderByAggregateInput = {
    gridId?: SortOrder
    tokenId?: SortOrder
    block?: SortOrder
  }

  export type PaintGridsMaxOrderByAggregateInput = {
    gridId?: SortOrder
    nftAddress?: SortOrder
    tokenId?: SortOrder
    metadata?: SortOrder
    painter?: SortOrder
    block?: SortOrder
    txHash?: SortOrder
    paintedAt?: SortOrder
  }

  export type PaintGridsMinOrderByAggregateInput = {
    gridId?: SortOrder
    nftAddress?: SortOrder
    tokenId?: SortOrder
    metadata?: SortOrder
    painter?: SortOrder
    block?: SortOrder
    txHash?: SortOrder
    paintedAt?: SortOrder
  }

  export type PaintGridsSumOrderByAggregateInput = {
    gridId?: SortOrder
    tokenId?: SortOrder
    block?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}