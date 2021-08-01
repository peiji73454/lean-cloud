import {Modal, Card, Form, Input, Button, Typography,Space} from 'antd'
import {useState} from 'react'
export default function Security(props:any){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    const onAuthentication = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return <>
        <div className="security">
            <Card title="设置新密码">
                        <Form
                    name="basic"
                    layout={'vertical'}
                    wrapperCol={{ span: 12 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="新密码"
                        name="newPwd"
                        rules={[{ required: true, message: 'Please input your new password!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            保存
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card title="安全选项">

               <Space direction="vertical">
                   <Typography.Text strong>二次认证</Typography.Text>
                   <Typography.Text className="ant-form-text" type="secondary">当前未开启，开启后敏感操作需要提供手机应用生成的验证码，更好地保护账户安全。</Typography.Text>
                   <Button onClick={onAuthentication}>
                       开启二次认证
                   </Button>
                   <Modal title="二次认证" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="开启二次认证">
                       <p>1. 在应用商店搜索并安装「Google 身份验证器」。</p>
                       <p>2. 打开「Google 身份验证器」，点击「+」添加一个新账号，选择「扫描条形码」，扫描以下二维码（如无法通过扫描二维码添加，请输入 I3QCXA3PD3GOTB2T）：</p>
                       <img src="https://cn-n1-console-api.leancloud.cn/1.1/qrcode?url=otpauth%3A%2F%2Ftotp%2FLeanCloud%3A18221733710%40139.com%3Fsecret%3DI3QCXA3PD3GOTB2T%26issuer%3DLeanCloud&width=200&height=200" alt=""/>
                       <p>3. 输入应用生成的 6 位验证码</p>
                       <Input></Input>
                       <p>输入账号的登录密码</p>
                       <Input.Password visibilityToggle={false}></Input.Password>
                   </Modal>
               </Space>

            </Card>

            <Modal></Modal>
        </div>
    </>
}
