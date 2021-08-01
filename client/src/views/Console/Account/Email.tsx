import {Divider, Space, Tag,Button,Alert,Checkbox,notification} from "antd";

function onChange(e:any) {
    notification.success({
        message: '设置成功',
    });
}

export default function Email(props:any){
    return <>
        <div className="email-container">
            <Space direction={'vertical'}>
                <strong>当前邮箱</strong>
               <div className="email-group">
                   123@gmail.com
                   <Tag color="gold">未验证</Tag>
                   <Button type="primary">发送验证请求</Button>
               </div>
                <Alert message="如果未收到验证邮件，请 联系我们" type="info" />
            </Space>
            <Divider/>
            <Space direction={'vertical'}>
                <strong>当前邮箱</strong>
                <div className="email-checkbox">
                    <Checkbox onChange={onChange}>Checkbox</Checkbox>
                    接收我们发送的邮件（告警邮件将始终发送）
                </div>
            </Space>
        </div>
    </>
}
