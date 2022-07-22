"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistor = exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _authSlice = _interopRequireDefault(require("./authSlice"));

var _userSlice = _interopRequireDefault(require("./userSlice"));

var _productSlice = _interopRequireDefault(require("./productSlice"));

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: 'root',
  version: 1,
  storage: _storage["default"]
};
var rootReducer = (0, _toolkit.combineReducers)({
  auth: _authSlice["default"],
  users: _userSlice["default"],
  products: _productSlice["default"]
});
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);
var store = (0, _toolkit.configureStore)({
  reducer: persistedReducer,
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [_reduxPersist.FLUSH, _reduxPersist.REHYDRATE, _reduxPersist.PAUSE, _reduxPersist.PERSIST, _reduxPersist.PURGE, _reduxPersist.REGISTER]
      }
    });
  }
});
exports.store = store;
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;