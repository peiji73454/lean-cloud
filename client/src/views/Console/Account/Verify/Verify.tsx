import {
    Alert,
    Button,
    Divider,
    Popover,
    Row,
    Col,
    Tooltip,
    Modal,
    Form,
    Typography,
    Input,
    message,
    Upload
} from "antd";
import {FileOutlined, StepForwardOutlined} from '@ant-design/icons';
import React from "react";
import './Verify.less'
import {useState} from 'react'

const content = (
    <div>
        个人与企业认证的账号将获得同样的功能支持。但如果违反了中国大陆法规，承担责任的主体是不同的。
    </div>
);

const uploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info: any) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
const {Title} = Typography;

export default function Verify(props: any) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userVisible, setUserVisible] = useState(false);
    const [enterpriseVisible, setEnterpriseVisible] = useState(false);
    const [qrVisible, setQRVisible] = useState(false);

    const showUser = () => {
        setIsModalVisible(false);
        setUserVisible(true);
    };
    const showEnterprise = () => {
        setIsModalVisible(false);
        setEnterpriseVisible(true);
    };
    const handleOk = () => {
        setUserVisible(false);
        setEnterpriseVisible(false);
    };

    const handleCancel = () => {
        setUserVisible(false);
        setEnterpriseVisible(false);
    };

    const title = (
        <Row className="popup-container">
            <Col span={12}>
                <i className="iconfont iconfont-user-circular"/>
                <div className="popup-header">
                    个人认证
                </div>
                <p>
                    <Button onClick={showUser} className="popup-button">认证</Button>
                </p>
            </Col>
            <Col span={12}>
                <i className="iconfont iconfont-enterprise-circular"/>
                <div className="popup-header">
                    企业认证
                </div>
                <p>
                    <Button onClick={showEnterprise} className="popup-button">认证</Button>
                </p>
            </Col>
        </Row>
    )

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const handlePass = () => {
        setQRVisible(false)
        message.error('未通过认证');
    }

    return <>
        <div className={'main-verify'}>
            <Alert
                message='请先完成实名认证'
                description='如根据《中华人民共和国网络安全法》的要求，使用 LeanCloud 服务的用户必须进行实名认证。未进行实名认证的账号无法使用各项服务。'
                type="info"
            />
            <Button className={'no-verify'} type="primary" disabled>
                未认证
            </Button>
            <Divider/>

            <Popover visible={isModalVisible} onVisibleChange={setIsModalVisible} placement="bottomLeft"
                     content={content} title={title} trigger="click">
                <Button type="primary">
                    开始认证
                </Button>
            </Popover>
        </div>
        <Modal closable={false} centered title="个人实名认证" visible={userVisible} onOk={handleOk} onCancel={handleCancel}
               footer={[
                   <Button key="back" onClick={handleCancel}>
                       Return
                   </Button>,
                   <Button
                       type="primary"
                       key="next"
                       onClick={() => setQRVisible(item => !item)}
                   >
                       下一步
                   </Button>,
               ]}>
            <Form
                layout={'vertical'}
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>
            </Form>
        </Modal>
        <Modal closable={false} centered title="个人实名认证" visible={qrVisible} onOk={handleOk} onCancel={handleCancel}
               footer={[
                   <Button key="back" onClick={() => setQRVisible(item => !item)}>
                       返回修改资料
                   </Button>,
                   <Button
                       key="pass"
                       type="primary"
                       onClick={handlePass}
                   >
                       认证已通过
                   </Button>
               ]}>
            <p>请使用 1 本人的支付宝应用扫描二维码完成认证</p>
            <img
                src="https://cn-n1-console-api.leancloud.cn/1.1/qrcode?width=280&height=280&url=https%3A%2F%2Fcustweb.alipay.com%2Fcertify%2Fopen%2Fpersonal%2Fdispatch%2F%3Falipay_exterface_invoke_assign_target%3Dinvoke_1a9d99ca1b02fb2f61be7ccd0686bbbb%26alipay_exterface_invoke_assign_sign%3Ddvicu_h5t_r527r%252F_dy_a_e0n_lo%252Bg_eb_el5_j0n9yf_mt_boaev_mw_d%252F6jn_e_b_b_tg%253D%253D"
                alt=""/>
        </Modal>
        <Modal closable={false} centered title="企业实名认证" visible={enterpriseVisible} onOk={handleOk}
               onCancel={handleCancel}
               okText="提交"
               cancelText="关闭"
        >
            <Form
                layout={'vertical'}
                name="basic"
                labelCol={{span: 10}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="公司名称"
                    name="eName"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="营业执照注册号"
                    name="licenseRegistrationNo"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    tooltip={
                        {
                            title: <img width='100%'
                                        src='https://console-static.lncld.net/static/media/business-license.b2f799cd.jpg'/>,
                            placement: 'right',
                            color: 'unset',
                        }
                    }
                    label="营业执照扫描件"
                    name="scannedLicense"
                    rules={[{required: true, message: 'Please input your password!'}]}
                    valuePropName="fileList"
                >
                    <Upload {...uploadProps}>
                        <Button icon={<FileOutlined/>}>选择文件</Button>
                    </Upload>
                </Form.Item>
                <ul className={'tip'}>
                    <li>证件信息需清晰可见</li>
                    <li>图片支持 jpg、jpeg、png 格式</li>
                </ul>
                <Form.Item
                    label="法人姓名"
                    name="legalPersonName"
                    rules={[{required: true, message: 'Please input your legalPersonName!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="法人身份证号"
                    name="legalPersonId"
                    rules={[{required: true, message: 'Please input your legalPersonId!'}]}
                >
                    <Input/>
                </Form.Item>


                <Form.Item
                    tooltip={
                        {
                            title: <img width='100%'
                                        src='https://console-static.lncld.net/static/media/id-card-front.92a2f9f8.jpg'/>,
                            placement: 'right',
                            color: 'unset',
                        }
                    }
                    label="法人身份证人像面扫描件"
                    name="scannedLicense"
                    rules={[{required: true, message: 'Please input your password!'}]}
                    valuePropName="fileList"
                >
                    <Upload {...uploadProps}>
                        <Button icon={<FileOutlined/>}>选择文件</Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    tooltip={
                        {
                            title: <img width='100%'
                                        src='https://console-static.lncld.net/static/media/id-card-back.7e89776f.jpg'/>,
                            placement: 'right',
                            color: 'unset',
                        }
                    }
                    label="法人身份证国徽面扫描件"
                    name="scannedLicense"
                    rules={[{required: true, message: 'Please input your password!'}]}
                    valuePropName="fileList"
                >
                    <Upload {...uploadProps}>
                        <Button icon={<FileOutlined/>}>选择文件</Button>
                    </Upload>
                </Form.Item>
                <ul className={'tip'}>
                    <li>证件信息需清晰可见</li>
                    <li>图片支持 jpg、jpeg、png 格式</li>
                    <li>图片大小上限为 300 KB（300 x 1000 B）</li>
                </ul>


                <Form.Item
                    label="对公转账截图"
                    name="scannedLicense"
                    rules={[{required: true, message: 'Please input your password!'}]}
                    valuePropName="fileList"
                >
                    <Upload {...uploadProps}>
                        <Button icon={<FileOutlined/>}>选择文件</Button>
                    </Upload>
                </Form.Item>
                <ul className={'tip'}>
                    <li>前往「财务概览 &gt; 充值」 ，使用公司账户进行任意金额的充值并提供付款凭证截图。
                        <ol>你可以通过银行对公付款方式向 LeanCloud 公司账户转账后提供银行付款凭证截图。</ol>
                        <ol>你也可以使用 <strong>企业支付宝账户</strong> 充值后提供支付宝充值截图。</ol>
                    </li>
                    <li>图片支持 jpg、jpeg、png 格式</li>
                    <li>图片大小上限为 300 KB（300 x 1000 B）</li>
                </ul>
            </Form>
        </Modal>
    </>
}
