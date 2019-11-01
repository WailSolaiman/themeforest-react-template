import React, { useState } from 'react'
import { Button, Alert, Icon, Intent } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import output from '../../../utils'
import ReactImage from '../../../assets/react.png'
import './intro.scss'

const Intro = () => {
    const [isOpen, toggleOverlay] = useState(false)
    return (
        <div className="parentDiv">
            <h2 className="heading">Hello World</h2>
            <p className="subheading">{output()}</p>
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

export default Intro
