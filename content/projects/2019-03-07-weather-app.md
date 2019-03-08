---
template: project
title: Weather App
slug: weather-app
draft: false
date: 2019-03-07T18:10:53.101Z
description: >-
  This is a weather application built using the
  openweathermap api to fetch weather data from
  cities around the world. On load, the weather data pertaining your current
  location via a user's geolocation ip. Subsequent
  searches are added to a cities list, thus allowing for switching between
  cities.
hero: ../../static/media/weather.png
category: Project
tags:
  - api
  - weather
technologies:
  - javascript
  - spectrecss
  - openweathermap api
  - sparklines
---
This is a weather application built using the [openweathermap](https://openweathermap.org) api to fetch weather data from cities around the world. On load, the weather data pertaining to your current location via your [geolocation ip](https://geoip-db.com/json/) is displayed. The weather data includes current, low, and high temperatures as well as sunrise and sunset times. Subsequent searches are added to a cities list, thus allowing for switching between cities.


App was designed completely using [spectrecss](https://picturepan2.github.io/spectre/), and although the ui is sparse, the weather data is placed alongside a gif of the current weather condition for fun and immediacy. On the 5-Day tab, a map of the current location is displayed, with a sparkline chart of the 5-Day temperature highs and lows displayed on the chart. Currently this chart is not very readable, essentially missing a legend, data points, axis, etc, but will be most likely be replaced with a better charting library.


Github: [weather-app](https://github.com/cdrani/weather)

Live: [weather-app](https://cdrani.github.io/weather)
