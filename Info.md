# TypeScript configuration file

The first thing you may notice is the `tsconfig.json` file at the root of a project. This file specifies settings that will be used by TypeScript when compiling our code. We can modify settings in this file if needed.

# react-app-env.d.ts

there is a new `react-app-env.d.ts` file in the `src` folder. This file references TypeScript types declarations that are specific to projects started with Create React App.

These type declarations add support for importing resource files such as bmp, gif, jpeg, jpg, png, webp, and svg. That means that the following import will work as expected without errors:

import logo from './logo.svg';

It also adds support for importing CSS Modules. This relates to import of files with .module.css,.module.scss, and .module.sass extensions.

#
