
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MagicLink
 * 
 */
export type MagicLink = $Result.DefaultSelection<Prisma.$MagicLinkPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Spot
 * 
 */
export type Spot = $Result.DefaultSelection<Prisma.$SpotPayload>
/**
 * Model SpotImage
 * 
 */
export type SpotImage = $Result.DefaultSelection<Prisma.$SpotImagePayload>
/**
 * Model SpotRating
 * 
 */
export type SpotRating = $Result.DefaultSelection<Prisma.$SpotRatingPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model SpotTag
 * 
 */
export type SpotTag = $Result.DefaultSelection<Prisma.$SpotTagPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model CollectionSpot
 * 
 */
export type CollectionSpot = $Result.DefaultSelection<Prisma.$CollectionSpotPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventAttendee
 * 
 */
export type EventAttendee = $Result.DefaultSelection<Prisma.$EventAttendeePayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventStatus: {
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


export const EventAttendeeStatus: {
  INTERESTED: 'INTERESTED',
  ATTENDING: 'ATTENDING',
  NOT_ATTENDING: 'NOT_ATTENDING'
};

export type EventAttendeeStatus = (typeof EventAttendeeStatus)[keyof typeof EventAttendeeStatus]


export const ReportType: {
  INAPPROPRIATE_CONTENT: 'INAPPROPRIATE_CONTENT',
  SPAM: 'SPAM',
  INCORRECT_LOCATION: 'INCORRECT_LOCATION',
  SAFETY_CONCERN: 'SAFETY_CONCERN',
  DUPLICATE: 'DUPLICATE',
  OTHER: 'OTHER'
};

export type ReportType = (typeof ReportType)[keyof typeof ReportType]


export const ReportStatus: {
  PENDING: 'PENDING',
  REVIEWED: 'REVIEWED',
  RESOLVED: 'RESOLVED',
  DISMISSED: 'DISMISSED'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]

}

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type EventAttendeeStatus = $Enums.EventAttendeeStatus

export const EventAttendeeStatus: typeof $Enums.EventAttendeeStatus

export type ReportType = $Enums.ReportType

