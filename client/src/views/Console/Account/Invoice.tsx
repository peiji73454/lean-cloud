import {Button, Alert, Typography, Space, Modal, Radio, Form, Input, Divider,Upload,message} from 'antd'
import {useState} from 'react'
import {UploadOutlined} from '@ant-design/icons'
import './Invoice.less'


export default function Finance(props: any) {
    const [detail, setDetail] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [value, setValue] = useState(1);
    const [form] = Form.useForm();
    const uploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info:any) {
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

    const normFile = (e:any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const onChange = (e: any) => {
        setValue(e.target.value);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.submit();

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    let content1 = null

    if (!detail) {
        content1 = <Space direction={'vertical'}>
            <Button onClick={showModal}>申请发票</Button>
            <Alert message={
                <div>
                    充值消费 1000 元以上可以申请发票，发票在申请后 5 个工作日内寄出。
                    <Typography.Text strong onClick={() => setDetail(true)}>更多说明</Typography.Text>
                </div>
            } type="info"/>
        </Space>
    } else {
        content1 = <div>
            <Button onClick={() => setDetail(false)}>返回</Button>
        </div>
    }
    return <div className={'invoice'}>
        {content1}

        <Modal onCancel={handleCancel} centered getContainer={false} title="发票信息" visible={isModalVisible}
               footer={[
                   <div key="totalInvoiceAmount" style={{float:'left'}}>
                           <div>发票总金额</div>
                           <Typography.Text strong>0.00</Typography.Text> 元
                   </div>,
                   <Button key="cancel" onClick={handleCancel}>
                      关闭
                   </Button>,
                   <Button key="application" type="primary" onClick={handleOk}>
                       申请
                   </Button>,
               ]}
        >
            <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>普通发票</Radio>
                <Radio value={2}>增值税专用发票</Radio>
            </Radio.Group>
            <Divider/>

            <Form.Provider
                onFormFinish={(name, { values, forms }) => {
                    if(value===1){
                        console.log(values)
                    }else{
                        console.log(values)
                    }
                    setIsModalVisible(false)
                }}
            >

            <Form
                style={{display: value === 1 && 'block' || 'none'}}
                form={form}
                name="ordinaryInvoiceForm"
                labelCol={{span: 6}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                labelAlign={'left'}
                fields={[
                    {
                        "name": [
                            "billingItem"
                        ],
                        "value": "技术服务费"
                    }
                ]}
            >
                <Form.Item
                    label="发票抬头"
                    name="invoiceHeader"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="开票项目"
                    name="billingItem"
                >
                    <Input bordered={false}/>
                </Form.Item>
                <Divider/>
                <Form.Item
                    label="纳税人识别号"
                >
                    <Form.Item name="taxpayerID" noStyle>
                        <Input/>
                    </Form.Item>
                    <Typography.Text type="secondary">根据国家税务总局 2017 年第 16 号公告，自 2017 年 7 月 1
                        号开始，购买方需要开具增值税普通发票的，必须提供购买方的纳税人识别号或统一社会信用代码。</Typography.Text>
                </Form.Item>
                <Divider/>
                <Form.Item
                    label="收件人姓名"
                    name="recipientName"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="收件人手机号"
                    name="phoneNumber"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="邮寄地址"
                    name="mailingAddress"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="备注"
                    name="notes"
                >
                    <Input/>
                </Form.Item>
                <Divider/>
                <Typography.Text>选择需要开具发票的充值记录</Typography.Text>
            </Form>
            <Form
                style={{display: value === 2 && 'block' || 'none'}}
                name="VATInvoiceForm"
                form={form}
                labelCol={{span: 6}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                labelAlign={'left'}
                fields={[
                    {
                        "name": [
                            "billingItem1"
                        ],
                        "value": "信息技术服务费"
                    }
                ]}
            >
                <Form.Item
                    label="发票抬头"
                    name="invoiceHeader"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="开票项目"
                    name="billingItem1"
                >
                    <Input bordered={false}/>
                </Form.Item>
                <Divider/>
                <Form.Item
                    label="纳税人识别号"
                >
                    <Form.Item name="taxpayerID" noStyle>
                        <Input/>
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    label="纳税人名称"
                    name="taxpayerName"
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="纳税人资质证明"

                >
                    <Form.Item name="qualification" noStyle valuePropName="fileList"
                        // 如果没有下面这一句会报错
                               getValueFromEvent={normFile} >
                        <Upload {...uploadProps}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </Form.Item>
                    <Typography.Text type="secondary">图片需小于 300kb</Typography.Text>
                </Form.Item>
                <Form.Item
                    label="注册电话"
                    name="registerPhone"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="注册地址"
                    name="registerAddress"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="银行名称"
                    name="address"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="银行账户"
                    name="bankName"
                >
                    <Input/>
                </Form.Item>
                <Divider/>
                <Form.Item
                    label="收件人姓名"
                    name="recipientName"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="收件人手机号"
                    name="phoneNumber"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="邮寄地址"
                    name="mailingAddress"
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="备注"
                    name="notes"
                >
                    <Input/>
                </Form.Item>
                <Divider/>
                   <Typography.Text>选择需要开具发票的充值记录
                       <Typography.Text type="warning">（仅接受公司账户充值）</Typography.Text>
                   </Typography.Text>

                   <Typography.Link href="https://ant.design" target="_blank" style={{float:'right'}}>政策说明</Typography.Link>
            </Form>
            </Form.Provider>
        </Modal>
    </div>;
}
