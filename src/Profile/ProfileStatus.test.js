import React from 'react'
import {create} from 'react-test-renderer'
import Name from './Name/Name'

describe('ProfileStatus component', () => {
    test('status in the state', () => {
        const component = create(<Name status='Lol'/>)
        const instance = component.getInstance() // дай ине экземпляр
        expect(instance.state.text).toBe('it-kamasutra')
    })
})