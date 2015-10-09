angular.module('me-pageloading', [])
    .value('mePageLoadingEffects', {
        'Lazy Stretch': {
            opening: 'M20,15 50,30 50,30 30,30 Z;M0,0 80,0 50,30 20,45 Z;M0,0 80,0 60,45 0,60 Z;M0,0 80,0 80,60 0,60 Z',
            closing: 'M0,0 80,0 60,45 0,60 Z;M0,0 80,0 50,30 20,45 Z;M20,15 50,30 50,30 30,30 Z;M30,30 50,30 50,30 30,30 Z',
            path: 'M30,30 50,30 50,30 30,30 Z',
            speedIn: 100
        },
        'Circle': {
            opening: 'M 40 -21.875 C 11.356078 -21.875 -11.875 1.3560784 -11.875 30 C -11.875 58.643922 11.356078 81.875 40 81.875 C 68.643922 81.875 91.875 58.643922 91.875 30 C 91.875 1.3560784 68.643922 -21.875 40 -21.875 Z',
            path: 'M40,30 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 Z',
            speedIn: 300,
            easingIn: 'easeinout'
        },
        'Spill': {
            opening: 'M 0,0 c 0,0 63.5,-16.5 80,0 16.5,16.5 0,60 0,60 L 0,60 Z',
            path: 'M 0,0 c 0,0 -16.5,43.5 0,60 16.5,16.5 80,0 80,0 L 0,60 Z',
            speedIn: 400,
            easingIn: 'easeinout'
        },
        'Frame it': {
            opening: 'M 0,0 0,60 80,60 80,0 Z M 40,30 40,30 40,30 40,30 Z',
            path: 'M 0,0 0,60 80,60 80,0 Z M 80,0 80,60 0,60 0,0 Z',
            speedIn: 300,
            easingIn: 'easeinout'
        },
        'Tunnel vision': {
            opening: 'M -18 -26.90625 L -18 86.90625 L 98 86.90625 L 98 -26.90625 L -18 -26.90625 Z M 40 29.96875 C 40.01804 29.96875 40.03125 29.98196 40.03125 30 C 40.03125 30.01804 40.01804 30.03125 40 30.03125 C 39.98196 30.03125 39.96875 30.01804 39.96875 30 C 39.96875 29.98196 39.98196 29.96875 40 29.96875 Z',
            path: 'M -18 -26.90625 L -18 86.90625 L 98 86.90625 L 98 -26.90625 L -18 -26.90625 Z M 40 -25.6875 C 70.750092 -25.6875 95.6875 -0.7500919 95.6875 30 C 95.6875 60.750092 70.750092 85.6875 40 85.6875 C 9.2499078 85.6875 -15.6875 60.750092 -15.6875 30 C -15.6875 -0.7500919 9.2499078 -25.6875 40 -25.6875 Z',
            speedIn: 300,
            easingIn: 'easeinout'
        },
        'Windscreen wiper': {
            opening: 'M 40,100 150,0 -65,0 z',
            path: 'M 40,100 150,0 l 0,0 z',
            speedIn: 400,
            easingIn: 'easeinout'
        },
        'Jammed blind': {
            opening: 'M 0,60 80,60 80,50 0,40 0,60;M 0,60 80,60 80,25 0,40 0,60;M 0,60 80,60 80,25 0,10 0,60;M 0,60 80,60 80,0 0,0 0,60',
            closing: 'M 0,60 80,60 80,20 0,0 0,60;M 0,60 80,60 80,20 0,40 0,60;m 0,60 80,0 0,0 -80,0',
            path: 'm 0,60 80,0 0,0 -80,0',
            speedIn: 200,
            easingIn: 'linear'
        },
        'Parallelogram': {
            opening: 'M 0,0 0,60 80,60 80,0 z M 80,0 40,30 0,60 40,30 z',
            path: 'M 0,0 0,60 80,60 80,0 Z M 80,0 80,60 0,60 0,0 Z',
            speedIn: 300,
            speedOut: 600,
            easingIn: 'easeinout',
            easingOut: 'bounce'
        },
        'Tilted': {
            opening: 'M 0,0 80,-10 80,60 0,70 0,0',
            path: 'M 0,70 80,60 80,80 0,80 0,70',
            speedIn: 400,
            easingIn: 'easeinout'
        },
        'Lateral Swipe': {
            opening: 'M 40,-65 145,80 -65,80 40,-65',
            closing: 'm 40,-65 0,0 L -65,80 40,-65',
            path: 'M 40,-65 145,80 40,-65',
            speedIn: 500,
            easingIn: 'easeinout'
        },
        'Wave': {
            opening: 'm -5,-5 0,70 90,0 0,-70 z m 5,35 c 0,0 15,20 40,0 25,-20 40,0 40,0 l 0,0 C 80,30 65,10 40,30 15,50 0,30 0,30 z',
            path: 'm -5,-5 0,70 90,0 0,-70 z m 5,5 c 0,0 7.9843788,0 40,0 35,0 40,0 40,0 l 0,60 c 0,0 -3.944487,0 -40,0 -30,0 -40,0 -40,0 z',
            speedIn: 400,
            easingIn: 'easeinout'
        },
        'Origami': {
            opening: 'm -10,-10 0,80 100,0 0,-80 z m 50,-30.5 0,70.5 0,70 0,-70 z',
            path: 'm -10,-10 0,80 100,0 0,-80 z M 40,-40.5 120,30 40,100 -40,30 z',
            speedIn: 400,
            easingIn: 'easeinout'
        },
        'Curtain': {
            opening: 'm 40,-80 190,0 -305,290 C -100,140 0,0 40,-80 z',
            path: 'm 75,-80 155,0 0,225 C 90,85 100,30 75,-80 z',
            speedIn: 700,
            easingIn: 'easeinout'
        }
    })
    .value('mePageLoadingTemplate', '<div id="pageloader" class="pageload-overlay"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none"><path /></svg></div>')
    .factory('Animater', ['mePageLoadingEffects', function(mePageLoadingEffects){
        function Animater(options){
            var svg;
            this.options = options = angular.extend({
                speedIn: 500,
                easingIn: 'linear'
            }, options);

            if(!options.el){
                throw new Error('no el found');
                return;
            }

            this.el = options.el;

            svg = Snap(this.el.find('svg')[0]);
            this.path = svg.select('path');
            this.effect = options.effect || 'random';
            this.animateOpt = null;
            this.isAnimating = false;
        }

        Animater.prototype.getOpt = function(newEffect){
            var effect,
                effects,
                effectObj,
                initialPath,
                openingSteps,
                openingStepsStr,
                openingStepsTotal,
                closingSteps,
                closingStepsStr,
                closingStepsTotal,
                animateOpt,
                speedOut,
                easingOut;

            effect = newEffect || this.effect;
            effects = Object.keys(mePageLoadingEffects);

            if(effect === 'random' || effects.indexOf(effect) < 0){
                effect = effects[Math.floor(Math.random() * 13)]
            }
            effectObj = mePageLoadingEffects[effect];

            initialPath = effectObj.path;

            openingStepsStr = effectObj.opening;
            openingSteps = openingStepsStr ? openingStepsStr.split(';') : '';
            openingStepsTotal = openingStepsStr ? openingSteps.length : 0;

            if(openingStepsTotal === 0){
                return false;
            }

            closingStepsStr = effectObj.closing || initialPath;
            closingSteps = closingStepsStr ? closingStepsStr.split(';') : '';
            closingStepsTotal = closingStepsStr ? closingSteps.length : 0;

            speedOut = effectObj.speedOut || effectObj.speedIn;
            easingOut = effectObj.easingOut || effectObj.easingIn;

            animateOpt = {
                initialPath: initialPath,
                openingSteps: openingSteps,
                openingStepsTotal: openingStepsTotal,
                closingSteps: closingSteps,
                closingStepsTotal: closingStepsTotal,
                speedOut: speedOut,
                easingOut: easingOut,
                speedIn: effectObj.speedIn,
                easingIn: effectObj.easingIn
            };

            return animateOpt;
        };

        Animater.prototype.show = function(newEffect){
            var self = this,
                animateOpt;

            if(self.isAnimating){
                return false;
            }
            animateOpt = self.getOpt(newEffect);
            if(!animateOpt){
                return;
            }

            self.path.attr('d', animateOpt.initialPath);

            self.animateOpt = animateOpt;
            self.isAnimating = true;

            self.animateSVG('in', animateOpt, function(){
                self.el.addClass('pageloading-loading');
            });

            self.el.addClass('show');
        };

        Animater.prototype.hide = function(){
            var self = this,
                animateOpt = self.animateOpt;
            if(!animateOpt){ // have stopped or is stopping the animation, just return
                return false;
            }
            self.animateOpt = null; // prevent hide one animation multi times
            self.el.removeClass('pageloading-loading');
            self.animateSVG('out', animateOpt, function(){
                self.el.removeClass('show');
                self.isAnimating = false;
            });
        };

        Animater.prototype.animateSVG = function(dir, animateOpt, cbk){
            var self = this,
                pos = 0,
                steps = dir === 'out' ? animateOpt.closingSteps : animateOpt.openingSteps,
                stepsTotal = dir === 'out' ? animateOpt.closingStepsTotal: animateOpt.openingStepsTotal,
                speed = dir === 'out' ? animateOpt.speedOut : animateOpt.speedIn,
                easing = dir === 'out' ? animateOpt.easingOut : animateOpt.easingIn,
                nextStep;

            easing = mina[easing] || mina.linear;
            nextStep = function(pos){
                if(pos > stepsTotal - 1){
                    if(cbk && typeof cbk == 'function'){
                        cbk();
                    }
                    return;
                }

                self.path.animate({
                    'path': steps[pos]
                }, speed, easing, function(){
                    nextStep(pos);
                });
                pos++;
            };
            nextStep(pos);
        };

        return Animater;
    }])
    .provider('mePageLoading', function() {
        this.autoPageLoading = true;
        this.effect = 'random';
        this.timeOut = 500;
        this.container = document.body;
        this.$get = ['$timeout', 'mePageLoadingTemplate', 'Animater', function($timeout, mePageLoadingTemplate, Animater){
            var self = this,
                autoPageLoading,
                container,
                timeOut,
                wrapperDiv,
                loaderElement,
                loader;

            autoPageLoading = self.autoPageLoading;

            container = self.container;
            timeOut = self.timeOut;

            wrapperDiv = document.createElement('div');
            wrapperDiv = angular.element(wrapperDiv).html(mePageLoadingTemplate);

            loaderElement = wrapperDiv.children();

            angular.element(container).append(loaderElement);

            loader = new Animater({
                el: loaderElement,
                effect: self.effect
            });

            function show(effect){
                loader.show(effect);
            }

            function hide(){
                $timeout(function() {
                    loader.hide();
                }, timeOut);
            }

            return {
                show: show,
                hide: hide,
                autoPageLoading: autoPageLoading,
                timeOut: timeOut,
                container: container,
            };
        }];
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
    ])
