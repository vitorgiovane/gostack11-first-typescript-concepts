"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createUser = function (_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, email = _a.email, password = _a.password, techs = _a.techs, repositories = _a.repositories;
    return {
        name: name,
        email: email,
        password: password,
        techs: techs,
        repositories: repositories
    };
};
exports.default = createUser;
