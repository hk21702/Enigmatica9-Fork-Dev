ServerEvents.tags('item', (event) => {
    event
        .get('forge:sandstone/black')
        .add([
            'byg:black_smooth_sandstone',
            'byg:black_cut_sandstone',
            'byg:black_chiseled_sandstone',
            'byg:black_sandstone'
        ]);
    event
        .get('forge:sandstone/white')
        .add([
            'byg:white_smooth_sandstone',
            'byg:white_cut_sandstone',
            'byg:white_chiseled_sandstone',
            'byg:white_sandstone'
        ]);
    event
        .get('forge:sandstone/blue')
        .add([
            'byg:blue_smooth_sandstone',
            'byg:blue_cut_sandstone',
            'byg:blue_chiseled_sandstone',
            'byg:blue_sandstone'
        ]);
    event
        .get('forge:sandstone/purple')
        .add([
            'byg:purple_smooth_sandstone',
            'byg:purple_cut_sandstone',
            'byg:purple_chiseled_sandstone',
            'byg:purple_sandstone'
        ]);
    event
        .get('forge:sandstone/pink')
        .add(['byg:pink_cut_sandstone', 'byg:pink_chiseled_sandstone', 'byg:pink_sandstone']);
    event
        .get('forge:sandstone/windswept')
        .add([
            'byg:windswept_sandstone_pillar',
            'byg:smooth_windswept_sandstone',
            'byg:cut_windswept_sandstone',
            'byg:chiseled_windswept_sandstone',
            'byg:windswept_sandstone'
        ]);
});
