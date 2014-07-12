angular.module('me-pageloading', [])
    .value('mePageLoadingEffects', {
        'Lazy Stretch': {
            opening: 'M20,15 50,30 50,30 30,30 Z;M0,0 80,0 50,30 20,45 Z;M0,0 80,0 60,45 0,60 Z;M0,0 80,0 80,60 0,60 Z',
            closing: 'M0,0 80,0 60,45 0,60 Z;M0,0 80,0 50,30 20,45 Z;M20,15 50,30 50,30 30,30 Z;M30,30 50,30 50,30 30,30 Z',
            path: 'M30,30 50,30 50,30 30,30 Z',
            option: {
                speedIn: 100
            }
        },
        'Circle': {
            opening: 'M 40 -21.875 C 11.356078 -21.875 -11.875 1.3560784 -11.875 30 C -11.875 58.643922 11.356078 81.875 40 81.875 C 68.643922 81.875 91.875 58.643922 91.875 30 C 91.875 1.3560784 68.643922 -21.875 40 -21.875 Z',
            path: 'M40,30 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 Z',
            option: {
                speedIn: 300,
                easingIn: mina.easeinout
            }
        },
        'Spill': {
            opening: 'M 0,0 c 0,0 63.5,-16.5 80,0 16.5,16.5 0,60 0,60 L 0,60 Z',
            path: 'M 0,0 c 0,0 -16.5,43.5 0,60 16.5,16.5 80,0 80,0 L 0,60 Z',
            option: {
                speedIn: 400,
                easingIn: mina.easeinout
            }
        },
        'Frame it': {
            opening: 'M 0,0 0,60 80,60 80,0 Z M 40,30 40,30 40,30 40,30 Z',
            path: 'M 0,0 0,60 80,60 80,0 Z M 80,0 80,60 0,60 0,0 Z',
            option: {
                speedIn: 300,
                easingIn: mina.easeinout
            }
        },
        'Tunnel vision': {
            opening: 'M -18 -26.90625 L -18 86.90625 L 98 86.90625 L 98 -26.90625 L -18 -26.90625 Z M 40 29.96875 C 40.01804 29.96875 40.03125 29.98196 40.03125 30 C 40.03125 30.01804 40.01804 30.03125 40 30.03125 C 39.98196 30.03125 39.96875 30.01804 39.96875 30 C 39.96875 29.98196 39.98196 29.96875 40 29.96875 Z',
            path: 'M -18 -26.90625 L -18 86.90625 L 98 86.90625 L 98 -26.90625 L -18 -26.90625 Z M 40 -25.6875 C 70.750092 -25.6875 95.6875 -0.7500919 95.6875 30 C 95.6875 60.750092 70.750092 85.6875 40 85.6875 C 9.2499078 85.6875 -15.6875 60.750092 -15.6875 30 C -15.6875 -0.7500919 9.2499078 -25.6875 40 -25.6875 Z',
            option: {
                speedIn: 300,
                easingIn: mina.easeinout
            }
        },
        'Windscreen wiper': {
            opening: 'M 40,100 150,0 -65,0 z',
            path: 'M 40,100 150,0 l 0,0 z',
            option: {
                speedIn: 400,
                easingIn: mina.easeinout
            },
        },
        'Jammed blind': {
            opening: 'M 0,60 80,60 80,50 0,40 0,60;M 0,60 80,60 80,25 0,40 0,60;M 0,60 80,60 80,25 0,10 0,60;M 0,60 80,60 80,0 0,0 0,60',
            closing: 'M 0,60 80,60 80,20 0,0 0,60;M 0,60 80,60 80,20 0,40 0,60;m 0,60 80,0 0,0 -80,0',
            path: 'm 0,60 80,0 0,0 -80,0',
            option: {
                speedIn: 200,
                easingIn: mina.linear
            }
        },
        'Parallelogram': {
            opening: 'M 0,0 0,60 80,60 80,0 z M 80,0 40,30 0,60 40,30 z',
            path: 'M 0,0 0,60 80,60 80,0 Z M 80,0 80,60 0,60 0,0 Z',
            option: {
                speedIn: 300,
                speedOut: 600,
                easingIn: mina.easeinout,
                easingOut: mina.bounce
            }
        },
        'Tilted': {
            opening: 'M 0,0 80,-10 80,60 0,70 0,0',
            path: 'M 0,70 80,60 80,80 0,80 0,70',
            option: {
                speedIn: 400,
                easingIn: mina.easeinout
            }
        },
        'Lateral Swipe': {
            opening: 'M 40,-65 145,80 -65,80 40,-65',
            closing: 'm 40,-65 0,0 L -65,80 40,-65',
            path: 'M 40,-65 145,80 40,-65',
            option: {
                speedIn: 500,
                easingIn: mina.easeinout
            }
        },
        'Wave': {
            opening: 'm -5,-5 0,70 90,0 0,-70 z m 5,35 c 0,0 15,20 40,0 25,-20 40,0 40,0 l 0,0 C 80,30 65,10 40,30 15,50 0,30 0,30 z',
            path: 'm -5,-5 0,70 90,0 0,-70 z m 5,5 c 0,0 7.9843788,0 40,0 35,0 40,0 40,0 l 0,60 c 0,0 -3.944487,0 -40,0 -30,0 -40,0 -40,0 z',
            option: {
                speedIn: 400,
                easingIn: mina.easeinout
            }
        },
        'Origami': {
            opening: 'm -10,-10 0,80 100,0 0,-80 z m 50,-30.5 0,70.5 0,70 0,-70 z',
            path: 'm -10,-10 0,80 100,0 0,-80 z M 40,-40.5 120,30 40,100 -40,30 z',
            option: {
                speedIn: 400,
                easingIn: mina.easeinout
            }
        },
        'Curtain': {
            opening: 'm 40,-80 190,0 -305,290 C -100,140 0,0 40,-80 z',
            path: 'm 75,-80 155,0 0,225 C 90,85 100,30 75,-80 z',
            option: {
                speedIn: 700,
                easingIn: mina.easeinout
            }
        }
    })
    .factory('mePageLoadingTemplate', function() {
        return '<div id="pageloader" class="pageload-overlay" {{dataOpen}} {{dataClose}}><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none"><path {{path}}/></svg></div>'
    })
    .factory('SVGLoader', function() {
        function SVGLoader($el, options) {
            this.el = $el[0];
            this.$el = $el;
            this.options = angular.extend({}, this.options);
            angular.extend(this.options, options);
            this._init();
        }

        SVGLoader.prototype.options = {
            speedIn: 500,
            easingIn: mina.linear
        }

        SVGLoader.prototype._init = function() {
            var s = Snap(this.el.querySelector('svg'));
            this.path = s.select('path');
            this.initialPath = this.path.attr('d');

            var openingStepsStr = this.el.getAttribute('data-opening');
            this.openingSteps = openingStepsStr ? openingStepsStr.split(';') : '';
            this.openingStepsTotal = openingStepsStr ? this.openingSteps.length : 0;
            if (this.openingStepsTotal === 0) return;

            // if data-closing is not defined then the path will animate to its original shape
            var closingStepsStr = this.el.getAttribute('data-closing') ? this.el.getAttribute('data-closing') : this.initialPath;
            this.closingSteps = closingStepsStr ? closingStepsStr.split(';') : '';
            this.closingStepsTotal = closingStepsStr ? this.closingSteps.length : 0;

            this.isAnimating = false;

            if (!this.options.speedOut) {
                this.options.speedOut = this.options.speedIn;
            }
            if (!this.options.easingOut) {
                this.options.easingOut = this.options.easingIn;
            }
        }

        SVGLoader.prototype.show = function() {
            if (this.isAnimating) return false;
            this.isAnimating = true;
            // animate svg
            var self = this,
                onEndAnimation = function() {
                    self.$el.addClass('pageload-loading');
                };
            this._animateSVG('in', onEndAnimation);
            this.$el.addClass('show');
        }

        SVGLoader.prototype.hide = function() {
            var self = this;
            this.$el.removeClass('pageload-loading');
            this._animateSVG('out', function() {
                // reset path
                self.path.attr('d', self.initialPath);
                self.$el.removeClass('show');
                self.isAnimating = false;
            });
        }

        SVGLoader.prototype._animateSVG = function(dir, callback) {
            var self = this,
                pos = 0,
                steps = dir === 'out' ? this.closingSteps : this.openingSteps,
                stepsTotal = dir === 'out' ? this.closingStepsTotal : this.openingStepsTotal,
                speed = dir === 'out' ? self.options.speedOut : self.options.speedIn,
                easing = dir === 'out' ? self.options.easingOut : self.options.easingIn,
                nextStep = function(pos) {
                    if (pos > stepsTotal - 1) {
                        if (callback && typeof callback == 'function') {
                            callback();
                        }
                        return;
                    }
                    self.path.animate({
                        'path': steps[pos]
                    }, speed, easing, function() {
                        nextStep(pos);
                    });
                    pos++;
                };

            nextStep(pos);
        }

        return SVGLoader;
    })
    .provider('mePageLoading', function() {

        this.autoPageLoading = true;
        this.effect = 'Lazy Stretch';

        this.$get = ['mePageLoadingEffects', 'mePageLoadingTemplate', 'SVGLoader',

            function(mePageLoadingEffects, mePageLoadingTemplate, SVGLoader) {
                var self = this,
                    effect,
                    autoPageLoading,
                    effectObj,
                    effectStr,
                    wraperDiv,
                    loaderElement,
                    loader,
                    openStr,
                    closeStr,
                    pathStr;

                effect = self.effect;

                autoPageLoading = self.autoPageLoading;

                effectObj = mePageLoadingEffects[effect];
                effectStr = mePageLoadingTemplate;

                openStr = effectObj.opening ? ('data-opening="' + effectObj.opening + '"') : '';
                closeStr = effectObj.closing ? ('data-closing="' + effectObj.closing + '"') : '';
                pathStr = effectObj.path ? ('d="' + effectObj.path + '"') : '';

                effectStr = effectStr.replace('{{dataOpen}}', openStr);
                effectStr = effectStr.replace('{{dataClose}}', closeStr);
                effectStr = effectStr.replace('{{path}}', pathStr);

                wraperDiv = document.createElement('div');
                wraperDiv = angular.element(wraperDiv).html(effectStr);

                loaderElement = wraperDiv.children();

                angular.element(document.body).append(loaderElement);

                loader = new SVGLoader(loaderElement, effectObj.option);

                function show() {
                    loader.show();
                }

                function hide() {
                    loader.hide();
                }

                return {
                    show: show,
                    hide: hide,
                    autoPageLoading: autoPageLoading,
                    effect: effect
                };
            }
        ];

    })
    .run(['$rootScope', 'mePageLoading',
        function($rootScope, mePageLoading) {
            if (!mePageLoading.autoPageLoading) {
                return;
            }

            var inited = false,
                init,
                changeStart,
                changeSuccess,
                changeError;

            changeStart = function() {
                mePageLoading.show();
            };

            changeSuccess = changeError = function() {
                mePageLoading.hide();
            };

            init = function() {
                if (inited) {
                    return;
                }
                inited = true;
                $rootScope.$on('$stateChangeStart', changeStart);
                $rootScope.$on('$stateChangeSuccess', changeSuccess);
                $rootScope.$on('$stateChangeError', changeError);
                $rootScope.$on('$stateNotFound', changeError);

                $rootScope.$on('$routeChangeStart', changeStart);
                $rootScope.$on('$routeChangeSuccess', changeSuccess);
                $rootScope.$on('$routeChangeError', changeError);
            };

            $rootScope.$on('$stateChangeSuccess', init);
            $rootScope.$on('$routeChangeSuccess', init);
        }
    ]);