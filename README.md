## me-pageloading

Pageloading effects for angular, inspired by [PageLoadingEffects](https://github.com/codrops/PageLoadingEffects).

Compatible with `angular-route` and `angular-ui-router`.

#### Usage
1. include css and js files in your html
2. include `me-pageloading` as a angular dependence.
3. configure `mePageLoadingProvider`, this step is optional.

`mePageLoadingProvider` has two options.

- `mePageLoadingProvider.effect`, available effect name are listed below

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
- `mePageLoadingProvider.autoPageLoading`, if the pageloading effect automatically show when `$stateChange*` or `$routeChange*` event trigger.

#### Demos
1. use with `angular-route`, [click](http://isay.me/me-pageloading/angular-route.html)
2. use with `angular-ui-router`, [click](http://isay.me/me-pageloading/angular-ui-router.html)