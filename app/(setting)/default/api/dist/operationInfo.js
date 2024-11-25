"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.endPauseInfo = exports.updatePauseInfo = exports.updateOperationInfo = exports.getOperationInfo = void 0;
var axios_1 = require("axios");
var axiosInstance_1 = require("@/utils/axios/axiosInstance");
var storeId = 1;
//가게 기본 정보 조회
exports.getOperationInfo = function () { return __awaiter(void 0, void 0, Promise, function () {
    var response, error_1, axiosError;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axiosInstance_1.api.get("/store/operation-info/" + storeId)];
            case 1:
                response = _c.sent();
                return [2 /*return*/, response.data];
            case 2:
                error_1 = _c.sent();
                if (axios_1["default"].isAxiosError(error_1)) {
                    axiosError = error_1;
                    throw new Error(((_b = (_a = axiosError.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || '가게 기본 정보 조회 실패 ');
                }
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
//가게 기본 정보 업데이트
exports.updateOperationInfo = function (formData) { return __awaiter(void 0, void 0, Promise, function () {
    var request, response, error_2, axiosError;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                request = axiosInstance_1.updateAxiosClient();
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, request.patch("/store/operation-info/" + storeId, formData)];
            case 2:
                response = _c.sent();
                console.log('formData:', formData);
                return [2 /*return*/, response.data];
            case 3:
                error_2 = _c.sent();
                if (axios_1["default"].isAxiosError(error_2)) {
                    axiosError = error_2;
                    throw new Error(((_b = (_a = axiosError.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || '가게 운영 정보 업데이트 실패 ');
                }
                throw error_2;
            case 4: return [2 /*return*/];
        }
    });
}); };
//가게 일시중지 설정
exports.updatePauseInfo = function (formData) { return __awaiter(void 0, void 0, Promise, function () {
    var request, response, error_3, axiosError;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                request = axiosInstance_1.updateAxiosClient();
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, request.patch("/store/operation-pause/" + storeId, formData)];
            case 2:
                response = _c.sent();
                console.log('formData:', formData);
                return [2 /*return*/, response.data];
            case 3:
                error_3 = _c.sent();
                if (axios_1["default"].isAxiosError(error_3)) {
                    axiosError = error_3;
                    throw new Error(((_b = (_a = axiosError.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || '임시 휴무 정보 업데이트 실패 ');
                }
                throw error_3;
            case 4: return [2 /*return*/];
        }
    });
}); };
//가게 일시중지 중지 설정
exports.endPauseInfo = function () { return __awaiter(void 0, void 0, Promise, function () {
    var response, error_4, axiosError;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axiosInstance_1.api.patch("/store/operation-resume/" + storeId, {
                        userInfo: storeId
                    })];
            case 1:
                response = _c.sent();
                return [2 /*return*/, response.data];
            case 2:
                error_4 = _c.sent();
                if (axios_1["default"].isAxiosError(error_4)) {
                    axiosError = error_4;
                    throw new Error(((_b = (_a = axiosError.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || '임시 중지 해제 업데이트 실패 ');
                }
                throw error_4;
            case 3: return [2 /*return*/];
        }
    });
}); };
