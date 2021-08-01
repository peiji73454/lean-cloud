import {Button, Card, Divider, InputNumber, notification, Space} from 'antd'
import {CloseCircleOutlined} from '@ant-design/icons'
import {useState} from 'react'
export default function Alert(props:any){
    const [value, setValue] = useState<number>(0);
    const [value1, setValue1] = useState<number>(0);
    const setNumber=()=>{
        setValue1( value);
        notification.info({
            message:<span>设置成功</span>,
            closeIcon:<CloseCircleOutlined/>
        })
    }
    const onChange = (value: number) => {
        setValue(value)
    }

    return <>
        <div className="alert">
            <Card title="账户余额告警" >
                   <p>告警余额</p>
                   <InputNumber onChange={onChange}></InputNumber>
                   <Button onClick={setNumber}>设置</Button>
                   <p>当账户余额小于 {value1} CNY 时，发送短信、邮件通知。</p>
                <Divider/>
                自定义告警联系方式<Button>编辑</Button>
               <p> 暂未设置自定义告警联系方式。</p>
                <Divider/>
                当前用户邮箱 xx@139.com、手机 +86xx 将始终收到相关告警通知。
            </Card>
        </div>
    </>
}

