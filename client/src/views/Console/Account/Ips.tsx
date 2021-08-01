import {Button,Space, Divider, Typography,Modal,Form,Tooltip,Alert,notification} from "antd";
import {useState} from 'react'
import {QuestionCircleOutlined} from '@ant-design/icons'

export default function Ips(props:any){
    let title='API 独立 IP'
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState(title);


    const TooltipTitle=<span>没有符合条件的应用</span>
    const message=(
        <Space style={{width: '100%'}}>
            <Typography.Title style={{color:'#2c97e8'}}>￥</Typography.Title>
            <ul style={{color:'#2c97e8'}}>
                <li>购买时一次性扣减本月整月费用。</li>
                <li>第二个月起每月 1 号一次性扣减当月费用。</li>
                <li>解绑时不退回当月剩余时间费用。</li>
            </ul>
        </Space>
    )

    const showModal = () => {
        setModalTitle(title)
        setIsModalVisible(true);
    };
    const showModal1 = () => {
        setModalTitle('云引擎独立 IP')
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        notification.error({
            message: '申请独立 IP 失败',
        });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <>
        <div className="Ips">
            <Space direction={'vertical'} style={{width: '100%'}}>
                <Typography.Text strong>API 独立 IP</Typography.Text>
                <Typography.Text>无</Typography.Text>
                <Button  onClick={showModal}>申请</Button>
                <Divider />
                <Typography.Text strong>云引擎独立 IP</Typography.Text>
                <Typography.Text>无</Typography.Text>
                <Button onClick={showModal1}>申请</Button>
            </Space>


            <Modal title={modalTitle} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="确认并开始计费">
                <Form
                    layout={'vertical'}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="类型"
                    >
                        <Button disabled>API 独立 IP</Button>
                    </Form.Item>

                    <Form.Item
                        label="账号"
                    >
                        <Space direction={'vertical'}>
                            <Typography.Text strong>XX@139.com</Typography.Text>
                            <Typography.Text  type="secondary">仅当前账号拥有的应用可用（不包括共享应用）
                                <Tooltip placement="top" title={TooltipTitle}>
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </Typography.Text>
                        </Space>
                    </Form.Item>

                    <Form.Item label="价格">
                        <Space direction={'vertical'} style={{width: '100%'}}>
                            <Typography.Text strong>50</Typography.Text> CNY / 月
                            <Alert message={message} type="info" style={{boxShadow:'-6px 0 0 0 #5aaeed, 0 0 0 0 transparent'}}/>
                        </Space>
                    </Form.Item>
                </Form>


            </Modal>
        </div>
    </>
}
