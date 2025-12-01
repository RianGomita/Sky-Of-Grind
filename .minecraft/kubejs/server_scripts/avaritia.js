ServerEvents.recipes(event => {

event.custom({
    type: 'avaritia:shaped_table',
    pattern: [
        "      NNN",
        "     NIIN",
        "    NIIIN",
        "   NIIIN ",
        "CCNIIIN  ",
        " TTCIN   ",
        " TYTN    ",
        " NTTC    ",
        "X   C    "
    ],
    key: {
        C: [
            {item: 'avaritia:crystal_matrix_ingot'}
        ],
        T: [
            {item: 'avaritia:crystal_matrix'}
        ],
        Y: [
            {item: 'draconicevolution:chaotic_staff'}
        ],
        I: [
            {item: 'avaritia:infinity_ingot'}
        ],
        N: [
            {item: 'avaritia:neutron_ingot'}
        ],
        X: [
            {item: 'avaritia:infinity_catalyst'}
        ]
    },
    result: {item: 'avaritia:infinity_sword'}
})

event.custom({
    type: 'avaritia:shaped_table',
    pattern: [
        "  NNNNN  ",
        " NIIIIIN ",
        " N XIX N ",
        " NIIIIIN ",
        " NIIIIIN ",
        " NY Y YN ",
        "         ",
        "         ",
        "         "
    ],
    key: {
        Y: [
            {item: 'kubejs:infinity_heavy_plating'}
        ],
        I: [
            {item: 'avaritia:infinity_ingot'}
        ],
        N: [
            {item: 'avaritia:neutron_ingot'}
        ],
        X: [
            {item: 'avaritia:infinity_catalyst'}
        ]
    },
    result: {item: 'avaritia:infinity_helmet'}
})

event.custom({
    type: 'avaritia:shaped_table',
    pattern: [
        " NN   NN ",
        "NNN   NNN",
        "NNN T NNN",
        " NIIIIIN ",
        " NIIXIIN ",
        " NIYXYIN ",
        " NIIXIIN ",
        " NIIIIIN ",
        "  NNNNN  "
    ],
    key: {
        T: [
            {item: 'draconicevolution:chaotic_chestpiece'}
        ],
        Y: [
            {item: 'kubejs:infinity_heavy_plating'}
        ],
        I: [
            {item: 'avaritia:infinity_ingot'}
        ],
        N: [
            {item: 'avaritia:neutron_ingot'}
        ],
        X: [
            {item: 'avaritia:infinity_catalyst'}
        ]
    },
    result: {item: 'avaritia:infinity_chestplate'}
})

event.custom({
    type: 'avaritia:shaped_table',
    pattern: [
        "NNNNNNNNN",
        "NIIYXYIIN",
        "NINNXNNIN",
        "NCN   NCN",
        "NTN   NTN",
        "NCN   NCN",
        "NIN   NIN",
        "NIN   NIN",
        "NNN   NNN"
    ],
    key: {
        C: [
            {item: 'avaritia:crystal_matrix_ingot'}
        ],
        T: [
            {item: 'avaritia:crystal_matrix'}
        ],
        Y: [
            {item: 'kubejs:infinity_heavy_plating'}
        ],
        I: [
            {item: 'avaritia:infinity_ingot'}
        ],
        N: [
            {item: 'avaritia:neutron_ingot'}
        ],
        X: [
            {item: 'avaritia:infinity_catalyst'}
        ]
    },
    result: {item: 'avaritia:infinity_pants'}
})

event.custom({
    type: 'avaritia:shaped_table',
    pattern: [
        "         ",
        " NNN NNN ",
        " NIN NIN ",
        " NIN NIN ",
        "NNIN NINN",
        "NYXN NXYN",
        "NNNN NNNN",
        "         ",
        "         "
    ],
    key: {
        Y: [
            {item: 'kubejs:infinity_heavy_plating'}
        ],
        I: [
            {item: 'avaritia:infinity_ingot'}
        ],
        N: [
            {item: 'avaritia:neutron_ingot'}
        ],
        X: [
            {item: 'avaritia:infinity_catalyst'}
        ]
    },
    result: {item: 'avaritia:infinity_boots'}
})
})