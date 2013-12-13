/*jslint devel: true */

function SheTwoCtrl($scope) {
    $scope.prop = '';
    $scope.currentImage = '';

    $scope.updateImgName = function (image) {
        $scope.currentImage = image.name;
    };

    $scope.select = function (property) {
        if (property === 'all') {
            $scope.curProperty = 'all';
        }
        $scope.curProperty = property;
    };

    $scope.spark = function (properties) {
        if ($scope.curProperty === 'all') {
            return '';
        } else if (properties.indexOf($scope.curProperty) === -1) {
            return 'dim';
        }
        return '';
    };

    $scope.properties = [{ //TODO: change these properties.
        name: '001',
        text: 'Printing'
    }, {
        name: '002',
        text: 'Book'
    }, {
        name: '003',
        text: 'Infographics'
    }, {
        name: '004',
        text: 'Logo'
    }, {
        name: '005',
        text: 'Illustration'
    }, {
        name: '006',
        text: 'Installation'
    }, {
        name: '007',
        text: 'Video'
    }, {
        name: '008',
        text: 'Interactive Work'
    }];

    $scope.images = [{ //TODO: change these images.
        name: 'Open Studio Night',
        properties: ['001'],
        src: 'my_img/thumbnails/printing/open_studio_night.jpg'
    }, {
        name: 'Step Back',
        properties: ['001', '005'],
        src: 'my_img/thumbnails/illustration/step_back.jpg'
    }, {
        name: 'Fish',
        properties: ['007'],
        src: 'my_img/thumbnails/video/fish.jpg'
    }, {
        name: 'No Exit',
        properties: ['008'],
        src: 'my_img/thumbnails/interactive_work/shexiangtou.jpg'
    }, {
        name: 'Typo Berlin',
        properties: ['002'],
        src: 'my_img/thumbnails/book/typo_berlin.jpg'
    }, {
        name: 'Dos & Donts',
        properties: ['006', '007'],
        src: 'my_img/thumbnails/installation/dad.jpg'
    }, {
        name: 'Frozen Moment',
        properties: ['001', '005'],
        src: 'my_img/thumbnails/printing/frozen_moment.jpg'
    }, {
        name: 'Drawing Machine 001',
        properties: ['008'],
        src: 'my_img/thumbnails/interactive_work/drawing_machine.jpg'
    }, {
        name: 'Rear Window - a movie infographics',
        properties: ['003'],
        src: 'my_img/thumbnails/infographics/rear_window.jpg'
    }, {
        name: 'Let’s Cook',
        properties: ['008'],
        src: 'my_img/thumbnails/interactive_work/minigame.jpg'
    }, {
        name: 'Panties On Sale',
        properties: ['001'],
        src: 'my_img/thumbnails/printing/on_sale.jpg'
    }, {
        name: '不眠（No Sleeping）',
        properties: ['001'],
        src: 'my_img/thumbnails/printing/bumian.jpg'
    }, {
        name: 'Capsule',
        properties: ['008'],
        src: 'my_img/thumbnails/interactive_work/capsule.jpg'
    }, {
        name: 'Chicago & Manhattan',
        properties: ['002'],
        src: 'my_img/thumbnails/book/Chicago_Manhattan.jpg'
    }, {
        name: 'Printmedia',
        properties: ['001'],
        src: 'my_img/thumbnails/printing/printmedia.jpg'
    }, {
        name: 'Logo Design for Shen Zhen city',
        properties: ['004'],
        src: 'my_img/thumbnails/logo/logo.jpg'
    }, {
        name: '开国大典（The Founding Ceremony of China）',
        properties: ['007'],
        src: 'my_img/thumbnails/video/kaiguodadian.jpg'
    }, {
        name: 'Tibet Serials',
        properties: ['005'],
        src: 'my_img/thumbnails/illustration/buddha.jpg'
    }];
}