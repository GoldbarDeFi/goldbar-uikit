# GoldbarSwap UIkit

[![Version](https://img.shields.io/npm/v/@GoldbarSwap/uikit)](https://www.npmjs.com/package/@GoldbarSwap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@GoldbarSwap/uikit)](https://www.npmjs.com/package/@GoldbarSwap/uikit)

GoldbarSwap UIkit is a set of React components and hooks used to build pages on GoldbarSwap's apps.

It also contains a theme file for dark and light mode.

## Install

`yarn add @GoldbarSwap/uikit`

## npm

https://www.npmjs.com/package/@GoldbarSwap/uikit

## Setup

### Theme

Before using GoldbarSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@GoldbarSwap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@GoldbarSwap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://goldbarSwap.github.io/goldbarSwap-uikit/)
