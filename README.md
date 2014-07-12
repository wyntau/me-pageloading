## me-pageloading

Pageloading effects for angular, inspired by [PageLoadingEffects](http://tympanus.net/codrops/2014/04/23/page-loading-effects/).

Compatible with `angular-route` and `angular-ui-router`.

### Install

    bower install me-pageloading

### Usage
1. include css and js files in your html
2. include `me-pageloading` as a angular dependence.
3. configure `mePageLoadingProvider`, this step is optional.

`mePageLoadingProvider` has two options.

- `mePageLoadingProvider.effect`, default to `Lazy Stretch`, available effect names are listed below

    - Lazy Stretch
    - Circle
    - Spill
    - Frame it
    - Tunnel vision
    - Windscreen wiper
    - Jammed blind
    - Parallelogram
    - Tilted
    - Lateral Swipe
    - Wave
    - Origami
    - Curtain
- `mePageLoadingProvider.autoPageLoading`, whether the pageloading automatically show when `$stateChange*` or `$routeChange*` event trigger. Default to `true`. If you set to `false`, you should call `mePageLoading.show(effectName)` or `mePageLoading.hide()` to show or hide the animation.

### Demos
1. use with `angular-ui-router`(recommended), [click](http://pageloading.angularjs.club/angular-ui-router.html)
2. use with `angular-route`, [click](http://pageloading.angularjs.club/angular-route.html)

### ThanksTo
[Codrops](http://tympanus.net/codrops/2014/04/23/page-loading-effects/)

### License
MIT
