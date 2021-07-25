import {Tag, Space, Divider, Modal, Row, Col, Radio, Tooltip, Form, Input,notification} from 'antd';
import {useState} from "react";
const { Search } = Input;
const {CheckableTag} = Tag;



const onSearch = (value:any) => console.log(value);

export default function Profiles(props: any) {
    const [isModalUserVisible, setIsModalUserVisible] = useState(false);
    const [isModalPhoneVisible, setIsModalPhoneVisible] = useState(false);
    const [value, setValue] = useState(1);

    const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const handleOk = () => {
        setIsModalUserVisible(false);
        setIsModalPhoneVisible(false);
    };

    const handleNext = () => {
        notification.error({
            message: 'code not found',
        });
    };

    const handleCancel = () => {
        setIsModalUserVisible(false);
        setIsModalPhoneVisible(false);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <>
        <div className={'profile-container'}>

            <Row>
                <Col span={12}>
                    <Space direction={'vertical'}>
                        <img width='100px' height='100px'
                             src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt=""/>
                        <p>username</p>
                    </Space>
                </Col>
                <Col span={12}>
                    <Space direction={'vertical'}>
                        <Space>
                            详细信息
                            <CheckableTag
                                checked={isModalUserVisible}
                                onChange={setIsModalUserVisible}
                            >编辑
                            </CheckableTag>
                        </Space>
                        <Space>
                            +8618221733710
                            <Tag color="green">已验证</Tag>
                            <CheckableTag
                                checked={isModalPhoneVisible}
                                onChange={setIsModalPhoneVisible}
                            > 修改
                            </CheckableTag>
                        </Space>
                    </Space>
                </Col>
            </Row>
            <Divider/>
            <Modal getContainer={false} title="编辑用户信息" visible={isModalUserVisible} onOk={handleOk}
                   onCancel={handleCancel}>
                <ul className={'modal-question'}>
                    <strong>为什么要填写个人信息？</strong>
                    <li>为了更好地服务开发者，建议您完善开发者信息，填写真实姓名、电话号码</li>
                    <li>在关键时刻（服务宕机等意外情况），我们可以及时与您取得联系，给您更好的服务</li>
                    <li>我们承诺不会将您的个人信息以任何形式出售给第三方</li>
                    <li>我们不会给您发送垃圾邮件</li>
                </ul>
                <div className="modal-main">
                    <Space direction={'vertical'}>
                        <Space>
                            开发者类型
                            <Tooltip color={'#2c97e8'} title="必填">
                                <Tag>required</Tag>
                            </Tooltip>
                            <Tooltip color={'#2c97e8'} title={'仅统计用，此选项不会对功能产生任何影响'}>
                                <Tag>help?</Tag>
                            </Tooltip>
                        </Space>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>个人</Radio>
                            <Radio value={2}>公司</Radio>
                        </Radio.Group>
                        <Row>
                            <Col span={12}>
                                <Form
                                    layout={'vertical'}
                                    name="basic"
                                    wrapperCol={{span: 22}}
                                    initialValues={{remember: true}}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <Form.Item
                                        label={
                                            <Space>
                                                开发者类型
                                                <Tooltip color={'#2c97e8'} title="必填">
                                                    <Tag>required</Tag>
                                                </Tooltip>
                                            </Space>}
                                        name="developerType"
                                    >
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item
                                        label="公司名称"
                                        name="eName"
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <Space>
                                                发票抬头
                                                <Tooltip color={'#2c97e8'} title="开具发票时使用，个人开发者请填写开发者姓名">
                                                    <Tag>required</Tag>
                                                </Tooltip>
                                            </Space>}
                                        name="InvoiceHeader"
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="QQ"
                                        name="qq"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col span={12}>

                                <Form
                                    layout={'vertical'}
                                    name="basic"
                                    wrapperCol={{span: 22}}
                                    initialValues={{remember: true}}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <Form.Item
                                        label={
                                            <Space>
                                                备用手机号
                                                <Tooltip color={'#2c97e8'} title="必填">
                                                    <Tag>required</Tag>

                                                </Tooltip>
                                                <Tooltip color={'#2c97e8'} title="告警用，最多支持三个手机号，用半角逗号分开">
                                                    <Tag>help</Tag>
                                                </Tooltip>
                                            </Space>}
                                        name="AlternatePhoneNumber"
                                    >
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item
                                        label="地址"
                                        name="address"
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="网站"
                                        name="website"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Space>
                </div>
            </Modal>

            <Modal  getContainer={false} title="验证已绑定的手机" visible={isModalPhoneVisible} onOk={handleNext} onCancel={handleCancel}>
               <ul className={'modal-question'}>
                   使用手机号更改手机绑定，需要先验证当前手机。如果无法验证当前手机，请使用 当前邮箱 进行修改。
               </ul>
                <div className="modal-main">
                    <Search  allowClear
                             enterButton="获取验证码" placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                </div>
            </Modal>
        </div>
    </>;
}
