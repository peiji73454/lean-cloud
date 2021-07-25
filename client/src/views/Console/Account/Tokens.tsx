import {Space, Button, Table, Modal, Form, Tooltip, Tag, Input, Typography} from 'antd';
import {RedoOutlined} from '@ant-design/icons'
import {useState} from "react";

export default function AccessToken(props: any) {
    const [isModalTokenVisible, setModalTokenVisible] = useState(false);
    const handleOk = () => {
        setModalTokenVisible(false);
    };

    const handleCancel = () => {
        setModalTokenVisible(false);
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return <>
        <div className="token-container">
            <Space direction={'vertical'}>
                <p>Access tokens 可以替代邮箱密码组合，作为应用、脚本或命令行工具访问 LeanCloud 管理 API 的凭证。</p>
                <Space>
                    <Button onClick={() => setModalTokenVisible(true)}>生成新access token</Button>
                    <Button icon={<RedoOutlined/>}></Button>
                </Space>
                <Table
                    style={{marginTop: 8}}
                    columns={[
                        {
                            title: '注释',
                            dataIndex: 'annotation',
                            key: 'annotation',
                        },
                        {
                            title: 'Token',
                            dataIndex: 'token',
                            key: 'token',
                        },
                        {
                            title: '创建时间',
                            dataIndex: 'createTime',
                            key: 'createTime',
                        },
                        {
                            title: '操作',
                            dataIndex: 'operation',
                            key: 'operation',
                        },
                    ]}
                />
            </Space>
        </div>

        <Modal okText="生成" cancelText="取消" title="生成新 access token" visible={isModalTokenVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                layout={'vertical'}
                name="basic"
                wrapperCol={{span: 22}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="注释"
                    name="annotation"
                    rules={[{required: true, message: 'Please input your annotation!'}]}
                >
                    <Input/>
                </Form.Item>
                <Typography.Text className="ant-form-text" type="secondary">描述该 token 会被用来做什么
                </Typography.Text>
            </Form>
        </Modal>
    </>;
}
