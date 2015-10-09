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

- `mePageLoadingProvider.container`, default to `document.body`
- `mePageLoadingProvider.timeOut`, default to `500`ms
- `mePageLoadingProvider.effect`, default to `random`, all available effect names are listed below

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
- `mePageLoadingProvider.autoPageLoading`, whether the pageloading automatically show when `$stateChange*` or `$routeChange*` event trigger. Default to `true`. If you set to `false`, you should call `mePageLoading#show` or `mePageLoading#hide` to show or hide the animation.

### API
- `mePageLoading.show([effectName])`, show animation, you can specify which animation to show. If not specify, mePageLoading will use the `effect` value set to `mePageLoadingProvider`. If no effectName is set to `mePageLoadingProvider`, the value is `random`.
- `mePageLoading.hide()`, hide the current animation.

### Demos
1. use with `angular-ui-router`(recommended), [click](http://isay.me/me-pageloading/angular-ui-router.html)
2. use with `angular-route`, [click](http://isay.me/me-pageloading/angular-route.html)

### ThanksTo
[Codrops](http://tympanus.net/codrops/2014/04/23/page-loading-effects/)

### License
MIT
