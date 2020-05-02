"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
exports.helloWorld = function (request, response) {
    var user = CreateUser_1.default({
        name: '',
        email: 'vitorgpalves@gmail.com',
        password: '123456',
        techs: ['Node.js', 'ReactJS', 'React Native'],
        repositories: [
            'My React repository',
            {
                title: 'Mobile with React Native',
                url: 'https://github.com/vitorgiovane/gostack11-mobile-with-react-native'
            }
        ]
    });
    return response.json({ user: user });
};