export const ReportType: typeof $Enums.ReportType

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.magicLink`: Exposes CRUD operations for the **MagicLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MagicLinks
    * const magicLinks = await prisma.magicLink.findMany()
    * ```
    */
  get magicLink(): Prisma.MagicLinkDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.spot`: Exposes CRUD operations for the **Spot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spots
    * const spots = await prisma.spot.findMany()
    * ```
    */
  get spot(): Prisma.SpotDelegate<ExtArgs>;

  /**
   * `prisma.spotImage`: Exposes CRUD operations for the **SpotImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpotImages
    * const spotImages = await prisma.spotImage.findMany()
    * ```
    */
  get spotImage(): Prisma.SpotImageDelegate<ExtArgs>;

  /**
   * `prisma.spotRating`: Exposes CRUD operations for the **SpotRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpotRatings
    * const spotRatings = await prisma.spotRating.findMany()
    * ```
    */
  get spotRating(): Prisma.SpotRatingDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.spotTag`: Exposes CRUD operations for the **SpotTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpotTags
    * const spotTags = await prisma.spotTag.findMany()
    * ```
    */
  get spotTag(): Prisma.SpotTagDelegate<ExtArgs>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs>;

  /**
   * `prisma.collectionSpot`: Exposes CRUD operations for the **CollectionSpot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollectionSpots
    * const collectionSpots = await prisma.collectionSpot.findMany()
    * ```
    */
  get collectionSpot(): Prisma.CollectionSpotDelegate<ExtArgs>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.eventAttendee`: Exposes CRUD operations for the **EventAttendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventAttendees
    * const eventAttendees = await prisma.eventAttendee.findMany()
    * ```
    */
  get eventAttendee(): Prisma.EventAttendeeDelegate<ExtArgs>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    MagicLink: 'MagicLink',
    Category: 'Category',
    Spot: 'Spot',
    SpotImage: 'SpotImage',
    SpotRating: 'SpotRating',
    Tag: 'Tag',
    SpotTag: 'SpotTag',
    Collection: 'Collection',
    CollectionSpot: 'CollectionSpot',
    Event: 'Event',
    EventAttendee: 'EventAttendee',
    Report: 'Report'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "magicLink" | "category" | "spot" | "spotImage" | "spotRating" | "tag" | "spotTag" | "collection" | "collectionSpot" | "event" | "eventAttendee" | "report"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MagicLink: {
        payload: Prisma.$MagicLinkPayload<ExtArgs>
        fields: Prisma.MagicLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MagicLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MagicLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkPayload>
          }
          findFirst: {
            args: Prisma.MagicLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MagicLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkPayload>
          }
          findMany: {
            args: Prisma.MagicLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkPayload>[]
          }
          create: {
            args: Prisma.MagicLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkPayload>
          }
          createMany: {
            args: Prisma.MagicLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MagicLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkPayload>[]
          }
          delete: {
            args: Prisma.MagicLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkPayload>
          }
          update: {
            args: Prisma.MagicLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkPayload>
          }
          deleteMany: {
            args: Prisma.MagicLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MagicLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MagicLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagicLinkPayload>
          }
          aggregate: {
            args: Prisma.MagicLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMagicLink>
          }
          groupBy: {
            args: Prisma.MagicLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<MagicLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.MagicLinkCountArgs<ExtArgs>
            result: $Utils.Optional<MagicLinkCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Spot: {
        payload: Prisma.$SpotPayload<ExtArgs>
        fields: Prisma.SpotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotPayload>
          }
          findFirst: {
            args: Prisma.SpotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotPayload>
          }
          findMany: {
            args: Prisma.SpotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotPayload>[]
          }
          delete: {
            args: Prisma.SpotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotPayload>
          }
          update: {
            args: Prisma.SpotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotPayload>
          }
          deleteMany: {
            args: Prisma.SpotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          aggregate: {
            args: Prisma.SpotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpot>
          }
          groupBy: {
            args: Prisma.SpotGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpotGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpotCountArgs<ExtArgs>
            result: $Utils.Optional<SpotCountAggregateOutputType> | number
          }
        }
      }
      SpotImage: {
        payload: Prisma.$SpotImagePayload<ExtArgs>
        fields: Prisma.SpotImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpotImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpotImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotImagePayload>
          }
          findFirst: {
            args: Prisma.SpotImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpotImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotImagePayload>
          }
          findMany: {
            args: Prisma.SpotImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotImagePayload>[]
          }
          create: {
            args: Prisma.SpotImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotImagePayload>
          }
          createMany: {
            args: Prisma.SpotImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpotImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotImagePayload>[]
          }
          delete: {
            args: Prisma.SpotImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotImagePayload>
          }
          update: {
            args: Prisma.SpotImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotImagePayload>
          }
          deleteMany: {
            args: Prisma.SpotImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpotImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpotImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotImagePayload>
          }
          aggregate: {
            args: Prisma.SpotImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpotImage>
          }
          groupBy: {
            args: Prisma.SpotImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpotImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpotImageCountArgs<ExtArgs>
            result: $Utils.Optional<SpotImageCountAggregateOutputType> | number
          }
        }
      }
      SpotRating: {
        payload: Prisma.$SpotRatingPayload<ExtArgs>
        fields: Prisma.SpotRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpotRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpotRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotRatingPayload>
          }
          findFirst: {
            args: Prisma.SpotRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpotRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotRatingPayload>
          }
          findMany: {
            args: Prisma.SpotRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotRatingPayload>[]
          }
          create: {
            args: Prisma.SpotRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotRatingPayload>
          }
          createMany: {
            args: Prisma.SpotRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpotRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotRatingPayload>[]
          }
          delete: {
            args: Prisma.SpotRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotRatingPayload>
          }
          update: {
            args: Prisma.SpotRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotRatingPayload>
          }
          deleteMany: {
            args: Prisma.SpotRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpotRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpotRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotRatingPayload>
          }
          aggregate: {
            args: Prisma.SpotRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpotRating>
          }
          groupBy: {
            args: Prisma.SpotRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpotRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpotRatingCountArgs<ExtArgs>
            result: $Utils.Optional<SpotRatingCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      SpotTag: {
        payload: Prisma.$SpotTagPayload<ExtArgs>
        fields: Prisma.SpotTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpotTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpotTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTagPayload>
          }
          findFirst: {
            args: Prisma.SpotTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpotTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTagPayload>
          }
          findMany: {
            args: Prisma.SpotTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTagPayload>[]
          }
          create: {
            args: Prisma.SpotTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTagPayload>
          }
          createMany: {
            args: Prisma.SpotTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpotTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTagPayload>[]
          }
          delete: {
            args: Prisma.SpotTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTagPayload>
          }
          update: {
            args: Prisma.SpotTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTagPayload>
          }
          deleteMany: {
            args: Prisma.SpotTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpotTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpotTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotTagPayload>
          }
          aggregate: {
            args: Prisma.SpotTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpotTag>
          }
          groupBy: {
            args: Prisma.SpotTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpotTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpotTagCountArgs<ExtArgs>
            result: $Utils.Optional<SpotTagCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      CollectionSpot: {
        payload: Prisma.$CollectionSpotPayload<ExtArgs>
        fields: Prisma.CollectionSpotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionSpotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionSpotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionSpotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionSpotPayload>
          }
          findFirst: {
            args: Prisma.CollectionSpotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionSpotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionSpotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionSpotPayload>
          }
          findMany: {
            args: Prisma.CollectionSpotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionSpotPayload>[]
          }
          create: {
            args: Prisma.CollectionSpotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionSpotPayload>
          }
          createMany: {
            args: Prisma.CollectionSpotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionSpotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionSpotPayload>[]
          }
          delete: {
            args: Prisma.CollectionSpotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionSpotPayload>
          }
          update: {
            args: Prisma.CollectionSpotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionSpotPayload>
          }
          deleteMany: {
            args: Prisma.CollectionSpotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionSpotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionSpotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionSpotPayload>
          }
          aggregate: {
            args: Prisma.CollectionSpotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollectionSpot>
          }
          groupBy: {
            args: Prisma.CollectionSpotGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionSpotGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionSpotCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionSpotCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventAttendee: {
        payload: Prisma.$EventAttendeePayload<ExtArgs>
        fields: Prisma.EventAttendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventAttendeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventAttendeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          findFirst: {
            args: Prisma.EventAttendeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventAttendeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          findMany: {
            args: Prisma.EventAttendeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          create: {
            args: Prisma.EventAttendeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          createMany: {
            args: Prisma.EventAttendeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventAttendeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          delete: {
            args: Prisma.EventAttendeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          update: {
            args: Prisma.EventAttendeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          deleteMany: {
            args: Prisma.EventAttendeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventAttendeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventAttendeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          aggregate: {
            args: Prisma.EventAttendeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventAttendee>
          }
          groupBy: {
            args: Prisma.EventAttendeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventAttendeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventAttendeeCountArgs<ExtArgs>
            result: $Utils.Optional<EventAttendeeCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    spots: number
    spotRatings: number
    spotTags: number
    collections: number
    reports: number
    magicLinks: number
    events: number
    eventAttendees: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | UserCountOutputTypeCountSpotsArgs
    spotRatings?: boolean | UserCountOutputTypeCountSpotRatingsArgs
    spotTags?: boolean | UserCountOutputTypeCountSpotTagsArgs
    collections?: boolean | UserCountOutputTypeCountCollectionsArgs
    reports?: boolean | UserCountOutputTypeCountReportsArgs
    magicLinks?: boolean | UserCountOutputTypeCountMagicLinksArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
    eventAttendees?: boolean | UserCountOutputTypeCountEventAttendeesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpotRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotRatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpotTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotTagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMagicLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MagicLinkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    spots: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | CategoryCountOutputTypeCountSpotsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSpotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotWhereInput
  }


  /**
   * Count Type SpotCountOutputType
   */

  export type SpotCountOutputType = {
    images: number
    ratings: number
    tags: number
    reports: number
    collections: number
    events: number
  }

  export type SpotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | SpotCountOutputTypeCountImagesArgs
    ratings?: boolean | SpotCountOutputTypeCountRatingsArgs
    tags?: boolean | SpotCountOutputTypeCountTagsArgs
    reports?: boolean | SpotCountOutputTypeCountReportsArgs
    collections?: boolean | SpotCountOutputTypeCountCollectionsArgs
    events?: boolean | SpotCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * SpotCountOutputType without action
   */
  export type SpotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotCountOutputType
     */
    select?: SpotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpotCountOutputType without action
   */
  export type SpotCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotImageWhereInput
  }

  /**
   * SpotCountOutputType without action
   */
  export type SpotCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotRatingWhereInput
  }

  /**
   * SpotCountOutputType without action
   */
  export type SpotCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotTagWhereInput
  }

  /**
   * SpotCountOutputType without action
   */
  export type SpotCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * SpotCountOutputType without action
   */
  export type SpotCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionSpotWhereInput
  }

  /**
   * SpotCountOutputType without action
   */
  export type SpotCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    spotTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spotTags?: boolean | TagCountOutputTypeCountSpotTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountSpotTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotTagWhereInput
  }


  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    spots: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | CollectionCountOutputTypeCountSpotsArgs
  }

  // Custom InputTypes
  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountSpotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionSpotWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    attendees: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | EventCountOutputTypeCountAttendeesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    reputation: number | null
  }

  export type UserSumAggregateOutputType = {
    reputation: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    displayName: string | null
    avatar: string | null
    bio: string | null
    reputation: number | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    displayName: string | null
    avatar: string | null
    bio: string | null
    reputation: number | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    displayName: number
    avatar: number
    bio: number
    reputation: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    reputation?: true
  }

  export type UserSumAggregateInputType = {
    reputation?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    displayName?: true
    avatar?: true
    bio?: true
    reputation?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    displayName?: true
    avatar?: true
    bio?: true
    reputation?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    displayName?: true
    avatar?: true
    bio?: true
    reputation?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string | null
    displayName: string | null
    avatar: string | null
    bio: string | null
    reputation: number
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    displayName?: boolean
    avatar?: boolean
    bio?: boolean
    reputation?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    spots?: boolean | User$spotsArgs<ExtArgs>
    spotRatings?: boolean | User$spotRatingsArgs<ExtArgs>
    spotTags?: boolean | User$spotTagsArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    magicLinks?: boolean | User$magicLinksArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    eventAttendees?: boolean | User$eventAttendeesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    displayName?: boolean
    avatar?: boolean
    bio?: boolean
    reputation?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    displayName?: boolean
    avatar?: boolean
    bio?: boolean
    reputation?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | User$spotsArgs<ExtArgs>
    spotRatings?: boolean | User$spotRatingsArgs<ExtArgs>
    spotTags?: boolean | User$spotTagsArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    magicLinks?: boolean | User$magicLinksArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    eventAttendees?: boolean | User$eventAttendeesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      spots: Prisma.$SpotPayload<ExtArgs>[]
      spotRatings: Prisma.$SpotRatingPayload<ExtArgs>[]
      spotTags: Prisma.$SpotTagPayload<ExtArgs>[]
      collections: Prisma.$CollectionPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
      magicLinks: Prisma.$MagicLinkPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      eventAttendees: Prisma.$EventAttendeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string | null
      displayName: string | null
      avatar: string | null
      bio: string | null
      reputation: number
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spots<T extends User$spotsArgs<ExtArgs> = {}>(args?: Subset<T, User$spotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findMany"> | Null>
    spotRatings<T extends User$spotRatingsArgs<ExtArgs> = {}>(args?: Subset<T, User$spotRatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotRatingPayload<ExtArgs>, T, "findMany"> | Null>
    spotTags<T extends User$spotTagsArgs<ExtArgs> = {}>(args?: Subset<T, User$spotTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "findMany"> | Null>
    collections<T extends User$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany"> | Null>
    reports<T extends User$reportsArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany"> | Null>
    magicLinks<T extends User$magicLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$magicLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicLinkPayload<ExtArgs>, T, "findMany"> | Null>
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
    eventAttendees<T extends User$eventAttendeesArgs<ExtArgs> = {}>(args?: Subset<T, User$eventAttendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly reputation: FieldRef<"User", 'Int'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.spots
   */
  export type User$spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spot
     */
    select?: SpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotInclude<ExtArgs> | null
    where?: SpotWhereInput
    orderBy?: SpotOrderByWithRelationInput | SpotOrderByWithRelationInput[]
    cursor?: SpotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpotScalarFieldEnum | SpotScalarFieldEnum[]
  }

  /**
   * User.spotRatings
   */
  export type User$spotRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingInclude<ExtArgs> | null
    where?: SpotRatingWhereInput
    orderBy?: SpotRatingOrderByWithRelationInput | SpotRatingOrderByWithRelationInput[]
    cursor?: SpotRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpotRatingScalarFieldEnum | SpotRatingScalarFieldEnum[]
  }

  /**
   * User.spotTags
   */
  export type User$spotTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
    where?: SpotTagWhereInput
    orderBy?: SpotTagOrderByWithRelationInput | SpotTagOrderByWithRelationInput[]
    cursor?: SpotTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpotTagScalarFieldEnum | SpotTagScalarFieldEnum[]
  }

  /**
   * User.collections
   */
  export type User$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * User.reports
   */
  export type User$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.magicLinks
   */
  export type User$magicLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLink
     */
    select?: MagicLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkInclude<ExtArgs> | null
    where?: MagicLinkWhereInput
    orderBy?: MagicLinkOrderByWithRelationInput | MagicLinkOrderByWithRelationInput[]
    cursor?: MagicLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MagicLinkScalarFieldEnum | MagicLinkScalarFieldEnum[]
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.eventAttendees
   */
  export type User$eventAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    cursor?: EventAttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MagicLink
   */

  export type AggregateMagicLink = {
    _count: MagicLinkCountAggregateOutputType | null
    _min: MagicLinkMinAggregateOutputType | null
    _max: MagicLinkMaxAggregateOutputType | null
  }

  export type MagicLinkMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
    userId: string | null
    createdAt: Date | null
  }

  export type MagicLinkMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
    userId: string | null
    createdAt: Date | null
  }

  export type MagicLinkCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expiresAt: number
    used: number
    userId: number
    createdAt: number
    _all: number
  }


  export type MagicLinkMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    used?: true
    userId?: true
    createdAt?: true
  }

  export type MagicLinkMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    used?: true
    userId?: true
    createdAt?: true
  }

  export type MagicLinkCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    used?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type MagicLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MagicLink to aggregate.
     */
    where?: MagicLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicLinks to fetch.
     */
    orderBy?: MagicLinkOrderByWithRelationInput | MagicLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MagicLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MagicLinks
    **/
    _count?: true | MagicLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MagicLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MagicLinkMaxAggregateInputType
  }

  export type GetMagicLinkAggregateType<T extends MagicLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateMagicLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMagicLink[P]>
      : GetScalarType<T[P], AggregateMagicLink[P]>
  }




  export type MagicLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MagicLinkWhereInput
    orderBy?: MagicLinkOrderByWithAggregationInput | MagicLinkOrderByWithAggregationInput[]
    by: MagicLinkScalarFieldEnum[] | MagicLinkScalarFieldEnum
    having?: MagicLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MagicLinkCountAggregateInputType | true
    _min?: MagicLinkMinAggregateInputType
    _max?: MagicLinkMaxAggregateInputType
  }

  export type MagicLinkGroupByOutputType = {
    id: string
    email: string
    token: string
    expiresAt: Date
    used: boolean
    userId: string | null
    createdAt: Date
    _count: MagicLinkCountAggregateOutputType | null
    _min: MagicLinkMinAggregateOutputType | null
    _max: MagicLinkMaxAggregateOutputType | null
  }

  type GetMagicLinkGroupByPayload<T extends MagicLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MagicLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MagicLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MagicLinkGroupByOutputType[P]>
            : GetScalarType<T[P], MagicLinkGroupByOutputType[P]>
        }
      >
    >


  export type MagicLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | MagicLink$userArgs<ExtArgs>
  }, ExtArgs["result"]["magicLink"]>

  export type MagicLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | MagicLink$userArgs<ExtArgs>
  }, ExtArgs["result"]["magicLink"]>

  export type MagicLinkSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type MagicLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MagicLink$userArgs<ExtArgs>
  }
  export type MagicLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | MagicLink$userArgs<ExtArgs>
  }

  export type $MagicLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MagicLink"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expiresAt: Date
      used: boolean
      userId: string | null
      createdAt: Date
    }, ExtArgs["result"]["magicLink"]>
    composites: {}
  }

  type MagicLinkGetPayload<S extends boolean | null | undefined | MagicLinkDefaultArgs> = $Result.GetResult<Prisma.$MagicLinkPayload, S>

  type MagicLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MagicLinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MagicLinkCountAggregateInputType | true
    }

  export interface MagicLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MagicLink'], meta: { name: 'MagicLink' } }
    /**
     * Find zero or one MagicLink that matches the filter.
     * @param {MagicLinkFindUniqueArgs} args - Arguments to find a MagicLink
     * @example
     * // Get one MagicLink
     * const magicLink = await prisma.magicLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MagicLinkFindUniqueArgs>(args: SelectSubset<T, MagicLinkFindUniqueArgs<ExtArgs>>): Prisma__MagicLinkClient<$Result.GetResult<Prisma.$MagicLinkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MagicLink that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MagicLinkFindUniqueOrThrowArgs} args - Arguments to find a MagicLink
     * @example
     * // Get one MagicLink
     * const magicLink = await prisma.magicLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MagicLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, MagicLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MagicLinkClient<$Result.GetResult<Prisma.$MagicLinkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MagicLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkFindFirstArgs} args - Arguments to find a MagicLink
     * @example
     * // Get one MagicLink
     * const magicLink = await prisma.magicLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MagicLinkFindFirstArgs>(args?: SelectSubset<T, MagicLinkFindFirstArgs<ExtArgs>>): Prisma__MagicLinkClient<$Result.GetResult<Prisma.$MagicLinkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MagicLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkFindFirstOrThrowArgs} args - Arguments to find a MagicLink
     * @example
     * // Get one MagicLink
     * const magicLink = await prisma.magicLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MagicLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, MagicLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__MagicLinkClient<$Result.GetResult<Prisma.$MagicLinkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MagicLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MagicLinks
     * const magicLinks = await prisma.magicLink.findMany()
     * 
     * // Get first 10 MagicLinks
     * const magicLinks = await prisma.magicLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const magicLinkWithIdOnly = await prisma.magicLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MagicLinkFindManyArgs>(args?: SelectSubset<T, MagicLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicLinkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MagicLink.
     * @param {MagicLinkCreateArgs} args - Arguments to create a MagicLink.
     * @example
     * // Create one MagicLink
     * const MagicLink = await prisma.magicLink.create({
     *   data: {
     *     // ... data to create a MagicLink
     *   }
     * })
     * 
     */
    create<T extends MagicLinkCreateArgs>(args: SelectSubset<T, MagicLinkCreateArgs<ExtArgs>>): Prisma__MagicLinkClient<$Result.GetResult<Prisma.$MagicLinkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MagicLinks.
     * @param {MagicLinkCreateManyArgs} args - Arguments to create many MagicLinks.
     * @example
     * // Create many MagicLinks
     * const magicLink = await prisma.magicLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MagicLinkCreateManyArgs>(args?: SelectSubset<T, MagicLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MagicLinks and returns the data saved in the database.
     * @param {MagicLinkCreateManyAndReturnArgs} args - Arguments to create many MagicLinks.
     * @example
     * // Create many MagicLinks
     * const magicLink = await prisma.magicLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MagicLinks and only return the `id`
     * const magicLinkWithIdOnly = await prisma.magicLink.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MagicLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, MagicLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagicLinkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MagicLink.
     * @param {MagicLinkDeleteArgs} args - Arguments to delete one MagicLink.
     * @example
     * // Delete one MagicLink
     * const MagicLink = await prisma.magicLink.delete({
     *   where: {
     *     // ... filter to delete one MagicLink
     *   }
     * })
     * 
     */
    delete<T extends MagicLinkDeleteArgs>(args: SelectSubset<T, MagicLinkDeleteArgs<ExtArgs>>): Prisma__MagicLinkClient<$Result.GetResult<Prisma.$MagicLinkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MagicLink.
     * @param {MagicLinkUpdateArgs} args - Arguments to update one MagicLink.
     * @example
     * // Update one MagicLink
     * const magicLink = await prisma.magicLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MagicLinkUpdateArgs>(args: SelectSubset<T, MagicLinkUpdateArgs<ExtArgs>>): Prisma__MagicLinkClient<$Result.GetResult<Prisma.$MagicLinkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MagicLinks.
     * @param {MagicLinkDeleteManyArgs} args - Arguments to filter MagicLinks to delete.
     * @example
     * // Delete a few MagicLinks
     * const { count } = await prisma.magicLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MagicLinkDeleteManyArgs>(args?: SelectSubset<T, MagicLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MagicLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MagicLinks
     * const magicLink = await prisma.magicLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MagicLinkUpdateManyArgs>(args: SelectSubset<T, MagicLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MagicLink.
     * @param {MagicLinkUpsertArgs} args - Arguments to update or create a MagicLink.
     * @example
     * // Update or create a MagicLink
     * const magicLink = await prisma.magicLink.upsert({
     *   create: {
     *     // ... data to create a MagicLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MagicLink we want to update
     *   }
     * })
     */
    upsert<T extends MagicLinkUpsertArgs>(args: SelectSubset<T, MagicLinkUpsertArgs<ExtArgs>>): Prisma__MagicLinkClient<$Result.GetResult<Prisma.$MagicLinkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MagicLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkCountArgs} args - Arguments to filter MagicLinks to count.
     * @example
     * // Count the number of MagicLinks
     * const count = await prisma.magicLink.count({
     *   where: {
     *     // ... the filter for the MagicLinks we want to count
     *   }
     * })
    **/
    count<T extends MagicLinkCountArgs>(
      args?: Subset<T, MagicLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MagicLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MagicLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MagicLinkAggregateArgs>(args: Subset<T, MagicLinkAggregateArgs>): Prisma.PrismaPromise<GetMagicLinkAggregateType<T>>

    /**
     * Group by MagicLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagicLinkGroupByArgs} args - Group by arguments.
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
      T extends MagicLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MagicLinkGroupByArgs['orderBy'] }
        : { orderBy?: MagicLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MagicLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMagicLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MagicLink model
   */
  readonly fields: MagicLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MagicLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MagicLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends MagicLink$userArgs<ExtArgs> = {}>(args?: Subset<T, MagicLink$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the MagicLink model
   */ 
  interface MagicLinkFieldRefs {
    readonly id: FieldRef<"MagicLink", 'String'>
    readonly email: FieldRef<"MagicLink", 'String'>
    readonly token: FieldRef<"MagicLink", 'String'>
    readonly expiresAt: FieldRef<"MagicLink", 'DateTime'>
    readonly used: FieldRef<"MagicLink", 'Boolean'>
    readonly userId: FieldRef<"MagicLink", 'String'>
    readonly createdAt: FieldRef<"MagicLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MagicLink findUnique
   */
  export type MagicLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLink
     */
    select?: MagicLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkInclude<ExtArgs> | null
    /**
     * Filter, which MagicLink to fetch.
     */
    where: MagicLinkWhereUniqueInput
  }

  /**
   * MagicLink findUniqueOrThrow
   */
  export type MagicLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLink
     */
    select?: MagicLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkInclude<ExtArgs> | null
    /**
     * Filter, which MagicLink to fetch.
     */
    where: MagicLinkWhereUniqueInput
  }

  /**
   * MagicLink findFirst
   */
  export type MagicLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLink
     */
    select?: MagicLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkInclude<ExtArgs> | null
    /**
     * Filter, which MagicLink to fetch.
     */
    where?: MagicLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicLinks to fetch.
     */
    orderBy?: MagicLinkOrderByWithRelationInput | MagicLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MagicLinks.
     */
    cursor?: MagicLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MagicLinks.
     */
    distinct?: MagicLinkScalarFieldEnum | MagicLinkScalarFieldEnum[]
  }

  /**
   * MagicLink findFirstOrThrow
   */
  export type MagicLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLink
     */
    select?: MagicLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkInclude<ExtArgs> | null
    /**
     * Filter, which MagicLink to fetch.
     */
    where?: MagicLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicLinks to fetch.
     */
    orderBy?: MagicLinkOrderByWithRelationInput | MagicLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MagicLinks.
     */
    cursor?: MagicLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MagicLinks.
     */
    distinct?: MagicLinkScalarFieldEnum | MagicLinkScalarFieldEnum[]
  }

  /**
   * MagicLink findMany
   */
  export type MagicLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLink
     */
    select?: MagicLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkInclude<ExtArgs> | null
    /**
     * Filter, which MagicLinks to fetch.
     */
    where?: MagicLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MagicLinks to fetch.
     */
    orderBy?: MagicLinkOrderByWithRelationInput | MagicLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MagicLinks.
     */
    cursor?: MagicLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MagicLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MagicLinks.
     */
    skip?: number
    distinct?: MagicLinkScalarFieldEnum | MagicLinkScalarFieldEnum[]
  }

  /**
   * MagicLink create
   */
  export type MagicLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLink
     */
    select?: MagicLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a MagicLink.
     */
    data: XOR<MagicLinkCreateInput, MagicLinkUncheckedCreateInput>
  }

  /**
   * MagicLink createMany
   */
  export type MagicLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MagicLinks.
     */
    data: MagicLinkCreateManyInput | MagicLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MagicLink createManyAndReturn
   */
  export type MagicLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLink
     */
    select?: MagicLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MagicLinks.
     */
    data: MagicLinkCreateManyInput | MagicLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MagicLink update
   */
  export type MagicLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLink
     */
    select?: MagicLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a MagicLink.
     */
    data: XOR<MagicLinkUpdateInput, MagicLinkUncheckedUpdateInput>
    /**
     * Choose, which MagicLink to update.
     */
    where: MagicLinkWhereUniqueInput
  }

  /**
   * MagicLink updateMany
   */
  export type MagicLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MagicLinks.
     */
    data: XOR<MagicLinkUpdateManyMutationInput, MagicLinkUncheckedUpdateManyInput>
    /**
     * Filter which MagicLinks to update
     */
    where?: MagicLinkWhereInput
  }

  /**
   * MagicLink upsert
   */
  export type MagicLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLink
     */
    select?: MagicLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the MagicLink to update in case it exists.
     */
    where: MagicLinkWhereUniqueInput
    /**
     * In case the MagicLink found by the `where` argument doesn't exist, create a new MagicLink with this data.
     */
    create: XOR<MagicLinkCreateInput, MagicLinkUncheckedCreateInput>
    /**
     * In case the MagicLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MagicLinkUpdateInput, MagicLinkUncheckedUpdateInput>
  }

  /**
   * MagicLink delete
   */
  export type MagicLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLink
     */
    select?: MagicLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkInclude<ExtArgs> | null
    /**
     * Filter which MagicLink to delete.
     */
    where: MagicLinkWhereUniqueInput
  }

  /**
   * MagicLink deleteMany
   */
  export type MagicLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MagicLinks to delete
     */
    where?: MagicLinkWhereInput
  }

  /**
   * MagicLink.user
   */
  export type MagicLink$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MagicLink without action
   */
  export type MagicLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagicLink
     */
    select?: MagicLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagicLinkInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    proposalCount: number | null
    approvalThreshold: number | null
  }

  export type CategorySumAggregateOutputType = {
    proposalCount: number | null
    approvalThreshold: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    icon: string | null
    color: string | null
    isOfficial: boolean | null
    proposalCount: number | null
    approvalThreshold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    icon: string | null
    color: string | null
    isOfficial: boolean | null
    proposalCount: number | null
    approvalThreshold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    icon: number
    color: number
    isOfficial: number
    proposalCount: number
    approvalThreshold: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    proposalCount?: true
    approvalThreshold?: true
  }

  export type CategorySumAggregateInputType = {
    proposalCount?: true
    approvalThreshold?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    color?: true
    isOfficial?: true
    proposalCount?: true
    approvalThreshold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    color?: true
    isOfficial?: true
    proposalCount?: true
    approvalThreshold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    color?: true
    isOfficial?: true
    proposalCount?: true
    approvalThreshold?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    icon: string | null
    color: string
    isOfficial: boolean
    proposalCount: number
    approvalThreshold: number
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    isOfficial?: boolean
    proposalCount?: boolean
    approvalThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    spots?: boolean | Category$spotsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    isOfficial?: boolean
    proposalCount?: boolean
    approvalThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    isOfficial?: boolean
    proposalCount?: boolean
    approvalThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | Category$spotsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      spots: Prisma.$SpotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      icon: string | null
      color: string
      isOfficial: boolean
      proposalCount: number
      approvalThreshold: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spots<T extends Category$spotsArgs<ExtArgs> = {}>(args?: Subset<T, Category$spotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
    readonly color: FieldRef<"Category", 'String'>
    readonly isOfficial: FieldRef<"Category", 'Boolean'>
    readonly proposalCount: FieldRef<"Category", 'Int'>
    readonly approvalThreshold: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.spots
   */
  export type Category$spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spot
     */
    select?: SpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotInclude<ExtArgs> | null
    where?: SpotWhereInput
    orderBy?: SpotOrderByWithRelationInput | SpotOrderByWithRelationInput[]
    cursor?: SpotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpotScalarFieldEnum | SpotScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Spot
   */

  export type AggregateSpot = {
    _count: SpotCountAggregateOutputType | null
    _avg: SpotAvgAggregateOutputType | null
    _sum: SpotSumAggregateOutputType | null
    _min: SpotMinAggregateOutputType | null
    _max: SpotMaxAggregateOutputType | null
  }

  export type SpotAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    viewCount: number | null
  }

  export type SpotSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    viewCount: number | null
  }

  export type SpotMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    city: string | null
    country: string | null
    verified: boolean | null
    featured: boolean | null
    viewCount: number | null
    userId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpotMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    city: string | null
    country: string | null
    verified: boolean | null
    featured: boolean | null
    viewCount: number | null
    userId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpotCountAggregateOutputType = {
    id: number
    title: number
    description: number
    latitude: number
    longitude: number
    address: number
    city: number
    country: number
    verified: number
    featured: number
    viewCount: number
    userId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpotAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    viewCount?: true
  }

  export type SpotSumAggregateInputType = {
    latitude?: true
    longitude?: true
    viewCount?: true
  }

  export type SpotMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    address?: true
    city?: true
    country?: true
    verified?: true
    featured?: true
    viewCount?: true
    userId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpotMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    address?: true
    city?: true
    country?: true
    verified?: true
    featured?: true
    viewCount?: true
    userId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpotCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    address?: true
    city?: true
    country?: true
    verified?: true
    featured?: true
    viewCount?: true
    userId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spot to aggregate.
     */
    where?: SpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spots to fetch.
     */
    orderBy?: SpotOrderByWithRelationInput | SpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spots
    **/
    _count?: true | SpotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpotMaxAggregateInputType
  }

  export type GetSpotAggregateType<T extends SpotAggregateArgs> = {
        [P in keyof T & keyof AggregateSpot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpot[P]>
      : GetScalarType<T[P], AggregateSpot[P]>
  }




  export type SpotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotWhereInput
    orderBy?: SpotOrderByWithAggregationInput | SpotOrderByWithAggregationInput[]
    by: SpotScalarFieldEnum[] | SpotScalarFieldEnum
    having?: SpotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpotCountAggregateInputType | true
    _avg?: SpotAvgAggregateInputType
    _sum?: SpotSumAggregateInputType
    _min?: SpotMinAggregateInputType
    _max?: SpotMaxAggregateInputType
  }

  export type SpotGroupByOutputType = {
    id: string
    title: string
    description: string | null
    latitude: number
    longitude: number
    address: string | null
    city: string | null
    country: string | null
    verified: boolean
    featured: boolean
    viewCount: number
    userId: string
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: SpotCountAggregateOutputType | null
    _avg: SpotAvgAggregateOutputType | null
    _sum: SpotSumAggregateOutputType | null
    _min: SpotMinAggregateOutputType | null
    _max: SpotMaxAggregateOutputType | null
  }

  type GetSpotGroupByPayload<T extends SpotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpotGroupByOutputType[P]>
            : GetScalarType<T[P], SpotGroupByOutputType[P]>
        }
      >
    >


  export type SpotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    verified?: boolean
    featured?: boolean
    viewCount?: boolean
    userId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Spot$imagesArgs<ExtArgs>
    ratings?: boolean | Spot$ratingsArgs<ExtArgs>
    tags?: boolean | Spot$tagsArgs<ExtArgs>
    reports?: boolean | Spot$reportsArgs<ExtArgs>
    collections?: boolean | Spot$collectionsArgs<ExtArgs>
    events?: boolean | Spot$eventsArgs<ExtArgs>
    _count?: boolean | SpotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spot"]>


  export type SpotSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    verified?: boolean
    featured?: boolean
    viewCount?: boolean
    userId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Spot$imagesArgs<ExtArgs>
    ratings?: boolean | Spot$ratingsArgs<ExtArgs>
    tags?: boolean | Spot$tagsArgs<ExtArgs>
    reports?: boolean | Spot$reportsArgs<ExtArgs>
    collections?: boolean | Spot$collectionsArgs<ExtArgs>
    events?: boolean | Spot$eventsArgs<ExtArgs>
    _count?: boolean | SpotCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SpotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Spot"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      images: Prisma.$SpotImagePayload<ExtArgs>[]
      ratings: Prisma.$SpotRatingPayload<ExtArgs>[]
      tags: Prisma.$SpotTagPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
      collections: Prisma.$CollectionSpotPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      latitude: number
      longitude: number
      address: string | null
      city: string | null
      country: string | null
      verified: boolean
      featured: boolean
      viewCount: number
      userId: string
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["spot"]>
    composites: {}
  }

  type SpotGetPayload<S extends boolean | null | undefined | SpotDefaultArgs> = $Result.GetResult<Prisma.$SpotPayload, S>

  type SpotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpotCountAggregateInputType | true
    }

  export interface SpotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Spot'], meta: { name: 'Spot' } }
    /**
     * Find zero or one Spot that matches the filter.
     * @param {SpotFindUniqueArgs} args - Arguments to find a Spot
     * @example
     * // Get one Spot
     * const spot = await prisma.spot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpotFindUniqueArgs>(args: SelectSubset<T, SpotFindUniqueArgs<ExtArgs>>): Prisma__SpotClient<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Spot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpotFindUniqueOrThrowArgs} args - Arguments to find a Spot
     * @example
     * // Get one Spot
     * const spot = await prisma.spot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpotFindUniqueOrThrowArgs>(args: SelectSubset<T, SpotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpotClient<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Spot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotFindFirstArgs} args - Arguments to find a Spot
     * @example
     * // Get one Spot
     * const spot = await prisma.spot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpotFindFirstArgs>(args?: SelectSubset<T, SpotFindFirstArgs<ExtArgs>>): Prisma__SpotClient<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Spot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotFindFirstOrThrowArgs} args - Arguments to find a Spot
     * @example
     * // Get one Spot
     * const spot = await prisma.spot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpotFindFirstOrThrowArgs>(args?: SelectSubset<T, SpotFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpotClient<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Spots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spots
     * const spots = await prisma.spot.findMany()
     * 
     * // Get first 10 Spots
     * const spots = await prisma.spot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spotWithIdOnly = await prisma.spot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpotFindManyArgs>(args?: SelectSubset<T, SpotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findMany">>

    /**
     * Delete a Spot.
     * @param {SpotDeleteArgs} args - Arguments to delete one Spot.
     * @example
     * // Delete one Spot
     * const Spot = await prisma.spot.delete({
     *   where: {
     *     // ... filter to delete one Spot
     *   }
     * })
     * 
     */
    delete<T extends SpotDeleteArgs>(args: SelectSubset<T, SpotDeleteArgs<ExtArgs>>): Prisma__SpotClient<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Spot.
     * @param {SpotUpdateArgs} args - Arguments to update one Spot.
     * @example
     * // Update one Spot
     * const spot = await prisma.spot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpotUpdateArgs>(args: SelectSubset<T, SpotUpdateArgs<ExtArgs>>): Prisma__SpotClient<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Spots.
     * @param {SpotDeleteManyArgs} args - Arguments to filter Spots to delete.
     * @example
     * // Delete a few Spots
     * const { count } = await prisma.spot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpotDeleteManyArgs>(args?: SelectSubset<T, SpotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spots
     * const spot = await prisma.spot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpotUpdateManyArgs>(args: SelectSubset<T, SpotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>


    /**
     * Count the number of Spots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotCountArgs} args - Arguments to filter Spots to count.
     * @example
     * // Count the number of Spots
     * const count = await prisma.spot.count({
     *   where: {
     *     // ... the filter for the Spots we want to count
     *   }
     * })
    **/
    count<T extends SpotCountArgs>(
      args?: Subset<T, SpotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpotAggregateArgs>(args: Subset<T, SpotAggregateArgs>): Prisma.PrismaPromise<GetSpotAggregateType<T>>

    /**
     * Group by Spot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotGroupByArgs} args - Group by arguments.
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
      T extends SpotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpotGroupByArgs['orderBy'] }
        : { orderBy?: SpotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Spot model
   */
  readonly fields: SpotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Spot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    images<T extends Spot$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Spot$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotImagePayload<ExtArgs>, T, "findMany"> | Null>
    ratings<T extends Spot$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Spot$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotRatingPayload<ExtArgs>, T, "findMany"> | Null>
    tags<T extends Spot$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Spot$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "findMany"> | Null>
    reports<T extends Spot$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Spot$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany"> | Null>
    collections<T extends Spot$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, Spot$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionSpotPayload<ExtArgs>, T, "findMany"> | Null>
    events<T extends Spot$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Spot$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Spot model
   */ 
  interface SpotFieldRefs {
    readonly id: FieldRef<"Spot", 'String'>
    readonly title: FieldRef<"Spot", 'String'>
    readonly description: FieldRef<"Spot", 'String'>
    readonly latitude: FieldRef<"Spot", 'Float'>
    readonly longitude: FieldRef<"Spot", 'Float'>
    readonly address: FieldRef<"Spot", 'String'>
    readonly city: FieldRef<"Spot", 'String'>
    readonly country: FieldRef<"Spot", 'String'>
    readonly verified: FieldRef<"Spot", 'Boolean'>
    readonly featured: FieldRef<"Spot", 'Boolean'>
    readonly viewCount: FieldRef<"Spot", 'Int'>
    readonly userId: FieldRef<"Spot", 'String'>
    readonly categoryId: FieldRef<"Spot", 'String'>
    readonly createdAt: FieldRef<"Spot", 'DateTime'>
    readonly updatedAt: FieldRef<"Spot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Spot findUnique
   */
  export type SpotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spot
     */
    select?: SpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotInclude<ExtArgs> | null
    /**
     * Filter, which Spot to fetch.
     */
    where: SpotWhereUniqueInput
  }

  /**
   * Spot findUniqueOrThrow
   */
  export type SpotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spot
     */
    select?: SpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotInclude<ExtArgs> | null
    /**
     * Filter, which Spot to fetch.
     */
    where: SpotWhereUniqueInput
  }

  /**
   * Spot findFirst
   */
  export type SpotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spot
     */
    select?: SpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotInclude<ExtArgs> | null
    /**
     * Filter, which Spot to fetch.
     */
    where?: SpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spots to fetch.
     */
    orderBy?: SpotOrderByWithRelationInput | SpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spots.
     */
    cursor?: SpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spots.
     */
    distinct?: SpotScalarFieldEnum | SpotScalarFieldEnum[]
  }

  /**
   * Spot findFirstOrThrow
   */
  export type SpotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spot
     */
    select?: SpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotInclude<ExtArgs> | null
    /**
     * Filter, which Spot to fetch.
     */
    where?: SpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spots to fetch.
     */
    orderBy?: SpotOrderByWithRelationInput | SpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spots.
     */
    cursor?: SpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spots.
     */
    distinct?: SpotScalarFieldEnum | SpotScalarFieldEnum[]
  }

  /**
   * Spot findMany
   */
  export type SpotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spot
     */
    select?: SpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotInclude<ExtArgs> | null
    /**
     * Filter, which Spots to fetch.
     */
    where?: SpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spots to fetch.
     */
    orderBy?: SpotOrderByWithRelationInput | SpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spots.
     */
    cursor?: SpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spots.
     */
    skip?: number
    distinct?: SpotScalarFieldEnum | SpotScalarFieldEnum[]
  }

  /**
   * Spot update
   */
  export type SpotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spot
     */
    select?: SpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotInclude<ExtArgs> | null
    /**
     * The data needed to update a Spot.
     */
    data: XOR<SpotUpdateInput, SpotUncheckedUpdateInput>
    /**
     * Choose, which Spot to update.
     */
    where: SpotWhereUniqueInput
  }

  /**
   * Spot updateMany
   */
  export type SpotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spots.
     */
    data: XOR<SpotUpdateManyMutationInput, SpotUncheckedUpdateManyInput>
    /**
     * Filter which Spots to update
     */
    where?: SpotWhereInput
  }

  /**
   * Spot delete
   */
  export type SpotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spot
     */
    select?: SpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotInclude<ExtArgs> | null
    /**
     * Filter which Spot to delete.
     */
    where: SpotWhereUniqueInput
  }

  /**
   * Spot deleteMany
   */
  export type SpotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spots to delete
     */
    where?: SpotWhereInput
  }

  /**
   * Spot.images
   */
  export type Spot$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotImage
     */
    select?: SpotImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotImageInclude<ExtArgs> | null
    where?: SpotImageWhereInput
    orderBy?: SpotImageOrderByWithRelationInput | SpotImageOrderByWithRelationInput[]
    cursor?: SpotImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpotImageScalarFieldEnum | SpotImageScalarFieldEnum[]
  }

  /**
   * Spot.ratings
   */
  export type Spot$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingInclude<ExtArgs> | null
    where?: SpotRatingWhereInput
    orderBy?: SpotRatingOrderByWithRelationInput | SpotRatingOrderByWithRelationInput[]
    cursor?: SpotRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpotRatingScalarFieldEnum | SpotRatingScalarFieldEnum[]
  }

  /**
   * Spot.tags
   */
  export type Spot$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
    where?: SpotTagWhereInput
    orderBy?: SpotTagOrderByWithRelationInput | SpotTagOrderByWithRelationInput[]
    cursor?: SpotTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpotTagScalarFieldEnum | SpotTagScalarFieldEnum[]
  }

  /**
   * Spot.reports
   */
  export type Spot$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Spot.collections
   */
  export type Spot$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotInclude<ExtArgs> | null
    where?: CollectionSpotWhereInput
    orderBy?: CollectionSpotOrderByWithRelationInput | CollectionSpotOrderByWithRelationInput[]
    cursor?: CollectionSpotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionSpotScalarFieldEnum | CollectionSpotScalarFieldEnum[]
  }

  /**
   * Spot.events
   */
  export type Spot$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Spot without action
   */
  export type SpotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spot
     */
    select?: SpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotInclude<ExtArgs> | null
  }


  /**
   * Model SpotImage
   */

  export type AggregateSpotImage = {
    _count: SpotImageCountAggregateOutputType | null
    _avg: SpotImageAvgAggregateOutputType | null
    _sum: SpotImageSumAggregateOutputType | null
    _min: SpotImageMinAggregateOutputType | null
    _max: SpotImageMaxAggregateOutputType | null
  }

  export type SpotImageAvgAggregateOutputType = {
    order: number | null
  }

  export type SpotImageSumAggregateOutputType = {
    order: number | null
  }

  export type SpotImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    key: string | null
    alt: string | null
    caption: string | null
    order: number | null
    spotId: string | null
    createdAt: Date | null
  }

  export type SpotImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    key: string | null
    alt: string | null
    caption: string | null
    order: number | null
    spotId: string | null
    createdAt: Date | null
  }

  export type SpotImageCountAggregateOutputType = {
    id: number
    url: number
    key: number
    alt: number
    caption: number
    order: number
    spotId: number
    createdAt: number
    _all: number
  }


  export type SpotImageAvgAggregateInputType = {
    order?: true
  }

  export type SpotImageSumAggregateInputType = {
    order?: true
  }

  export type SpotImageMinAggregateInputType = {
    id?: true
    url?: true
    key?: true
    alt?: true
    caption?: true
    order?: true
    spotId?: true
    createdAt?: true
  }

  export type SpotImageMaxAggregateInputType = {
    id?: true
    url?: true
    key?: true
    alt?: true
    caption?: true
    order?: true
    spotId?: true
    createdAt?: true
  }

  export type SpotImageCountAggregateInputType = {
    id?: true
    url?: true
    key?: true
    alt?: true
    caption?: true
    order?: true
    spotId?: true
    createdAt?: true
    _all?: true
  }

  export type SpotImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpotImage to aggregate.
     */
    where?: SpotImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotImages to fetch.
     */
    orderBy?: SpotImageOrderByWithRelationInput | SpotImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpotImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpotImages
    **/
    _count?: true | SpotImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpotImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpotImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpotImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpotImageMaxAggregateInputType
  }

  export type GetSpotImageAggregateType<T extends SpotImageAggregateArgs> = {
        [P in keyof T & keyof AggregateSpotImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpotImage[P]>
      : GetScalarType<T[P], AggregateSpotImage[P]>
  }




  export type SpotImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotImageWhereInput
    orderBy?: SpotImageOrderByWithAggregationInput | SpotImageOrderByWithAggregationInput[]
    by: SpotImageScalarFieldEnum[] | SpotImageScalarFieldEnum
    having?: SpotImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpotImageCountAggregateInputType | true
    _avg?: SpotImageAvgAggregateInputType
    _sum?: SpotImageSumAggregateInputType
    _min?: SpotImageMinAggregateInputType
    _max?: SpotImageMaxAggregateInputType
  }

  export type SpotImageGroupByOutputType = {
    id: string
    url: string
    key: string
    alt: string | null
    caption: string | null
    order: number
    spotId: string
    createdAt: Date
    _count: SpotImageCountAggregateOutputType | null
    _avg: SpotImageAvgAggregateOutputType | null
    _sum: SpotImageSumAggregateOutputType | null
    _min: SpotImageMinAggregateOutputType | null
    _max: SpotImageMaxAggregateOutputType | null
  }

  type GetSpotImageGroupByPayload<T extends SpotImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpotImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpotImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpotImageGroupByOutputType[P]>
            : GetScalarType<T[P], SpotImageGroupByOutputType[P]>
        }
      >
    >


  export type SpotImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    key?: boolean
    alt?: boolean
    caption?: boolean
    order?: boolean
    spotId?: boolean
    createdAt?: boolean
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spotImage"]>

  export type SpotImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    key?: boolean
    alt?: boolean
    caption?: boolean
    order?: boolean
    spotId?: boolean
    createdAt?: boolean
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spotImage"]>

  export type SpotImageSelectScalar = {
    id?: boolean
    url?: boolean
    key?: boolean
    alt?: boolean
    caption?: boolean
    order?: boolean
    spotId?: boolean
    createdAt?: boolean
  }

  export type SpotImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }
  export type SpotImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }

  export type $SpotImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpotImage"
    objects: {
      spot: Prisma.$SpotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      key: string
      alt: string | null
      caption: string | null
      order: number
      spotId: string
      createdAt: Date
    }, ExtArgs["result"]["spotImage"]>
    composites: {}
  }

  type SpotImageGetPayload<S extends boolean | null | undefined | SpotImageDefaultArgs> = $Result.GetResult<Prisma.$SpotImagePayload, S>

  type SpotImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpotImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpotImageCountAggregateInputType | true
    }

  export interface SpotImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpotImage'], meta: { name: 'SpotImage' } }
    /**
     * Find zero or one SpotImage that matches the filter.
     * @param {SpotImageFindUniqueArgs} args - Arguments to find a SpotImage
     * @example
     * // Get one SpotImage
     * const spotImage = await prisma.spotImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpotImageFindUniqueArgs>(args: SelectSubset<T, SpotImageFindUniqueArgs<ExtArgs>>): Prisma__SpotImageClient<$Result.GetResult<Prisma.$SpotImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SpotImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpotImageFindUniqueOrThrowArgs} args - Arguments to find a SpotImage
     * @example
     * // Get one SpotImage
     * const spotImage = await prisma.spotImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpotImageFindUniqueOrThrowArgs>(args: SelectSubset<T, SpotImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpotImageClient<$Result.GetResult<Prisma.$SpotImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SpotImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotImageFindFirstArgs} args - Arguments to find a SpotImage
     * @example
     * // Get one SpotImage
     * const spotImage = await prisma.spotImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpotImageFindFirstArgs>(args?: SelectSubset<T, SpotImageFindFirstArgs<ExtArgs>>): Prisma__SpotImageClient<$Result.GetResult<Prisma.$SpotImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SpotImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotImageFindFirstOrThrowArgs} args - Arguments to find a SpotImage
     * @example
     * // Get one SpotImage
     * const spotImage = await prisma.spotImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpotImageFindFirstOrThrowArgs>(args?: SelectSubset<T, SpotImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpotImageClient<$Result.GetResult<Prisma.$SpotImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SpotImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpotImages
     * const spotImages = await prisma.spotImage.findMany()
     * 
     * // Get first 10 SpotImages
     * const spotImages = await prisma.spotImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spotImageWithIdOnly = await prisma.spotImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpotImageFindManyArgs>(args?: SelectSubset<T, SpotImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SpotImage.
     * @param {SpotImageCreateArgs} args - Arguments to create a SpotImage.
     * @example
     * // Create one SpotImage
     * const SpotImage = await prisma.spotImage.create({
     *   data: {
     *     // ... data to create a SpotImage
     *   }
     * })
     * 
     */
    create<T extends SpotImageCreateArgs>(args: SelectSubset<T, SpotImageCreateArgs<ExtArgs>>): Prisma__SpotImageClient<$Result.GetResult<Prisma.$SpotImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SpotImages.
     * @param {SpotImageCreateManyArgs} args - Arguments to create many SpotImages.
     * @example
     * // Create many SpotImages
     * const spotImage = await prisma.spotImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpotImageCreateManyArgs>(args?: SelectSubset<T, SpotImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpotImages and returns the data saved in the database.
     * @param {SpotImageCreateManyAndReturnArgs} args - Arguments to create many SpotImages.
     * @example
     * // Create many SpotImages
     * const spotImage = await prisma.spotImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpotImages and only return the `id`
     * const spotImageWithIdOnly = await prisma.spotImage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpotImageCreateManyAndReturnArgs>(args?: SelectSubset<T, SpotImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SpotImage.
     * @param {SpotImageDeleteArgs} args - Arguments to delete one SpotImage.
     * @example
     * // Delete one SpotImage
     * const SpotImage = await prisma.spotImage.delete({
     *   where: {
     *     // ... filter to delete one SpotImage
     *   }
     * })
     * 
     */
    delete<T extends SpotImageDeleteArgs>(args: SelectSubset<T, SpotImageDeleteArgs<ExtArgs>>): Prisma__SpotImageClient<$Result.GetResult<Prisma.$SpotImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SpotImage.
     * @param {SpotImageUpdateArgs} args - Arguments to update one SpotImage.
     * @example
     * // Update one SpotImage
     * const spotImage = await prisma.spotImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpotImageUpdateArgs>(args: SelectSubset<T, SpotImageUpdateArgs<ExtArgs>>): Prisma__SpotImageClient<$Result.GetResult<Prisma.$SpotImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SpotImages.
     * @param {SpotImageDeleteManyArgs} args - Arguments to filter SpotImages to delete.
     * @example
     * // Delete a few SpotImages
     * const { count } = await prisma.spotImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpotImageDeleteManyArgs>(args?: SelectSubset<T, SpotImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpotImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpotImages
     * const spotImage = await prisma.spotImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpotImageUpdateManyArgs>(args: SelectSubset<T, SpotImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpotImage.
     * @param {SpotImageUpsertArgs} args - Arguments to update or create a SpotImage.
     * @example
     * // Update or create a SpotImage
     * const spotImage = await prisma.spotImage.upsert({
     *   create: {
     *     // ... data to create a SpotImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpotImage we want to update
     *   }
     * })
     */
    upsert<T extends SpotImageUpsertArgs>(args: SelectSubset<T, SpotImageUpsertArgs<ExtArgs>>): Prisma__SpotImageClient<$Result.GetResult<Prisma.$SpotImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SpotImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotImageCountArgs} args - Arguments to filter SpotImages to count.
     * @example
     * // Count the number of SpotImages
     * const count = await prisma.spotImage.count({
     *   where: {
     *     // ... the filter for the SpotImages we want to count
     *   }
     * })
    **/
    count<T extends SpotImageCountArgs>(
      args?: Subset<T, SpotImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpotImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpotImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpotImageAggregateArgs>(args: Subset<T, SpotImageAggregateArgs>): Prisma.PrismaPromise<GetSpotImageAggregateType<T>>

    /**
     * Group by SpotImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotImageGroupByArgs} args - Group by arguments.
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
      T extends SpotImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpotImageGroupByArgs['orderBy'] }
        : { orderBy?: SpotImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpotImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpotImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpotImage model
   */
  readonly fields: SpotImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpotImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpotImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spot<T extends SpotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpotDefaultArgs<ExtArgs>>): Prisma__SpotClient<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SpotImage model
   */ 
  interface SpotImageFieldRefs {
    readonly id: FieldRef<"SpotImage", 'String'>
    readonly url: FieldRef<"SpotImage", 'String'>
    readonly key: FieldRef<"SpotImage", 'String'>
    readonly alt: FieldRef<"SpotImage", 'String'>
    readonly caption: FieldRef<"SpotImage", 'String'>
    readonly order: FieldRef<"SpotImage", 'Int'>
    readonly spotId: FieldRef<"SpotImage", 'String'>
    readonly createdAt: FieldRef<"SpotImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpotImage findUnique
   */
  export type SpotImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotImage
     */
    select?: SpotImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotImageInclude<ExtArgs> | null
    /**
     * Filter, which SpotImage to fetch.
     */
    where: SpotImageWhereUniqueInput
  }

  /**
   * SpotImage findUniqueOrThrow
   */
  export type SpotImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotImage
     */
    select?: SpotImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotImageInclude<ExtArgs> | null
    /**
     * Filter, which SpotImage to fetch.
     */
    where: SpotImageWhereUniqueInput
  }

  /**
   * SpotImage findFirst
   */
  export type SpotImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotImage
     */
    select?: SpotImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotImageInclude<ExtArgs> | null
    /**
     * Filter, which SpotImage to fetch.
     */
    where?: SpotImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotImages to fetch.
     */
    orderBy?: SpotImageOrderByWithRelationInput | SpotImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpotImages.
     */
    cursor?: SpotImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpotImages.
     */
    distinct?: SpotImageScalarFieldEnum | SpotImageScalarFieldEnum[]
  }

  /**
   * SpotImage findFirstOrThrow
   */
  export type SpotImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotImage
     */
    select?: SpotImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotImageInclude<ExtArgs> | null
    /**
     * Filter, which SpotImage to fetch.
     */
    where?: SpotImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotImages to fetch.
     */
    orderBy?: SpotImageOrderByWithRelationInput | SpotImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpotImages.
     */
    cursor?: SpotImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpotImages.
     */
    distinct?: SpotImageScalarFieldEnum | SpotImageScalarFieldEnum[]
  }

  /**
   * SpotImage findMany
   */
  export type SpotImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotImage
     */
    select?: SpotImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotImageInclude<ExtArgs> | null
    /**
     * Filter, which SpotImages to fetch.
     */
    where?: SpotImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotImages to fetch.
     */
    orderBy?: SpotImageOrderByWithRelationInput | SpotImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpotImages.
     */
    cursor?: SpotImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotImages.
     */
    skip?: number
    distinct?: SpotImageScalarFieldEnum | SpotImageScalarFieldEnum[]
  }

  /**
   * SpotImage create
   */
  export type SpotImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotImage
     */
    select?: SpotImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotImageInclude<ExtArgs> | null
    /**
     * The data needed to create a SpotImage.
     */
    data: XOR<SpotImageCreateInput, SpotImageUncheckedCreateInput>
  }

  /**
   * SpotImage createMany
   */
  export type SpotImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpotImages.
     */
    data: SpotImageCreateManyInput | SpotImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpotImage createManyAndReturn
   */
  export type SpotImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotImage
     */
    select?: SpotImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SpotImages.
     */
    data: SpotImageCreateManyInput | SpotImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpotImage update
   */
  export type SpotImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotImage
     */
    select?: SpotImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotImageInclude<ExtArgs> | null
    /**
     * The data needed to update a SpotImage.
     */
    data: XOR<SpotImageUpdateInput, SpotImageUncheckedUpdateInput>
    /**
     * Choose, which SpotImage to update.
     */
    where: SpotImageWhereUniqueInput
  }

  /**
   * SpotImage updateMany
   */
  export type SpotImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpotImages.
     */
    data: XOR<SpotImageUpdateManyMutationInput, SpotImageUncheckedUpdateManyInput>
    /**
     * Filter which SpotImages to update
     */
    where?: SpotImageWhereInput
  }

  /**
   * SpotImage upsert
   */
  export type SpotImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotImage
     */
    select?: SpotImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotImageInclude<ExtArgs> | null
    /**
     * The filter to search for the SpotImage to update in case it exists.
     */
    where: SpotImageWhereUniqueInput
    /**
     * In case the SpotImage found by the `where` argument doesn't exist, create a new SpotImage with this data.
     */
    create: XOR<SpotImageCreateInput, SpotImageUncheckedCreateInput>
    /**
     * In case the SpotImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpotImageUpdateInput, SpotImageUncheckedUpdateInput>
  }

  /**
   * SpotImage delete
   */
  export type SpotImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotImage
     */
    select?: SpotImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotImageInclude<ExtArgs> | null
    /**
     * Filter which SpotImage to delete.
     */
    where: SpotImageWhereUniqueInput
  }

  /**
   * SpotImage deleteMany
   */
  export type SpotImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpotImages to delete
     */
    where?: SpotImageWhereInput
  }

  /**
   * SpotImage without action
   */
  export type SpotImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotImage
     */
    select?: SpotImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotImageInclude<ExtArgs> | null
  }


  /**
   * Model SpotRating
   */

  export type AggregateSpotRating = {
    _count: SpotRatingCountAggregateOutputType | null
    _min: SpotRatingMinAggregateOutputType | null
    _max: SpotRatingMaxAggregateOutputType | null
  }

  export type SpotRatingMinAggregateOutputType = {
    id: string | null
    isPositive: boolean | null
    comment: string | null
    userId: string | null
    spotId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpotRatingMaxAggregateOutputType = {
    id: string | null
    isPositive: boolean | null
    comment: string | null
    userId: string | null
    spotId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpotRatingCountAggregateOutputType = {
    id: number
    isPositive: number
    comment: number
    userId: number
    spotId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpotRatingMinAggregateInputType = {
    id?: true
    isPositive?: true
    comment?: true
    userId?: true
    spotId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpotRatingMaxAggregateInputType = {
    id?: true
    isPositive?: true
    comment?: true
    userId?: true
    spotId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpotRatingCountAggregateInputType = {
    id?: true
    isPositive?: true
    comment?: true
    userId?: true
    spotId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpotRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpotRating to aggregate.
     */
    where?: SpotRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotRatings to fetch.
     */
    orderBy?: SpotRatingOrderByWithRelationInput | SpotRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpotRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpotRatings
    **/
    _count?: true | SpotRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpotRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpotRatingMaxAggregateInputType
  }

  export type GetSpotRatingAggregateType<T extends SpotRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateSpotRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpotRating[P]>
      : GetScalarType<T[P], AggregateSpotRating[P]>
  }




  export type SpotRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotRatingWhereInput
    orderBy?: SpotRatingOrderByWithAggregationInput | SpotRatingOrderByWithAggregationInput[]
    by: SpotRatingScalarFieldEnum[] | SpotRatingScalarFieldEnum
    having?: SpotRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpotRatingCountAggregateInputType | true
    _min?: SpotRatingMinAggregateInputType
    _max?: SpotRatingMaxAggregateInputType
  }

  export type SpotRatingGroupByOutputType = {
    id: string
    isPositive: boolean
    comment: string | null
    userId: string
    spotId: string
    createdAt: Date
    updatedAt: Date
    _count: SpotRatingCountAggregateOutputType | null
    _min: SpotRatingMinAggregateOutputType | null
    _max: SpotRatingMaxAggregateOutputType | null
  }

  type GetSpotRatingGroupByPayload<T extends SpotRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpotRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpotRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpotRatingGroupByOutputType[P]>
            : GetScalarType<T[P], SpotRatingGroupByOutputType[P]>
        }
      >
    >


  export type SpotRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isPositive?: boolean
    comment?: boolean
    userId?: boolean
    spotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spotRating"]>

  export type SpotRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isPositive?: boolean
    comment?: boolean
    userId?: boolean
    spotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spotRating"]>

  export type SpotRatingSelectScalar = {
    id?: boolean
    isPositive?: boolean
    comment?: boolean
    userId?: boolean
    spotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpotRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }
  export type SpotRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }

  export type $SpotRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpotRating"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      spot: Prisma.$SpotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isPositive: boolean
      comment: string | null
      userId: string
      spotId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["spotRating"]>
    composites: {}
  }

  type SpotRatingGetPayload<S extends boolean | null | undefined | SpotRatingDefaultArgs> = $Result.GetResult<Prisma.$SpotRatingPayload, S>

  type SpotRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpotRatingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpotRatingCountAggregateInputType | true
    }

  export interface SpotRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpotRating'], meta: { name: 'SpotRating' } }
    /**
     * Find zero or one SpotRating that matches the filter.
     * @param {SpotRatingFindUniqueArgs} args - Arguments to find a SpotRating
     * @example
     * // Get one SpotRating
     * const spotRating = await prisma.spotRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpotRatingFindUniqueArgs>(args: SelectSubset<T, SpotRatingFindUniqueArgs<ExtArgs>>): Prisma__SpotRatingClient<$Result.GetResult<Prisma.$SpotRatingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SpotRating that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpotRatingFindUniqueOrThrowArgs} args - Arguments to find a SpotRating
     * @example
     * // Get one SpotRating
     * const spotRating = await prisma.spotRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpotRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, SpotRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpotRatingClient<$Result.GetResult<Prisma.$SpotRatingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SpotRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotRatingFindFirstArgs} args - Arguments to find a SpotRating
     * @example
     * // Get one SpotRating
     * const spotRating = await prisma.spotRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpotRatingFindFirstArgs>(args?: SelectSubset<T, SpotRatingFindFirstArgs<ExtArgs>>): Prisma__SpotRatingClient<$Result.GetResult<Prisma.$SpotRatingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SpotRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotRatingFindFirstOrThrowArgs} args - Arguments to find a SpotRating
     * @example
     * // Get one SpotRating
     * const spotRating = await prisma.spotRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpotRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, SpotRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpotRatingClient<$Result.GetResult<Prisma.$SpotRatingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SpotRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpotRatings
     * const spotRatings = await prisma.spotRating.findMany()
     * 
     * // Get first 10 SpotRatings
     * const spotRatings = await prisma.spotRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spotRatingWithIdOnly = await prisma.spotRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpotRatingFindManyArgs>(args?: SelectSubset<T, SpotRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotRatingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SpotRating.
     * @param {SpotRatingCreateArgs} args - Arguments to create a SpotRating.
     * @example
     * // Create one SpotRating
     * const SpotRating = await prisma.spotRating.create({
     *   data: {
     *     // ... data to create a SpotRating
     *   }
     * })
     * 
     */
    create<T extends SpotRatingCreateArgs>(args: SelectSubset<T, SpotRatingCreateArgs<ExtArgs>>): Prisma__SpotRatingClient<$Result.GetResult<Prisma.$SpotRatingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SpotRatings.
     * @param {SpotRatingCreateManyArgs} args - Arguments to create many SpotRatings.
     * @example
     * // Create many SpotRatings
     * const spotRating = await prisma.spotRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpotRatingCreateManyArgs>(args?: SelectSubset<T, SpotRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpotRatings and returns the data saved in the database.
     * @param {SpotRatingCreateManyAndReturnArgs} args - Arguments to create many SpotRatings.
     * @example
     * // Create many SpotRatings
     * const spotRating = await prisma.spotRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpotRatings and only return the `id`
     * const spotRatingWithIdOnly = await prisma.spotRating.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpotRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, SpotRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotRatingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SpotRating.
     * @param {SpotRatingDeleteArgs} args - Arguments to delete one SpotRating.
     * @example
     * // Delete one SpotRating
     * const SpotRating = await prisma.spotRating.delete({
     *   where: {
     *     // ... filter to delete one SpotRating
     *   }
     * })
     * 
     */
    delete<T extends SpotRatingDeleteArgs>(args: SelectSubset<T, SpotRatingDeleteArgs<ExtArgs>>): Prisma__SpotRatingClient<$Result.GetResult<Prisma.$SpotRatingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SpotRating.
     * @param {SpotRatingUpdateArgs} args - Arguments to update one SpotRating.
     * @example
     * // Update one SpotRating
     * const spotRating = await prisma.spotRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpotRatingUpdateArgs>(args: SelectSubset<T, SpotRatingUpdateArgs<ExtArgs>>): Prisma__SpotRatingClient<$Result.GetResult<Prisma.$SpotRatingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SpotRatings.
     * @param {SpotRatingDeleteManyArgs} args - Arguments to filter SpotRatings to delete.
     * @example
     * // Delete a few SpotRatings
     * const { count } = await prisma.spotRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpotRatingDeleteManyArgs>(args?: SelectSubset<T, SpotRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpotRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpotRatings
     * const spotRating = await prisma.spotRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpotRatingUpdateManyArgs>(args: SelectSubset<T, SpotRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpotRating.
     * @param {SpotRatingUpsertArgs} args - Arguments to update or create a SpotRating.
     * @example
     * // Update or create a SpotRating
     * const spotRating = await prisma.spotRating.upsert({
     *   create: {
     *     // ... data to create a SpotRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpotRating we want to update
     *   }
     * })
     */
    upsert<T extends SpotRatingUpsertArgs>(args: SelectSubset<T, SpotRatingUpsertArgs<ExtArgs>>): Prisma__SpotRatingClient<$Result.GetResult<Prisma.$SpotRatingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SpotRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotRatingCountArgs} args - Arguments to filter SpotRatings to count.
     * @example
     * // Count the number of SpotRatings
     * const count = await prisma.spotRating.count({
     *   where: {
     *     // ... the filter for the SpotRatings we want to count
     *   }
     * })
    **/
    count<T extends SpotRatingCountArgs>(
      args?: Subset<T, SpotRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpotRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpotRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpotRatingAggregateArgs>(args: Subset<T, SpotRatingAggregateArgs>): Prisma.PrismaPromise<GetSpotRatingAggregateType<T>>

    /**
     * Group by SpotRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotRatingGroupByArgs} args - Group by arguments.
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
      T extends SpotRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpotRatingGroupByArgs['orderBy'] }
        : { orderBy?: SpotRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpotRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpotRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpotRating model
   */
  readonly fields: SpotRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpotRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpotRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    spot<T extends SpotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpotDefaultArgs<ExtArgs>>): Prisma__SpotClient<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SpotRating model
   */ 
  interface SpotRatingFieldRefs {
    readonly id: FieldRef<"SpotRating", 'String'>
    readonly isPositive: FieldRef<"SpotRating", 'Boolean'>
    readonly comment: FieldRef<"SpotRating", 'String'>
    readonly userId: FieldRef<"SpotRating", 'String'>
    readonly spotId: FieldRef<"SpotRating", 'String'>
    readonly createdAt: FieldRef<"SpotRating", 'DateTime'>
    readonly updatedAt: FieldRef<"SpotRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpotRating findUnique
   */
  export type SpotRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingInclude<ExtArgs> | null
    /**
     * Filter, which SpotRating to fetch.
     */
    where: SpotRatingWhereUniqueInput
  }

  /**
   * SpotRating findUniqueOrThrow
   */
  export type SpotRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingInclude<ExtArgs> | null
    /**
     * Filter, which SpotRating to fetch.
     */
    where: SpotRatingWhereUniqueInput
  }

  /**
   * SpotRating findFirst
   */
  export type SpotRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingInclude<ExtArgs> | null
    /**
     * Filter, which SpotRating to fetch.
     */
    where?: SpotRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotRatings to fetch.
     */
    orderBy?: SpotRatingOrderByWithRelationInput | SpotRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpotRatings.
     */
    cursor?: SpotRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpotRatings.
     */
    distinct?: SpotRatingScalarFieldEnum | SpotRatingScalarFieldEnum[]
  }

  /**
   * SpotRating findFirstOrThrow
   */
  export type SpotRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingInclude<ExtArgs> | null
    /**
     * Filter, which SpotRating to fetch.
     */
    where?: SpotRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotRatings to fetch.
     */
    orderBy?: SpotRatingOrderByWithRelationInput | SpotRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpotRatings.
     */
    cursor?: SpotRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpotRatings.
     */
    distinct?: SpotRatingScalarFieldEnum | SpotRatingScalarFieldEnum[]
  }

  /**
   * SpotRating findMany
   */
  export type SpotRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingInclude<ExtArgs> | null
    /**
     * Filter, which SpotRatings to fetch.
     */
    where?: SpotRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotRatings to fetch.
     */
    orderBy?: SpotRatingOrderByWithRelationInput | SpotRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpotRatings.
     */
    cursor?: SpotRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotRatings.
     */
    skip?: number
    distinct?: SpotRatingScalarFieldEnum | SpotRatingScalarFieldEnum[]
  }

  /**
   * SpotRating create
   */
  export type SpotRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a SpotRating.
     */
    data: XOR<SpotRatingCreateInput, SpotRatingUncheckedCreateInput>
  }

  /**
   * SpotRating createMany
   */
  export type SpotRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpotRatings.
     */
    data: SpotRatingCreateManyInput | SpotRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpotRating createManyAndReturn
   */
  export type SpotRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SpotRatings.
     */
    data: SpotRatingCreateManyInput | SpotRatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpotRating update
   */
  export type SpotRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a SpotRating.
     */
    data: XOR<SpotRatingUpdateInput, SpotRatingUncheckedUpdateInput>
    /**
     * Choose, which SpotRating to update.
     */
    where: SpotRatingWhereUniqueInput
  }

  /**
   * SpotRating updateMany
   */
  export type SpotRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpotRatings.
     */
    data: XOR<SpotRatingUpdateManyMutationInput, SpotRatingUncheckedUpdateManyInput>
    /**
     * Filter which SpotRatings to update
     */
    where?: SpotRatingWhereInput
  }

  /**
   * SpotRating upsert
   */
  export type SpotRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the SpotRating to update in case it exists.
     */
    where: SpotRatingWhereUniqueInput
    /**
     * In case the SpotRating found by the `where` argument doesn't exist, create a new SpotRating with this data.
     */
    create: XOR<SpotRatingCreateInput, SpotRatingUncheckedCreateInput>
    /**
     * In case the SpotRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpotRatingUpdateInput, SpotRatingUncheckedUpdateInput>
  }

  /**
   * SpotRating delete
   */
  export type SpotRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingInclude<ExtArgs> | null
    /**
     * Filter which SpotRating to delete.
     */
    where: SpotRatingWhereUniqueInput
  }

  /**
   * SpotRating deleteMany
   */
  export type SpotRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpotRatings to delete
     */
    where?: SpotRatingWhereInput
  }

  /**
   * SpotRating without action
   */
  export type SpotRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotRating
     */
    select?: SpotRatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotRatingInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    usageCount: number | null
  }

  export type TagSumAggregateOutputType = {
    usageCount: number | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    category: string | null
    color: string | null
    usageCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    category: string | null
    color: string | null
    usageCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    category: number
    color: number
    usageCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    usageCount?: true
  }

  export type TagSumAggregateInputType = {
    usageCount?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    color?: true
    usageCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    color?: true
    usageCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    color?: true
    usageCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    category: string
    color: string
    usageCount: number
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    color?: boolean
    usageCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    spotTags?: boolean | Tag$spotTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    color?: boolean
    usageCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    color?: boolean
    usageCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spotTags?: boolean | Tag$spotTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      spotTags: Prisma.$SpotTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      category: string
      color: string
      usageCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spotTags<T extends Tag$spotTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$spotTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly slug: FieldRef<"Tag", 'String'>
    readonly description: FieldRef<"Tag", 'String'>
    readonly category: FieldRef<"Tag", 'String'>
    readonly color: FieldRef<"Tag", 'String'>
    readonly usageCount: FieldRef<"Tag", 'Int'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }

  /**
   * Tag.spotTags
   */
  export type Tag$spotTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
    where?: SpotTagWhereInput
    orderBy?: SpotTagOrderByWithRelationInput | SpotTagOrderByWithRelationInput[]
    cursor?: SpotTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpotTagScalarFieldEnum | SpotTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model SpotTag
   */

  export type AggregateSpotTag = {
    _count: SpotTagCountAggregateOutputType | null
    _min: SpotTagMinAggregateOutputType | null
    _max: SpotTagMaxAggregateOutputType | null
  }

  export type SpotTagMinAggregateOutputType = {
    id: string | null
    spotId: string | null
    tagId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type SpotTagMaxAggregateOutputType = {
    id: string | null
    spotId: string | null
    tagId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type SpotTagCountAggregateOutputType = {
    id: number
    spotId: number
    tagId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type SpotTagMinAggregateInputType = {
    id?: true
    spotId?: true
    tagId?: true
    userId?: true
    createdAt?: true
  }

  export type SpotTagMaxAggregateInputType = {
    id?: true
    spotId?: true
    tagId?: true
    userId?: true
    createdAt?: true
  }

  export type SpotTagCountAggregateInputType = {
    id?: true
    spotId?: true
    tagId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type SpotTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpotTag to aggregate.
     */
    where?: SpotTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotTags to fetch.
     */
    orderBy?: SpotTagOrderByWithRelationInput | SpotTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpotTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpotTags
    **/
    _count?: true | SpotTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpotTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpotTagMaxAggregateInputType
  }

  export type GetSpotTagAggregateType<T extends SpotTagAggregateArgs> = {
        [P in keyof T & keyof AggregateSpotTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpotTag[P]>
      : GetScalarType<T[P], AggregateSpotTag[P]>
  }




  export type SpotTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotTagWhereInput
    orderBy?: SpotTagOrderByWithAggregationInput | SpotTagOrderByWithAggregationInput[]
    by: SpotTagScalarFieldEnum[] | SpotTagScalarFieldEnum
    having?: SpotTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpotTagCountAggregateInputType | true
    _min?: SpotTagMinAggregateInputType
    _max?: SpotTagMaxAggregateInputType
  }

  export type SpotTagGroupByOutputType = {
    id: string
    spotId: string
    tagId: string
    userId: string
    createdAt: Date
    _count: SpotTagCountAggregateOutputType | null
    _min: SpotTagMinAggregateOutputType | null
    _max: SpotTagMaxAggregateOutputType | null
  }

  type GetSpotTagGroupByPayload<T extends SpotTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpotTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpotTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpotTagGroupByOutputType[P]>
            : GetScalarType<T[P], SpotTagGroupByOutputType[P]>
        }
      >
    >


  export type SpotTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spotId?: boolean
    tagId?: boolean
    userId?: boolean
    createdAt?: boolean
    spot?: boolean | SpotDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spotTag"]>

  export type SpotTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spotId?: boolean
    tagId?: boolean
    userId?: boolean
    createdAt?: boolean
    spot?: boolean | SpotDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spotTag"]>

  export type SpotTagSelectScalar = {
    id?: boolean
    spotId?: boolean
    tagId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type SpotTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | SpotDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SpotTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | SpotDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SpotTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpotTag"
    objects: {
      spot: Prisma.$SpotPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      spotId: string
      tagId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["spotTag"]>
    composites: {}
  }

  type SpotTagGetPayload<S extends boolean | null | undefined | SpotTagDefaultArgs> = $Result.GetResult<Prisma.$SpotTagPayload, S>

  type SpotTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpotTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpotTagCountAggregateInputType | true
    }

  export interface SpotTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpotTag'], meta: { name: 'SpotTag' } }
    /**
     * Find zero or one SpotTag that matches the filter.
     * @param {SpotTagFindUniqueArgs} args - Arguments to find a SpotTag
     * @example
     * // Get one SpotTag
     * const spotTag = await prisma.spotTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpotTagFindUniqueArgs>(args: SelectSubset<T, SpotTagFindUniqueArgs<ExtArgs>>): Prisma__SpotTagClient<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SpotTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpotTagFindUniqueOrThrowArgs} args - Arguments to find a SpotTag
     * @example
     * // Get one SpotTag
     * const spotTag = await prisma.spotTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpotTagFindUniqueOrThrowArgs>(args: SelectSubset<T, SpotTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpotTagClient<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SpotTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTagFindFirstArgs} args - Arguments to find a SpotTag
     * @example
     * // Get one SpotTag
     * const spotTag = await prisma.spotTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpotTagFindFirstArgs>(args?: SelectSubset<T, SpotTagFindFirstArgs<ExtArgs>>): Prisma__SpotTagClient<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SpotTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTagFindFirstOrThrowArgs} args - Arguments to find a SpotTag
     * @example
     * // Get one SpotTag
     * const spotTag = await prisma.spotTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpotTagFindFirstOrThrowArgs>(args?: SelectSubset<T, SpotTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpotTagClient<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SpotTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpotTags
     * const spotTags = await prisma.spotTag.findMany()
     * 
     * // Get first 10 SpotTags
     * const spotTags = await prisma.spotTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spotTagWithIdOnly = await prisma.spotTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpotTagFindManyArgs>(args?: SelectSubset<T, SpotTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SpotTag.
     * @param {SpotTagCreateArgs} args - Arguments to create a SpotTag.
     * @example
     * // Create one SpotTag
     * const SpotTag = await prisma.spotTag.create({
     *   data: {
     *     // ... data to create a SpotTag
     *   }
     * })
     * 
     */
    create<T extends SpotTagCreateArgs>(args: SelectSubset<T, SpotTagCreateArgs<ExtArgs>>): Prisma__SpotTagClient<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SpotTags.
     * @param {SpotTagCreateManyArgs} args - Arguments to create many SpotTags.
     * @example
     * // Create many SpotTags
     * const spotTag = await prisma.spotTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpotTagCreateManyArgs>(args?: SelectSubset<T, SpotTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpotTags and returns the data saved in the database.
     * @param {SpotTagCreateManyAndReturnArgs} args - Arguments to create many SpotTags.
     * @example
     * // Create many SpotTags
     * const spotTag = await prisma.spotTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpotTags and only return the `id`
     * const spotTagWithIdOnly = await prisma.spotTag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpotTagCreateManyAndReturnArgs>(args?: SelectSubset<T, SpotTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SpotTag.
     * @param {SpotTagDeleteArgs} args - Arguments to delete one SpotTag.
     * @example
     * // Delete one SpotTag
     * const SpotTag = await prisma.spotTag.delete({
     *   where: {
     *     // ... filter to delete one SpotTag
     *   }
     * })
     * 
     */
    delete<T extends SpotTagDeleteArgs>(args: SelectSubset<T, SpotTagDeleteArgs<ExtArgs>>): Prisma__SpotTagClient<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SpotTag.
     * @param {SpotTagUpdateArgs} args - Arguments to update one SpotTag.
     * @example
     * // Update one SpotTag
     * const spotTag = await prisma.spotTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpotTagUpdateArgs>(args: SelectSubset<T, SpotTagUpdateArgs<ExtArgs>>): Prisma__SpotTagClient<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SpotTags.
     * @param {SpotTagDeleteManyArgs} args - Arguments to filter SpotTags to delete.
     * @example
     * // Delete a few SpotTags
     * const { count } = await prisma.spotTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpotTagDeleteManyArgs>(args?: SelectSubset<T, SpotTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpotTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpotTags
     * const spotTag = await prisma.spotTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpotTagUpdateManyArgs>(args: SelectSubset<T, SpotTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpotTag.
     * @param {SpotTagUpsertArgs} args - Arguments to update or create a SpotTag.
     * @example
     * // Update or create a SpotTag
     * const spotTag = await prisma.spotTag.upsert({
     *   create: {
     *     // ... data to create a SpotTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpotTag we want to update
     *   }
     * })
     */
    upsert<T extends SpotTagUpsertArgs>(args: SelectSubset<T, SpotTagUpsertArgs<ExtArgs>>): Prisma__SpotTagClient<$Result.GetResult<Prisma.$SpotTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SpotTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTagCountArgs} args - Arguments to filter SpotTags to count.
     * @example
     * // Count the number of SpotTags
     * const count = await prisma.spotTag.count({
     *   where: {
     *     // ... the filter for the SpotTags we want to count
     *   }
     * })
    **/
    count<T extends SpotTagCountArgs>(
      args?: Subset<T, SpotTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpotTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpotTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpotTagAggregateArgs>(args: Subset<T, SpotTagAggregateArgs>): Prisma.PrismaPromise<GetSpotTagAggregateType<T>>

    /**
     * Group by SpotTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotTagGroupByArgs} args - Group by arguments.
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
      T extends SpotTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpotTagGroupByArgs['orderBy'] }
        : { orderBy?: SpotTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpotTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpotTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpotTag model
   */
  readonly fields: SpotTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpotTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpotTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spot<T extends SpotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpotDefaultArgs<ExtArgs>>): Prisma__SpotClient<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SpotTag model
   */ 
  interface SpotTagFieldRefs {
    readonly id: FieldRef<"SpotTag", 'String'>
    readonly spotId: FieldRef<"SpotTag", 'String'>
    readonly tagId: FieldRef<"SpotTag", 'String'>
    readonly userId: FieldRef<"SpotTag", 'String'>
    readonly createdAt: FieldRef<"SpotTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpotTag findUnique
   */
  export type SpotTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
    /**
     * Filter, which SpotTag to fetch.
     */
    where: SpotTagWhereUniqueInput
  }

  /**
   * SpotTag findUniqueOrThrow
   */
  export type SpotTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
    /**
     * Filter, which SpotTag to fetch.
     */
    where: SpotTagWhereUniqueInput
  }

  /**
   * SpotTag findFirst
   */
  export type SpotTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
    /**
     * Filter, which SpotTag to fetch.
     */
    where?: SpotTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotTags to fetch.
     */
    orderBy?: SpotTagOrderByWithRelationInput | SpotTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpotTags.
     */
    cursor?: SpotTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpotTags.
     */
    distinct?: SpotTagScalarFieldEnum | SpotTagScalarFieldEnum[]
  }

  /**
   * SpotTag findFirstOrThrow
   */
  export type SpotTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
    /**
     * Filter, which SpotTag to fetch.
     */
    where?: SpotTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotTags to fetch.
     */
    orderBy?: SpotTagOrderByWithRelationInput | SpotTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpotTags.
     */
    cursor?: SpotTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpotTags.
     */
    distinct?: SpotTagScalarFieldEnum | SpotTagScalarFieldEnum[]
  }

  /**
   * SpotTag findMany
   */
  export type SpotTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
    /**
     * Filter, which SpotTags to fetch.
     */
    where?: SpotTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotTags to fetch.
     */
    orderBy?: SpotTagOrderByWithRelationInput | SpotTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpotTags.
     */
    cursor?: SpotTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotTags.
     */
    skip?: number
    distinct?: SpotTagScalarFieldEnum | SpotTagScalarFieldEnum[]
  }

  /**
   * SpotTag create
   */
  export type SpotTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
    /**
     * The data needed to create a SpotTag.
     */
    data: XOR<SpotTagCreateInput, SpotTagUncheckedCreateInput>
  }

  /**
   * SpotTag createMany
   */
  export type SpotTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpotTags.
     */
    data: SpotTagCreateManyInput | SpotTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpotTag createManyAndReturn
   */
  export type SpotTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SpotTags.
     */
    data: SpotTagCreateManyInput | SpotTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpotTag update
   */
  export type SpotTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
    /**
     * The data needed to update a SpotTag.
     */
    data: XOR<SpotTagUpdateInput, SpotTagUncheckedUpdateInput>
    /**
     * Choose, which SpotTag to update.
     */
    where: SpotTagWhereUniqueInput
  }

  /**
   * SpotTag updateMany
   */
  export type SpotTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpotTags.
     */
    data: XOR<SpotTagUpdateManyMutationInput, SpotTagUncheckedUpdateManyInput>
    /**
     * Filter which SpotTags to update
     */
    where?: SpotTagWhereInput
  }

  /**
   * SpotTag upsert
   */
  export type SpotTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
    /**
     * The filter to search for the SpotTag to update in case it exists.
     */
    where: SpotTagWhereUniqueInput
    /**
     * In case the SpotTag found by the `where` argument doesn't exist, create a new SpotTag with this data.
     */
    create: XOR<SpotTagCreateInput, SpotTagUncheckedCreateInput>
    /**
     * In case the SpotTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpotTagUpdateInput, SpotTagUncheckedUpdateInput>
  }

  /**
   * SpotTag delete
   */
  export type SpotTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
    /**
     * Filter which SpotTag to delete.
     */
    where: SpotTagWhereUniqueInput
  }

  /**
   * SpotTag deleteMany
   */
  export type SpotTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpotTags to delete
     */
    where?: SpotTagWhereInput
  }

  /**
   * SpotTag without action
   */
  export type SpotTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotTag
     */
    select?: SpotTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotTagInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPublic: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isPublic: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isPublic: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollectionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPublic?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isPublic: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    spots?: boolean | Collection$spotsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isPublic?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    spots?: boolean | Collection$spotsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      spots: Prisma.$CollectionSpotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isPublic: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collections and returns the data saved in the database.
     * @param {CollectionCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
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
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    spots<T extends Collection$spotsArgs<ExtArgs> = {}>(args?: Subset<T, Collection$spotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionSpotPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Collection model
   */ 
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'String'>
    readonly name: FieldRef<"Collection", 'String'>
    readonly description: FieldRef<"Collection", 'String'>
    readonly isPublic: FieldRef<"Collection", 'Boolean'>
    readonly userId: FieldRef<"Collection", 'String'>
    readonly createdAt: FieldRef<"Collection", 'DateTime'>
    readonly updatedAt: FieldRef<"Collection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collection createManyAndReturn
   */
  export type CollectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
  }

  /**
   * Collection.spots
   */
  export type Collection$spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotInclude<ExtArgs> | null
    where?: CollectionSpotWhereInput
    orderBy?: CollectionSpotOrderByWithRelationInput | CollectionSpotOrderByWithRelationInput[]
    cursor?: CollectionSpotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionSpotScalarFieldEnum | CollectionSpotScalarFieldEnum[]
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model CollectionSpot
   */

  export type AggregateCollectionSpot = {
    _count: CollectionSpotCountAggregateOutputType | null
    _avg: CollectionSpotAvgAggregateOutputType | null
    _sum: CollectionSpotSumAggregateOutputType | null
    _min: CollectionSpotMinAggregateOutputType | null
    _max: CollectionSpotMaxAggregateOutputType | null
  }

  export type CollectionSpotAvgAggregateOutputType = {
    order: number | null
  }

  export type CollectionSpotSumAggregateOutputType = {
    order: number | null
  }

  export type CollectionSpotMinAggregateOutputType = {
    id: string | null
    collectionId: string | null
    spotId: string | null
    order: number | null
    createdAt: Date | null
  }

  export type CollectionSpotMaxAggregateOutputType = {
    id: string | null
    collectionId: string | null
    spotId: string | null
    order: number | null
    createdAt: Date | null
  }

  export type CollectionSpotCountAggregateOutputType = {
    id: number
    collectionId: number
    spotId: number
    order: number
    createdAt: number
    _all: number
  }


  export type CollectionSpotAvgAggregateInputType = {
    order?: true
  }

  export type CollectionSpotSumAggregateInputType = {
    order?: true
  }

  export type CollectionSpotMinAggregateInputType = {
    id?: true
    collectionId?: true
    spotId?: true
    order?: true
    createdAt?: true
  }

  export type CollectionSpotMaxAggregateInputType = {
    id?: true
    collectionId?: true
    spotId?: true
    order?: true
    createdAt?: true
  }

  export type CollectionSpotCountAggregateInputType = {
    id?: true
    collectionId?: true
    spotId?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type CollectionSpotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionSpot to aggregate.
     */
    where?: CollectionSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionSpots to fetch.
     */
    orderBy?: CollectionSpotOrderByWithRelationInput | CollectionSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollectionSpots
    **/
    _count?: true | CollectionSpotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionSpotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionSpotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionSpotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionSpotMaxAggregateInputType
  }

  export type GetCollectionSpotAggregateType<T extends CollectionSpotAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectionSpot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectionSpot[P]>
      : GetScalarType<T[P], AggregateCollectionSpot[P]>
  }




  export type CollectionSpotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionSpotWhereInput
    orderBy?: CollectionSpotOrderByWithAggregationInput | CollectionSpotOrderByWithAggregationInput[]
    by: CollectionSpotScalarFieldEnum[] | CollectionSpotScalarFieldEnum
    having?: CollectionSpotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionSpotCountAggregateInputType | true
    _avg?: CollectionSpotAvgAggregateInputType
    _sum?: CollectionSpotSumAggregateInputType
    _min?: CollectionSpotMinAggregateInputType
    _max?: CollectionSpotMaxAggregateInputType
  }

  export type CollectionSpotGroupByOutputType = {
    id: string
    collectionId: string
    spotId: string
    order: number
    createdAt: Date
    _count: CollectionSpotCountAggregateOutputType | null
    _avg: CollectionSpotAvgAggregateOutputType | null
    _sum: CollectionSpotSumAggregateOutputType | null
    _min: CollectionSpotMinAggregateOutputType | null
    _max: CollectionSpotMaxAggregateOutputType | null
  }

  type GetCollectionSpotGroupByPayload<T extends CollectionSpotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionSpotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionSpotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionSpotGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionSpotGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSpotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collectionId?: boolean
    spotId?: boolean
    order?: boolean
    createdAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionSpot"]>

  export type CollectionSpotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collectionId?: boolean
    spotId?: boolean
    order?: boolean
    createdAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionSpot"]>

  export type CollectionSpotSelectScalar = {
    id?: boolean
    collectionId?: boolean
    spotId?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type CollectionSpotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }
  export type CollectionSpotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }

  export type $CollectionSpotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollectionSpot"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs>
      spot: Prisma.$SpotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      collectionId: string
      spotId: string
      order: number
      createdAt: Date
    }, ExtArgs["result"]["collectionSpot"]>
    composites: {}
  }

  type CollectionSpotGetPayload<S extends boolean | null | undefined | CollectionSpotDefaultArgs> = $Result.GetResult<Prisma.$CollectionSpotPayload, S>

  type CollectionSpotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CollectionSpotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CollectionSpotCountAggregateInputType | true
    }

  export interface CollectionSpotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollectionSpot'], meta: { name: 'CollectionSpot' } }
    /**
     * Find zero or one CollectionSpot that matches the filter.
     * @param {CollectionSpotFindUniqueArgs} args - Arguments to find a CollectionSpot
     * @example
     * // Get one CollectionSpot
     * const collectionSpot = await prisma.collectionSpot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionSpotFindUniqueArgs>(args: SelectSubset<T, CollectionSpotFindUniqueArgs<ExtArgs>>): Prisma__CollectionSpotClient<$Result.GetResult<Prisma.$CollectionSpotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CollectionSpot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CollectionSpotFindUniqueOrThrowArgs} args - Arguments to find a CollectionSpot
     * @example
     * // Get one CollectionSpot
     * const collectionSpot = await prisma.collectionSpot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionSpotFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionSpotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionSpotClient<$Result.GetResult<Prisma.$CollectionSpotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CollectionSpot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionSpotFindFirstArgs} args - Arguments to find a CollectionSpot
     * @example
     * // Get one CollectionSpot
     * const collectionSpot = await prisma.collectionSpot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionSpotFindFirstArgs>(args?: SelectSubset<T, CollectionSpotFindFirstArgs<ExtArgs>>): Prisma__CollectionSpotClient<$Result.GetResult<Prisma.$CollectionSpotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CollectionSpot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionSpotFindFirstOrThrowArgs} args - Arguments to find a CollectionSpot
     * @example
     * // Get one CollectionSpot
     * const collectionSpot = await prisma.collectionSpot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionSpotFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionSpotFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionSpotClient<$Result.GetResult<Prisma.$CollectionSpotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CollectionSpots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionSpotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollectionSpots
     * const collectionSpots = await prisma.collectionSpot.findMany()
     * 
     * // Get first 10 CollectionSpots
     * const collectionSpots = await prisma.collectionSpot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionSpotWithIdOnly = await prisma.collectionSpot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionSpotFindManyArgs>(args?: SelectSubset<T, CollectionSpotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionSpotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CollectionSpot.
     * @param {CollectionSpotCreateArgs} args - Arguments to create a CollectionSpot.
     * @example
     * // Create one CollectionSpot
     * const CollectionSpot = await prisma.collectionSpot.create({
     *   data: {
     *     // ... data to create a CollectionSpot
     *   }
     * })
     * 
     */
    create<T extends CollectionSpotCreateArgs>(args: SelectSubset<T, CollectionSpotCreateArgs<ExtArgs>>): Prisma__CollectionSpotClient<$Result.GetResult<Prisma.$CollectionSpotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CollectionSpots.
     * @param {CollectionSpotCreateManyArgs} args - Arguments to create many CollectionSpots.
     * @example
     * // Create many CollectionSpots
     * const collectionSpot = await prisma.collectionSpot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionSpotCreateManyArgs>(args?: SelectSubset<T, CollectionSpotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CollectionSpots and returns the data saved in the database.
     * @param {CollectionSpotCreateManyAndReturnArgs} args - Arguments to create many CollectionSpots.
     * @example
     * // Create many CollectionSpots
     * const collectionSpot = await prisma.collectionSpot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CollectionSpots and only return the `id`
     * const collectionSpotWithIdOnly = await prisma.collectionSpot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionSpotCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionSpotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionSpotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CollectionSpot.
     * @param {CollectionSpotDeleteArgs} args - Arguments to delete one CollectionSpot.
     * @example
     * // Delete one CollectionSpot
     * const CollectionSpot = await prisma.collectionSpot.delete({
     *   where: {
     *     // ... filter to delete one CollectionSpot
     *   }
     * })
     * 
     */
    delete<T extends CollectionSpotDeleteArgs>(args: SelectSubset<T, CollectionSpotDeleteArgs<ExtArgs>>): Prisma__CollectionSpotClient<$Result.GetResult<Prisma.$CollectionSpotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CollectionSpot.
     * @param {CollectionSpotUpdateArgs} args - Arguments to update one CollectionSpot.
     * @example
     * // Update one CollectionSpot
     * const collectionSpot = await prisma.collectionSpot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionSpotUpdateArgs>(args: SelectSubset<T, CollectionSpotUpdateArgs<ExtArgs>>): Prisma__CollectionSpotClient<$Result.GetResult<Prisma.$CollectionSpotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CollectionSpots.
     * @param {CollectionSpotDeleteManyArgs} args - Arguments to filter CollectionSpots to delete.
     * @example
     * // Delete a few CollectionSpots
     * const { count } = await prisma.collectionSpot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionSpotDeleteManyArgs>(args?: SelectSubset<T, CollectionSpotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionSpots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionSpotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollectionSpots
     * const collectionSpot = await prisma.collectionSpot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionSpotUpdateManyArgs>(args: SelectSubset<T, CollectionSpotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CollectionSpot.
     * @param {CollectionSpotUpsertArgs} args - Arguments to update or create a CollectionSpot.
     * @example
     * // Update or create a CollectionSpot
     * const collectionSpot = await prisma.collectionSpot.upsert({
     *   create: {
     *     // ... data to create a CollectionSpot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectionSpot we want to update
     *   }
     * })
     */
    upsert<T extends CollectionSpotUpsertArgs>(args: SelectSubset<T, CollectionSpotUpsertArgs<ExtArgs>>): Prisma__CollectionSpotClient<$Result.GetResult<Prisma.$CollectionSpotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CollectionSpots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionSpotCountArgs} args - Arguments to filter CollectionSpots to count.
     * @example
     * // Count the number of CollectionSpots
     * const count = await prisma.collectionSpot.count({
     *   where: {
     *     // ... the filter for the CollectionSpots we want to count
     *   }
     * })
    **/
    count<T extends CollectionSpotCountArgs>(
      args?: Subset<T, CollectionSpotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionSpotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollectionSpot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionSpotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionSpotAggregateArgs>(args: Subset<T, CollectionSpotAggregateArgs>): Prisma.PrismaPromise<GetCollectionSpotAggregateType<T>>

    /**
     * Group by CollectionSpot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionSpotGroupByArgs} args - Group by arguments.
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
      T extends CollectionSpotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionSpotGroupByArgs['orderBy'] }
        : { orderBy?: CollectionSpotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionSpotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionSpotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollectionSpot model
   */
  readonly fields: CollectionSpotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollectionSpot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionSpotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    spot<T extends SpotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpotDefaultArgs<ExtArgs>>): Prisma__SpotClient<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CollectionSpot model
   */ 
  interface CollectionSpotFieldRefs {
    readonly id: FieldRef<"CollectionSpot", 'String'>
    readonly collectionId: FieldRef<"CollectionSpot", 'String'>
    readonly spotId: FieldRef<"CollectionSpot", 'String'>
    readonly order: FieldRef<"CollectionSpot", 'Int'>
    readonly createdAt: FieldRef<"CollectionSpot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CollectionSpot findUnique
   */
  export type CollectionSpotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotInclude<ExtArgs> | null
    /**
     * Filter, which CollectionSpot to fetch.
     */
    where: CollectionSpotWhereUniqueInput
  }

  /**
   * CollectionSpot findUniqueOrThrow
   */
  export type CollectionSpotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotInclude<ExtArgs> | null
    /**
     * Filter, which CollectionSpot to fetch.
     */
    where: CollectionSpotWhereUniqueInput
  }

  /**
   * CollectionSpot findFirst
   */
  export type CollectionSpotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotInclude<ExtArgs> | null
    /**
     * Filter, which CollectionSpot to fetch.
     */
    where?: CollectionSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionSpots to fetch.
     */
    orderBy?: CollectionSpotOrderByWithRelationInput | CollectionSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionSpots.
     */
    cursor?: CollectionSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionSpots.
     */
    distinct?: CollectionSpotScalarFieldEnum | CollectionSpotScalarFieldEnum[]
  }

  /**
   * CollectionSpot findFirstOrThrow
   */
  export type CollectionSpotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotInclude<ExtArgs> | null
    /**
     * Filter, which CollectionSpot to fetch.
     */
    where?: CollectionSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionSpots to fetch.
     */
    orderBy?: CollectionSpotOrderByWithRelationInput | CollectionSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionSpots.
     */
    cursor?: CollectionSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionSpots.
     */
    distinct?: CollectionSpotScalarFieldEnum | CollectionSpotScalarFieldEnum[]
  }

  /**
   * CollectionSpot findMany
   */
  export type CollectionSpotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotInclude<ExtArgs> | null
    /**
     * Filter, which CollectionSpots to fetch.
     */
    where?: CollectionSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionSpots to fetch.
     */
    orderBy?: CollectionSpotOrderByWithRelationInput | CollectionSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollectionSpots.
     */
    cursor?: CollectionSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionSpots.
     */
    skip?: number
    distinct?: CollectionSpotScalarFieldEnum | CollectionSpotScalarFieldEnum[]
  }

  /**
   * CollectionSpot create
   */
  export type CollectionSpotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotInclude<ExtArgs> | null
    /**
     * The data needed to create a CollectionSpot.
     */
    data: XOR<CollectionSpotCreateInput, CollectionSpotUncheckedCreateInput>
  }

  /**
   * CollectionSpot createMany
   */
  export type CollectionSpotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollectionSpots.
     */
    data: CollectionSpotCreateManyInput | CollectionSpotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CollectionSpot createManyAndReturn
   */
  export type CollectionSpotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CollectionSpots.
     */
    data: CollectionSpotCreateManyInput | CollectionSpotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CollectionSpot update
   */
  export type CollectionSpotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotInclude<ExtArgs> | null
    /**
     * The data needed to update a CollectionSpot.
     */
    data: XOR<CollectionSpotUpdateInput, CollectionSpotUncheckedUpdateInput>
    /**
     * Choose, which CollectionSpot to update.
     */
    where: CollectionSpotWhereUniqueInput
  }

  /**
   * CollectionSpot updateMany
   */
  export type CollectionSpotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollectionSpots.
     */
    data: XOR<CollectionSpotUpdateManyMutationInput, CollectionSpotUncheckedUpdateManyInput>
    /**
     * Filter which CollectionSpots to update
     */
    where?: CollectionSpotWhereInput
  }

  /**
   * CollectionSpot upsert
   */
  export type CollectionSpotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotInclude<ExtArgs> | null
    /**
     * The filter to search for the CollectionSpot to update in case it exists.
     */
    where: CollectionSpotWhereUniqueInput
    /**
     * In case the CollectionSpot found by the `where` argument doesn't exist, create a new CollectionSpot with this data.
     */
    create: XOR<CollectionSpotCreateInput, CollectionSpotUncheckedCreateInput>
    /**
     * In case the CollectionSpot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionSpotUpdateInput, CollectionSpotUncheckedUpdateInput>
  }

  /**
   * CollectionSpot delete
   */
  export type CollectionSpotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotInclude<ExtArgs> | null
    /**
     * Filter which CollectionSpot to delete.
     */
    where: CollectionSpotWhereUniqueInput
  }

  /**
   * CollectionSpot deleteMany
   */
  export type CollectionSpotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionSpots to delete
     */
    where?: CollectionSpotWhereInput
  }

  /**
   * CollectionSpot without action
   */
  export type CollectionSpotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionSpot
     */
    select?: CollectionSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionSpotInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    maxAttendees: number | null
  }

  export type EventSumAggregateOutputType = {
    maxAttendees: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    maxAttendees: number | null
    status: $Enums.EventStatus | null
    organizerId: string | null
    spotId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    maxAttendees: number | null
    status: $Enums.EventStatus | null
    organizerId: string | null
    spotId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startTime: number
    endTime: number
    maxAttendees: number
    status: number
    organizerId: number
    spotId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    maxAttendees?: true
  }

  export type EventSumAggregateInputType = {
    maxAttendees?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    maxAttendees?: true
    status?: true
    organizerId?: true
    spotId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    maxAttendees?: true
    status?: true
    organizerId?: true
    spotId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    maxAttendees?: true
    status?: true
    organizerId?: true
    spotId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string | null
    startTime: Date
    endTime: Date | null
    maxAttendees: number | null
    status: $Enums.EventStatus
    organizerId: string
    spotId: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    maxAttendees?: boolean
    status?: boolean
    organizerId?: boolean
    spotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    spot?: boolean | SpotDefaultArgs<ExtArgs>
    attendees?: boolean | Event$attendeesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    maxAttendees?: boolean
    status?: boolean
    organizerId?: boolean
    spotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    maxAttendees?: boolean
    status?: boolean
    organizerId?: boolean
    spotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    spot?: boolean | SpotDefaultArgs<ExtArgs>
    attendees?: boolean | Event$attendeesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    spot?: boolean | SpotDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organizer: Prisma.$UserPayload<ExtArgs>
      spot: Prisma.$SpotPayload<ExtArgs>
      attendees: Prisma.$EventAttendeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      startTime: Date
      endTime: Date | null
      maxAttendees: number | null
      status: $Enums.EventStatus
      organizerId: string
      spotId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    spot<T extends SpotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpotDefaultArgs<ExtArgs>>): Prisma__SpotClient<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    attendees<T extends Event$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, Event$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly startTime: FieldRef<"Event", 'DateTime'>
    readonly endTime: FieldRef<"Event", 'DateTime'>
    readonly maxAttendees: FieldRef<"Event", 'Int'>
    readonly status: FieldRef<"Event", 'EventStatus'>
    readonly organizerId: FieldRef<"Event", 'String'>
    readonly spotId: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.attendees
   */
  export type Event$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    cursor?: EventAttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventAttendee
   */

  export type AggregateEventAttendee = {
    _count: EventAttendeeCountAggregateOutputType | null
    _min: EventAttendeeMinAggregateOutputType | null
    _max: EventAttendeeMaxAggregateOutputType | null
  }

  export type EventAttendeeMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    status: $Enums.EventAttendeeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventAttendeeMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    status: $Enums.EventAttendeeStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventAttendeeCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAttendeeMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventAttendeeMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventAttendeeCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAttendeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAttendee to aggregate.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventAttendees
    **/
    _count?: true | EventAttendeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventAttendeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventAttendeeMaxAggregateInputType
  }

  export type GetEventAttendeeAggregateType<T extends EventAttendeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventAttendee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventAttendee[P]>
      : GetScalarType<T[P], AggregateEventAttendee[P]>
  }




  export type EventAttendeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithAggregationInput | EventAttendeeOrderByWithAggregationInput[]
    by: EventAttendeeScalarFieldEnum[] | EventAttendeeScalarFieldEnum
    having?: EventAttendeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventAttendeeCountAggregateInputType | true
    _min?: EventAttendeeMinAggregateInputType
    _max?: EventAttendeeMaxAggregateInputType
  }

  export type EventAttendeeGroupByOutputType = {
    id: string
    eventId: string
    userId: string
    status: $Enums.EventAttendeeStatus
    createdAt: Date
    updatedAt: Date
    _count: EventAttendeeCountAggregateOutputType | null
    _min: EventAttendeeMinAggregateOutputType | null
    _max: EventAttendeeMaxAggregateOutputType | null
  }

  type GetEventAttendeeGroupByPayload<T extends EventAttendeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventAttendeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventAttendeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventAttendeeGroupByOutputType[P]>
            : GetScalarType<T[P], EventAttendeeGroupByOutputType[P]>
        }
      >
    >


  export type EventAttendeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventAttendeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventAttendeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventAttendeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventAttendee"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      userId: string
      status: $Enums.EventAttendeeStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventAttendee"]>
    composites: {}
  }

  type EventAttendeeGetPayload<S extends boolean | null | undefined | EventAttendeeDefaultArgs> = $Result.GetResult<Prisma.$EventAttendeePayload, S>

  type EventAttendeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventAttendeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventAttendeeCountAggregateInputType | true
    }

  export interface EventAttendeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventAttendee'], meta: { name: 'EventAttendee' } }
    /**
     * Find zero or one EventAttendee that matches the filter.
     * @param {EventAttendeeFindUniqueArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventAttendeeFindUniqueArgs>(args: SelectSubset<T, EventAttendeeFindUniqueArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventAttendee that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventAttendeeFindUniqueOrThrowArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventAttendeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EventAttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventAttendee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindFirstArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventAttendeeFindFirstArgs>(args?: SelectSubset<T, EventAttendeeFindFirstArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventAttendee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindFirstOrThrowArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventAttendeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EventAttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventAttendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventAttendees
     * const eventAttendees = await prisma.eventAttendee.findMany()
     * 
     * // Get first 10 EventAttendees
     * const eventAttendees = await prisma.eventAttendee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventAttendeeWithIdOnly = await prisma.eventAttendee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventAttendeeFindManyArgs>(args?: SelectSubset<T, EventAttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventAttendee.
     * @param {EventAttendeeCreateArgs} args - Arguments to create a EventAttendee.
     * @example
     * // Create one EventAttendee
     * const EventAttendee = await prisma.eventAttendee.create({
     *   data: {
     *     // ... data to create a EventAttendee
     *   }
     * })
     * 
     */
    create<T extends EventAttendeeCreateArgs>(args: SelectSubset<T, EventAttendeeCreateArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventAttendees.
     * @param {EventAttendeeCreateManyArgs} args - Arguments to create many EventAttendees.
     * @example
     * // Create many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventAttendeeCreateManyArgs>(args?: SelectSubset<T, EventAttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventAttendees and returns the data saved in the database.
     * @param {EventAttendeeCreateManyAndReturnArgs} args - Arguments to create many EventAttendees.
     * @example
     * // Create many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventAttendees and only return the `id`
     * const eventAttendeeWithIdOnly = await prisma.eventAttendee.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventAttendeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EventAttendeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventAttendee.
     * @param {EventAttendeeDeleteArgs} args - Arguments to delete one EventAttendee.
     * @example
     * // Delete one EventAttendee
     * const EventAttendee = await prisma.eventAttendee.delete({
     *   where: {
     *     // ... filter to delete one EventAttendee
     *   }
     * })
     * 
     */
    delete<T extends EventAttendeeDeleteArgs>(args: SelectSubset<T, EventAttendeeDeleteArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventAttendee.
     * @param {EventAttendeeUpdateArgs} args - Arguments to update one EventAttendee.
     * @example
     * // Update one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventAttendeeUpdateArgs>(args: SelectSubset<T, EventAttendeeUpdateArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventAttendees.
     * @param {EventAttendeeDeleteManyArgs} args - Arguments to filter EventAttendees to delete.
     * @example
     * // Delete a few EventAttendees
     * const { count } = await prisma.eventAttendee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventAttendeeDeleteManyArgs>(args?: SelectSubset<T, EventAttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventAttendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventAttendeeUpdateManyArgs>(args: SelectSubset<T, EventAttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventAttendee.
     * @param {EventAttendeeUpsertArgs} args - Arguments to update or create a EventAttendee.
     * @example
     * // Update or create a EventAttendee
     * const eventAttendee = await prisma.eventAttendee.upsert({
     *   create: {
     *     // ... data to create a EventAttendee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventAttendee we want to update
     *   }
     * })
     */
    upsert<T extends EventAttendeeUpsertArgs>(args: SelectSubset<T, EventAttendeeUpsertArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventAttendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeCountArgs} args - Arguments to filter EventAttendees to count.
     * @example
     * // Count the number of EventAttendees
     * const count = await prisma.eventAttendee.count({
     *   where: {
     *     // ... the filter for the EventAttendees we want to count
     *   }
     * })
    **/
    count<T extends EventAttendeeCountArgs>(
      args?: Subset<T, EventAttendeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventAttendeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventAttendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAttendeeAggregateArgs>(args: Subset<T, EventAttendeeAggregateArgs>): Prisma.PrismaPromise<GetEventAttendeeAggregateType<T>>

    /**
     * Group by EventAttendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeGroupByArgs} args - Group by arguments.
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
      T extends EventAttendeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventAttendeeGroupByArgs['orderBy'] }
        : { orderBy?: EventAttendeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventAttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventAttendee model
   */
  readonly fields: EventAttendeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventAttendee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventAttendeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the EventAttendee model
   */ 
  interface EventAttendeeFieldRefs {
    readonly id: FieldRef<"EventAttendee", 'String'>
    readonly eventId: FieldRef<"EventAttendee", 'String'>
    readonly userId: FieldRef<"EventAttendee", 'String'>
    readonly status: FieldRef<"EventAttendee", 'EventAttendeeStatus'>
    readonly createdAt: FieldRef<"EventAttendee", 'DateTime'>
    readonly updatedAt: FieldRef<"EventAttendee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventAttendee findUnique
   */
  export type EventAttendeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee findUniqueOrThrow
   */
  export type EventAttendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee findFirst
   */
  export type EventAttendeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAttendees.
     */
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee findFirstOrThrow
   */
  export type EventAttendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAttendees.
     */
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee findMany
   */
  export type EventAttendeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendees to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee create
   */
  export type EventAttendeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The data needed to create a EventAttendee.
     */
    data: XOR<EventAttendeeCreateInput, EventAttendeeUncheckedCreateInput>
  }

  /**
   * EventAttendee createMany
   */
  export type EventAttendeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventAttendees.
     */
    data: EventAttendeeCreateManyInput | EventAttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventAttendee createManyAndReturn
   */
  export type EventAttendeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventAttendees.
     */
    data: EventAttendeeCreateManyInput | EventAttendeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventAttendee update
   */
  export type EventAttendeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The data needed to update a EventAttendee.
     */
    data: XOR<EventAttendeeUpdateInput, EventAttendeeUncheckedUpdateInput>
    /**
     * Choose, which EventAttendee to update.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee updateMany
   */
  export type EventAttendeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventAttendees.
     */
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyInput>
    /**
     * Filter which EventAttendees to update
     */
    where?: EventAttendeeWhereInput
  }

  /**
   * EventAttendee upsert
   */
  export type EventAttendeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The filter to search for the EventAttendee to update in case it exists.
     */
    where: EventAttendeeWhereUniqueInput
    /**
     * In case the EventAttendee found by the `where` argument doesn't exist, create a new EventAttendee with this data.
     */
    create: XOR<EventAttendeeCreateInput, EventAttendeeUncheckedCreateInput>
    /**
     * In case the EventAttendee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventAttendeeUpdateInput, EventAttendeeUncheckedUpdateInput>
  }

  /**
   * EventAttendee delete
   */
  export type EventAttendeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter which EventAttendee to delete.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee deleteMany
   */
  export type EventAttendeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAttendees to delete
     */
    where?: EventAttendeeWhereInput
  }

  /**
   * EventAttendee without action
   */
  export type EventAttendeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    reason: $Enums.ReportType | null
    comment: string | null
    status: $Enums.ReportStatus | null
    resolution: string | null
    reporterId: string | null
    spotId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    reason: $Enums.ReportType | null
    comment: string | null
    status: $Enums.ReportStatus | null
    resolution: string | null
    reporterId: string | null
    spotId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    reason: number
    comment: number
    status: number
    resolution: number
    reporterId: number
    spotId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    reason?: true
    comment?: true
    status?: true
    resolution?: true
    reporterId?: true
    spotId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    reason?: true
    comment?: true
    status?: true
    resolution?: true
    reporterId?: true
    spotId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    reason?: true
    comment?: true
    status?: true
    resolution?: true
    reporterId?: true
    spotId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    reason: $Enums.ReportType
    comment: string | null
    status: $Enums.ReportStatus
    resolution: string | null
    reporterId: string
    spotId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    comment?: boolean
    status?: boolean
    resolution?: boolean
    reporterId?: boolean
    spotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    spot?: boolean | Report$spotArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    comment?: boolean
    status?: boolean
    resolution?: boolean
    reporterId?: boolean
    spotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    spot?: boolean | Report$spotArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    reason?: boolean
    comment?: boolean
    status?: boolean
    resolution?: boolean
    reporterId?: boolean
    spotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    spot?: boolean | Report$spotArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporter?: boolean | UserDefaultArgs<ExtArgs>
    spot?: boolean | Report$spotArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      reporter: Prisma.$UserPayload<ExtArgs>
      spot: Prisma.$SpotPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reason: $Enums.ReportType
      comment: string | null
      status: $Enums.ReportStatus
      resolution: string | null
      reporterId: string
      spotId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reporter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    spot<T extends Report$spotArgs<ExtArgs> = {}>(args?: Subset<T, Report$spotArgs<ExtArgs>>): Prisma__SpotClient<$Result.GetResult<Prisma.$SpotPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Report model
   */ 
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly reason: FieldRef<"Report", 'ReportType'>
    readonly comment: FieldRef<"Report", 'String'>
    readonly status: FieldRef<"Report", 'ReportStatus'>
    readonly resolution: FieldRef<"Report", 'String'>
    readonly reporterId: FieldRef<"Report", 'String'>
    readonly spotId: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
  }

  /**
   * Report.spot
   */
  export type Report$spotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spot
     */
    select?: SpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotInclude<ExtArgs> | null
    where?: SpotWhereInput
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    displayName: 'displayName',
    avatar: 'avatar',
    bio: 'bio',
    reputation: 'reputation',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MagicLinkScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expiresAt: 'expiresAt',
    used: 'used',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type MagicLinkScalarFieldEnum = (typeof MagicLinkScalarFieldEnum)[keyof typeof MagicLinkScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    icon: 'icon',
    color: 'color',
    isOfficial: 'isOfficial',
    proposalCount: 'proposalCount',
    approvalThreshold: 'approvalThreshold',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SpotScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    city: 'city',
    country: 'country',
    verified: 'verified',
    featured: 'featured',
    viewCount: 'viewCount',
    userId: 'userId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpotScalarFieldEnum = (typeof SpotScalarFieldEnum)[keyof typeof SpotScalarFieldEnum]


  export const SpotImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    key: 'key',
    alt: 'alt',
    caption: 'caption',
    order: 'order',
    spotId: 'spotId',
    createdAt: 'createdAt'
  };

  export type SpotImageScalarFieldEnum = (typeof SpotImageScalarFieldEnum)[keyof typeof SpotImageScalarFieldEnum]


  export const SpotRatingScalarFieldEnum: {
    id: 'id',
    isPositive: 'isPositive',
    comment: 'comment',
    userId: 'userId',
    spotId: 'spotId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpotRatingScalarFieldEnum = (typeof SpotRatingScalarFieldEnum)[keyof typeof SpotRatingScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    category: 'category',
    color: 'color',
    usageCount: 'usageCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const SpotTagScalarFieldEnum: {
    id: 'id',
    spotId: 'spotId',
    tagId: 'tagId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type SpotTagScalarFieldEnum = (typeof SpotTagScalarFieldEnum)[keyof typeof SpotTagScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isPublic: 'isPublic',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const CollectionSpotScalarFieldEnum: {
    id: 'id',
    collectionId: 'collectionId',
    spotId: 'spotId',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type CollectionSpotScalarFieldEnum = (typeof CollectionSpotScalarFieldEnum)[keyof typeof CollectionSpotScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
    maxAttendees: 'maxAttendees',
    status: 'status',
    organizerId: 'organizerId',
    spotId: 'spotId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventAttendeeScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventAttendeeScalarFieldEnum = (typeof EventAttendeeScalarFieldEnum)[keyof typeof EventAttendeeScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    comment: 'comment',
    status: 'status',
    resolution: 'resolution',
    reporterId: 'reporterId',
    spotId: 'spotId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'EventAttendeeStatus'
   */
  export type EnumEventAttendeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventAttendeeStatus'>
    


  /**
   * Reference to a field of type 'EventAttendeeStatus[]'
   */
  export type ListEnumEventAttendeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventAttendeeStatus[]'>
    


  /**
   * Reference to a field of type 'ReportType'
   */
  export type EnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType'>
    


  /**
   * Reference to a field of type 'ReportType[]'
   */
  export type ListEnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType[]'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    displayName?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    reputation?: IntFilter<"User"> | number
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    spots?: SpotListRelationFilter
    spotRatings?: SpotRatingListRelationFilter
    spotTags?: SpotTagListRelationFilter
    collections?: CollectionListRelationFilter
    reports?: ReportListRelationFilter
    magicLinks?: MagicLinkListRelationFilter
    events?: EventListRelationFilter
    eventAttendees?: EventAttendeeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    reputation?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spots?: SpotOrderByRelationAggregateInput
    spotRatings?: SpotRatingOrderByRelationAggregateInput
    spotTags?: SpotTagOrderByRelationAggregateInput
    collections?: CollectionOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
    magicLinks?: MagicLinkOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    eventAttendees?: EventAttendeeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    reputation?: IntFilter<"User"> | number
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    spots?: SpotListRelationFilter
    spotRatings?: SpotRatingListRelationFilter
    spotTags?: SpotTagListRelationFilter
    collections?: CollectionListRelationFilter
    reports?: ReportListRelationFilter
    magicLinks?: MagicLinkListRelationFilter
    events?: EventListRelationFilter
    eventAttendees?: EventAttendeeListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    displayName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    reputation?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    reputation?: IntWithAggregatesFilter<"User"> | number
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MagicLinkWhereInput = {
    AND?: MagicLinkWhereInput | MagicLinkWhereInput[]
    OR?: MagicLinkWhereInput[]
    NOT?: MagicLinkWhereInput | MagicLinkWhereInput[]
    id?: StringFilter<"MagicLink"> | string
    email?: StringFilter<"MagicLink"> | string
    token?: StringFilter<"MagicLink"> | string
    expiresAt?: DateTimeFilter<"MagicLink"> | Date | string
    used?: BoolFilter<"MagicLink"> | boolean
    userId?: StringNullableFilter<"MagicLink"> | string | null
    createdAt?: DateTimeFilter<"MagicLink"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type MagicLinkOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MagicLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: MagicLinkWhereInput | MagicLinkWhereInput[]
    OR?: MagicLinkWhereInput[]
    NOT?: MagicLinkWhereInput | MagicLinkWhereInput[]
    email?: StringFilter<"MagicLink"> | string
    expiresAt?: DateTimeFilter<"MagicLink"> | Date | string
    used?: BoolFilter<"MagicLink"> | boolean
    userId?: StringNullableFilter<"MagicLink"> | string | null
    createdAt?: DateTimeFilter<"MagicLink"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "token">

  export type MagicLinkOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MagicLinkCountOrderByAggregateInput
    _max?: MagicLinkMaxOrderByAggregateInput
    _min?: MagicLinkMinOrderByAggregateInput
  }

  export type MagicLinkScalarWhereWithAggregatesInput = {
    AND?: MagicLinkScalarWhereWithAggregatesInput | MagicLinkScalarWhereWithAggregatesInput[]
    OR?: MagicLinkScalarWhereWithAggregatesInput[]
    NOT?: MagicLinkScalarWhereWithAggregatesInput | MagicLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MagicLink"> | string
    email?: StringWithAggregatesFilter<"MagicLink"> | string
    token?: StringWithAggregatesFilter<"MagicLink"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"MagicLink"> | Date | string
    used?: BoolWithAggregatesFilter<"MagicLink"> | boolean
    userId?: StringNullableWithAggregatesFilter<"MagicLink"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MagicLink"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    color?: StringFilter<"Category"> | string
    isOfficial?: BoolFilter<"Category"> | boolean
    proposalCount?: IntFilter<"Category"> | number
    approvalThreshold?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    spots?: SpotListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    color?: SortOrder
    isOfficial?: SortOrder
    proposalCount?: SortOrder
    approvalThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spots?: SpotOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    color?: StringFilter<"Category"> | string
    isOfficial?: BoolFilter<"Category"> | boolean
    proposalCount?: IntFilter<"Category"> | number
    approvalThreshold?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    spots?: SpotListRelationFilter
  }, "id" | "name" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    color?: SortOrder
    isOfficial?: SortOrder
    proposalCount?: SortOrder
    approvalThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Category"> | string | null
    color?: StringWithAggregatesFilter<"Category"> | string
    isOfficial?: BoolWithAggregatesFilter<"Category"> | boolean
    proposalCount?: IntWithAggregatesFilter<"Category"> | number
    approvalThreshold?: IntWithAggregatesFilter<"Category"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SpotWhereInput = {
    AND?: SpotWhereInput | SpotWhereInput[]
    OR?: SpotWhereInput[]
    NOT?: SpotWhereInput | SpotWhereInput[]
    id?: StringFilter<"Spot"> | string
    title?: StringFilter<"Spot"> | string
    description?: StringNullableFilter<"Spot"> | string | null
    latitude?: FloatFilter<"Spot"> | number
    longitude?: FloatFilter<"Spot"> | number
    address?: StringNullableFilter<"Spot"> | string | null
    city?: StringNullableFilter<"Spot"> | string | null
    country?: StringNullableFilter<"Spot"> | string | null
    verified?: BoolFilter<"Spot"> | boolean
    featured?: BoolFilter<"Spot"> | boolean
    viewCount?: IntFilter<"Spot"> | number
    userId?: StringFilter<"Spot"> | string
    categoryId?: StringFilter<"Spot"> | string
    createdAt?: DateTimeFilter<"Spot"> | Date | string
    updatedAt?: DateTimeFilter<"Spot"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    images?: SpotImageListRelationFilter
    ratings?: SpotRatingListRelationFilter
    tags?: SpotTagListRelationFilter
    reports?: ReportListRelationFilter
    collections?: CollectionSpotListRelationFilter
    events?: EventListRelationFilter
  }

  export type SpotOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    verified?: SortOrder
    featured?: SortOrder
    viewCount?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    images?: SpotImageOrderByRelationAggregateInput
    ratings?: SpotRatingOrderByRelationAggregateInput
    tags?: SpotTagOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
    collections?: CollectionSpotOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type SpotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpotWhereInput | SpotWhereInput[]
    OR?: SpotWhereInput[]
    NOT?: SpotWhereInput | SpotWhereInput[]
    title?: StringFilter<"Spot"> | string
    description?: StringNullableFilter<"Spot"> | string | null
    latitude?: FloatFilter<"Spot"> | number
    longitude?: FloatFilter<"Spot"> | number
    address?: StringNullableFilter<"Spot"> | string | null
    city?: StringNullableFilter<"Spot"> | string | null
    country?: StringNullableFilter<"Spot"> | string | null
    verified?: BoolFilter<"Spot"> | boolean
    featured?: BoolFilter<"Spot"> | boolean
    viewCount?: IntFilter<"Spot"> | number
    userId?: StringFilter<"Spot"> | string
    categoryId?: StringFilter<"Spot"> | string
    createdAt?: DateTimeFilter<"Spot"> | Date | string
    updatedAt?: DateTimeFilter<"Spot"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    images?: SpotImageListRelationFilter
    ratings?: SpotRatingListRelationFilter
    tags?: SpotTagListRelationFilter
    reports?: ReportListRelationFilter
    collections?: CollectionSpotListRelationFilter
    events?: EventListRelationFilter
  }, "id">

  export type SpotOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    verified?: SortOrder
    featured?: SortOrder
    viewCount?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpotCountOrderByAggregateInput
    _avg?: SpotAvgOrderByAggregateInput
    _max?: SpotMaxOrderByAggregateInput
    _min?: SpotMinOrderByAggregateInput
    _sum?: SpotSumOrderByAggregateInput
  }

  export type SpotScalarWhereWithAggregatesInput = {
    AND?: SpotScalarWhereWithAggregatesInput | SpotScalarWhereWithAggregatesInput[]
    OR?: SpotScalarWhereWithAggregatesInput[]
    NOT?: SpotScalarWhereWithAggregatesInput | SpotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Spot"> | string
    title?: StringWithAggregatesFilter<"Spot"> | string
    description?: StringNullableWithAggregatesFilter<"Spot"> | string | null
    latitude?: FloatWithAggregatesFilter<"Spot"> | number
    longitude?: FloatWithAggregatesFilter<"Spot"> | number
    address?: StringNullableWithAggregatesFilter<"Spot"> | string | null
    city?: StringNullableWithAggregatesFilter<"Spot"> | string | null
    country?: StringNullableWithAggregatesFilter<"Spot"> | string | null
    verified?: BoolWithAggregatesFilter<"Spot"> | boolean
    featured?: BoolWithAggregatesFilter<"Spot"> | boolean
    viewCount?: IntWithAggregatesFilter<"Spot"> | number
    userId?: StringWithAggregatesFilter<"Spot"> | string
    categoryId?: StringWithAggregatesFilter<"Spot"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Spot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Spot"> | Date | string
  }

  export type SpotImageWhereInput = {
    AND?: SpotImageWhereInput | SpotImageWhereInput[]
    OR?: SpotImageWhereInput[]
    NOT?: SpotImageWhereInput | SpotImageWhereInput[]
    id?: StringFilter<"SpotImage"> | string
    url?: StringFilter<"SpotImage"> | string
    key?: StringFilter<"SpotImage"> | string
    alt?: StringNullableFilter<"SpotImage"> | string | null
    caption?: StringNullableFilter<"SpotImage"> | string | null
    order?: IntFilter<"SpotImage"> | number
    spotId?: StringFilter<"SpotImage"> | string
    createdAt?: DateTimeFilter<"SpotImage"> | Date | string
    spot?: XOR<SpotRelationFilter, SpotWhereInput>
  }

  export type SpotImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    key?: SortOrder
    alt?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    order?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    spot?: SpotOrderByWithRelationInput
  }

  export type SpotImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpotImageWhereInput | SpotImageWhereInput[]
    OR?: SpotImageWhereInput[]
    NOT?: SpotImageWhereInput | SpotImageWhereInput[]
    url?: StringFilter<"SpotImage"> | string
    key?: StringFilter<"SpotImage"> | string
    alt?: StringNullableFilter<"SpotImage"> | string | null
    caption?: StringNullableFilter<"SpotImage"> | string | null
    order?: IntFilter<"SpotImage"> | number
    spotId?: StringFilter<"SpotImage"> | string
    createdAt?: DateTimeFilter<"SpotImage"> | Date | string
    spot?: XOR<SpotRelationFilter, SpotWhereInput>
  }, "id">

  export type SpotImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    key?: SortOrder
    alt?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    order?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    _count?: SpotImageCountOrderByAggregateInput
    _avg?: SpotImageAvgOrderByAggregateInput
    _max?: SpotImageMaxOrderByAggregateInput
    _min?: SpotImageMinOrderByAggregateInput
    _sum?: SpotImageSumOrderByAggregateInput
  }

  export type SpotImageScalarWhereWithAggregatesInput = {
    AND?: SpotImageScalarWhereWithAggregatesInput | SpotImageScalarWhereWithAggregatesInput[]
    OR?: SpotImageScalarWhereWithAggregatesInput[]
    NOT?: SpotImageScalarWhereWithAggregatesInput | SpotImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpotImage"> | string
    url?: StringWithAggregatesFilter<"SpotImage"> | string
    key?: StringWithAggregatesFilter<"SpotImage"> | string
    alt?: StringNullableWithAggregatesFilter<"SpotImage"> | string | null
    caption?: StringNullableWithAggregatesFilter<"SpotImage"> | string | null
    order?: IntWithAggregatesFilter<"SpotImage"> | number
    spotId?: StringWithAggregatesFilter<"SpotImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SpotImage"> | Date | string
  }

  export type SpotRatingWhereInput = {
    AND?: SpotRatingWhereInput | SpotRatingWhereInput[]
    OR?: SpotRatingWhereInput[]
    NOT?: SpotRatingWhereInput | SpotRatingWhereInput[]
    id?: StringFilter<"SpotRating"> | string
    isPositive?: BoolFilter<"SpotRating"> | boolean
    comment?: StringNullableFilter<"SpotRating"> | string | null
    userId?: StringFilter<"SpotRating"> | string
    spotId?: StringFilter<"SpotRating"> | string
    createdAt?: DateTimeFilter<"SpotRating"> | Date | string
    updatedAt?: DateTimeFilter<"SpotRating"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    spot?: XOR<SpotRelationFilter, SpotWhereInput>
  }

  export type SpotRatingOrderByWithRelationInput = {
    id?: SortOrder
    isPositive?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    spot?: SpotOrderByWithRelationInput
  }

  export type SpotRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_spotId?: SpotRatingUserIdSpotIdCompoundUniqueInput
    AND?: SpotRatingWhereInput | SpotRatingWhereInput[]
    OR?: SpotRatingWhereInput[]
    NOT?: SpotRatingWhereInput | SpotRatingWhereInput[]
    isPositive?: BoolFilter<"SpotRating"> | boolean
    comment?: StringNullableFilter<"SpotRating"> | string | null
    userId?: StringFilter<"SpotRating"> | string
    spotId?: StringFilter<"SpotRating"> | string
    createdAt?: DateTimeFilter<"SpotRating"> | Date | string
    updatedAt?: DateTimeFilter<"SpotRating"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    spot?: XOR<SpotRelationFilter, SpotWhereInput>
  }, "id" | "userId_spotId">

  export type SpotRatingOrderByWithAggregationInput = {
    id?: SortOrder
    isPositive?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpotRatingCountOrderByAggregateInput
    _max?: SpotRatingMaxOrderByAggregateInput
    _min?: SpotRatingMinOrderByAggregateInput
  }

  export type SpotRatingScalarWhereWithAggregatesInput = {
    AND?: SpotRatingScalarWhereWithAggregatesInput | SpotRatingScalarWhereWithAggregatesInput[]
    OR?: SpotRatingScalarWhereWithAggregatesInput[]
    NOT?: SpotRatingScalarWhereWithAggregatesInput | SpotRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpotRating"> | string
    isPositive?: BoolWithAggregatesFilter<"SpotRating"> | boolean
    comment?: StringNullableWithAggregatesFilter<"SpotRating"> | string | null
    userId?: StringWithAggregatesFilter<"SpotRating"> | string
    spotId?: StringWithAggregatesFilter<"SpotRating"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SpotRating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SpotRating"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    description?: StringNullableFilter<"Tag"> | string | null
    category?: StringFilter<"Tag"> | string
    color?: StringFilter<"Tag"> | string
    usageCount?: IntFilter<"Tag"> | number
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    spotTags?: SpotTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    color?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    spotTags?: SpotTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    description?: StringNullableFilter<"Tag"> | string | null
    category?: StringFilter<"Tag"> | string
    color?: StringFilter<"Tag"> | string
    usageCount?: IntFilter<"Tag"> | number
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    spotTags?: SpotTagListRelationFilter
  }, "id" | "name" | "slug">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    color?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    slug?: StringWithAggregatesFilter<"Tag"> | string
    description?: StringNullableWithAggregatesFilter<"Tag"> | string | null
    category?: StringWithAggregatesFilter<"Tag"> | string
    color?: StringWithAggregatesFilter<"Tag"> | string
    usageCount?: IntWithAggregatesFilter<"Tag"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type SpotTagWhereInput = {
    AND?: SpotTagWhereInput | SpotTagWhereInput[]
    OR?: SpotTagWhereInput[]
    NOT?: SpotTagWhereInput | SpotTagWhereInput[]
    id?: StringFilter<"SpotTag"> | string
    spotId?: StringFilter<"SpotTag"> | string
    tagId?: StringFilter<"SpotTag"> | string
    userId?: StringFilter<"SpotTag"> | string
    createdAt?: DateTimeFilter<"SpotTag"> | Date | string
    spot?: XOR<SpotRelationFilter, SpotWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SpotTagOrderByWithRelationInput = {
    id?: SortOrder
    spotId?: SortOrder
    tagId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    spot?: SpotOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SpotTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    spotId_tagId_userId?: SpotTagSpotIdTagIdUserIdCompoundUniqueInput
    AND?: SpotTagWhereInput | SpotTagWhereInput[]
    OR?: SpotTagWhereInput[]
    NOT?: SpotTagWhereInput | SpotTagWhereInput[]
    spotId?: StringFilter<"SpotTag"> | string
    tagId?: StringFilter<"SpotTag"> | string
    userId?: StringFilter<"SpotTag"> | string
    createdAt?: DateTimeFilter<"SpotTag"> | Date | string
    spot?: XOR<SpotRelationFilter, SpotWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "spotId_tagId_userId">

  export type SpotTagOrderByWithAggregationInput = {
    id?: SortOrder
    spotId?: SortOrder
    tagId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: SpotTagCountOrderByAggregateInput
    _max?: SpotTagMaxOrderByAggregateInput
    _min?: SpotTagMinOrderByAggregateInput
  }

  export type SpotTagScalarWhereWithAggregatesInput = {
    AND?: SpotTagScalarWhereWithAggregatesInput | SpotTagScalarWhereWithAggregatesInput[]
    OR?: SpotTagScalarWhereWithAggregatesInput[]
    NOT?: SpotTagScalarWhereWithAggregatesInput | SpotTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpotTag"> | string
    spotId?: StringWithAggregatesFilter<"SpotTag"> | string
    tagId?: StringWithAggregatesFilter<"SpotTag"> | string
    userId?: StringWithAggregatesFilter<"SpotTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SpotTag"> | Date | string
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    isPublic?: BoolFilter<"Collection"> | boolean
    userId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    spots?: CollectionSpotListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    spots?: CollectionSpotOrderByRelationAggregateInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    name?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    isPublic?: BoolFilter<"Collection"> | boolean
    userId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    spots?: CollectionSpotListRelationFilter
  }, "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collection"> | string
    name?: StringWithAggregatesFilter<"Collection"> | string
    description?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    isPublic?: BoolWithAggregatesFilter<"Collection"> | boolean
    userId?: StringWithAggregatesFilter<"Collection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
  }

  export type CollectionSpotWhereInput = {
    AND?: CollectionSpotWhereInput | CollectionSpotWhereInput[]
    OR?: CollectionSpotWhereInput[]
    NOT?: CollectionSpotWhereInput | CollectionSpotWhereInput[]
    id?: StringFilter<"CollectionSpot"> | string
    collectionId?: StringFilter<"CollectionSpot"> | string
    spotId?: StringFilter<"CollectionSpot"> | string
    order?: IntFilter<"CollectionSpot"> | number
    createdAt?: DateTimeFilter<"CollectionSpot"> | Date | string
    collection?: XOR<CollectionRelationFilter, CollectionWhereInput>
    spot?: XOR<SpotRelationFilter, SpotWhereInput>
  }

  export type CollectionSpotOrderByWithRelationInput = {
    id?: SortOrder
    collectionId?: SortOrder
    spotId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    collection?: CollectionOrderByWithRelationInput
    spot?: SpotOrderByWithRelationInput
  }

  export type CollectionSpotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    collectionId_spotId?: CollectionSpotCollectionIdSpotIdCompoundUniqueInput
    AND?: CollectionSpotWhereInput | CollectionSpotWhereInput[]
    OR?: CollectionSpotWhereInput[]
    NOT?: CollectionSpotWhereInput | CollectionSpotWhereInput[]
    collectionId?: StringFilter<"CollectionSpot"> | string
    spotId?: StringFilter<"CollectionSpot"> | string
    order?: IntFilter<"CollectionSpot"> | number
    createdAt?: DateTimeFilter<"CollectionSpot"> | Date | string
    collection?: XOR<CollectionRelationFilter, CollectionWhereInput>
    spot?: XOR<SpotRelationFilter, SpotWhereInput>
  }, "id" | "collectionId_spotId">

  export type CollectionSpotOrderByWithAggregationInput = {
    id?: SortOrder
    collectionId?: SortOrder
    spotId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: CollectionSpotCountOrderByAggregateInput
    _avg?: CollectionSpotAvgOrderByAggregateInput
    _max?: CollectionSpotMaxOrderByAggregateInput
    _min?: CollectionSpotMinOrderByAggregateInput
    _sum?: CollectionSpotSumOrderByAggregateInput
  }

  export type CollectionSpotScalarWhereWithAggregatesInput = {
    AND?: CollectionSpotScalarWhereWithAggregatesInput | CollectionSpotScalarWhereWithAggregatesInput[]
    OR?: CollectionSpotScalarWhereWithAggregatesInput[]
    NOT?: CollectionSpotScalarWhereWithAggregatesInput | CollectionSpotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollectionSpot"> | string
    collectionId?: StringWithAggregatesFilter<"CollectionSpot"> | string
    spotId?: StringWithAggregatesFilter<"CollectionSpot"> | string
    order?: IntWithAggregatesFilter<"CollectionSpot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CollectionSpot"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startTime?: DateTimeFilter<"Event"> | Date | string
    endTime?: DateTimeNullableFilter<"Event"> | Date | string | null
    maxAttendees?: IntNullableFilter<"Event"> | number | null
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    organizerId?: StringFilter<"Event"> | string
    spotId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    organizer?: XOR<UserRelationFilter, UserWhereInput>
    spot?: XOR<SpotRelationFilter, SpotWhereInput>
    attendees?: EventAttendeeListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    maxAttendees?: SortOrderInput | SortOrder
    status?: SortOrder
    organizerId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizer?: UserOrderByWithRelationInput
    spot?: SpotOrderByWithRelationInput
    attendees?: EventAttendeeOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startTime?: DateTimeFilter<"Event"> | Date | string
    endTime?: DateTimeNullableFilter<"Event"> | Date | string | null
    maxAttendees?: IntNullableFilter<"Event"> | number | null
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    organizerId?: StringFilter<"Event"> | string
    spotId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    organizer?: XOR<UserRelationFilter, UserWhereInput>
    spot?: XOR<SpotRelationFilter, SpotWhereInput>
    attendees?: EventAttendeeListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    maxAttendees?: SortOrderInput | SortOrder
    status?: SortOrder
    organizerId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    maxAttendees?: IntNullableWithAggregatesFilter<"Event"> | number | null
    status?: EnumEventStatusWithAggregatesFilter<"Event"> | $Enums.EventStatus
    organizerId?: StringWithAggregatesFilter<"Event"> | string
    spotId?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventAttendeeWhereInput = {
    AND?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    OR?: EventAttendeeWhereInput[]
    NOT?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    id?: StringFilter<"EventAttendee"> | string
    eventId?: StringFilter<"EventAttendee"> | string
    userId?: StringFilter<"EventAttendee"> | string
    status?: EnumEventAttendeeStatusFilter<"EventAttendee"> | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFilter<"EventAttendee"> | Date | string
    updatedAt?: DateTimeFilter<"EventAttendee"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EventAttendeeOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EventAttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_userId?: EventAttendeeEventIdUserIdCompoundUniqueInput
    AND?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    OR?: EventAttendeeWhereInput[]
    NOT?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    eventId?: StringFilter<"EventAttendee"> | string
    userId?: StringFilter<"EventAttendee"> | string
    status?: EnumEventAttendeeStatusFilter<"EventAttendee"> | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFilter<"EventAttendee"> | Date | string
    updatedAt?: DateTimeFilter<"EventAttendee"> | Date | string
    event?: XOR<EventRelationFilter, EventWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "eventId_userId">

  export type EventAttendeeOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventAttendeeCountOrderByAggregateInput
    _max?: EventAttendeeMaxOrderByAggregateInput
    _min?: EventAttendeeMinOrderByAggregateInput
  }

  export type EventAttendeeScalarWhereWithAggregatesInput = {
    AND?: EventAttendeeScalarWhereWithAggregatesInput | EventAttendeeScalarWhereWithAggregatesInput[]
    OR?: EventAttendeeScalarWhereWithAggregatesInput[]
    NOT?: EventAttendeeScalarWhereWithAggregatesInput | EventAttendeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventAttendee"> | string
    eventId?: StringWithAggregatesFilter<"EventAttendee"> | string
    userId?: StringWithAggregatesFilter<"EventAttendee"> | string
    status?: EnumEventAttendeeStatusWithAggregatesFilter<"EventAttendee"> | $Enums.EventAttendeeStatus
    createdAt?: DateTimeWithAggregatesFilter<"EventAttendee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventAttendee"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    reason?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    comment?: StringNullableFilter<"Report"> | string | null
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    resolution?: StringNullableFilter<"Report"> | string | null
    reporterId?: StringFilter<"Report"> | string
    spotId?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    reporter?: XOR<UserRelationFilter, UserWhereInput>
    spot?: XOR<SpotNullableRelationFilter, SpotWhereInput> | null
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    comment?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution?: SortOrderInput | SortOrder
    reporterId?: SortOrder
    spotId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reporter?: UserOrderByWithRelationInput
    spot?: SpotOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    reason?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    comment?: StringNullableFilter<"Report"> | string | null
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    resolution?: StringNullableFilter<"Report"> | string | null
    reporterId?: StringFilter<"Report"> | string
    spotId?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    reporter?: XOR<UserRelationFilter, UserWhereInput>
    spot?: XOR<SpotNullableRelationFilter, SpotWhereInput> | null
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    comment?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution?: SortOrderInput | SortOrder
    reporterId?: SortOrder
    spotId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    reason?: EnumReportTypeWithAggregatesFilter<"Report"> | $Enums.ReportType
    comment?: StringNullableWithAggregatesFilter<"Report"> | string | null
    status?: EnumReportStatusWithAggregatesFilter<"Report"> | $Enums.ReportStatus
    resolution?: StringNullableWithAggregatesFilter<"Report"> | string | null
    reporterId?: StringWithAggregatesFilter<"Report"> | string
    spotId?: StringNullableWithAggregatesFilter<"Report"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingCreateNestedManyWithoutUserInput
    spotTags?: SpotTagCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotUncheckedCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingUncheckedCreateNestedManyWithoutUserInput
    spotTags?: SpotTagUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUncheckedUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUncheckedUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicLinkCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutMagicLinksInput
  }

  export type MagicLinkUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    used?: boolean
    userId?: string | null
    createdAt?: Date | string
  }

  export type MagicLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMagicLinksNestedInput
  }

  export type MagicLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicLinkCreateManyInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    used?: boolean
    userId?: string | null
    createdAt?: Date | string
  }

  export type MagicLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    color?: string
    isOfficial?: boolean
    proposalCount?: number
    approvalThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    color?: string
    isOfficial?: boolean
    proposalCount?: number
    approvalThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    proposalCount?: IntFieldUpdateOperationsInput | number
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    proposalCount?: IntFieldUpdateOperationsInput | number
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    color?: string
    isOfficial?: boolean
    proposalCount?: number
    approvalThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    proposalCount?: IntFieldUpdateOperationsInput | number
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    proposalCount?: IntFieldUpdateOperationsInput | number
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpotsNestedInput
    category?: CategoryUpdateOneRequiredWithoutSpotsNestedInput
    images?: SpotImageUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUpdateManyWithoutSpotNestedInput
    reports?: ReportUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUpdateManyWithoutSpotNestedInput
    events?: EventUpdateManyWithoutSpotNestedInput
  }

  export type SpotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: SpotImageUncheckedUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUncheckedUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUncheckedUpdateManyWithoutSpotNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUncheckedUpdateManyWithoutSpotNestedInput
    events?: EventUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type SpotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotImageCreateInput = {
    id?: string
    url: string
    key: string
    alt?: string | null
    caption?: string | null
    order?: number
    createdAt?: Date | string
    spot: SpotCreateNestedOneWithoutImagesInput
  }

  export type SpotImageUncheckedCreateInput = {
    id?: string
    url: string
    key: string
    alt?: string | null
    caption?: string | null
    order?: number
    spotId: string
    createdAt?: Date | string
  }

  export type SpotImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spot?: SpotUpdateOneRequiredWithoutImagesNestedInput
  }

  export type SpotImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    spotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotImageCreateManyInput = {
    id?: string
    url: string
    key: string
    alt?: string | null
    caption?: string | null
    order?: number
    spotId: string
    createdAt?: Date | string
  }

  export type SpotImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    spotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotRatingCreateInput = {
    id?: string
    isPositive: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSpotRatingsInput
    spot: SpotCreateNestedOneWithoutRatingsInput
  }

  export type SpotRatingUncheckedCreateInput = {
    id?: string
    isPositive: boolean
    comment?: string | null
    userId: string
    spotId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpotRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPositive?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpotRatingsNestedInput
    spot?: SpotUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type SpotRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPositive?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotRatingCreateManyInput = {
    id?: string
    isPositive: boolean
    comment?: string | null
    userId: string
    spotId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpotRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPositive?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPositive?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    color?: string
    usageCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    spotTags?: SpotTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    color?: string
    usageCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    spotTags?: SpotTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spotTags?: SpotTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spotTags?: SpotTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    color?: string
    usageCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotTagCreateInput = {
    id?: string
    createdAt?: Date | string
    spot: SpotCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutSpotTagsInput
    user: UserCreateNestedOneWithoutSpotTagsInput
  }

  export type SpotTagUncheckedCreateInput = {
    id?: string
    spotId: string
    tagId: string
    userId: string
    createdAt?: Date | string
  }

  export type SpotTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spot?: SpotUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutSpotTagsNestedInput
    user?: UserUpdateOneRequiredWithoutSpotTagsNestedInput
  }

  export type SpotTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotTagCreateManyInput = {
    id?: string
    spotId: string
    tagId: string
    userId: string
    createdAt?: Date | string
  }

  export type SpotTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionCreateInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
    spots?: CollectionSpotCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: CollectionSpotUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
    spots?: CollectionSpotUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: CollectionSpotUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionSpotCreateInput = {
    id?: string
    order?: number
    createdAt?: Date | string
    collection: CollectionCreateNestedOneWithoutSpotsInput
    spot: SpotCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionSpotUncheckedCreateInput = {
    id?: string
    collectionId: string
    spotId: string
    order?: number
    createdAt?: Date | string
  }

  export type CollectionSpotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutSpotsNestedInput
    spot?: SpotUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionSpotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionSpotCreateManyInput = {
    id?: string
    collectionId: string
    spotId: string
    order?: number
    createdAt?: Date | string
  }

  export type CollectionSpotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionSpotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    maxAttendees?: number | null
    status?: $Enums.EventStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organizer: UserCreateNestedOneWithoutEventsInput
    spot: SpotCreateNestedOneWithoutEventsInput
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    maxAttendees?: number | null
    status?: $Enums.EventStatus
    organizerId: string
    spotId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    spot?: SpotUpdateOneRequiredWithoutEventsNestedInput
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    organizerId?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    maxAttendees?: number | null
    status?: $Enums.EventStatus
    organizerId: string
    spotId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    organizerId?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeCreateInput = {
    id?: string
    status?: $Enums.EventAttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutAttendeesInput
    user: UserCreateNestedOneWithoutEventAttendeesInput
  }

  export type EventAttendeeUncheckedCreateInput = {
    id?: string
    eventId: string
    userId: string
    status?: $Enums.EventAttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventAttendeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEventAttendeeStatusFieldUpdateOperationsInput | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutAttendeesNestedInput
    user?: UserUpdateOneRequiredWithoutEventAttendeesNestedInput
  }

  export type EventAttendeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumEventAttendeeStatusFieldUpdateOperationsInput | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeCreateManyInput = {
    id?: string
    eventId: string
    userId: string
    status?: $Enums.EventAttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventAttendeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEventAttendeeStatusFieldUpdateOperationsInput | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumEventAttendeeStatusFieldUpdateOperationsInput | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    reason: $Enums.ReportType
    comment?: string | null
    status?: $Enums.ReportStatus
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reporter: UserCreateNestedOneWithoutReportsInput
    spot?: SpotCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    reason: $Enums.ReportType
    comment?: string | null
    status?: $Enums.ReportStatus
    resolution?: string | null
    reporterId: string
    spotId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporter?: UserUpdateOneRequiredWithoutReportsNestedInput
    spot?: SpotUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    spotId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    reason: $Enums.ReportType
    comment?: string | null
    status?: $Enums.ReportStatus
    resolution?: string | null
    reporterId: string
    spotId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    spotId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SpotListRelationFilter = {
    every?: SpotWhereInput
    some?: SpotWhereInput
    none?: SpotWhereInput
  }

  export type SpotRatingListRelationFilter = {
    every?: SpotRatingWhereInput
    some?: SpotRatingWhereInput
    none?: SpotRatingWhereInput
  }

  export type SpotTagListRelationFilter = {
    every?: SpotTagWhereInput
    some?: SpotTagWhereInput
    none?: SpotTagWhereInput
  }

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput
    some?: CollectionWhereInput
    none?: CollectionWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type MagicLinkListRelationFilter = {
    every?: MagicLinkWhereInput
    some?: MagicLinkWhereInput
    none?: MagicLinkWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventAttendeeListRelationFilter = {
    every?: EventAttendeeWhereInput
    some?: EventAttendeeWhereInput
    none?: EventAttendeeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SpotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpotRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpotTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MagicLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventAttendeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    reputation?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    reputation?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    reputation?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    reputation?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    reputation?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MagicLinkCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type MagicLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type MagicLinkMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    isOfficial?: SortOrder
    proposalCount?: SortOrder
    approvalThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    proposalCount?: SortOrder
    approvalThreshold?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    isOfficial?: SortOrder
    proposalCount?: SortOrder
    approvalThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    isOfficial?: SortOrder
    proposalCount?: SortOrder
    approvalThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    proposalCount?: SortOrder
    approvalThreshold?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SpotImageListRelationFilter = {
    every?: SpotImageWhereInput
    some?: SpotImageWhereInput
    none?: SpotImageWhereInput
  }

  export type CollectionSpotListRelationFilter = {
    every?: CollectionSpotWhereInput
    some?: CollectionSpotWhereInput
    none?: CollectionSpotWhereInput
  }

  export type SpotImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionSpotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpotCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    verified?: SortOrder
    featured?: SortOrder
    viewCount?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpotAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    viewCount?: SortOrder
  }

  export type SpotMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    verified?: SortOrder
    featured?: SortOrder
    viewCount?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpotMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    verified?: SortOrder
    featured?: SortOrder
    viewCount?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpotSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    viewCount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SpotRelationFilter = {
    is?: SpotWhereInput
    isNot?: SpotWhereInput
  }

  export type SpotImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    key?: SortOrder
    alt?: SortOrder
    caption?: SortOrder
    order?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
  }

  export type SpotImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SpotImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    key?: SortOrder
    alt?: SortOrder
    caption?: SortOrder
    order?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
  }

  export type SpotImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    key?: SortOrder
    alt?: SortOrder
    caption?: SortOrder
    order?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
  }

  export type SpotImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SpotRatingUserIdSpotIdCompoundUniqueInput = {
    userId: string
    spotId: string
  }

  export type SpotRatingCountOrderByAggregateInput = {
    id?: SortOrder
    isPositive?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpotRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    isPositive?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpotRatingMinOrderByAggregateInput = {
    id?: SortOrder
    isPositive?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    color?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    usageCount?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    color?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    color?: SortOrder
    usageCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    usageCount?: SortOrder
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type SpotTagSpotIdTagIdUserIdCompoundUniqueInput = {
    spotId: string
    tagId: string
    userId: string
  }

  export type SpotTagCountOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    tagId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SpotTagMaxOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    tagId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SpotTagMinOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    tagId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollectionRelationFilter = {
    is?: CollectionWhereInput
    isNot?: CollectionWhereInput
  }

  export type CollectionSpotCollectionIdSpotIdCompoundUniqueInput = {
    collectionId: string
    spotId: string
  }

  export type CollectionSpotCountOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    spotId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionSpotAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CollectionSpotMaxOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    spotId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionSpotMinOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    spotId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionSpotSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxAttendees?: SortOrder
    status?: SortOrder
    organizerId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    maxAttendees?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxAttendees?: SortOrder
    status?: SortOrder
    organizerId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    maxAttendees?: SortOrder
    status?: SortOrder
    organizerId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    maxAttendees?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type EnumEventAttendeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventAttendeeStatus | EnumEventAttendeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventAttendeeStatus[] | ListEnumEventAttendeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventAttendeeStatus[] | ListEnumEventAttendeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventAttendeeStatusFilter<$PrismaModel> | $Enums.EventAttendeeStatus
  }

  export type EventRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventAttendeeEventIdUserIdCompoundUniqueInput = {
    eventId: string
    userId: string
  }

  export type EventAttendeeCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAttendeeMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAttendeeMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEventAttendeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventAttendeeStatus | EnumEventAttendeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventAttendeeStatus[] | ListEnumEventAttendeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventAttendeeStatus[] | ListEnumEventAttendeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventAttendeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventAttendeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventAttendeeStatusFilter<$PrismaModel>
    _max?: NestedEnumEventAttendeeStatusFilter<$PrismaModel>
  }

  export type EnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type SpotNullableRelationFilter = {
    is?: SpotWhereInput | null
    isNot?: SpotWhereInput | null
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    reporterId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    reporterId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    comment?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    reporterId?: SortOrder
    spotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type SpotCreateNestedManyWithoutUserInput = {
    connect?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
  }

  export type SpotRatingCreateNestedManyWithoutUserInput = {
    create?: XOR<SpotRatingCreateWithoutUserInput, SpotRatingUncheckedCreateWithoutUserInput> | SpotRatingCreateWithoutUserInput[] | SpotRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpotRatingCreateOrConnectWithoutUserInput | SpotRatingCreateOrConnectWithoutUserInput[]
    createMany?: SpotRatingCreateManyUserInputEnvelope
    connect?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
  }

  export type SpotTagCreateNestedManyWithoutUserInput = {
    create?: XOR<SpotTagCreateWithoutUserInput, SpotTagUncheckedCreateWithoutUserInput> | SpotTagCreateWithoutUserInput[] | SpotTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpotTagCreateOrConnectWithoutUserInput | SpotTagCreateOrConnectWithoutUserInput[]
    createMany?: SpotTagCreateManyUserInputEnvelope
    connect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
  }

  export type CollectionCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutReporterInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type MagicLinkCreateNestedManyWithoutUserInput = {
    create?: XOR<MagicLinkCreateWithoutUserInput, MagicLinkUncheckedCreateWithoutUserInput> | MagicLinkCreateWithoutUserInput[] | MagicLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MagicLinkCreateOrConnectWithoutUserInput | MagicLinkCreateOrConnectWithoutUserInput[]
    createMany?: MagicLinkCreateManyUserInputEnvelope
    connect?: MagicLinkWhereUniqueInput | MagicLinkWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventAttendeeCreateNestedManyWithoutUserInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type SpotUncheckedCreateNestedManyWithoutUserInput = {
    connect?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
  }

  export type SpotRatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SpotRatingCreateWithoutUserInput, SpotRatingUncheckedCreateWithoutUserInput> | SpotRatingCreateWithoutUserInput[] | SpotRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpotRatingCreateOrConnectWithoutUserInput | SpotRatingCreateOrConnectWithoutUserInput[]
    createMany?: SpotRatingCreateManyUserInputEnvelope
    connect?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
  }

  export type SpotTagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SpotTagCreateWithoutUserInput, SpotTagUncheckedCreateWithoutUserInput> | SpotTagCreateWithoutUserInput[] | SpotTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpotTagCreateOrConnectWithoutUserInput | SpotTagCreateOrConnectWithoutUserInput[]
    createMany?: SpotTagCreateManyUserInputEnvelope
    connect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutReporterInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type MagicLinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MagicLinkCreateWithoutUserInput, MagicLinkUncheckedCreateWithoutUserInput> | MagicLinkCreateWithoutUserInput[] | MagicLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MagicLinkCreateOrConnectWithoutUserInput | MagicLinkCreateOrConnectWithoutUserInput[]
    createMany?: MagicLinkCreateManyUserInputEnvelope
    connect?: MagicLinkWhereUniqueInput | MagicLinkWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventAttendeeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SpotUpdateManyWithoutUserNestedInput = {
    set?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    disconnect?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    delete?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    connect?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    update?: SpotUpdateWithWhereUniqueWithoutUserInput | SpotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpotUpdateManyWithWhereWithoutUserInput | SpotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpotScalarWhereInput | SpotScalarWhereInput[]
  }

  export type SpotRatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpotRatingCreateWithoutUserInput, SpotRatingUncheckedCreateWithoutUserInput> | SpotRatingCreateWithoutUserInput[] | SpotRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpotRatingCreateOrConnectWithoutUserInput | SpotRatingCreateOrConnectWithoutUserInput[]
    upsert?: SpotRatingUpsertWithWhereUniqueWithoutUserInput | SpotRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpotRatingCreateManyUserInputEnvelope
    set?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    disconnect?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    delete?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    connect?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    update?: SpotRatingUpdateWithWhereUniqueWithoutUserInput | SpotRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpotRatingUpdateManyWithWhereWithoutUserInput | SpotRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpotRatingScalarWhereInput | SpotRatingScalarWhereInput[]
  }

  export type SpotTagUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpotTagCreateWithoutUserInput, SpotTagUncheckedCreateWithoutUserInput> | SpotTagCreateWithoutUserInput[] | SpotTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpotTagCreateOrConnectWithoutUserInput | SpotTagCreateOrConnectWithoutUserInput[]
    upsert?: SpotTagUpsertWithWhereUniqueWithoutUserInput | SpotTagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpotTagCreateManyUserInputEnvelope
    set?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    disconnect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    delete?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    connect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    update?: SpotTagUpdateWithWhereUniqueWithoutUserInput | SpotTagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpotTagUpdateManyWithWhereWithoutUserInput | SpotTagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpotTagScalarWhereInput | SpotTagScalarWhereInput[]
  }

  export type CollectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutReporterNestedInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReporterInput | ReportUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReporterInput | ReportUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReporterInput | ReportUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type MagicLinkUpdateManyWithoutUserNestedInput = {
    create?: XOR<MagicLinkCreateWithoutUserInput, MagicLinkUncheckedCreateWithoutUserInput> | MagicLinkCreateWithoutUserInput[] | MagicLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MagicLinkCreateOrConnectWithoutUserInput | MagicLinkCreateOrConnectWithoutUserInput[]
    upsert?: MagicLinkUpsertWithWhereUniqueWithoutUserInput | MagicLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MagicLinkCreateManyUserInputEnvelope
    set?: MagicLinkWhereUniqueInput | MagicLinkWhereUniqueInput[]
    disconnect?: MagicLinkWhereUniqueInput | MagicLinkWhereUniqueInput[]
    delete?: MagicLinkWhereUniqueInput | MagicLinkWhereUniqueInput[]
    connect?: MagicLinkWhereUniqueInput | MagicLinkWhereUniqueInput[]
    update?: MagicLinkUpdateWithWhereUniqueWithoutUserInput | MagicLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MagicLinkUpdateManyWithWhereWithoutUserInput | MagicLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MagicLinkScalarWhereInput | MagicLinkScalarWhereInput[]
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventAttendeeUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutUserInput | EventAttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutUserInput | EventAttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutUserInput | EventAttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type SpotUncheckedUpdateManyWithoutUserNestedInput = {
    set?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    disconnect?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    delete?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    connect?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    update?: SpotUpdateWithWhereUniqueWithoutUserInput | SpotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpotUpdateManyWithWhereWithoutUserInput | SpotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpotScalarWhereInput | SpotScalarWhereInput[]
  }

  export type SpotRatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpotRatingCreateWithoutUserInput, SpotRatingUncheckedCreateWithoutUserInput> | SpotRatingCreateWithoutUserInput[] | SpotRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpotRatingCreateOrConnectWithoutUserInput | SpotRatingCreateOrConnectWithoutUserInput[]
    upsert?: SpotRatingUpsertWithWhereUniqueWithoutUserInput | SpotRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpotRatingCreateManyUserInputEnvelope
    set?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    disconnect?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    delete?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    connect?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    update?: SpotRatingUpdateWithWhereUniqueWithoutUserInput | SpotRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpotRatingUpdateManyWithWhereWithoutUserInput | SpotRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpotRatingScalarWhereInput | SpotRatingScalarWhereInput[]
  }

  export type SpotTagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpotTagCreateWithoutUserInput, SpotTagUncheckedCreateWithoutUserInput> | SpotTagCreateWithoutUserInput[] | SpotTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpotTagCreateOrConnectWithoutUserInput | SpotTagCreateOrConnectWithoutUserInput[]
    upsert?: SpotTagUpsertWithWhereUniqueWithoutUserInput | SpotTagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpotTagCreateManyUserInputEnvelope
    set?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    disconnect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    delete?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    connect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    update?: SpotTagUpdateWithWhereUniqueWithoutUserInput | SpotTagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpotTagUpdateManyWithWhereWithoutUserInput | SpotTagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpotTagScalarWhereInput | SpotTagScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput> | CollectionCreateWithoutUserInput[] | CollectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutUserInput | CollectionCreateOrConnectWithoutUserInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutUserInput | CollectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionCreateManyUserInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutUserInput | CollectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutUserInput | CollectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutReporterNestedInput = {
    create?: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput> | ReportCreateWithoutReporterInput[] | ReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutReporterInput | ReportCreateOrConnectWithoutReporterInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutReporterInput | ReportUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: ReportCreateManyReporterInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutReporterInput | ReportUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutReporterInput | ReportUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type MagicLinkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MagicLinkCreateWithoutUserInput, MagicLinkUncheckedCreateWithoutUserInput> | MagicLinkCreateWithoutUserInput[] | MagicLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MagicLinkCreateOrConnectWithoutUserInput | MagicLinkCreateOrConnectWithoutUserInput[]
    upsert?: MagicLinkUpsertWithWhereUniqueWithoutUserInput | MagicLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MagicLinkCreateManyUserInputEnvelope
    set?: MagicLinkWhereUniqueInput | MagicLinkWhereUniqueInput[]
    disconnect?: MagicLinkWhereUniqueInput | MagicLinkWhereUniqueInput[]
    delete?: MagicLinkWhereUniqueInput | MagicLinkWhereUniqueInput[]
    connect?: MagicLinkWhereUniqueInput | MagicLinkWhereUniqueInput[]
    update?: MagicLinkUpdateWithWhereUniqueWithoutUserInput | MagicLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MagicLinkUpdateManyWithWhereWithoutUserInput | MagicLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MagicLinkScalarWhereInput | MagicLinkScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventAttendeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutUserInput | EventAttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutUserInput | EventAttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutUserInput | EventAttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMagicLinksInput = {
    create?: XOR<UserCreateWithoutMagicLinksInput, UserUncheckedCreateWithoutMagicLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutMagicLinksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutMagicLinksNestedInput = {
    create?: XOR<UserCreateWithoutMagicLinksInput, UserUncheckedCreateWithoutMagicLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutMagicLinksInput
    upsert?: UserUpsertWithoutMagicLinksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMagicLinksInput, UserUpdateWithoutMagicLinksInput>, UserUncheckedUpdateWithoutMagicLinksInput>
  }

  export type SpotCreateNestedManyWithoutCategoryInput = {
    connect?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
  }

  export type SpotUncheckedCreateNestedManyWithoutCategoryInput = {
    connect?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
  }

  export type SpotUpdateManyWithoutCategoryNestedInput = {
    set?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    disconnect?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    delete?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    connect?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    update?: SpotUpdateWithWhereUniqueWithoutCategoryInput | SpotUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SpotUpdateManyWithWhereWithoutCategoryInput | SpotUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SpotScalarWhereInput | SpotScalarWhereInput[]
  }

  export type SpotUncheckedUpdateManyWithoutCategoryNestedInput = {
    set?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    disconnect?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    delete?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    connect?: SpotWhereUniqueInput | SpotWhereUniqueInput[]
    update?: SpotUpdateWithWhereUniqueWithoutCategoryInput | SpotUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SpotUpdateManyWithWhereWithoutCategoryInput | SpotUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SpotScalarWhereInput | SpotScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSpotsNestedInput = {
    create?: XOR<UserCreateWithoutSpotsInput, UserUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpotsInput
    upsert?: UserUpsertWithoutSpotsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpotsInput, UserUpdateWithoutSpotsInput>, UserUncheckedUpdateWithoutSpotsInput>
  }

  export type CategoryUpdateOneRequiredWithoutSpotsNestedInput = {
    create?: XOR<CategoryCreateWithoutSpotsInput, CategoryUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSpotsInput
    upsert?: CategoryUpsertWithoutSpotsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSpotsInput, CategoryUpdateWithoutSpotsInput>, CategoryUncheckedUpdateWithoutSpotsInput>
  }

  export type SpotImageUpdateManyWithoutSpotNestedInput = {
    create?: XOR<SpotImageCreateWithoutSpotInput, SpotImageUncheckedCreateWithoutSpotInput> | SpotImageCreateWithoutSpotInput[] | SpotImageUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: SpotImageCreateOrConnectWithoutSpotInput | SpotImageCreateOrConnectWithoutSpotInput[]
    upsert?: SpotImageUpsertWithWhereUniqueWithoutSpotInput | SpotImageUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: SpotImageCreateManySpotInputEnvelope
    set?: SpotImageWhereUniqueInput | SpotImageWhereUniqueInput[]
    disconnect?: SpotImageWhereUniqueInput | SpotImageWhereUniqueInput[]
    delete?: SpotImageWhereUniqueInput | SpotImageWhereUniqueInput[]
    connect?: SpotImageWhereUniqueInput | SpotImageWhereUniqueInput[]
    update?: SpotImageUpdateWithWhereUniqueWithoutSpotInput | SpotImageUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: SpotImageUpdateManyWithWhereWithoutSpotInput | SpotImageUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: SpotImageScalarWhereInput | SpotImageScalarWhereInput[]
  }

  export type SpotRatingUpdateManyWithoutSpotNestedInput = {
    create?: XOR<SpotRatingCreateWithoutSpotInput, SpotRatingUncheckedCreateWithoutSpotInput> | SpotRatingCreateWithoutSpotInput[] | SpotRatingUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: SpotRatingCreateOrConnectWithoutSpotInput | SpotRatingCreateOrConnectWithoutSpotInput[]
    upsert?: SpotRatingUpsertWithWhereUniqueWithoutSpotInput | SpotRatingUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: SpotRatingCreateManySpotInputEnvelope
    set?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    disconnect?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    delete?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    connect?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    update?: SpotRatingUpdateWithWhereUniqueWithoutSpotInput | SpotRatingUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: SpotRatingUpdateManyWithWhereWithoutSpotInput | SpotRatingUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: SpotRatingScalarWhereInput | SpotRatingScalarWhereInput[]
  }

  export type SpotTagUpdateManyWithoutSpotNestedInput = {
    create?: XOR<SpotTagCreateWithoutSpotInput, SpotTagUncheckedCreateWithoutSpotInput> | SpotTagCreateWithoutSpotInput[] | SpotTagUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: SpotTagCreateOrConnectWithoutSpotInput | SpotTagCreateOrConnectWithoutSpotInput[]
    upsert?: SpotTagUpsertWithWhereUniqueWithoutSpotInput | SpotTagUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: SpotTagCreateManySpotInputEnvelope
    set?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    disconnect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    delete?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    connect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    update?: SpotTagUpdateWithWhereUniqueWithoutSpotInput | SpotTagUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: SpotTagUpdateManyWithWhereWithoutSpotInput | SpotTagUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: SpotTagScalarWhereInput | SpotTagScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutSpotNestedInput = {
    create?: XOR<ReportCreateWithoutSpotInput, ReportUncheckedCreateWithoutSpotInput> | ReportCreateWithoutSpotInput[] | ReportUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutSpotInput | ReportCreateOrConnectWithoutSpotInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutSpotInput | ReportUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: ReportCreateManySpotInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutSpotInput | ReportUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutSpotInput | ReportUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type CollectionSpotUpdateManyWithoutSpotNestedInput = {
    create?: XOR<CollectionSpotCreateWithoutSpotInput, CollectionSpotUncheckedCreateWithoutSpotInput> | CollectionSpotCreateWithoutSpotInput[] | CollectionSpotUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: CollectionSpotCreateOrConnectWithoutSpotInput | CollectionSpotCreateOrConnectWithoutSpotInput[]
    upsert?: CollectionSpotUpsertWithWhereUniqueWithoutSpotInput | CollectionSpotUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: CollectionSpotCreateManySpotInputEnvelope
    set?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    disconnect?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    delete?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    connect?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    update?: CollectionSpotUpdateWithWhereUniqueWithoutSpotInput | CollectionSpotUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: CollectionSpotUpdateManyWithWhereWithoutSpotInput | CollectionSpotUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: CollectionSpotScalarWhereInput | CollectionSpotScalarWhereInput[]
  }

  export type EventUpdateManyWithoutSpotNestedInput = {
    create?: XOR<EventCreateWithoutSpotInput, EventUncheckedCreateWithoutSpotInput> | EventCreateWithoutSpotInput[] | EventUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSpotInput | EventCreateOrConnectWithoutSpotInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutSpotInput | EventUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: EventCreateManySpotInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutSpotInput | EventUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: EventUpdateManyWithWhereWithoutSpotInput | EventUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type SpotImageUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<SpotImageCreateWithoutSpotInput, SpotImageUncheckedCreateWithoutSpotInput> | SpotImageCreateWithoutSpotInput[] | SpotImageUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: SpotImageCreateOrConnectWithoutSpotInput | SpotImageCreateOrConnectWithoutSpotInput[]
    upsert?: SpotImageUpsertWithWhereUniqueWithoutSpotInput | SpotImageUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: SpotImageCreateManySpotInputEnvelope
    set?: SpotImageWhereUniqueInput | SpotImageWhereUniqueInput[]
    disconnect?: SpotImageWhereUniqueInput | SpotImageWhereUniqueInput[]
    delete?: SpotImageWhereUniqueInput | SpotImageWhereUniqueInput[]
    connect?: SpotImageWhereUniqueInput | SpotImageWhereUniqueInput[]
    update?: SpotImageUpdateWithWhereUniqueWithoutSpotInput | SpotImageUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: SpotImageUpdateManyWithWhereWithoutSpotInput | SpotImageUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: SpotImageScalarWhereInput | SpotImageScalarWhereInput[]
  }

  export type SpotRatingUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<SpotRatingCreateWithoutSpotInput, SpotRatingUncheckedCreateWithoutSpotInput> | SpotRatingCreateWithoutSpotInput[] | SpotRatingUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: SpotRatingCreateOrConnectWithoutSpotInput | SpotRatingCreateOrConnectWithoutSpotInput[]
    upsert?: SpotRatingUpsertWithWhereUniqueWithoutSpotInput | SpotRatingUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: SpotRatingCreateManySpotInputEnvelope
    set?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    disconnect?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    delete?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    connect?: SpotRatingWhereUniqueInput | SpotRatingWhereUniqueInput[]
    update?: SpotRatingUpdateWithWhereUniqueWithoutSpotInput | SpotRatingUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: SpotRatingUpdateManyWithWhereWithoutSpotInput | SpotRatingUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: SpotRatingScalarWhereInput | SpotRatingScalarWhereInput[]
  }

  export type SpotTagUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<SpotTagCreateWithoutSpotInput, SpotTagUncheckedCreateWithoutSpotInput> | SpotTagCreateWithoutSpotInput[] | SpotTagUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: SpotTagCreateOrConnectWithoutSpotInput | SpotTagCreateOrConnectWithoutSpotInput[]
    upsert?: SpotTagUpsertWithWhereUniqueWithoutSpotInput | SpotTagUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: SpotTagCreateManySpotInputEnvelope
    set?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    disconnect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    delete?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    connect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    update?: SpotTagUpdateWithWhereUniqueWithoutSpotInput | SpotTagUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: SpotTagUpdateManyWithWhereWithoutSpotInput | SpotTagUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: SpotTagScalarWhereInput | SpotTagScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<ReportCreateWithoutSpotInput, ReportUncheckedCreateWithoutSpotInput> | ReportCreateWithoutSpotInput[] | ReportUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutSpotInput | ReportCreateOrConnectWithoutSpotInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutSpotInput | ReportUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: ReportCreateManySpotInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutSpotInput | ReportUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutSpotInput | ReportUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type CollectionSpotUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<CollectionSpotCreateWithoutSpotInput, CollectionSpotUncheckedCreateWithoutSpotInput> | CollectionSpotCreateWithoutSpotInput[] | CollectionSpotUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: CollectionSpotCreateOrConnectWithoutSpotInput | CollectionSpotCreateOrConnectWithoutSpotInput[]
    upsert?: CollectionSpotUpsertWithWhereUniqueWithoutSpotInput | CollectionSpotUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: CollectionSpotCreateManySpotInputEnvelope
    set?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    disconnect?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    delete?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    connect?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    update?: CollectionSpotUpdateWithWhereUniqueWithoutSpotInput | CollectionSpotUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: CollectionSpotUpdateManyWithWhereWithoutSpotInput | CollectionSpotUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: CollectionSpotScalarWhereInput | CollectionSpotScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<EventCreateWithoutSpotInput, EventUncheckedCreateWithoutSpotInput> | EventCreateWithoutSpotInput[] | EventUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: EventCreateOrConnectWithoutSpotInput | EventCreateOrConnectWithoutSpotInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutSpotInput | EventUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: EventCreateManySpotInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutSpotInput | EventUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: EventUpdateManyWithWhereWithoutSpotInput | EventUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type SpotCreateNestedOneWithoutImagesInput = {
    connect?: SpotWhereUniqueInput
  }

  export type SpotUpdateOneRequiredWithoutImagesNestedInput = {
    connect?: SpotWhereUniqueInput
    update?: XOR<XOR<SpotUpdateToOneWithWhereWithoutImagesInput, SpotUpdateWithoutImagesInput>, SpotUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutSpotRatingsInput = {
    create?: XOR<UserCreateWithoutSpotRatingsInput, UserUncheckedCreateWithoutSpotRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpotRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type SpotCreateNestedOneWithoutRatingsInput = {
    connect?: SpotWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSpotRatingsNestedInput = {
    create?: XOR<UserCreateWithoutSpotRatingsInput, UserUncheckedCreateWithoutSpotRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpotRatingsInput
    upsert?: UserUpsertWithoutSpotRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpotRatingsInput, UserUpdateWithoutSpotRatingsInput>, UserUncheckedUpdateWithoutSpotRatingsInput>
  }

  export type SpotUpdateOneRequiredWithoutRatingsNestedInput = {
    connect?: SpotWhereUniqueInput
    update?: XOR<XOR<SpotUpdateToOneWithWhereWithoutRatingsInput, SpotUpdateWithoutRatingsInput>, SpotUncheckedUpdateWithoutRatingsInput>
  }

  export type SpotTagCreateNestedManyWithoutTagInput = {
    create?: XOR<SpotTagCreateWithoutTagInput, SpotTagUncheckedCreateWithoutTagInput> | SpotTagCreateWithoutTagInput[] | SpotTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SpotTagCreateOrConnectWithoutTagInput | SpotTagCreateOrConnectWithoutTagInput[]
    createMany?: SpotTagCreateManyTagInputEnvelope
    connect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
  }

  export type SpotTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<SpotTagCreateWithoutTagInput, SpotTagUncheckedCreateWithoutTagInput> | SpotTagCreateWithoutTagInput[] | SpotTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SpotTagCreateOrConnectWithoutTagInput | SpotTagCreateOrConnectWithoutTagInput[]
    createMany?: SpotTagCreateManyTagInputEnvelope
    connect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
  }

  export type SpotTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<SpotTagCreateWithoutTagInput, SpotTagUncheckedCreateWithoutTagInput> | SpotTagCreateWithoutTagInput[] | SpotTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SpotTagCreateOrConnectWithoutTagInput | SpotTagCreateOrConnectWithoutTagInput[]
    upsert?: SpotTagUpsertWithWhereUniqueWithoutTagInput | SpotTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: SpotTagCreateManyTagInputEnvelope
    set?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    disconnect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    delete?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    connect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    update?: SpotTagUpdateWithWhereUniqueWithoutTagInput | SpotTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: SpotTagUpdateManyWithWhereWithoutTagInput | SpotTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: SpotTagScalarWhereInput | SpotTagScalarWhereInput[]
  }

  export type SpotTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<SpotTagCreateWithoutTagInput, SpotTagUncheckedCreateWithoutTagInput> | SpotTagCreateWithoutTagInput[] | SpotTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SpotTagCreateOrConnectWithoutTagInput | SpotTagCreateOrConnectWithoutTagInput[]
    upsert?: SpotTagUpsertWithWhereUniqueWithoutTagInput | SpotTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: SpotTagCreateManyTagInputEnvelope
    set?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    disconnect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    delete?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    connect?: SpotTagWhereUniqueInput | SpotTagWhereUniqueInput[]
    update?: SpotTagUpdateWithWhereUniqueWithoutTagInput | SpotTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: SpotTagUpdateManyWithWhereWithoutTagInput | SpotTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: SpotTagScalarWhereInput | SpotTagScalarWhereInput[]
  }

  export type SpotCreateNestedOneWithoutTagsInput = {
    connect?: SpotWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutSpotTagsInput = {
    create?: XOR<TagCreateWithoutSpotTagsInput, TagUncheckedCreateWithoutSpotTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutSpotTagsInput
    connect?: TagWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSpotTagsInput = {
    create?: XOR<UserCreateWithoutSpotTagsInput, UserUncheckedCreateWithoutSpotTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpotTagsInput
    connect?: UserWhereUniqueInput
  }

  export type SpotUpdateOneRequiredWithoutTagsNestedInput = {
    connect?: SpotWhereUniqueInput
    update?: XOR<XOR<SpotUpdateToOneWithWhereWithoutTagsInput, SpotUpdateWithoutTagsInput>, SpotUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutSpotTagsNestedInput = {
    create?: XOR<TagCreateWithoutSpotTagsInput, TagUncheckedCreateWithoutSpotTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutSpotTagsInput
    upsert?: TagUpsertWithoutSpotTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutSpotTagsInput, TagUpdateWithoutSpotTagsInput>, TagUncheckedUpdateWithoutSpotTagsInput>
  }

  export type UserUpdateOneRequiredWithoutSpotTagsNestedInput = {
    create?: XOR<UserCreateWithoutSpotTagsInput, UserUncheckedCreateWithoutSpotTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpotTagsInput
    upsert?: UserUpsertWithoutSpotTagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpotTagsInput, UserUpdateWithoutSpotTagsInput>, UserUncheckedUpdateWithoutSpotTagsInput>
  }

  export type UserCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    connect?: UserWhereUniqueInput
  }

  export type CollectionSpotCreateNestedManyWithoutCollectionInput = {
    create?: XOR<CollectionSpotCreateWithoutCollectionInput, CollectionSpotUncheckedCreateWithoutCollectionInput> | CollectionSpotCreateWithoutCollectionInput[] | CollectionSpotUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionSpotCreateOrConnectWithoutCollectionInput | CollectionSpotCreateOrConnectWithoutCollectionInput[]
    createMany?: CollectionSpotCreateManyCollectionInputEnvelope
    connect?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
  }

  export type CollectionSpotUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<CollectionSpotCreateWithoutCollectionInput, CollectionSpotUncheckedCreateWithoutCollectionInput> | CollectionSpotCreateWithoutCollectionInput[] | CollectionSpotUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionSpotCreateOrConnectWithoutCollectionInput | CollectionSpotCreateOrConnectWithoutCollectionInput[]
    createMany?: CollectionSpotCreateManyCollectionInputEnvelope
    connect?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    upsert?: UserUpsertWithoutCollectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionsInput, UserUpdateWithoutCollectionsInput>, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type CollectionSpotUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<CollectionSpotCreateWithoutCollectionInput, CollectionSpotUncheckedCreateWithoutCollectionInput> | CollectionSpotCreateWithoutCollectionInput[] | CollectionSpotUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionSpotCreateOrConnectWithoutCollectionInput | CollectionSpotCreateOrConnectWithoutCollectionInput[]
    upsert?: CollectionSpotUpsertWithWhereUniqueWithoutCollectionInput | CollectionSpotUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: CollectionSpotCreateManyCollectionInputEnvelope
    set?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    disconnect?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    delete?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    connect?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    update?: CollectionSpotUpdateWithWhereUniqueWithoutCollectionInput | CollectionSpotUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: CollectionSpotUpdateManyWithWhereWithoutCollectionInput | CollectionSpotUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: CollectionSpotScalarWhereInput | CollectionSpotScalarWhereInput[]
  }

  export type CollectionSpotUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<CollectionSpotCreateWithoutCollectionInput, CollectionSpotUncheckedCreateWithoutCollectionInput> | CollectionSpotCreateWithoutCollectionInput[] | CollectionSpotUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionSpotCreateOrConnectWithoutCollectionInput | CollectionSpotCreateOrConnectWithoutCollectionInput[]
    upsert?: CollectionSpotUpsertWithWhereUniqueWithoutCollectionInput | CollectionSpotUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: CollectionSpotCreateManyCollectionInputEnvelope
    set?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    disconnect?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    delete?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    connect?: CollectionSpotWhereUniqueInput | CollectionSpotWhereUniqueInput[]
    update?: CollectionSpotUpdateWithWhereUniqueWithoutCollectionInput | CollectionSpotUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: CollectionSpotUpdateManyWithWhereWithoutCollectionInput | CollectionSpotUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: CollectionSpotScalarWhereInput | CollectionSpotScalarWhereInput[]
  }

  export type CollectionCreateNestedOneWithoutSpotsInput = {
    create?: XOR<CollectionCreateWithoutSpotsInput, CollectionUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutSpotsInput
    connect?: CollectionWhereUniqueInput
  }

  export type SpotCreateNestedOneWithoutCollectionsInput = {
    connect?: SpotWhereUniqueInput
  }

  export type CollectionUpdateOneRequiredWithoutSpotsNestedInput = {
    create?: XOR<CollectionCreateWithoutSpotsInput, CollectionUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutSpotsInput
    upsert?: CollectionUpsertWithoutSpotsInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutSpotsInput, CollectionUpdateWithoutSpotsInput>, CollectionUncheckedUpdateWithoutSpotsInput>
  }

  export type SpotUpdateOneRequiredWithoutCollectionsNestedInput = {
    connect?: SpotWhereUniqueInput
    update?: XOR<XOR<SpotUpdateToOneWithWhereWithoutCollectionsInput, SpotUpdateWithoutCollectionsInput>, SpotUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type SpotCreateNestedOneWithoutEventsInput = {
    connect?: SpotWhereUniqueInput
  }

  export type EventAttendeeCreateNestedManyWithoutEventInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type EventAttendeeUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type SpotUpdateOneRequiredWithoutEventsNestedInput = {
    connect?: SpotWhereUniqueInput
    update?: XOR<XOR<SpotUpdateToOneWithWhereWithoutEventsInput, SpotUpdateWithoutEventsInput>, SpotUncheckedUpdateWithoutEventsInput>
  }

  export type EventAttendeeUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutEventInput | EventAttendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutEventInput | EventAttendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutEventInput | EventAttendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type EventAttendeeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutEventInput | EventAttendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutEventInput | EventAttendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutEventInput | EventAttendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEventAttendeesInput = {
    create?: XOR<UserCreateWithoutEventAttendeesInput, UserUncheckedCreateWithoutEventAttendeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventAttendeesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEventAttendeeStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventAttendeeStatus
  }

  export type EventUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: EventCreateOrConnectWithoutAttendeesInput
    upsert?: EventUpsertWithoutAttendeesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutAttendeesInput, EventUpdateWithoutAttendeesInput>, EventUncheckedUpdateWithoutAttendeesInput>
  }

  export type UserUpdateOneRequiredWithoutEventAttendeesNestedInput = {
    create?: XOR<UserCreateWithoutEventAttendeesInput, UserUncheckedCreateWithoutEventAttendeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventAttendeesInput
    upsert?: UserUpsertWithoutEventAttendeesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventAttendeesInput, UserUpdateWithoutEventAttendeesInput>, UserUncheckedUpdateWithoutEventAttendeesInput>
  }

  export type UserCreateNestedOneWithoutReportsInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    connect?: UserWhereUniqueInput
  }

  export type SpotCreateNestedOneWithoutReportsInput = {
    connect?: SpotWhereUniqueInput
  }

  export type EnumReportTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReportType
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type UserUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    upsert?: UserUpsertWithoutReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsInput, UserUpdateWithoutReportsInput>, UserUncheckedUpdateWithoutReportsInput>
  }

  export type SpotUpdateOneWithoutReportsNestedInput = {
    disconnect?: SpotWhereInput | boolean
    delete?: SpotWhereInput | boolean
    connect?: SpotWhereUniqueInput
    update?: XOR<XOR<SpotUpdateToOneWithWhereWithoutReportsInput, SpotUpdateWithoutReportsInput>, SpotUncheckedUpdateWithoutReportsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type NestedEnumEventAttendeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventAttendeeStatus | EnumEventAttendeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventAttendeeStatus[] | ListEnumEventAttendeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventAttendeeStatus[] | ListEnumEventAttendeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventAttendeeStatusFilter<$PrismaModel> | $Enums.EventAttendeeStatus
  }

  export type NestedEnumEventAttendeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventAttendeeStatus | EnumEventAttendeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventAttendeeStatus[] | ListEnumEventAttendeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventAttendeeStatus[] | ListEnumEventAttendeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventAttendeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventAttendeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventAttendeeStatusFilter<$PrismaModel>
    _max?: NestedEnumEventAttendeeStatusFilter<$PrismaModel>
  }

  export type NestedEnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type NestedEnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type SpotRatingCreateWithoutUserInput = {
    id?: string
    isPositive: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spot: SpotCreateNestedOneWithoutRatingsInput
  }

  export type SpotRatingUncheckedCreateWithoutUserInput = {
    id?: string
    isPositive: boolean
    comment?: string | null
    spotId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpotRatingCreateOrConnectWithoutUserInput = {
    where: SpotRatingWhereUniqueInput
    create: XOR<SpotRatingCreateWithoutUserInput, SpotRatingUncheckedCreateWithoutUserInput>
  }

  export type SpotRatingCreateManyUserInputEnvelope = {
    data: SpotRatingCreateManyUserInput | SpotRatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SpotTagCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    spot: SpotCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutSpotTagsInput
  }

  export type SpotTagUncheckedCreateWithoutUserInput = {
    id?: string
    spotId: string
    tagId: string
    createdAt?: Date | string
  }

  export type SpotTagCreateOrConnectWithoutUserInput = {
    where: SpotTagWhereUniqueInput
    create: XOR<SpotTagCreateWithoutUserInput, SpotTagUncheckedCreateWithoutUserInput>
  }

  export type SpotTagCreateManyUserInputEnvelope = {
    data: SpotTagCreateManyUserInput | SpotTagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CollectionCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: CollectionSpotCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: CollectionSpotUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutUserInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionCreateManyUserInputEnvelope = {
    data: CollectionCreateManyUserInput | CollectionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutReporterInput = {
    id?: string
    reason: $Enums.ReportType
    comment?: string | null
    status?: $Enums.ReportStatus
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    spot?: SpotCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutReporterInput = {
    id?: string
    reason: $Enums.ReportType
    comment?: string | null
    status?: $Enums.ReportStatus
    resolution?: string | null
    spotId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutReporterInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput>
  }

  export type ReportCreateManyReporterInputEnvelope = {
    data: ReportCreateManyReporterInput | ReportCreateManyReporterInput[]
    skipDuplicates?: boolean
  }

  export type MagicLinkCreateWithoutUserInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type MagicLinkUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type MagicLinkCreateOrConnectWithoutUserInput = {
    where: MagicLinkWhereUniqueInput
    create: XOR<MagicLinkCreateWithoutUserInput, MagicLinkUncheckedCreateWithoutUserInput>
  }

  export type MagicLinkCreateManyUserInputEnvelope = {
    data: MagicLinkCreateManyUserInput | MagicLinkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    maxAttendees?: number | null
    status?: $Enums.EventStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    spot: SpotCreateNestedOneWithoutEventsInput
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    maxAttendees?: number | null
    status?: $Enums.EventStatus
    spotId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type EventAttendeeCreateWithoutUserInput = {
    id?: string
    status?: $Enums.EventAttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutAttendeesInput
  }

  export type EventAttendeeUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    status?: $Enums.EventAttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventAttendeeCreateOrConnectWithoutUserInput = {
    where: EventAttendeeWhereUniqueInput
    create: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput>
  }

  export type EventAttendeeCreateManyUserInputEnvelope = {
    data: EventAttendeeCreateManyUserInput | EventAttendeeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SpotUpdateWithWhereUniqueWithoutUserInput = {
    where: SpotWhereUniqueInput
    data: XOR<SpotUpdateWithoutUserInput, SpotUncheckedUpdateWithoutUserInput>
  }

  export type SpotUpdateManyWithWhereWithoutUserInput = {
    where: SpotScalarWhereInput
    data: XOR<SpotUpdateManyMutationInput, SpotUncheckedUpdateManyWithoutUserInput>
  }

  export type SpotScalarWhereInput = {
    AND?: SpotScalarWhereInput | SpotScalarWhereInput[]
    OR?: SpotScalarWhereInput[]
    NOT?: SpotScalarWhereInput | SpotScalarWhereInput[]
    id?: StringFilter<"Spot"> | string
    title?: StringFilter<"Spot"> | string
    description?: StringNullableFilter<"Spot"> | string | null
    latitude?: FloatFilter<"Spot"> | number
    longitude?: FloatFilter<"Spot"> | number
    address?: StringNullableFilter<"Spot"> | string | null
    city?: StringNullableFilter<"Spot"> | string | null
    country?: StringNullableFilter<"Spot"> | string | null
    verified?: BoolFilter<"Spot"> | boolean
    featured?: BoolFilter<"Spot"> | boolean
    viewCount?: IntFilter<"Spot"> | number
    userId?: StringFilter<"Spot"> | string
    categoryId?: StringFilter<"Spot"> | string
    createdAt?: DateTimeFilter<"Spot"> | Date | string
    updatedAt?: DateTimeFilter<"Spot"> | Date | string
  }

  export type SpotRatingUpsertWithWhereUniqueWithoutUserInput = {
    where: SpotRatingWhereUniqueInput
    update: XOR<SpotRatingUpdateWithoutUserInput, SpotRatingUncheckedUpdateWithoutUserInput>
    create: XOR<SpotRatingCreateWithoutUserInput, SpotRatingUncheckedCreateWithoutUserInput>
  }

  export type SpotRatingUpdateWithWhereUniqueWithoutUserInput = {
    where: SpotRatingWhereUniqueInput
    data: XOR<SpotRatingUpdateWithoutUserInput, SpotRatingUncheckedUpdateWithoutUserInput>
  }

  export type SpotRatingUpdateManyWithWhereWithoutUserInput = {
    where: SpotRatingScalarWhereInput
    data: XOR<SpotRatingUpdateManyMutationInput, SpotRatingUncheckedUpdateManyWithoutUserInput>
  }

  export type SpotRatingScalarWhereInput = {
    AND?: SpotRatingScalarWhereInput | SpotRatingScalarWhereInput[]
    OR?: SpotRatingScalarWhereInput[]
    NOT?: SpotRatingScalarWhereInput | SpotRatingScalarWhereInput[]
    id?: StringFilter<"SpotRating"> | string
    isPositive?: BoolFilter<"SpotRating"> | boolean
    comment?: StringNullableFilter<"SpotRating"> | string | null
    userId?: StringFilter<"SpotRating"> | string
    spotId?: StringFilter<"SpotRating"> | string
    createdAt?: DateTimeFilter<"SpotRating"> | Date | string
    updatedAt?: DateTimeFilter<"SpotRating"> | Date | string
  }

  export type SpotTagUpsertWithWhereUniqueWithoutUserInput = {
    where: SpotTagWhereUniqueInput
    update: XOR<SpotTagUpdateWithoutUserInput, SpotTagUncheckedUpdateWithoutUserInput>
    create: XOR<SpotTagCreateWithoutUserInput, SpotTagUncheckedCreateWithoutUserInput>
  }

  export type SpotTagUpdateWithWhereUniqueWithoutUserInput = {
    where: SpotTagWhereUniqueInput
    data: XOR<SpotTagUpdateWithoutUserInput, SpotTagUncheckedUpdateWithoutUserInput>
  }

  export type SpotTagUpdateManyWithWhereWithoutUserInput = {
    where: SpotTagScalarWhereInput
    data: XOR<SpotTagUpdateManyMutationInput, SpotTagUncheckedUpdateManyWithoutUserInput>
  }

  export type SpotTagScalarWhereInput = {
    AND?: SpotTagScalarWhereInput | SpotTagScalarWhereInput[]
    OR?: SpotTagScalarWhereInput[]
    NOT?: SpotTagScalarWhereInput | SpotTagScalarWhereInput[]
    id?: StringFilter<"SpotTag"> | string
    spotId?: StringFilter<"SpotTag"> | string
    tagId?: StringFilter<"SpotTag"> | string
    userId?: StringFilter<"SpotTag"> | string
    createdAt?: DateTimeFilter<"SpotTag"> | Date | string
  }

  export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
    create: XOR<CollectionCreateWithoutUserInput, CollectionUncheckedCreateWithoutUserInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutUserInput, CollectionUncheckedUpdateWithoutUserInput>
  }

  export type CollectionUpdateManyWithWhereWithoutUserInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutUserInput>
  }

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    OR?: CollectionScalarWhereInput[]
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    id?: StringFilter<"Collection"> | string
    name?: StringFilter<"Collection"> | string
    description?: StringNullableFilter<"Collection"> | string | null
    isPublic?: BoolFilter<"Collection"> | boolean
    userId?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updatedAt?: DateTimeFilter<"Collection"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutReporterInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutReporterInput, ReportUncheckedUpdateWithoutReporterInput>
    create: XOR<ReportCreateWithoutReporterInput, ReportUncheckedCreateWithoutReporterInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutReporterInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutReporterInput, ReportUncheckedUpdateWithoutReporterInput>
  }

  export type ReportUpdateManyWithWhereWithoutReporterInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutReporterInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    reason?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    comment?: StringNullableFilter<"Report"> | string | null
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    resolution?: StringNullableFilter<"Report"> | string | null
    reporterId?: StringFilter<"Report"> | string
    spotId?: StringNullableFilter<"Report"> | string | null
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type MagicLinkUpsertWithWhereUniqueWithoutUserInput = {
    where: MagicLinkWhereUniqueInput
    update: XOR<MagicLinkUpdateWithoutUserInput, MagicLinkUncheckedUpdateWithoutUserInput>
    create: XOR<MagicLinkCreateWithoutUserInput, MagicLinkUncheckedCreateWithoutUserInput>
  }

  export type MagicLinkUpdateWithWhereUniqueWithoutUserInput = {
    where: MagicLinkWhereUniqueInput
    data: XOR<MagicLinkUpdateWithoutUserInput, MagicLinkUncheckedUpdateWithoutUserInput>
  }

  export type MagicLinkUpdateManyWithWhereWithoutUserInput = {
    where: MagicLinkScalarWhereInput
    data: XOR<MagicLinkUpdateManyMutationInput, MagicLinkUncheckedUpdateManyWithoutUserInput>
  }

  export type MagicLinkScalarWhereInput = {
    AND?: MagicLinkScalarWhereInput | MagicLinkScalarWhereInput[]
    OR?: MagicLinkScalarWhereInput[]
    NOT?: MagicLinkScalarWhereInput | MagicLinkScalarWhereInput[]
    id?: StringFilter<"MagicLink"> | string
    email?: StringFilter<"MagicLink"> | string
    token?: StringFilter<"MagicLink"> | string
    expiresAt?: DateTimeFilter<"MagicLink"> | Date | string
    used?: BoolFilter<"MagicLink"> | boolean
    userId?: StringNullableFilter<"MagicLink"> | string | null
    createdAt?: DateTimeFilter<"MagicLink"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    startTime?: DateTimeFilter<"Event"> | Date | string
    endTime?: DateTimeNullableFilter<"Event"> | Date | string | null
    maxAttendees?: IntNullableFilter<"Event"> | number | null
    status?: EnumEventStatusFilter<"Event"> | $Enums.EventStatus
    organizerId?: StringFilter<"Event"> | string
    spotId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventAttendeeUpsertWithWhereUniqueWithoutUserInput = {
    where: EventAttendeeWhereUniqueInput
    update: XOR<EventAttendeeUpdateWithoutUserInput, EventAttendeeUncheckedUpdateWithoutUserInput>
    create: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput>
  }

  export type EventAttendeeUpdateWithWhereUniqueWithoutUserInput = {
    where: EventAttendeeWhereUniqueInput
    data: XOR<EventAttendeeUpdateWithoutUserInput, EventAttendeeUncheckedUpdateWithoutUserInput>
  }

  export type EventAttendeeUpdateManyWithWhereWithoutUserInput = {
    where: EventAttendeeScalarWhereInput
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyWithoutUserInput>
  }

  export type EventAttendeeScalarWhereInput = {
    AND?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
    OR?: EventAttendeeScalarWhereInput[]
    NOT?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
    id?: StringFilter<"EventAttendee"> | string
    eventId?: StringFilter<"EventAttendee"> | string
    userId?: StringFilter<"EventAttendee"> | string
    status?: EnumEventAttendeeStatusFilter<"EventAttendee"> | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFilter<"EventAttendee"> | Date | string
    updatedAt?: DateTimeFilter<"EventAttendee"> | Date | string
  }

  export type UserCreateWithoutMagicLinksInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingCreateNestedManyWithoutUserInput
    spotTags?: SpotTagCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMagicLinksInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotUncheckedCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingUncheckedCreateNestedManyWithoutUserInput
    spotTags?: SpotTagUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMagicLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMagicLinksInput, UserUncheckedCreateWithoutMagicLinksInput>
  }

  export type UserUpsertWithoutMagicLinksInput = {
    update: XOR<UserUpdateWithoutMagicLinksInput, UserUncheckedUpdateWithoutMagicLinksInput>
    create: XOR<UserCreateWithoutMagicLinksInput, UserUncheckedCreateWithoutMagicLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMagicLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMagicLinksInput, UserUncheckedUpdateWithoutMagicLinksInput>
  }

  export type UserUpdateWithoutMagicLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMagicLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUncheckedUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUncheckedUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SpotUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SpotWhereUniqueInput
    data: XOR<SpotUpdateWithoutCategoryInput, SpotUncheckedUpdateWithoutCategoryInput>
  }

  export type SpotUpdateManyWithWhereWithoutCategoryInput = {
    where: SpotScalarWhereInput
    data: XOR<SpotUpdateManyMutationInput, SpotUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutSpotsInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spotRatings?: SpotRatingCreateNestedManyWithoutUserInput
    spotTags?: SpotTagCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSpotsInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spotRatings?: SpotRatingUncheckedCreateNestedManyWithoutUserInput
    spotTags?: SpotTagUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSpotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpotsInput, UserUncheckedCreateWithoutSpotsInput>
  }

  export type UserUpsertWithoutSpotsInput = {
    update: XOR<UserUpdateWithoutSpotsInput, UserUncheckedUpdateWithoutSpotsInput>
    create: XOR<UserCreateWithoutSpotsInput, UserUncheckedCreateWithoutSpotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpotsInput, UserUncheckedUpdateWithoutSpotsInput>
  }

  export type UserUpdateWithoutSpotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spotRatings?: SpotRatingUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSpotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spotRatings?: SpotRatingUncheckedUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryCreateWithoutSpotsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    color?: string
    isOfficial?: boolean
    proposalCount?: number
    approvalThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutSpotsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    color?: string
    isOfficial?: boolean
    proposalCount?: number
    approvalThreshold?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutSpotsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSpotsInput, CategoryUncheckedCreateWithoutSpotsInput>
  }

  export type CategoryUpsertWithoutSpotsInput = {
    update: XOR<CategoryUpdateWithoutSpotsInput, CategoryUncheckedUpdateWithoutSpotsInput>
    create: XOR<CategoryCreateWithoutSpotsInput, CategoryUncheckedCreateWithoutSpotsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSpotsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSpotsInput, CategoryUncheckedUpdateWithoutSpotsInput>
  }

  export type CategoryUpdateWithoutSpotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    proposalCount?: IntFieldUpdateOperationsInput | number
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutSpotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    isOfficial?: BoolFieldUpdateOperationsInput | boolean
    proposalCount?: IntFieldUpdateOperationsInput | number
    approvalThreshold?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotImageCreateWithoutSpotInput = {
    id?: string
    url: string
    key: string
    alt?: string | null
    caption?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type SpotImageUncheckedCreateWithoutSpotInput = {
    id?: string
    url: string
    key: string
    alt?: string | null
    caption?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type SpotImageCreateOrConnectWithoutSpotInput = {
    where: SpotImageWhereUniqueInput
    create: XOR<SpotImageCreateWithoutSpotInput, SpotImageUncheckedCreateWithoutSpotInput>
  }

  export type SpotImageUpsertWithWhereUniqueWithoutSpotInput = {
    where: SpotImageWhereUniqueInput
    update: XOR<SpotImageUpdateWithoutSpotInput, SpotImageUncheckedUpdateWithoutSpotInput>
    create: XOR<SpotImageCreateWithoutSpotInput, SpotImageUncheckedCreateWithoutSpotInput>
  }

  export type SpotImageCreateManySpotInputEnvelope = {
    data: SpotImageCreateManySpotInput | SpotImageCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type SpotImageUpdateWithWhereUniqueWithoutSpotInput = {
    where: SpotImageWhereUniqueInput
    data: XOR<SpotImageUpdateWithoutSpotInput, SpotImageUncheckedUpdateWithoutSpotInput>
  }

  export type SpotImageUpdateManyWithWhereWithoutSpotInput = {
    where: SpotImageScalarWhereInput
    data: XOR<SpotImageUpdateManyMutationInput, SpotImageUncheckedUpdateManyWithoutSpotInput>
  }

  export type SpotImageScalarWhereInput = {
    AND?: SpotImageScalarWhereInput | SpotImageScalarWhereInput[]
    OR?: SpotImageScalarWhereInput[]
    NOT?: SpotImageScalarWhereInput | SpotImageScalarWhereInput[]
    id?: StringFilter<"SpotImage"> | string
    url?: StringFilter<"SpotImage"> | string
    key?: StringFilter<"SpotImage"> | string
    alt?: StringNullableFilter<"SpotImage"> | string | null
    caption?: StringNullableFilter<"SpotImage"> | string | null
    order?: IntFilter<"SpotImage"> | number
    spotId?: StringFilter<"SpotImage"> | string
    createdAt?: DateTimeFilter<"SpotImage"> | Date | string
  }

  export type SpotRatingCreateWithoutSpotInput = {
    id?: string
    isPositive: boolean
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSpotRatingsInput
  }

  export type SpotRatingUncheckedCreateWithoutSpotInput = {
    id?: string
    isPositive: boolean
    comment?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpotRatingCreateOrConnectWithoutSpotInput = {
    where: SpotRatingWhereUniqueInput
    create: XOR<SpotRatingCreateWithoutSpotInput, SpotRatingUncheckedCreateWithoutSpotInput>
  }

  export type SpotRatingUpsertWithWhereUniqueWithoutSpotInput = {
    where: SpotRatingWhereUniqueInput
    update: XOR<SpotRatingUpdateWithoutSpotInput, SpotRatingUncheckedUpdateWithoutSpotInput>
    create: XOR<SpotRatingCreateWithoutSpotInput, SpotRatingUncheckedCreateWithoutSpotInput>
  }

  export type SpotRatingCreateManySpotInputEnvelope = {
    data: SpotRatingCreateManySpotInput | SpotRatingCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type SpotRatingUpdateWithWhereUniqueWithoutSpotInput = {
    where: SpotRatingWhereUniqueInput
    data: XOR<SpotRatingUpdateWithoutSpotInput, SpotRatingUncheckedUpdateWithoutSpotInput>
  }

  export type SpotRatingUpdateManyWithWhereWithoutSpotInput = {
    where: SpotRatingScalarWhereInput
    data: XOR<SpotRatingUpdateManyMutationInput, SpotRatingUncheckedUpdateManyWithoutSpotInput>
  }

  export type SpotTagCreateWithoutSpotInput = {
    id?: string
    createdAt?: Date | string
    tag: TagCreateNestedOneWithoutSpotTagsInput
    user: UserCreateNestedOneWithoutSpotTagsInput
  }

  export type SpotTagUncheckedCreateWithoutSpotInput = {
    id?: string
    tagId: string
    userId: string
    createdAt?: Date | string
  }

  export type SpotTagCreateOrConnectWithoutSpotInput = {
    where: SpotTagWhereUniqueInput
    create: XOR<SpotTagCreateWithoutSpotInput, SpotTagUncheckedCreateWithoutSpotInput>
  }

  export type SpotTagUpsertWithWhereUniqueWithoutSpotInput = {
    where: SpotTagWhereUniqueInput
    update: XOR<SpotTagUpdateWithoutSpotInput, SpotTagUncheckedUpdateWithoutSpotInput>
    create: XOR<SpotTagCreateWithoutSpotInput, SpotTagUncheckedCreateWithoutSpotInput>
  }

  export type SpotTagCreateManySpotInputEnvelope = {
    data: SpotTagCreateManySpotInput | SpotTagCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type SpotTagUpdateWithWhereUniqueWithoutSpotInput = {
    where: SpotTagWhereUniqueInput
    data: XOR<SpotTagUpdateWithoutSpotInput, SpotTagUncheckedUpdateWithoutSpotInput>
  }

  export type SpotTagUpdateManyWithWhereWithoutSpotInput = {
    where: SpotTagScalarWhereInput
    data: XOR<SpotTagUpdateManyMutationInput, SpotTagUncheckedUpdateManyWithoutSpotInput>
  }

  export type ReportCreateWithoutSpotInput = {
    id?: string
    reason: $Enums.ReportType
    comment?: string | null
    status?: $Enums.ReportStatus
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reporter: UserCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutSpotInput = {
    id?: string
    reason: $Enums.ReportType
    comment?: string | null
    status?: $Enums.ReportStatus
    resolution?: string | null
    reporterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutSpotInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutSpotInput, ReportUncheckedCreateWithoutSpotInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutSpotInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutSpotInput, ReportUncheckedUpdateWithoutSpotInput>
    create: XOR<ReportCreateWithoutSpotInput, ReportUncheckedCreateWithoutSpotInput>
  }

  export type ReportCreateManySpotInputEnvelope = {
    data: ReportCreateManySpotInput | ReportCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type ReportUpdateWithWhereUniqueWithoutSpotInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutSpotInput, ReportUncheckedUpdateWithoutSpotInput>
  }

  export type ReportUpdateManyWithWhereWithoutSpotInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutSpotInput>
  }

  export type CollectionSpotCreateWithoutSpotInput = {
    id?: string
    order?: number
    createdAt?: Date | string
    collection: CollectionCreateNestedOneWithoutSpotsInput
  }

  export type CollectionSpotUncheckedCreateWithoutSpotInput = {
    id?: string
    collectionId: string
    order?: number
    createdAt?: Date | string
  }

  export type CollectionSpotCreateOrConnectWithoutSpotInput = {
    where: CollectionSpotWhereUniqueInput
    create: XOR<CollectionSpotCreateWithoutSpotInput, CollectionSpotUncheckedCreateWithoutSpotInput>
  }

  export type CollectionSpotUpsertWithWhereUniqueWithoutSpotInput = {
    where: CollectionSpotWhereUniqueInput
    update: XOR<CollectionSpotUpdateWithoutSpotInput, CollectionSpotUncheckedUpdateWithoutSpotInput>
    create: XOR<CollectionSpotCreateWithoutSpotInput, CollectionSpotUncheckedCreateWithoutSpotInput>
  }

  export type CollectionSpotCreateManySpotInputEnvelope = {
    data: CollectionSpotCreateManySpotInput | CollectionSpotCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type CollectionSpotUpdateWithWhereUniqueWithoutSpotInput = {
    where: CollectionSpotWhereUniqueInput
    data: XOR<CollectionSpotUpdateWithoutSpotInput, CollectionSpotUncheckedUpdateWithoutSpotInput>
  }

  export type CollectionSpotUpdateManyWithWhereWithoutSpotInput = {
    where: CollectionSpotScalarWhereInput
    data: XOR<CollectionSpotUpdateManyMutationInput, CollectionSpotUncheckedUpdateManyWithoutSpotInput>
  }

  export type CollectionSpotScalarWhereInput = {
    AND?: CollectionSpotScalarWhereInput | CollectionSpotScalarWhereInput[]
    OR?: CollectionSpotScalarWhereInput[]
    NOT?: CollectionSpotScalarWhereInput | CollectionSpotScalarWhereInput[]
    id?: StringFilter<"CollectionSpot"> | string
    collectionId?: StringFilter<"CollectionSpot"> | string
    spotId?: StringFilter<"CollectionSpot"> | string
    order?: IntFilter<"CollectionSpot"> | number
    createdAt?: DateTimeFilter<"CollectionSpot"> | Date | string
  }

  export type EventCreateWithoutSpotInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    maxAttendees?: number | null
    status?: $Enums.EventStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organizer: UserCreateNestedOneWithoutEventsInput
    attendees?: EventAttendeeCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutSpotInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    maxAttendees?: number | null
    status?: $Enums.EventStatus
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutSpotInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutSpotInput, EventUncheckedCreateWithoutSpotInput>
  }

  export type EventUpsertWithWhereUniqueWithoutSpotInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutSpotInput, EventUncheckedUpdateWithoutSpotInput>
    create: XOR<EventCreateWithoutSpotInput, EventUncheckedCreateWithoutSpotInput>
  }

  export type EventCreateManySpotInputEnvelope = {
    data: EventCreateManySpotInput | EventCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type EventUpdateWithWhereUniqueWithoutSpotInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutSpotInput, EventUncheckedUpdateWithoutSpotInput>
  }

  export type EventUpdateManyWithWhereWithoutSpotInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutSpotInput>
  }

  export type SpotUpdateToOneWithWhereWithoutImagesInput = {
    where?: SpotWhereInput
    data: XOR<SpotUpdateWithoutImagesInput, SpotUncheckedUpdateWithoutImagesInput>
  }

  export type SpotUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpotsNestedInput
    category?: CategoryUpdateOneRequiredWithoutSpotsNestedInput
    ratings?: SpotRatingUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUpdateManyWithoutSpotNestedInput
    reports?: ReportUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUpdateManyWithoutSpotNestedInput
    events?: EventUpdateManyWithoutSpotNestedInput
  }

  export type SpotUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: SpotRatingUncheckedUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUncheckedUpdateManyWithoutSpotNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUncheckedUpdateManyWithoutSpotNestedInput
    events?: EventUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type UserCreateWithoutSpotRatingsInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotCreateNestedManyWithoutUserInput
    spotTags?: SpotTagCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSpotRatingsInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotUncheckedCreateNestedManyWithoutUserInput
    spotTags?: SpotTagUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSpotRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpotRatingsInput, UserUncheckedCreateWithoutSpotRatingsInput>
  }

  export type UserUpsertWithoutSpotRatingsInput = {
    update: XOR<UserUpdateWithoutSpotRatingsInput, UserUncheckedUpdateWithoutSpotRatingsInput>
    create: XOR<UserCreateWithoutSpotRatingsInput, UserUncheckedCreateWithoutSpotRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpotRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpotRatingsInput, UserUncheckedUpdateWithoutSpotRatingsInput>
  }

  export type UserUpdateWithoutSpotRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSpotRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUncheckedUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SpotUpdateToOneWithWhereWithoutRatingsInput = {
    where?: SpotWhereInput
    data: XOR<SpotUpdateWithoutRatingsInput, SpotUncheckedUpdateWithoutRatingsInput>
  }

  export type SpotUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpotsNestedInput
    category?: CategoryUpdateOneRequiredWithoutSpotsNestedInput
    images?: SpotImageUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUpdateManyWithoutSpotNestedInput
    reports?: ReportUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUpdateManyWithoutSpotNestedInput
    events?: EventUpdateManyWithoutSpotNestedInput
  }

  export type SpotUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: SpotImageUncheckedUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUncheckedUpdateManyWithoutSpotNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUncheckedUpdateManyWithoutSpotNestedInput
    events?: EventUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type SpotTagCreateWithoutTagInput = {
    id?: string
    createdAt?: Date | string
    spot: SpotCreateNestedOneWithoutTagsInput
    user: UserCreateNestedOneWithoutSpotTagsInput
  }

  export type SpotTagUncheckedCreateWithoutTagInput = {
    id?: string
    spotId: string
    userId: string
    createdAt?: Date | string
  }

  export type SpotTagCreateOrConnectWithoutTagInput = {
    where: SpotTagWhereUniqueInput
    create: XOR<SpotTagCreateWithoutTagInput, SpotTagUncheckedCreateWithoutTagInput>
  }

  export type SpotTagCreateManyTagInputEnvelope = {
    data: SpotTagCreateManyTagInput | SpotTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type SpotTagUpsertWithWhereUniqueWithoutTagInput = {
    where: SpotTagWhereUniqueInput
    update: XOR<SpotTagUpdateWithoutTagInput, SpotTagUncheckedUpdateWithoutTagInput>
    create: XOR<SpotTagCreateWithoutTagInput, SpotTagUncheckedCreateWithoutTagInput>
  }

  export type SpotTagUpdateWithWhereUniqueWithoutTagInput = {
    where: SpotTagWhereUniqueInput
    data: XOR<SpotTagUpdateWithoutTagInput, SpotTagUncheckedUpdateWithoutTagInput>
  }

  export type SpotTagUpdateManyWithWhereWithoutTagInput = {
    where: SpotTagScalarWhereInput
    data: XOR<SpotTagUpdateManyMutationInput, SpotTagUncheckedUpdateManyWithoutTagInput>
  }

  export type TagCreateWithoutSpotTagsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    color?: string
    usageCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUncheckedCreateWithoutSpotTagsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category: string
    color?: string
    usageCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateOrConnectWithoutSpotTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutSpotTagsInput, TagUncheckedCreateWithoutSpotTagsInput>
  }

  export type UserCreateWithoutSpotTagsInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSpotTagsInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotUncheckedCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSpotTagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpotTagsInput, UserUncheckedCreateWithoutSpotTagsInput>
  }

  export type SpotUpdateToOneWithWhereWithoutTagsInput = {
    where?: SpotWhereInput
    data: XOR<SpotUpdateWithoutTagsInput, SpotUncheckedUpdateWithoutTagsInput>
  }

  export type SpotUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpotsNestedInput
    category?: CategoryUpdateOneRequiredWithoutSpotsNestedInput
    images?: SpotImageUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUpdateManyWithoutSpotNestedInput
    reports?: ReportUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUpdateManyWithoutSpotNestedInput
    events?: EventUpdateManyWithoutSpotNestedInput
  }

  export type SpotUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: SpotImageUncheckedUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUncheckedUpdateManyWithoutSpotNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUncheckedUpdateManyWithoutSpotNestedInput
    events?: EventUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type TagUpsertWithoutSpotTagsInput = {
    update: XOR<TagUpdateWithoutSpotTagsInput, TagUncheckedUpdateWithoutSpotTagsInput>
    create: XOR<TagCreateWithoutSpotTagsInput, TagUncheckedCreateWithoutSpotTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutSpotTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutSpotTagsInput, TagUncheckedUpdateWithoutSpotTagsInput>
  }

  export type TagUpdateWithoutSpotTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutSpotTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    usageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSpotTagsInput = {
    update: XOR<UserUpdateWithoutSpotTagsInput, UserUncheckedUpdateWithoutSpotTagsInput>
    create: XOR<UserCreateWithoutSpotTagsInput, UserUncheckedCreateWithoutSpotTagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpotTagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpotTagsInput, UserUncheckedUpdateWithoutSpotTagsInput>
  }

  export type UserUpdateWithoutSpotTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSpotTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUncheckedUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCollectionsInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingCreateNestedManyWithoutUserInput
    spotTags?: SpotTagCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCollectionsInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotUncheckedCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingUncheckedCreateNestedManyWithoutUserInput
    spotTags?: SpotTagUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCollectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
  }

  export type CollectionSpotCreateWithoutCollectionInput = {
    id?: string
    order?: number
    createdAt?: Date | string
    spot: SpotCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionSpotUncheckedCreateWithoutCollectionInput = {
    id?: string
    spotId: string
    order?: number
    createdAt?: Date | string
  }

  export type CollectionSpotCreateOrConnectWithoutCollectionInput = {
    where: CollectionSpotWhereUniqueInput
    create: XOR<CollectionSpotCreateWithoutCollectionInput, CollectionSpotUncheckedCreateWithoutCollectionInput>
  }

  export type CollectionSpotCreateManyCollectionInputEnvelope = {
    data: CollectionSpotCreateManyCollectionInput | CollectionSpotCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCollectionsInput = {
    update: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUncheckedUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUncheckedUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CollectionSpotUpsertWithWhereUniqueWithoutCollectionInput = {
    where: CollectionSpotWhereUniqueInput
    update: XOR<CollectionSpotUpdateWithoutCollectionInput, CollectionSpotUncheckedUpdateWithoutCollectionInput>
    create: XOR<CollectionSpotCreateWithoutCollectionInput, CollectionSpotUncheckedCreateWithoutCollectionInput>
  }

  export type CollectionSpotUpdateWithWhereUniqueWithoutCollectionInput = {
    where: CollectionSpotWhereUniqueInput
    data: XOR<CollectionSpotUpdateWithoutCollectionInput, CollectionSpotUncheckedUpdateWithoutCollectionInput>
  }

  export type CollectionSpotUpdateManyWithWhereWithoutCollectionInput = {
    where: CollectionSpotScalarWhereInput
    data: XOR<CollectionSpotUpdateManyMutationInput, CollectionSpotUncheckedUpdateManyWithoutCollectionInput>
  }

  export type CollectionCreateWithoutSpotsInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionUncheckedCreateWithoutSpotsInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollectionCreateOrConnectWithoutSpotsInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutSpotsInput, CollectionUncheckedCreateWithoutSpotsInput>
  }

  export type CollectionUpsertWithoutSpotsInput = {
    update: XOR<CollectionUpdateWithoutSpotsInput, CollectionUncheckedUpdateWithoutSpotsInput>
    create: XOR<CollectionCreateWithoutSpotsInput, CollectionUncheckedCreateWithoutSpotsInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutSpotsInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutSpotsInput, CollectionUncheckedUpdateWithoutSpotsInput>
  }

  export type CollectionUpdateWithoutSpotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionUncheckedUpdateWithoutSpotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: SpotWhereInput
    data: XOR<SpotUpdateWithoutCollectionsInput, SpotUncheckedUpdateWithoutCollectionsInput>
  }

  export type SpotUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpotsNestedInput
    category?: CategoryUpdateOneRequiredWithoutSpotsNestedInput
    images?: SpotImageUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUpdateManyWithoutSpotNestedInput
    reports?: ReportUpdateManyWithoutSpotNestedInput
    events?: EventUpdateManyWithoutSpotNestedInput
  }

  export type SpotUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: SpotImageUncheckedUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUncheckedUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUncheckedUpdateManyWithoutSpotNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSpotNestedInput
    events?: EventUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingCreateNestedManyWithoutUserInput
    spotTags?: SpotTagCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkCreateNestedManyWithoutUserInput
    eventAttendees?: EventAttendeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotUncheckedCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingUncheckedCreateNestedManyWithoutUserInput
    spotTags?: SpotTagUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkUncheckedCreateNestedManyWithoutUserInput
    eventAttendees?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type EventAttendeeCreateWithoutEventInput = {
    id?: string
    status?: $Enums.EventAttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventAttendeesInput
  }

  export type EventAttendeeUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    status?: $Enums.EventAttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventAttendeeCreateOrConnectWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    create: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput>
  }

  export type EventAttendeeCreateManyEventInputEnvelope = {
    data: EventAttendeeCreateManyEventInput | EventAttendeeCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUpdateManyWithoutUserNestedInput
    eventAttendees?: EventAttendeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUncheckedUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUncheckedUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUncheckedUpdateManyWithoutUserNestedInput
    eventAttendees?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SpotUpdateToOneWithWhereWithoutEventsInput = {
    where?: SpotWhereInput
    data: XOR<SpotUpdateWithoutEventsInput, SpotUncheckedUpdateWithoutEventsInput>
  }

  export type SpotUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpotsNestedInput
    category?: CategoryUpdateOneRequiredWithoutSpotsNestedInput
    images?: SpotImageUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUpdateManyWithoutSpotNestedInput
    reports?: ReportUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUpdateManyWithoutSpotNestedInput
  }

  export type SpotUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: SpotImageUncheckedUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUncheckedUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUncheckedUpdateManyWithoutSpotNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type EventAttendeeUpsertWithWhereUniqueWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    update: XOR<EventAttendeeUpdateWithoutEventInput, EventAttendeeUncheckedUpdateWithoutEventInput>
    create: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput>
  }

  export type EventAttendeeUpdateWithWhereUniqueWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    data: XOR<EventAttendeeUpdateWithoutEventInput, EventAttendeeUncheckedUpdateWithoutEventInput>
  }

  export type EventAttendeeUpdateManyWithWhereWithoutEventInput = {
    where: EventAttendeeScalarWhereInput
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutAttendeesInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    maxAttendees?: number | null
    status?: $Enums.EventStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organizer: UserCreateNestedOneWithoutEventsInput
    spot: SpotCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutAttendeesInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    maxAttendees?: number | null
    status?: $Enums.EventStatus
    organizerId: string
    spotId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutAttendeesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
  }

  export type UserCreateWithoutEventAttendeesInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingCreateNestedManyWithoutUserInput
    spotTags?: SpotTagCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutEventAttendeesInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotUncheckedCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingUncheckedCreateNestedManyWithoutUserInput
    spotTags?: SpotTagUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutReporterInput
    magicLinks?: MagicLinkUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutEventAttendeesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventAttendeesInput, UserUncheckedCreateWithoutEventAttendeesInput>
  }

  export type EventUpsertWithoutAttendeesInput = {
    update: XOR<EventUpdateWithoutAttendeesInput, EventUncheckedUpdateWithoutAttendeesInput>
    create: XOR<EventCreateWithoutAttendeesInput, EventUncheckedCreateWithoutAttendeesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutAttendeesInput, EventUncheckedUpdateWithoutAttendeesInput>
  }

  export type EventUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    spot?: SpotUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    organizerId?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutEventAttendeesInput = {
    update: XOR<UserUpdateWithoutEventAttendeesInput, UserUncheckedUpdateWithoutEventAttendeesInput>
    create: XOR<UserCreateWithoutEventAttendeesInput, UserUncheckedCreateWithoutEventAttendeesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventAttendeesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventAttendeesInput, UserUncheckedUpdateWithoutEventAttendeesInput>
  }

  export type UserUpdateWithoutEventAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutEventAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUncheckedUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUncheckedUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutReporterNestedInput
    magicLinks?: MagicLinkUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type UserCreateWithoutReportsInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingCreateNestedManyWithoutUserInput
    spotTags?: SpotTagCreateNestedManyWithoutUserInput
    collections?: CollectionCreateNestedManyWithoutUserInput
    magicLinks?: MagicLinkCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportsInput = {
    id?: string
    email: string
    username?: string | null
    displayName?: string | null
    avatar?: string | null
    bio?: string | null
    reputation?: number
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    spots?: SpotUncheckedCreateNestedManyWithoutUserInput
    spotRatings?: SpotRatingUncheckedCreateNestedManyWithoutUserInput
    spotTags?: SpotTagUncheckedCreateNestedManyWithoutUserInput
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput
    magicLinks?: MagicLinkUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    eventAttendees?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
  }

  export type UserUpsertWithoutReportsInput = {
    update: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUpdateManyWithoutUserNestedInput
    collections?: CollectionUpdateManyWithoutUserNestedInput
    magicLinks?: MagicLinkUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    reputation?: IntFieldUpdateOperationsInput | number
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: SpotUncheckedUpdateManyWithoutUserNestedInput
    spotRatings?: SpotRatingUncheckedUpdateManyWithoutUserNestedInput
    spotTags?: SpotTagUncheckedUpdateManyWithoutUserNestedInput
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput
    magicLinks?: MagicLinkUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    eventAttendees?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SpotUpdateToOneWithWhereWithoutReportsInput = {
    where?: SpotWhereInput
    data: XOR<SpotUpdateWithoutReportsInput, SpotUncheckedUpdateWithoutReportsInput>
  }

  export type SpotUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpotsNestedInput
    category?: CategoryUpdateOneRequiredWithoutSpotsNestedInput
    images?: SpotImageUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUpdateManyWithoutSpotNestedInput
    events?: EventUpdateManyWithoutSpotNestedInput
  }

  export type SpotUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: SpotImageUncheckedUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUncheckedUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUncheckedUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUncheckedUpdateManyWithoutSpotNestedInput
    events?: EventUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type SpotRatingCreateManyUserInput = {
    id?: string
    isPositive: boolean
    comment?: string | null
    spotId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpotTagCreateManyUserInput = {
    id?: string
    spotId: string
    tagId: string
    createdAt?: Date | string
  }

  export type CollectionCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateManyReporterInput = {
    id?: string
    reason: $Enums.ReportType
    comment?: string | null
    status?: $Enums.ReportStatus
    resolution?: string | null
    spotId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MagicLinkCreateManyUserInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type EventCreateManyOrganizerInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    maxAttendees?: number | null
    status?: $Enums.EventStatus
    spotId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventAttendeeCreateManyUserInput = {
    id?: string
    eventId: string
    status?: $Enums.EventAttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpotUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutSpotsNestedInput
    images?: SpotImageUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUpdateManyWithoutSpotNestedInput
    reports?: ReportUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUpdateManyWithoutSpotNestedInput
    events?: EventUpdateManyWithoutSpotNestedInput
  }

  export type SpotUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: SpotImageUncheckedUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUncheckedUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUncheckedUpdateManyWithoutSpotNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUncheckedUpdateManyWithoutSpotNestedInput
    events?: EventUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type SpotUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotRatingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPositive?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spot?: SpotUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type SpotRatingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPositive?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    spotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotRatingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPositive?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    spotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotTagUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spot?: SpotUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutSpotTagsNestedInput
  }

  export type SpotTagUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotTagUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: CollectionSpotUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: CollectionSpotUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spot?: SpotUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    spotId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    spotId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicLinkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicLinkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagicLinkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spot?: SpotUpdateOneRequiredWithoutEventsNestedInput
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    spotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    spotId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEventAttendeeStatusFieldUpdateOperationsInput | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type EventAttendeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    status?: EnumEventAttendeeStatusFieldUpdateOperationsInput | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    status?: EnumEventAttendeeStatusFieldUpdateOperationsInput | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpotsNestedInput
    images?: SpotImageUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUpdateManyWithoutSpotNestedInput
    reports?: ReportUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUpdateManyWithoutSpotNestedInput
    events?: EventUpdateManyWithoutSpotNestedInput
  }

  export type SpotUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: SpotImageUncheckedUpdateManyWithoutSpotNestedInput
    ratings?: SpotRatingUncheckedUpdateManyWithoutSpotNestedInput
    tags?: SpotTagUncheckedUpdateManyWithoutSpotNestedInput
    reports?: ReportUncheckedUpdateManyWithoutSpotNestedInput
    collections?: CollectionSpotUncheckedUpdateManyWithoutSpotNestedInput
    events?: EventUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type SpotUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotImageUpdateWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotImageUncheckedUpdateWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotImageCreateManySpotInput = {
    id?: string
    url: string
    key: string
    alt?: string | null
    caption?: string | null
    order?: number
    createdAt?: Date | string
  }

  export type SpotImageUncheckedUpdateManyWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotRatingUpdateWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPositive?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpotRatingsNestedInput
  }

  export type SpotRatingUncheckedUpdateWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPositive?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotRatingCreateManySpotInput = {
    id?: string
    isPositive: boolean
    comment?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpotRatingUncheckedUpdateManyWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPositive?: BoolFieldUpdateOperationsInput | boolean
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotTagUpdateWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutSpotTagsNestedInput
    user?: UserUpdateOneRequiredWithoutSpotTagsNestedInput
  }

  export type SpotTagUncheckedUpdateWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotTagCreateManySpotInput = {
    id?: string
    tagId: string
    userId: string
    createdAt?: Date | string
  }

  export type SpotTagUncheckedUpdateManyWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporter?: UserUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManySpotInput = {
    id?: string
    reason: $Enums.ReportType
    comment?: string | null
    status?: $Enums.ReportStatus
    resolution?: string | null
    reporterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUncheckedUpdateManyWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionSpotUpdateWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutSpotsNestedInput
  }

  export type CollectionSpotUncheckedUpdateWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionSpotCreateManySpotInput = {
    id?: string
    collectionId: string
    order?: number
    createdAt?: Date | string
  }

  export type CollectionSpotUncheckedUpdateManyWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    attendees?: EventAttendeeUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManySpotInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    maxAttendees?: number | null
    status?: $Enums.EventStatus
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedUpdateManyWithoutSpotInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxAttendees?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotTagCreateManyTagInput = {
    id?: string
    spotId: string
    userId: string
    createdAt?: Date | string
  }

  export type SpotTagUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spot?: SpotUpdateOneRequiredWithoutTagsNestedInput
    user?: UserUpdateOneRequiredWithoutSpotTagsNestedInput
  }

  export type SpotTagUncheckedUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotTagUncheckedUpdateManyWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionSpotCreateManyCollectionInput = {
    id?: string
    spotId: string
    order?: number
    createdAt?: Date | string
  }

  export type CollectionSpotUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spot?: SpotUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionSpotUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionSpotUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    spotId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeCreateManyEventInput = {
    id?: string
    userId: string
    status?: $Enums.EventAttendeeStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventAttendeeUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEventAttendeeStatusFieldUpdateOperationsInput | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventAttendeesNestedInput
  }

  export type EventAttendeeUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumEventAttendeeStatusFieldUpdateOperationsInput | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumEventAttendeeStatusFieldUpdateOperationsInput | $Enums.EventAttendeeStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpotCountOutputTypeDefaultArgs instead
     */
    export type SpotCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpotCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CollectionCountOutputTypeDefaultArgs instead
     */
    export type CollectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CollectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventCountOutputTypeDefaultArgs instead
     */
    export type EventCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MagicLinkDefaultArgs instead
     */
    export type MagicLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MagicLinkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpotDefaultArgs instead
     */
    export type SpotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpotImageDefaultArgs instead
     */
    export type SpotImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpotImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpotRatingDefaultArgs instead
     */
    export type SpotRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpotRatingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpotTagDefaultArgs instead
     */
    export type SpotTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpotTagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CollectionDefaultArgs instead
     */
    export type CollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CollectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CollectionSpotDefaultArgs instead
     */
    export type CollectionSpotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CollectionSpotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventAttendeeDefaultArgs instead
     */
    export type EventAttendeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventAttendeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReportDefaultArgs instead
     */
    export type ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReportDefaultArgs<ExtArgs>

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