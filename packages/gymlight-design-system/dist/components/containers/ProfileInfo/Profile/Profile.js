"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const Profile_styles_1 = require("./Profile.styles");
const Profile = ({ imgSrc = '/images/profile.png', altText = 'Profile' }) => {
    return ((0, jsx_runtime_1.jsx)(Profile_styles_1.ProfileImage, { children: (0, jsx_runtime_1.jsx)("img", { src: imgSrc, alt: altText }) }));
};
Profile.displayName = 'Profile';
exports.default = Profile;
