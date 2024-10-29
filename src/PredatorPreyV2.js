import {

    PsyanimConstants,
    PsyanimPredatorFSM,
    PsyanimPreyFSM

} from 'psyanim2';

export default {
    key: 'Predator Prey v2',
    wrapScreenBoundary: false,
    entities: [
        {
            name: 'predator',
            initialPosition: { x: 200, y: 300 },
            shapeParams: {
                shapeType: PsyanimConstants.SHAPE_TYPE.CIRCLE,
                radius: 12, color: 0x00ff00
            },
            components: [
                {
                    type: PsyanimPredatorFSM,
                    params: {
                        target: {
                            entityName: 'prey'
                        },
                        debugLogging: false,
                        debugGraphics: true
                    }
                }
            ]
        },
        {
            name: 'prey',
            initialPosition: { x: 700, y: 300 },
            shapeParams: {
                shapeType: PsyanimConstants.SHAPE_TYPE.CIRCLE,
                radius: 12, color: 0x00ff00
            },
            components: [
                {
                    type: PsyanimPreyFSM,
                    params: {
                        target: {
                            entityName: 'predator',
                        },
                        panicDistance: 250,
                        debugLogging: false,
                        debugGraphics: true
                    }
                }
            ]
        }
    ],
}