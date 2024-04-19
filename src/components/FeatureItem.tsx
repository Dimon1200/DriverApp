import { FunctionComponent } from 'react'
import { FeatureItemProps } from '../types/types'

const FeatureItem: FunctionComponent<FeatureItemProps> = ({icon, text}) => {
    return (

        <div className="feature">
            <div className="icon">
                {icon}
            </div>
            <p>{text}</p>
        </div>
    )
}

export default FeatureItem