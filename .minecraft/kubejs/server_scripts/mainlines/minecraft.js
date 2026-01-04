ServerEvents.recipes( sog => {
    sog.shaped('2x minecraft:chest', [
        'LLL',
        'L L',
        'LLL'
    ], {
        L: '#minecraft:logs'
    })
    
    sog.shapeless('buildinggadgets2:template', [
            'minecraft:paper',
            'minecraft:blue_dye'
          ])
})