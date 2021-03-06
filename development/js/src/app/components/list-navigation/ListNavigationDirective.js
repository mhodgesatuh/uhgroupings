angular.module('components.list-navigation.uhgListNavigation', [
    'components.list-navigation.ListNavigationController',
    'stack.i18n.stackLocalize',
    'stack.i18n.localize',
    'ui.bootstrap'
])

/**
 * The ListNavigation directive houses the navigation for the application.
 *
 * @class ListNavigation
 * @constructor
 * @module components.list-navigation.uhgListNavigation
 * @example
 *     <uhg-list-navigation
 *         authenticated="true"     // Boolean flag used to show/hide sidebar routes.
 *         items="[]">              // Array of navigation objects.
 *     </uhg-list-navigation>
 */
.directive('uhgListNavigation', [
    function () {
        'use strict';

        return {
            restrict: 'E',
            scope: {
                items: '=',
                authenticated: '='
            },
            controller: 'ListNavigationController',
            controllerAs: 'listNavigationCtrl',
            bindToController: true,
            templateUrl: 'js/src/app/components/list-navigation/list-navigation.html'
        };
    }
]);
