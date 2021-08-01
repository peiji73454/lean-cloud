import {Button, Space} from 'antd'
import './Error.css'

export default function Error(props: any) {
    console.log(props)
    return (
        <>
            <div className="error">
                    <div className="error-logo">404</div>
                    <div className="error-text">页面不存在</div>
                    <Button type='primary' className="error-button" onClick={() => props.history.push('/')}>返回首页</Button>
            </div>
        </>
    )
}
