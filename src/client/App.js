import React, { useState } from 'react'
import { Button, Alert, Icon, Intent } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import ReactImage from './react.png'
import './app.scss'

const App = () => {
    const [isOpen, toggleOverlay] = useState(false)
    return (
        <div className="parentDiv">
            <h1>Hello World</h1>
            <img src={ReactImage} alt="react" />
            <div className="icons">
                <Icon icon="globe" iconSize={20} />
                <Icon
                    icon={IconNames.ADD}
                    iconSize={Icon.SIZE_LARGE}
                    intent={Intent.SUCCESS}
                />
            </div>
            <div>
                <Button
                    onClick={() => toggleOverlay(!isOpen)}
                    text="Open file error alert"
                />
                <Alert
                    confirmButtonText="Okay"
                    isOpen={!!isOpen}
                    onClose={() => toggleOverlay(!isOpen)}
                >
                    <p>
                        Couldnt create the file because the containing folder
                        doesnt exist anymore. You will be redirected to your
                        user folder.
                    </p>
                </Alert>
            </div>
        </div>
    )
}

export default App
