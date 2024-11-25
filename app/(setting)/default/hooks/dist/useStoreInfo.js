"use strict";
exports.__esModule = true;
exports.useUpdateStoreBasicInfo = exports.useGetStoreBasicInfo = void 0;
var react_query_1 = require("@tanstack/react-query");
var defaultInfo_1 = require("../api/defaultInfo");
var react_query_2 = require("@tanstack/react-query");
var defaultInfo_2 = require("../api/defaultInfo");
exports.useGetStoreBasicInfo = function () {
    return react_query_1.useQuery({
        queryKey: ["storeBasicInfo"],
        queryFn: defaultInfo_1.getBasicInfo,
        staleTime: 1000,
        retry: 1,
        refetchOnWindowFocus: false
    });
};
exports.useUpdateStoreBasicInfo = function () {
    var mutate = react_query_2.useMutation({
        mutationFn: defaultInfo_2.updateBasicInfo,
        onSuccess: function () {
            localStorage.setItem("postSuccessMessage", "이 완료되었습니다.");
        },
        onError: function (error) {
            console.log(error);
        }
    }).mutate;
    return { mutate: mutate };
};
exports["default"] = exports.useUpdateStoreBasicInfo;
