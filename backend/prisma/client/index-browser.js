
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.MagicLinkScalarFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token',
  expiresAt: 'expiresAt',
  used: 'used',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
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

exports.Prisma.SpotScalarFieldEnum = {
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

exports.Prisma.SpotImageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  key: 'key',
  alt: 'alt',
  caption: 'caption',
  order: 'order',
  spotId: 'spotId',
  createdAt: 'createdAt'
};

exports.Prisma.SpotRatingScalarFieldEnum = {
  id: 'id',
  isPositive: 'isPositive',
  comment: 'comment',
  userId: 'userId',
  spotId: 'spotId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TagScalarFieldEnum = {
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

exports.Prisma.SpotTagScalarFieldEnum = {
  id: 'id',
  spotId: 'spotId',
  tagId: 'tagId',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.CollectionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  isPublic: 'isPublic',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CollectionSpotScalarFieldEnum = {
  id: 'id',
  collectionId: 'collectionId',
  spotId: 'spotId',
  order: 'order',
  createdAt: 'createdAt'
};

exports.Prisma.EventScalarFieldEnum = {
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

exports.Prisma.EventAttendeeScalarFieldEnum = {
  id: 'id',
  eventId: 'eventId',
  userId: 'userId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReportScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.EventStatus = exports.$Enums.EventStatus = {
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

exports.EventAttendeeStatus = exports.$Enums.EventAttendeeStatus = {
  INTERESTED: 'INTERESTED',
  ATTENDING: 'ATTENDING',
  NOT_ATTENDING: 'NOT_ATTENDING'
};

exports.ReportType = exports.$Enums.ReportType = {
  INAPPROPRIATE_CONTENT: 'INAPPROPRIATE_CONTENT',
  SPAM: 'SPAM',
  INCORRECT_LOCATION: 'INCORRECT_LOCATION',
  SAFETY_CONCERN: 'SAFETY_CONCERN',
  DUPLICATE: 'DUPLICATE',
  OTHER: 'OTHER'
};

exports.ReportStatus = exports.$Enums.ReportStatus = {
  PENDING: 'PENDING',
  REVIEWED: 'REVIEWED',
  RESOLVED: 'RESOLVED',
  DISMISSED: 'DISMISSED'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
